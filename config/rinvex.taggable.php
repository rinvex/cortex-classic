<?php

declare(strict_types=1);

return [

    // Taggable Database Tables
    'tables' => [

        'tags' => 'tags',
        'taggables' => 'taggables',

    ],

    // Taggable Models
    'models' => [
        'tag' => \Cortex\Taggable\Models\Tag::class,
    ],

];
