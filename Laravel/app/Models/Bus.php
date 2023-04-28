<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bus extends Model
{
    use HasFactory;
    protected $fillable = [
        'lieuDebart',
        'lieuArrive',
        'dateDebart',
        'dateArrive',
        'image',
        'statut',
        'capacite',
        'prix',
    ];
}
