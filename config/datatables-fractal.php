<?php

declare(strict_types=1);

return [
    /**
     * Request key name to parse includes on fractal.
     */
    'includes' => 'include',

    /**
     * Default fractal serializer.
     */
    'serializer' => League\Fractal\Serializer\DataArraySerializer::class,
];
