<?php

declare(strict_types=1);

return [

    // Bookings media storage disk
    'media' => [
        'disk' => 's3-public',
    ],

    // Bookings database tables
    'tables' => [
        'rooms' => 'rooms',
    ],

    // Bookings models
    'models' => [
        'room' => \Cortex\Bookings\Models\Room::class,
    ],

];
