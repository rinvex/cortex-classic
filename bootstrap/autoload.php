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

define('LARAVEL_START', microtime(true));

/*
|--------------------------------------------------------------------------
| Register The Composer Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader
| for our application. We just need to utilize it! We'll require it
| into the script here so that we do not have to worry about the
| loading of any our classes "manually". Feels great to relax.
|
*/

require __DIR__.'/../vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Include The Compiled Class File
|--------------------------------------------------------------------------
|
| To dramatically increase your application's performance, you may use a
| compiled class file which contains all of the classes commonly used
| by a request. The Artisan "optimize" is used to create this file.
|
*/

$compiledPath = __DIR__.'/cache/compiled.php';

if (file_exists($compiledPath)) {
    require $compiledPath;
}
