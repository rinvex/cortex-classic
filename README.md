# Rinvex Cortex

Rinvex Cortex is a solid foundation for enterprise solutions, that provides a flexible and extensible architecture for building multi-lingual, multi-tenant applications with content management, themeable views, application modules and much more.

This project uses Laravel framework, but it has its own modular architecture, that's different from the default vanilla structure. Rinvex Cortex is built of modules, and modules are the core building blocks and at the heart of it. Modules are first citizens and everything within the entire application is built of a module, even it's basic fundamental building block that drives the whole system. Everything here is part of a module! Once installed, you can check the automatically populated structure inside the `app` directory to get familiar with it.

The project also supports multi-tenant, multi-domain, and multiple access areas, such as: adminarea, frontarea, managerarea, and tenantarea. Each access area is dedicated for a different user type, like: admins, managers, and members. Each type can access only their access areas, and have their own guards and authentication/authorization.

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

Replace the following pseudo variables with your values in the following commands, then execute from terminal (inside the new project directory):

- `YOUR_DATABASE_HOST_HERE`
- `YOUR_DATABASE_NAME_HERE`
- `YOUR_DATABASE_USERNAME_HERE`
- `YOUR_DATABASE_PASSWORD_HERE`

```
sed -i "s/DB_HOST=.*/DB_HOST=YOUR_DATABASE_HOST_HERE/" .env
sed -i "s/DB_DATABASE=.*/DB_DATABASE=YOUR_DATABASE_NAME_HERE/" .env
sed -i "s/DB_USERNAME=.*/DB_USERNAME=YOUR_DATABASE_USERNAME_HERE/" .env
sed -i "s/DB_PASSWORD=.*/DB_PASSWORD=YOUR_DATABASE_PASSWORD_HERE/" .env
```

Install the project

```
php artisan cortex:install
npm install
npm run dev
```

**Important:** You'll need to update your localhost project domains in config `app.domains` for the project to run smoothly.

The rest of documentation will be ready soon..


# Optional

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

If you're using any browser streaming features, and would like to disable output buffering, then make sure your PHP & nginx settings are set up correctly, with buffering turned off, so you can stream content to the browser.

## nginx config
```
fastcgi_buffering off;
```

## php config
```
output_buffering = off
zlib.output_compression = off
```

Notes:
- If you changed any `.env` environment variables, or any of their references, make sure to run `npm run dev` to update the public assets, as it reference some of it.
