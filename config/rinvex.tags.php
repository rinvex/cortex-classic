<?php

declare(strict_types=1);

return [

    // Manage autoload migrations
    'autoload_migrations' => true,

    // Tags Database Tables
    'tables' => [

        'tags' => 'tags',
        'taggables' => 'taggables',

    ],

    // Tags Models
    'models' => [
        'tag' => \Cortex\Tags\Models\Tag::class,
    ],

];
