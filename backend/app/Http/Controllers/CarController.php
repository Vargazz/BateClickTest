<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cars;

class CarController extends Controller
{
    public function createCar(Request $request){
        $car = new Cars;
        $car->marca = $request-> input('marca');
        $car->modelo = $request-> input('modelo');
        $car->ano = $request-> input('ano');
        $car->cor = $request-> input('cor');

        if( $car->save()) {
            return $car;
        }
    }

    public function getCarByID($id)
    {
        return Cars::findOrFail($id);
    }

    public function getAllCars()
    {
        return Cars::all();
    }

    public function update(Request $request, $id)
    {
        $car = Cars::findOrFail( $request->id);
        $car->marca = $request-> input('marca');
        $car->modelo = $request-> input('modelo');
        $car->ano = $request-> input('ano');
        $car->cor = $request-> input('cor');

        if( $car->save()) {
            return $car;
        }
    }

    public function delete($id)
    {
        $car = Cars::findOrFail( $id );
        if( $car->delete() ) {
            return $car;
        };
    }

    public function getDefects($id)
    {
        $car = Cars::findOrFail($id);
        $defects = $car->defeitos;
        return response()->json($defects);
    }
}
