<?php

declare(strict_types=1);

return [

    // Manage autoload migrations
    'autoload_migrations' => true,

    //'allowed_mimes' => 'jpg,jpeg,png,txt,csv,pdf',// @TODO: remove this rule as this already handled by spatie/medialibrary

    // Form media storage disk
    'media' => [
        'disk' => 'public',
    ],

];
