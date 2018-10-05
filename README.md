# Rinvex Cortex

Rinvex Cortex is a solid foundation for enterprise solutions, that provides a flexible and extensible architecture for building multi-lingual, multi-tenant applications with content management, themeable views, application modules and much more.

This project uses Laravel framework, but it has it's own application architecture, that's radically different than the default vanilla architecture. Rinvex Cortex is built of modules, and modules are the core building blocks and at the heart of it. Modules are first citizens and everything within the entire application is built of a module, even it's basic fundamental building block that drives the whole system. Everything here is a module, no procedural features here, only modularized!

This project is currently under heavy development, and may not have the level of support you're looking for, but for the record it's been used for multiple live enterprise solutions on production. Still, use at your own responsibility, and note that it changes rapidly.

To install Rinvex Cortex, just run the following command on your terminal:
```php
composer create-project rinvex/cortex
```

This will create a new project based on Rinvex Cortex, install the default modules, and prepare the project for your development.

Docs to be prepared soon..

Notes for the official L5.5 update, remove the following packages from the project's composer.json as they are required on module levet and not required on project level:
- barryvdh/laravel-snappy
- kalnoy/nestedset
- laravelcollective/html
- maatwebsite/excel
- spatie/eloquent-sortable
- spatie/laravel-activitylog
- spatie/laravel-menu
- spatie/laravel-sluggable
- spatie/laravel-translatable
- yajra/laravel-datatables-oracle

Also don't forget to remove useless entries from `config/app.php` -> providers/aliases
