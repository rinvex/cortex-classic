<?php

declare(strict_types=1);

return [

    // Tenantable Database Tables
    'tables' => [

        'tenants' => 'tenants',
        'tenantables' => 'tenantables',

    ],

    // Tenantable Models
    'models' => [
        'tenant' => \Cortex\Tenantable\Models\Tenant::class,
    ],

];
