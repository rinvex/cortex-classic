<?php

declare(strict_types=1);

return [

    // Bookings Database Tables
    'tables' => [
        'addons' => 'addons',
        'bookings' => 'bookings',
        'rates' => 'booking_rates',
        'availabilities' => 'booking_availabilities',
    ],

    // Bookings Models
    'models' => [
        'rate' => \Cortex\Bookings\Models\Rate::class,
        'addon' => \Cortex\Bookings\Models\Addon::class,
        'booking' => \Cortex\Bookings\Models\Booking::class,
        'availability' => \Cortex\Bookings\Models\Availability::class,
    ],

];
