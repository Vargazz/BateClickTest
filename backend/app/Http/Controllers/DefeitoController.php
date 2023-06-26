<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Defeito;

class DefeitoController extends Controller
{
    public function createDefeito(Request $request){
        $defeito = new Defeito;
        $defeito->id_carro = $request-> input('id_carro');
        $defeito->defeito = $request-> input('defeito');
        

        if( $defeito->save()) {
            return $defeito;
        };
    }

    public function getDefeitoByID($id)
    {
      $defeito = Defeito::with('id_carro')->find($id);
      return response()->json($defeito);
    }

    public function getAllDefeitos()
    {
        return Defeito::all();
    }

    public function updateDefeito(Request $request, $id)
    {
        $defeito = Defeito::findOrFail( $request->id);
        $defeito->id_carro = $request-> input('id_carro');
        $defeito->defeito = $request-> input('defeito');

        if( $defeito->save()) {
          return $defeito;
      };
    }

    public function deleteDefeito($id)
    {
        $defeito = Defeito::findOrFail( $id );
        if( $defeito->delete() ) {
            return $defeito;
        };
    }
}
