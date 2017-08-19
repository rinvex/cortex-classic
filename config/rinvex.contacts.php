<?php

declare(strict_types=1);

return [

    // Contacts Database Tables
    'tables' => [
        'contacts' => 'contacts',
        'contact_relations' => 'contact_relations',
    ],

    // Contacts Models
    'models' => [
        'contact' => \Cortex\Contacts\Models\Contact::class,
    ],

];
