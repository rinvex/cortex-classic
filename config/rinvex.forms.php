<?php

declare(strict_types=1);

return [

    // Manage autoload migrations
    'autoload_migrations' => true,

    // Forms Database Tables
    'tables' => [
        'forms' => 'forms',
        'form_responses' => 'form_responses',
    ],

    // Forms Models
    'models' => [
        'form' => \Cortex\Forms\Models\Form::class,
        'form_response' => \Rinvex\Forms\Models\FormResponse::class,
    ],

];
