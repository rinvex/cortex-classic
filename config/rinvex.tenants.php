<?php

declare(strict_types=1);

return [

    // Manage autoload migrations
    'autoload_migrations' => true,

    // Tenants Database Tables
    'tables' => [

        'tenants' => 'tenants',
        'tenantables' => 'tenantables',

    ],

    // Tenants Models
    'models' => [
        'tenant' => \Cortex\Tenants\Models\Tenant::class,
    ],

];
