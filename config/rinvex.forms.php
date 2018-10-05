<?php

declare(strict_types=1);

return [

    // Forms Database Tables
    'tables' => [
        'forms' => 'forms',
        'form_responses' => 'form_responses',
    ],

    // Forms Models
    'models' => [
        'form' => \Cortex\Forms\Models\Form::class,
        'form_response' => \Cortex\Forms\Models\FormResponse::class,
    ],

];
