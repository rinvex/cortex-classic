<?php

declare(strict_types=1);

return [

    /*
    |--------------------------------------------------------------------------
    | Authentication Defaults
    |--------------------------------------------------------------------------
    |
    | This option controls the default authentication "guard" and password
    | reset options for your application. You may change these defaults
    | as required, but they're a perfect start for most applications.
    |
    */

    'defaults' => [
        'guard' => 'member',
        'api' => 'api:member',
        'provider' => 'members',
        'passwords' => 'member',
        'emails' => 'member',
    ],

    /*
    |--------------------------------------------------------------------------
    | Authentication Guards
    |--------------------------------------------------------------------------
    |
    | Next, you may define every authentication guard for your application.
    | Of course, a great default configuration has been defined for you
    | here which uses session storage and the Eloquent user provider.
    |
    | All authentication drivers have a user provider. This defines how the
    | users are actually retrieved out of your database or other storage
    | mechanisms used by this application to persist your user's data.
    |
    | Supported: "session", "token"
    |
    */

    'guards' => [

        'guardian' => [
            'driver' => 'session',
            'provider' => 'guardians',
        ],

        'admin' => [
            'driver' => 'session',
            'provider' => 'admins',
        ],

        'manager' => [
            'driver' => 'session',
            'provider' => 'managers',
        ],

        'member' => [
            'driver' => 'session',
            'provider' => 'members',
        ],

        'api:admin' => [
            'driver' => 'oauth',
            'provider' => 'admins',
        ],

        'api:manager' => [
            'driver' => 'oauth',
            'provider' => 'managers',
        ],

        'api:member' => [
            'driver' => 'oauth',
            'provider' => 'members',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | User Providers
    |--------------------------------------------------------------------------
    |
    | All authentication drivers have a user provider. This defines how the
    | users are actually retrieved out of your database or other storage
    | mechanisms used by this application to persist your user's data.
    |
    | If you have multiple user tables or models you may configure multiple
    | sources which represent each model / table. These sources may then
    | be assigned to any extra authentication guards you have defined.
    |
    | Supported: "database", "eloquent"
    |
    */

    'providers' => [

        'admins' => [
            'driver' => 'eloquent',
            'model' => \Cortex\Auth\Models\Admin::class,
        ],

        'members' => [
            'driver' => 'eloquent',
            'model' => \Cortex\Auth\Models\Member::class,
        ],

        'managers' => [
            'driver' => 'eloquent',
            'model' => \Cortex\Auth\Models\Manager::class,
        ],

        'guardians' => [
            'driver' => 'eloquent',
            'model' => \Cortex\Auth\Models\Guardian::class,
        ],

        // 'users' => [
        //     'driver' => 'database',
        //     'table' => 'users',
        // ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Resetting Passwords
    |--------------------------------------------------------------------------
    |
    | You may specify multiple password reset configurations if you have more
    | than one user table or model in the application and you want to have
    | separate password reset settings based on the specific user types.
    |
    | The expire time is the number of minutes that the reset token should be
    | considered valid. This security feature keeps tokens short-lived so
    | they have less time to be guessed. You may change this as needed.
    |
    */

    'passwords' => [

        'admin' => [
            'provider' => 'admins',
            'expire' => 60,
        ],

        'member' => [
            'provider' => 'members',
            'expire' => 60,
        ],

        'manager' => [
            'provider' => 'managers',
            'expire' => 60,
        ],

        'guardian' => [
            'provider' => 'guardians',
            'expire' => 60,
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Email Verification
    |--------------------------------------------------------------------------
    |
    | The broker option controls the default email verification broker for
    | your application. You may change this default as required,
    | but they're a perfect start for most applications.
    |
    | You may need to specify multiple email verification configurations if you have
    | more than one user table or model in the application and you want to have
    | separate email verification settings based on the specific user types.
    |
    | The expire time is the number of minutes that the email verification token
    | should be considered valid. This security feature keeps tokens short-lived
    | so they have less time to be guessed. You may change this as needed.
    |
    */

    'emails' => [

        'admin' => [
            'provider' => 'admins',
            'expire' => 60,
        ],

        'member' => [
            'provider' => 'members',
            'expire' => 60,
        ],

        'manager' => [
            'provider' => 'managers',
            'expire' => 60,
        ],

        'guardian' => [
            'provider' => 'guardians',
            'expire' => 60,
        ],

    ],

    /*
    |--------------------------------------------------------------------------
    | Password Confirmation Timeout
    |--------------------------------------------------------------------------
    |
    | Here you may define the amount of seconds before a password confirmation
    | times out and the user is prompted to re-enter their password via the
    | confirmation screen. By default, the timeout lasts for three hours.
    |
    */

    'password_timeout' => 10800,

    /*
    |--------------------------------------------------------------------------
    | TwoFactor Confirmation Timeout
    |--------------------------------------------------------------------------
    |
    | Here you may define the amount of seconds before a TwoFactor confirmation
    | times out and the user is prompted to re-enter their TwoFactor via the
    | confirmation screen. By default, the timeout lasts for three hours.
    |
    */

    'twofactor_timeout' => 10800,

];
