<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    //add name and email to fillable so we can mass assign them
    protected $fillable = ['name', 'email'];
}
