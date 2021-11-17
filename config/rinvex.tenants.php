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

    /*
    |--------------------------------------------------------------------------
    | Tenant Resolver Class
    |--------------------------------------------------------------------------
    |
    | This package resolve currently active tenant using Resolver Classes.
    | It comes with few default resolvers that you can use, or you can
    | build your own custom resolver to support additional functions.
    |
    | Default Resolvers:
    | - \Rinvex\Tenants\Http\Resolvers\DomainTenantResolver::class
    | - \Rinvex\Tenants\Http\Resolvers\SubdomainTenantResolver::class
    | - \Rinvex\Tenants\Http\Resolvers\SubdomainOrDomainTenantResolver::class
    |
    */

    'resolver' => \Rinvex\Tenants\Resolvers\SubdomainOrDomainTenantResolver::class,

];
