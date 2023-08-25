<?php

declare(strict_types=1);

use Illuminate\Validation\Rules\Password;

return [

    'rules' => [

        'password' => config('app.env') === 'production'
            ? Password::min(8)
                      ->letters()
                      ->mixedCase()
                      ->numbers()
                      ->symbols()
                      ->uncompromised()
            : Password::min(8),

        'username' => [
            'alpha_dash',
            'max:64',
            'min:3',
        ],

        'email' => [
            config('app.env') === 'production' ? 'email:rfc,dns,spoof' : 'email:rfc',
            'max:128',
            'min:3',
        ],

    ],

];
