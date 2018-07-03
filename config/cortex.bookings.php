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
        'services' => 'services',
    ],

    // Bookings Models
    'models' => [
        'room' => \Cortex\Bookings\Models\Room::class,
        'room_rate' => \Cortex\Bookings\Models\RoomRate::class,
        'room_addon' => \Cortex\Bookings\Models\RoomAddon::class,
        'room_booking' => \Cortex\Bookings\Models\RoomBooking::class,
        'room_availability' => \Cortex\Bookings\Models\RoomAvailability::class,
        'event_booking' => \Cortex\Bookings\Models\EventBooking::class,
        'event_ticket' => \Cortex\Bookings\Models\EventTicket::class,
        'event' => \Cortex\Bookings\Models\Event::class,
        'service' => \Cortex\Bookings\Models\Service::class,
        'service_rate' => \Cortex\Bookings\Models\ServiceRate::class,
        'service_addon' => \Cortex\Bookings\Models\ServiceAddon::class,
        'service_booking' => \Cortex\Bookings\Models\ServiceBooking::class,
    ],

];
