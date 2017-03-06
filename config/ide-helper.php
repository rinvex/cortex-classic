<?php

declare(strict_types=1);
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
    | Filename & Format
    |--------------------------------------------------------------------------
    |
    | The default filename (without extension) and the format (php or json)
    |
    */

    'filename' => '_ide_helper',
    'format' => 'php',

    /*
    |--------------------------------------------------------------------------
    | Helper files to include
    |--------------------------------------------------------------------------
    |
    | Include helper files. By default not included, but can be toggled with the
    | -- helpers (-H) option. Extra helper files can be included.
    |
    */

    'include_helpers' => false,
    'helper_files' => [
        base_path('vendor/laravel/framework/src/Illuminate/Support/helpers.php'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Model locations to include
    |--------------------------------------------------------------------------
    |
    | Define in which directories the ide-helper:models command should look
    | for models.
    |
    */

    'model_locations' => [
        'app',
    ],

    /*
    |--------------------------------------------------------------------------
    | Extra classes
    |--------------------------------------------------------------------------
    |
    | These implementations are not really extended, but called with magic functions
    |
    */

    'extra' => [
        'Eloquent' => [
            'Illuminate\Database\Eloquent\Builder',
            'Illuminate\Database\Query\Builder',
        ],
        'Session' => ['Illuminate\Session\Store'],
    ],

    'magic' => [
        'Log' => [
            'debug' => 'Monolog\Logger::addDebug',
            'info' => 'Monolog\Logger::addInfo',
            'notice' => 'Monolog\Logger::addNotice',
            'warning' => 'Monolog\Logger::addWarning',
            'error' => 'Monolog\Logger::addError',
            'critical' => 'Monolog\Logger::addCritical',
            'alert' => 'Monolog\Logger::addAlert',
            'emergency' => 'Monolog\Logger::addEmergency',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Interface implementations
    |--------------------------------------------------------------------------
    |
    | These interfaces will be replaced with the implementing class. Some interfaces
    | are detected by the helpers, others can be listed below.
    |
    */

    'interfaces' => [
        '\Illuminate\Contracts\Auth\Authenticatable' => config('rinvex.fort.models.user', Rinvex\Fort\Models\User::class),
    ],

];
