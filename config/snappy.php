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

    'pdf' => [
        'enabled' => true,
        'binary' => '/usr/bin/wkhtmltopdf',
        'timeout' => false,
        'options' => [],
        'env' => [],
    ],
    'image' => [
        'enabled' => true,
        'binary' => '/usr/bin/wkhtmltoimage',
        'timeout' => false,
        'options' => [],
        'env' => [],
    ],

];
