<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ProfilController extends Controller
{
    public function UpdateProfile(Request $request){
        $user = User::find($request->user);
        $user->nom = $request->nom;
        $user->prenom = $request->prenom;
        $user->tel = $request->tel;
        $user->email  = $request->email;
        $user->ville = $request->ville;
        $user->update();
        return response()->json($user);
    }
}
