<?php

declare(strict_types=1);

return [

    // Manage autoload migrations
    'autoload_migrations' => true,

    // Pageable Database Tables
    'tables' => [
        'pages' => 'pages',
        'pageables' => 'pageables',
    ],

    // Pageable Models
    'models' => [
        'page' => \Cortex\Pages\Models\PageTenantable::class,
    ],

    // Register routes
    'register_routes' => false,

];
