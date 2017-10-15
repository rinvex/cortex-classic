<?php

return [

    /*
     * Every project is different and sometimes files
     * and folders should be ignored and never
     * count towards the project stats.
     */
    'ignore' => [

        /*
         * Ignore the contents of an entire folder
         */
        'folders' => [
            'node_modules',
            //'vendor',
            // 'app/Http/Controllers'
        ],

        /*
         * Ignore certain filenames or extensions
         */
        'files' => [
            // 'helpers.php'
            // 'twig.php'
        ],

    ],

];
