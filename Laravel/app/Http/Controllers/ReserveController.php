<?php

namespace App\Http\Controllers;

use App\Models\Bus;
use App\Models\Reserve;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;


class ReserveController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $reserve = new Reserve();
        $reserve->id_user = $request->id_user;
        $reserve->id_bus  = $request->id_bus;
        $reserve->date = $request->date;

        $bus=Bus::find($request->id_bus);
        $lieuDebart = DB::table('villes')->where('id',$bus->lieuDebart)->first();
        $lieuArrive = DB::table('villes')->where('id',$bus->lieuArrive)->first();
        

        $data = [
            'libelle' => $bus->libelle,
            'date' => $request->date,
            'heure' => $bus->dateDebart,
            'lieuDebart' => $lieuDebart->nom,
            'lieuArrive' => $lieuArrive->nom,
            'siege' => 1,
            'prix' => $bus->prix+5,
        ];

        $pdf = Pdf::loadView('billet', $data);
        $name = "bus" . $request->id_bus . "user" . $request->id_user . ".pdf";
        $filePath = 'billet/' . $name;
        Storage::disk('public')->put($filePath, $pdf->output());
        $reserve->save();
       

        return response()->json($filePath);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reserve  $reserve
     * @return \Illuminate\Http\Response
     */
    public function show(Reserve $reserve)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Reserve  $reserve
     * @return \Illuminate\Http\Response
     */
    public function edit(Reserve $reserve)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reserve  $reserve
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reserve $reserve)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reserve  $reserve
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reserve $reserve)
    {
        //
    }
}
