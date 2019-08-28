<?php

declare(strict_types=1);

return [

    // Obscure IDs in certain access areas
    'obscure' => [
        'adminarea',
    ],

    // Global Route Override
    'route' => [

        // Prefix routes with {locale} whenever applicable
        // Changing this option require re-caching routes if already cached
        'locale_prefix' => false,

        // Redirect standard routes to its localized alternative whenever applicable
        // 'route.locale_prefix' must be true for this option to work
        'locale_redirect' => false,

        // Automatically add a trailing slash to the end of all routes
        'trailing_slash' => false,

        // Defines the URL prefixes for the different areas
        // Changing this option require re-caching routes if already cached
        'prefix' => [
            'frontarea' => '',
            'tenantarea' => '',
            'adminarea' => 'adminarea',
            'managerarea' => 'managerarea',
        ],

    ],

    // Adminarea Configuration
    'adminarea' => [

        // Adminarea Idle Timeout
        'idle_timeout' => [

            'enforce' => false,
            'warning' => 30,

            'keepalive_enforce' => false,
            'keepalive_interval' => 300,

        ],

    ],

    'models' => [
        'import_record' => \Cortex\Foundation\Models\ImportRecord::class,
    ],

    'tables' => [
        'media' => 'media',
        'activity_log' => 'activity_log',
        'notifications' => 'notifications',
        'import_records' => 'import_records',
        'temporary_uploads' => 'temporary_uploads',
    ],

    // Media storage config
    'media' => [
        'size' => '1024', // KB
        'disk' => 's3-public',
        'mimetypes' => 'image/jpeg,image/gif,image/png',
    ],

];
