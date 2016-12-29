<?php

/*
 * NOTICE OF LICENSE
 *
 * Part of the Rinvex Cortex Application.
 *
 * This source file is subject to The MIT License (MIT)
 * that is bundled with this package in the LICENSE file.
 *
 * Package: Rinvex Cortex Application
 * License: The MIT License (MIT)
 * Link:    https://rinvex.com
 */

return [

    /*
    |--------------------------------------------------------------------------
    | Application Basic Configuration
    |--------------------------------------------------------------------------
    |
    | Basic Rinvex Cortex application configuration.
    |
    */

    'app' => [

        /*
        |--------------------------------------------------------------------------
        | Application Version
        |--------------------------------------------------------------------------
        |
        | Rinvex Cortex follows semantic versioning (Major.Minor.Patch).
        |
        */

        'version' => '1.0.0',

        /*
        |--------------------------------------------------------------------------
        | Application Title
        |--------------------------------------------------------------------------
        |
        | Specify the title of the Rinvex Cortex application.
        |
        */

        'title' => 'Rinvex Cortex',

        /*
        |--------------------------------------------------------------------------
        | Application Tagline
        |--------------------------------------------------------------------------
        |
        | Specify the tagline of the Rinvex Cortex application.
        |
        */

        'tagline' => 'Rinvex Cortex is a solid foundation for enterprise solutions, that provides a flexible and extensible architecture for building multi-lingual, multi-tenant applications with content management, themeable views, application modules and much more.',

        /*
        |--------------------------------------------------------------------------
        | Application Copyright
        |--------------------------------------------------------------------------
        |
        | Specify the copyright clause for the Rinvex Cortex application.
        |
        */

        'copyright' => '&copy; 2016-2017, Rinvex LLC',

    ],

    /*
    |--------------------------------------------------------------------------
    | Global Route Override
    |--------------------------------------------------------------------------
    |
    | Here you can modify Route behavior globaly application-wide.
    |
    */

    'route' => [

        // Prefix routes with {locale} whenever applicable
        // Changing this option require re-caching routes if already cached
        'locale_prefix'   => false,

        // Redirect standard routes to its localized alternative whenever applicable
        // 'route.locale_prefix' must be true for this option to work
        'locale_redirect' => false,

        // Automatically add a trailing slash to the end of all routes
        'trailing_slash'  => false,

    ],


    /*
    |--------------------------------------------------------------------------
    | Application Backend Configuration
    |--------------------------------------------------------------------------
    |
    | Specify the Rinvex Cortex application backend configuration.
    |
    */

    'backend' => [

        /*
        |--------------------------------------------------------------------------
        | Application Backend URI
        |--------------------------------------------------------------------------
        |
        | Specify the Rinvex Cortex application backend URI.
        |
        */

        'uri' => 'backend',

        /*
        |--------------------------------------------------------------------------
        | Application Backend Idle Timeout
        |--------------------------------------------------------------------------
        |
        | Specify the Rinvex Cortex dashboard idle timeout options.
        |
        */

        'idle_timeout' => [

            'enforce' => false,
            'warning' => 30,

            'keepalive_enforce'  => false,
            'keepalive_interval' => 300,

        ],

    ],

];
