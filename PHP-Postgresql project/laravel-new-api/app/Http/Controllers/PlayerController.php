<?php

    namespace App\Http\Controllers; 
    use App\Models\Player;
    use Illuminate\Http\Request;

    class PlayerController extends Controller
    {
        //display a listing of all players as json and not views since this is an api
        public function index()
        {
            $players = Player::all();
            // return view('players.index', compact('players'));
            return response()->json($players);
        }   

        //create a new player
        public function store(Request $request)
        {
            $validatedData = $request->validate([
                'name' => 'required|string',
                'email' => 'required|string|email|unique:players,email',
            ]);
            $player = Player::create($validatedData);
            return response()->json($player, 201);
        }

        // public function show($id)
        // {
        //     $player = Player::findOrFail($id);
        //     return response()->json($player);
        // }

        public function show(Player $player)
        {
            return response()->json($player);
        }

        // public function update(Request $request, $id)
        // {
        //     $player = Player::findOrFail($id);
        //     $validatedData = $request->validate([
        //         'name' => 'sometimes|required|string',
        //         'email' => 'sometimes|required|string|email|unique:players,email,' . $player->id,
        //     ]);
        //     $player->update($validatedData);
        //     return response()->json($player);
        // }

        public function update(Request $request, Player $player)
        {
            $validatedData = $request->validate([
                'name' => 'required|string',
                'email' => 'required|string|email|unique:players,email,',
            ]);
            $player->update($validatedData);
            return response()->json($player, 200);
        }

        //remove a player from the database
        //remove the specified resource from the storage.   
        public function destroy(Player $player)
        {
            $player->delete();
            return response()->json(null, 204);
        }

    }