<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use Inertia\Inertia;

class RickAndMortyController extends Controller
{
    //
    public function index()
    {

        $client = new Client();
        $response = $client->request('GET', 'https://rickandmortyapi.com/api/character',[
             'headers' => [
                    'accept' => 'application/json',
                    'x-cg-demo-api-key' => 'CG-WRSxBHyhN8bk4QNr7Lc88NDv',
                ],
                'verify' => false, // Disable SSL verification
        ]);
        $data = json_decode($response->getBody()->getContents(), true);

        // For POST request
      /*      $response = $client->request('POST', 'https://api.example.com/posts', [
                'form_params' => [
                    'name' => 'george',
                ]
            ]);
      */



        return Inertia::render('Rickandmorty/Index' , [
            'characters' => $data['results']
        ]);
    }

}
