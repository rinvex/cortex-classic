<?php

declare(strict_types=1);

return [

    // Manage autoload migrations
    'autoload_migrations' => true,

    // Enabled grants
    'grants' => [
        'Password' => ['enabled' => true, 'expire_in' => new DateInterval('P1Y')],
        'Implicit' => ['enabled' => false, 'expire_in' => new DateInterval('P1Y')],
        'AuthCode' => ['enabled' => true, 'expire_in' => new DateInterval('P1Y')],
        'RefreshToken' => ['enabled' => true, 'expire_in' => new DateInterval('P1Y')],
        'PersonalAccess' => ['enabled' => true, 'expire_in' => new DateInterval('P1Y')],
        'ClientCredentials' => ['enabled' => true, 'expire_in' => new DateInterval('P1Y')],
    ],

    // Indicates if we should unserializes cookies.
    'unserializes_cookies' => false,

    // Indicates if we should ignore incoming CSRF tokens.
    'ignore_csrf_token' => false,

    // The name for API token cookies.
    'cookie' => 'laravel_token',

    // Set the default scope(s). Multiple scopes may be specified delimited by spaces.
    'default_scope' => null,

    // Override the default "BearerTokenResponse" to custom schema,
    // for example to add new extra parameters to support OpenID Connect flow
    'server_response_type' => null,

    // Database Tables
    'tables' => [
        'clients' => 'oauth_clients',
        'auth_codes' => 'oauth_auth_codes',
        'access_tokens' => 'oauth_access_tokens',
        'refresh_tokens' => 'oauth_refresh_tokens',
    ],

    // Models
    'models' => [
        'client' => \Cortex\Oauth\Models\Client::class,
        'auth_code' => \Cortex\Oauth\Models\AuthCode::class,
        'access_token' => \Cortex\Oauth\Models\AccessToken::class,
        'refresh_token' => \Cortex\Oauth\Models\RefreshToken::class,
    ],

    /*
    |--------------------------------------------------------------------------
    | Personal Access Client
    |--------------------------------------------------------------------------
    |
    | If you enable client hashing, you should set the personal access client
    | ID and unhashed secret within your environment file. The values will
    | get used while issuing fresh personal access tokens to your users.
    |
    */

    'personal_access_client' => [
        'id' => env('OAUTH_PERSONAL_ACCESS_CLIENT_ID'),
        'secret' => env('OAUTH_PERSONAL_ACCESS_CLIENT_SECRET'),
    ],

];
