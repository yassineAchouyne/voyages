<?php

namespace App\Http\Controllers;

use App\Models\Reserve;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;

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
        return response()->json(['jourDH' => $DH * 5, 'hierDH' => $hier * 5]);
    }
}
