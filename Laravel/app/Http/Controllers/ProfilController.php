<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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


public function updatePassword(Request $request)
{
  

    $user = User::find($request->user);

    if (Hash::check($request->current_password, $user->password)) {


        $newPasswordHash = Hash::make($request->new_password);

        
        $user->password = $newPasswordHash;
        $user->save();

        
        return response()->json(['message' => 'Mot de passe mis à jour avec succès']);
    } else {
        
        return response()->json(['message' => 'Mot de passe actuel incorrect'],400);
    }
}

}
