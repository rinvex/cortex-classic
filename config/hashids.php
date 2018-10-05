<?php

declare(strict_types=1);

return [

    /*
    |--------------------------------------------------------------------------
    | Default Connection Name
    |--------------------------------------------------------------------------
    |
    | Here you may specify which of the connections below you wish to use as
    | your default connection for all work. Of course, you may use many
    | connections at once using the manager class.
    |
    */

    'default' => 'main',

    /*
    |--------------------------------------------------------------------------
    | Hashids Connections
    |--------------------------------------------------------------------------
    |
    | Here are each of the connections setup for your application. Example
    | configuration has been included, but you may add as many connections as
    | you would like.
    |
    */

    'connections' => [

        'main' => [
            'salt' => env('HASHIDS_KEY'),
            'length' => env('HASHIDS_LENGTH'),
            'alphabet' => env('HASHIDS_ALPHABET'),
        ],

        'alternative' => [
            'salt' => env('HASHIDS_KEY'),
            'length' => env('HASHIDS_LENGTH'),
            'alphabet' => env('HASHIDS_ALPHABET'),
        ],

    ],

];
