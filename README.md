# Rinvex Cortex

Rinvex Cortex is a solid foundation for enterprise solutions, that provides a flexible and extensible architecture for building multi-lingual, multi-tenant applications with content management, themeable views, application modules and much more.

This project uses Laravel framework, but it has it's own application architecture, that's radically different than the default vanilla architecture. Rinvex Cortex is built of modules, and modules are the core building blocks and at the heart of it. Modules are first citizens and everything within the entire application is built of a module, even it's basic fundamental building block that drives the whole system. Everything here is a module, no procedural features here, only modularized!

This project is currently under heavy development, and may not have the level of support you're looking for, but for the record it's been used for multiple live enterprise solutions on production. Still, use at your own responsibility, and note that it changes rapidly.

To install Rinvex Cortex, just run the following command on your terminal:
```php
composer create-project rinvex/cortex
```

This will create a new project based on Rinvex Cortex, install the default modules, and prepare the project for your development.


# Fresh Installation

Before you start working with this project, make sure you're familiar with the modular architecture of our system. The steps is straight forward and should be easy to implement.
It's supposed that you're running homestead on vagrant machine, with the default setup, using PHP 7.1+ and MySQL 5.7.8+, or any similar environment like [rinvex/punnet](https://github.com/rinvex/punnet).
If you follow the steps below, you should get it done in less than 10 minutes regardless of your experience level.
Make sure to create a new database for the new project, and ensure you've local domain ready you can use.

```
composer create-project rinvex/cortex cortex-demo
```

Replace `YOUR_LOCAL_DOMAIN_HERE`, `YOUR_DATABASE_NAME_HERE` and `YOUR_SESSION_DOMAIN_HERE` with your values in the following commands, then execute from terminal (inside the new project directory):

```
sed -i "s/APP_URL=.*/APP_URL=http\:\/\/YOUR_LOCAL_DOMAIN_HERE/" .env
sed -i "s/DB_DATABASE=.*/DB_DATABASE=YOUR_DATABASE_NAME_HERE/" .env
sed -i "s/SESSION_DOMAIN=.*/SESSION_DOMAIN=YOUR_SESSION_DOMAIN_HERE/" .env
```

Install the project

```
php artisan cortex:install
npm run dev
```

Create public disk symbolic link

```
php artisan storage:link
```

To create a new module run the following command

```
php artisan make:module cortex/boards
```

To see all the available command line tools, run the following command:

```
php artisan list
```

The rest of documentation will be ready soon..
