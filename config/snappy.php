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
        'binary' => '/usr/local/bin/wkhtmltopdf-amd64',
        'timeout' => false,
        'options' => [],
        'env' => [],
    ],
    'image' => [
        'enabled' => true,
        'binary' => '/usr/local/bin/wkhtmltoimage-amd64',
        'timeout' => false,
        'options' => [],
        'env' => [],
    ],

];
