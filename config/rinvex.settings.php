<?php

declare(strict_types=1);

return [

    // Manage autoload migrations
    'autoload_migrations' => true,

    // Settings Database Tables
    'tables' => [
        'settings' => 'settings',
    ],

    // Settings Models
    'models' => [
        'setting' => \Cortex\Settings\Models\SettingTenantable::class,
    ],

    // Loadsettings Bootstrap
    'bootstrap' => \Cortex\Settings\Bootstrap\LoadSettings::class,

    // Types
    'types' => [
        'text' => 'text',
        'radio' => 'radio',
        'checkbox' => 'checkbox',
        'dropdown' => 'dropdown',
        'multi-select' => 'multi-select',
        'boolean' => 'boolean',
        'email' => 'email',
        'phone' => 'phone',
        'password' => 'password',
        'date-picker' => 'date-picker',
        'color-picker' => 'color-picker',
        'icon-picker' => 'icon-picker',
        'style-picker' => 'style-picker',
        'resource' => 'resource',
    ],

];
