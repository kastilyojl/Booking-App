<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function store(Request $request) {
        User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>$request->password,
        ]);
    }

    public function fetch(Request $request) {
        $user = User::where('email',$request->email)->first();
        if (!$user) {
            return response()->json(['error' => 'Invalid email address'], 401);
        } elseif (!Hash::check($request->password, $user->password)) { // if email exist, check password
            return response()->json(['error' => 'Incorrect password'], 401);
        }
    }
}
