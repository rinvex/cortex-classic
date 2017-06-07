<?php

declare(strict_types=1);

return [

    /*
    |--------------------------------------------------------------------------
    | Module Paths
    |--------------------------------------------------------------------------
    |
    | Here you can specify the location paths where modules are installed.
    |
    | Paths are relative to the root config dir.
    |
    */

    'paths' => [
        __DIR__.'/../app/',
    ],

    /*
    |--------------------------------------------------------------------------
    | Module Types
    |--------------------------------------------------------------------------
    |
    | Here you can specify the types of modules installed.
    |
    */

    'types' => [
        'cortex-module',
    ],

    /*
    |--------------------------------------------------------------------------
    | Enabled Modules
    |--------------------------------------------------------------------------
    |
    | Specify here enabled modules. 'cortex/foundation' always enabled
    | and can NOT be disabled since it's a core module required for
    | other modules to function well & keep application healthy.
    |
    */

    'enabled' => [
        'cortex/fort',
        'cortex/taggable',
        'cortex/tenantable',
        'cortex/attributable',
        'cortex/categorizable',
    ],

];
