<?php

/*
 * NOTICE OF LICENSE
 *
 * Part of the Rinvex Composer Package.
 *
 * This source file is subject to The MIT License (MIT)
 * that is bundled with this package in the LICENSE file.
 *
 * Package: Rinvex Composer Package
 * License: The MIT License (MIT)
 * Link:    https://rinvex.com
 */

return [

    /*
    |--------------------------------------------------------------------------
    | Composer Installer Paths
    |--------------------------------------------------------------------------
    |
    | Here you can specify the installable paths for composer installer.
    |
    | CAUSTION: YOU CAN NOT USE ANY LARAVEL FEATURES IN THIS CONFIG FILE!
    | This config file is loaded first thing at the very begining
    | on every composer action before even any package
    | being installed. Just pure PHP acceptable!
    |
    | Paths are relative to the root config dir.
    |
    */

    'base' => __DIR__.'/../',
    'app' => __DIR__.'/../app/',
    'bootstrap' => __DIR__.'/../bootstrap/',

];
