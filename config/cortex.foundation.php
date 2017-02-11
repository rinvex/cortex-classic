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
    | Autoloaded Service Providers
    |--------------------------------------------------------------------------
    |
    | The service providers listed here will be automatically loaded on the
    | request to your application. Feel free to add your own services to
    | this array to grant expanded functionality to your applications.
    |
    */

    'providers' => [

        \Cortex\Foundation\Providers\FortServiceProvider::class,
        \Krucas\Notification\NotificationServiceProvider::class,
        \Rinvex\Sparse\Providers\SparseServiceProvider::class,
        \Spatie\Activitylog\ActivitylogServiceProvider::class,
        \Yajra\Datatables\DatatablesServiceProvider::class,
        \Yajra\Datatables\ButtonsServiceProvider::class,
        \Spatie\Fractal\FractalServiceProvider::class,
        \Laravel\Tinker\TinkerServiceProvider::class,
        \Lord\Laroute\LarouteServiceProvider::class,
        \Barryvdh\Snappy\ServiceProvider::class,

    ],

    /*
    |--------------------------------------------------------------------------
    | Class Aliases
    |--------------------------------------------------------------------------
    |
    | This array of class aliases will be registered when this application
    | is started. However, feel free to register as many as you wish as
    | the aliases are "lazy" loaded so they don't hinder performance.
    |
    */

    'aliases' => [

        'LaravelLocalization' => \Mcamara\LaravelLocalization\Facades\LaravelLocalization::class,
        'PDF' => \Barryvdh\Snappy\Facades\SnappyPdf::class,
        'SnappyImage' => \Barryvdh\Snappy\Facades\SnappyImage::class,
        'Alert' => \Krucas\Notification\Facades\Notification::class,

    ],

];
