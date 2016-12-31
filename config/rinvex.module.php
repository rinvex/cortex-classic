<?php

/*
 * NOTICE OF LICENSE
 *
 * Part of the Rinvex Module Package.
 *
 * This source file is subject to The MIT License (MIT)
 * that is bundled with this package in the LICENSE file.
 *
 * Package: Rinvex Module Package
 * License: The MIT License (MIT)
 * Link:    https://rinvex.com
 */

return [

    /*
    |--------------------------------------------------------------------------
    | Module Paths
    |--------------------------------------------------------------------------
    |
    | Here you can specify the location paths where modules are installed.
    |
    | Paths are relative to the root config dir.
    |
    */

    'paths' => [
        __DIR__.'/../app/',
    ],

    /*
    |--------------------------------------------------------------------------
    | Module Types
    |--------------------------------------------------------------------------
    |
    | Here you can specify the types of modules installed.
    |
    */

    'types' => [
        'cortex-module',
    ],

    /*
    |--------------------------------------------------------------------------
    | Enabled Modules
    |--------------------------------------------------------------------------
    |
    | Specify here enabled modules. 'cortex/foundation' always enabled
    | and can NOT be disabled since it's a core module required for
    | other modules to function well & keep application healthy.
    |
    */

    'enabled' => [
        //
    ],

];
