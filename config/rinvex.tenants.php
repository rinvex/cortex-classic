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

    /*
    |--------------------------------------------------------------------------
    | Alias Domains
    |--------------------------------------------------------------------------
    |
    | If your application is accessible through multiple domain names,
    | you may specify these domains here, so the application router
    | take care of matching the incoming requests appropriately.
    |
    | No need to list the default domain, it is automatically
    | appended to the compiled list from `app.url` config.
    |
    */

    'alias_domains' => [
        'app.rinvex.test',
    ],

];
