<?php

namespace App\Http\Controllers;

use App\Models\Reserve;
use App\Models\Bus;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function lesVilles()
    {
        $villes = DB::table('villes')->get();
        return response()->json($villes);
    }

    public function dashboard()
    {
        $today = now()->toDateString();
        $yesterday = now()->subDay()->format('Y-m-d');
        $DH =  Reserve::whereDate('date', $today)->count();
        $hier =  Reserve::whereDate('date', $yesterday)->count();

        $countUser = DB::table('users')->where('isAdmin', 0)->count();

        $reservation = Reserve::whereDate('created_at', $today)->count();
        return response()->json([
            'jourDH' => $DH * 5,
            'hierDH' => $hier * 5,
            'countUser' => $countUser,
            'countReserve' => $reservation,
            'reservation' => $this->getReservation(),
        ]);
    }

    public function getReservation(){
        $today = now()->toDateString();
        $results = DB::table('reserves')
            ->join('users', 'users.id', '=', 'reserves.id_user')
            ->join('buses', 'buses.id', '=', 'reserves.id_bus')
            ->select('users.nom','users.prenom','buses.*')
            ->whereDate('reserves.created_at', '=',$today)
            ->get();
        return $results ;
    }

    public function contact (Request $request) {
        $contact = [
            'name' => $request->nom,
            'email' => $request->email,
            'msg' => $request->message,
            "date" => date("Y-m-d h:i:sa"),
        ];
        // return $contact;
        Mail::send('contact', $contact, function ($msg) use($request) {
            $msg->to("yachouyne@gmail.com")
                ->subject($request->sujet);
        });
        return response()->json();
    }

    public function fornisseur(){
        $results = DB::table('buses')
    ->select('libelle', 'image')
    ->distinct()
    ->get();

        return response()->json($results);
    }

    public function phusRecherch(){
        $results = Bus::select('lieuDebart','lieuArrive')->inRandomOrder()->limit(5)->get();
        return response()->json($results);
    }

    public function PlaceReserve($id){
        $tabPlace = array();
        // $tabPersonne = array();
        $today = now()->toDateString();
        $rus = DB::table('reserves')->where("id_bus",$id)->whereDate('date', '=',$today)->get();

        foreach($rus as $r){
            for($i=0; $i<$r->nbrPersonne; $i++){
                array_push($tabPlace,$r->siege+$i);
            }
        }
        return response()->json(["tabPlace"=>$tabPlace]);
    }


}
