<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Defeito extends Model
{
    use HasFactory;
    protected $table = 'defeitos';
    protected $fillable = ['id', 'id_carro', 'defeito' ];

    public function carro()
	{
        return $this->belongsTo(Cars::class, "id_carro");
	}
}