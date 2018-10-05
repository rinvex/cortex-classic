<?php

declare(strict_types=1);

return [

    // Bookings media storage disk
    'media' => [
        'disk' => 'public',
    ],

    // Bookings database tables
    'tables' => [
        'events' => 'events',
        'services' => 'services',
    ],

    // Bookings Models
    'models' => [
        'service' => \Cortex\Bookings\Models\Service::class,
        'service_rate' => \Cortex\Bookings\Models\ServiceRate::class,
        'service_booking' => \Cortex\Bookings\Models\ServiceBooking::class,
        'service_availability' => \Cortex\Bookings\Models\ServiceAvailability::class,
        'event_booking' => \Cortex\Bookings\Models\EventBooking::class,
        'event_ticket' => \Cortex\Bookings\Models\EventTicket::class,
        'event' => \Cortex\Bookings\Models\Event::class,
    ],

];
