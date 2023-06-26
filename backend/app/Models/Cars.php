<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cars extends Model
{
    use HasFactory;
    protected $table = 'cars';
    protected $fillable = ['id', 'marca', 'modelo', 'ano', 'cor' ];

    public function defeitos()
	{
        return $this->hasMany(Defeito::class, "id_carro");
	}
}
