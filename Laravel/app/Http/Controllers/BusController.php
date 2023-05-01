<?php

namespace App\Http\Controllers;

use App\Models\Bus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class BusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $buses = Bus::all();
        return response()->json($buses);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $bus = new Bus();
        $bus->libelle = $request->libelle;
        $bus->capacite = $request->capacite;
        $bus->dateArrive = $request->dateArrive;
        $bus->dateDebart = $request->dateDebart;
        $bus->lieuArrive = $request->lieuArrive;
        $bus->lieuDebart = $request->lieuDebart;
        $bus->prix = $request->prix;
        $bus->statut = $request->statut;
        // if ($request->hasFile('photo')) {
            $path = $request->file('photo')->storePublicly('photos','public');
        // }
        
        $bus->image = $path;
        $bus->save();
        
        $buses = Bus::all();
        return response()->json($buses);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Bus  $bus
     * @return \Illuminate\Http\Response
     */
    public function show(Bus $bus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Bus  $bus
     * @return \Illuminate\Http\Response
     */
    public function edit(Bus $bus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Bus  $bus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bus $bus)
    {
        $bus->libelle = $request->libelle;
        $bus->capacite = $request->capacite;
        $bus->dateArrive = $request->dateArrive;
        $bus->dateDebart = $request->dateDebart;
        $bus->lieuArrive = $request->lieuArrive;
        $bus->lieuDebart = $request->lieuDebart;
        $bus->prix = $request->prix;
        $bus->statut = $request->statut;
        $bus->save();
        
        $buses = Bus::all();
        return response()->json($buses);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bus  $bus
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bus $bus)
    {
        $bus->delete();
        
        $buses = Bus::all();
        return response()->json($buses);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function resultat(Request $request)
    {
        if ($request->date == date("Y-m-d")) {
            $res = DB::table('buses')->where([
                'lieuDebart' => $request->lieuDebart,
                'lieuArrive' => $request->lieuArrive,
            ])->where('dateDebart', '>', date("H:i:s"))
                ->orderBy('dateDebart', 'asc')
                ->orderBy('dateArrive', 'asc')
                ->get();
        }else{
            $res = DB::table('buses')->where([
                'lieuDebart' => $request->lieuDebart,
                'lieuArrive' => $request->lieuArrive,
            ])
                ->orderBy('dateDebart', 'asc')
                ->orderBy('dateArrive', 'asc')
                ->get();
        }

        return response()->json($res);
    }
}
