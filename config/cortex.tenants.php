<?php

declare(strict_types=1);

return [

    // Tenants media storage disk
    'media' => [
        'disk' => 'public',
    ],

    // Global Route Override
    'route' => [

        // Defines the URL prefixes for the different areas
        // Changing this option require re-caching routes if already cached
        'prefix' => [
            'managerarea' => 'managerarea',
            'tenantarea' => 'tenantarea',
        ],

    ],

];
