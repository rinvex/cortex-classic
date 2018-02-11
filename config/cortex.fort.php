<?php

declare(strict_types=1);

return [

    /*
    |--------------------------------------------------------------------------
    | Auth Models
    |--------------------------------------------------------------------------
    |
    | Specify your Eloquent models that should be used to retrieve your
    | resources. A sensible defaults has been defined for you, but
    | you may use whatever you like. The model you want to use
    | must extend one of the default base models.
    |
    | Note: User model is defined in the default Laravel configuration file:
    |       config/auth.php (Check 'model' key inside the 'providers' array)
    |
    */

    'models' => [
        'role' => \Cortex\Fort\Models\Role::class,
        'user' => config('auth.providers.users.model'),
        'ability' => \Cortex\Fort\Models\Ability::class,
        'session' => \Cortex\Fort\Models\Session::class,
        'socialite' => \Cortex\Fort\Models\Socialite::class,
    ],

    /*
    |--------------------------------------------------------------------------
    | Auth Database Tables
    |--------------------------------------------------------------------------
    |
    | Specify your database tables that should be used to store your
    | resources. A sensible defaults has been defined for you, but
    | you may use whatever you like. The table you want to use
    | must have the same structure as of the default ones.
    |
    | Notes: - Sessions table is defined in the default Laravel configuration file:
    |          config/session.php (Check 'table' key)
    |
    |        - Pivot tables defined within the
    |
    */

    'tables' => [
        'roles' => 'roles',
        'users' => 'users',
        'abilities' => 'abilities',
        'socialites' => 'socialites',
        'permissions' => 'permissions',
        'assigned_roles' => 'assigned_roles',
    ],

    /*
    |--------------------------------------------------------------------------
    | User Registration
    |--------------------------------------------------------------------------
    |
    | You may specify user registration options here. You can enable or
    | disable new registrations, moderate or activate new users, set
    | default registration role, and send welcome email on success
    |
    */

    'registration' => [
        'enabled' => true,
        'moderated' => false,
    ],

    /*
    |--------------------------------------------------------------------------
    | Email Messages
    |--------------------------------------------------------------------------
    |
    | You may specify send users email messages upon specific events, or
    | whenever an important action required. There is few emails set
    | by default out-of-the box. You can enable/disable here.
    |
    */

    'emails' => [
        'welcome' => true,
        'verification' => true,
        'throttle_lockout' => true,
    ],

    /*
    |--------------------------------------------------------------------------
    | Session Persistence
    |--------------------------------------------------------------------------
    |
    | This determines session persistence mode. Single persistence means
    | user can NOT login more than once in multiple browsers at the
    | same time. Recent login is the only kept active session.
    |
    | Supported: "single", "multiple"
    |
    */

    'persistence' => 'multiple',

    // Minimum Passwords Characters
    'password_min_chars' => 8,

    // Fort media storage disk
    'media' => [
        'disk' => 'public',
    ],

    /*
    |--------------------------------------------------------------------------
    | Reauthentication Options
    |--------------------------------------------------------------------------
    |
    | Some routes may require higher security levels and reauthentication
    | before taking taking actions. Routes like resource termination
    | for example. Here you may set reauthentication defaults.
    |
    */

    'reauthentication' => [
        'timeout' => 3600,
    ],

];
