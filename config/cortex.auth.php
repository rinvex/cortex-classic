<?php

declare(strict_types=1);

return [

    // Manage autoload migrations
    'autoload_migrations' => true,

    /*
    |--------------------------------------------------------------------------
    | Activate Guardians
    |--------------------------------------------------------------------------
    |
    | Guardians are like frontline guardians, that protect access area routes
    | with additional authentication layer. When enabled, admins required
    | to login twice, first time using a guardian user that is shared
    | between admins, then second time with their own admin user.
    |
    */

    'guardians' => [
        'adminarea',
    ],

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
    */

    'models' => [
        'role' => \Cortex\Auth\Models\Role::class,
        'ability' => \Cortex\Auth\Models\Ability::class,
        'session' => \Cortex\Auth\Models\Session::class,
        'admin' => config('auth.providers.admins.model'),
        'member' => config('auth.providers.members.model'),
        'manager' => config('auth.providers.managers.model'),
        'guardian' => config('auth.providers.guardians.model'),
        'socialite' => \Cortex\Auth\Models\Socialite::class,
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
    */

    'tables' => [
        'roles' => 'roles',
        'admins' => 'admins',
        'members' => 'members',
        'managers' => 'managers',
        'guardians' => 'guardians',
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

    // Auth media storage disk
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

    /*
    |--------------------------------------------------------------------------
    | Throttle Options
    |--------------------------------------------------------------------------
    |
    | To prevent abusing and spamming specific routes, we can throttle how
    | many times a user can hit these routes within defined time period,
    | Enter maximum attempts, and decay minutes for each route.
    |
    */

    'throttle' => [
        'login' => [
            'max_attempts' => 5,
            'decay_minutes' => 1,
        ],
        'passwordreset' => [
            'max_attempts' => 5,
            'decay_minutes' => 1,
        ],
    ],

];
