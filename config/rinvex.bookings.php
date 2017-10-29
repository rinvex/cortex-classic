<?php

declare(strict_types=1);

return [

    // Bookings Database Tables
    'tables' => [
        'bookings' => 'bookings',
        'rates' => 'booking_rates',
        'prices' => 'booking_prices',
    ],

    // Bookings Models
    'models' => [
        'rate' => \Cortex\Bookings\Models\Rate::class,
        'price' => \Cortex\Bookings\Models\Price::class,
        'booking' => \Cortex\Bookings\Models\Booking::class,
    ],

];
