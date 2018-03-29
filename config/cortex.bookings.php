<?php

declare(strict_types=1);

return [

    // Bookings media storage disk
    'media' => [
        'disk' => 'public',
    ],

    // Bookings database tables
    'tables' => [
        'rooms' => 'rooms',
        'events' => 'events',
    ],

    // Bookings models
    'models' => [
        'room' => \Cortex\Bookings\Models\Room::class,
        'event' => \Cortex\Bookings\Models\Event::class,
    ],

];
