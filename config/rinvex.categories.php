<?php

declare(strict_types=1);

return [

    // Categories Database Tables
    'tables' => [

        'categories' => 'categories',
        'categorizables' => 'categorizables',

    ],

    // Categories Models
    'models' => [
        'category' => \Cortex\Categorizable\Models\Category::class,
    ],

];
