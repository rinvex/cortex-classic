# Rinvex Cortex Change Log

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](CONTRIBUTING.md).


## [v6.0.8] - 2022-01-31
- Fix laravel mix webpack dynamic module npm package installation
- Add Livewire config file

## [v6.0.7] - 2022-01-31
- Fix laravel mix webpack dynamic module npm package installation

## [v6.0.6] - 2021-11-18
- Fix syntax of the new webpack.IgnorePlugin

## [v6.0.5] - 2021-11-18
- Reverse "Simplify installation steps"

## [v6.0.4] - 2021-11-18
- Simplify installation steps

## [v6.0.3] - 2021-11-18
- Add flag to generate APP_KEY only if none exists

## [v6.0.2] - 2021-11-18
- Generate a new APP_KEY after composer autoload-dump if none exists
- Remove unnecessary service provider loading which is autoloaded now

## [v6.0.1] - 2021-11-17
- Support multi-tenant multi-domains
- Laroute: Bind route domain parameters. Ex: {frontarea}, {adminarea} ..etc
- Add app.domains config option and remove outdated rinvex.tenants config options

## [v6.0.0] - 2021-08-22
- Drop PHP v7 support
- Remove useless npm packages formBuilder
- Bind {central_domain} & {tenant_domain} in laroute
- Update npm dependencies
- Update tailwindcss to v2
- Update npm to v7
- Install webpack resolve-url-loader plugin and enable processCssUrls option
- Upgrade laravel mix purgecess extension and update options
- Change tinymce default paths
- Remove useless npm dependencies
- Upgrade expose-loader npm package
- Upgrade webpack to v5 and Laravel Mix to v6
- Use webpack-shell-plugin-next webpack plugin instead of the deprecated webpack-shell-plugin one
- Drop default Vue support from the project as it's not used
- Add get rout by action functionality to laroute
- Disable locale useAcceptLanguageHeader temporary
- Update debugbar route prefix
- Override SessionServiceProvider to use custom SessionManager
- Update rinvex tenants config
- Enable session encryption
- Update composer dependencies for all cortex modules
- Fix wrong datatable file path after version update
- Remove .css & .scss extensions for sass compiled files and fix few issues	030c22e
- Move global image files from cortex/foundation to global app space
- Fix namespace naming convention
- Add pusher config placeholders to avoid composer create-project issues
- Rename ExceptionHandler
- Update composer dependencies
- Update pusher/pusher-php-server requirement from ^6.0.0 to ^7.0.0
- Upgrade to GitHub-native Dependabot (#139)
- Update pusher/pusher-php-server requirement from ^5.0.0 to ^6.0.0 (#137)
- Update config options
- Override Diglactic\Breadcrumbs\Manager
- Fix form ajax remote validation message on error status code
- Rearrange guards and add additional api guards
- Move email verification config to default project config/auth.php file
- Update pusher/pusher-php-server requirement from ^4.1.0 to ^5.0.0 (#136)
- Add missing rinvex/oauth config file
- Change core `Request` namespace
- Install pluralize npm package
- Require cortex/oauth composer dependency for API layer
- Tweak post-autoload-dump composer scripts
- Remove laravel autodiscovery exception for "silber/bouncer"
- Remove unnecessary composer dependencies
- Upgrade to GitHub-native Dependabot
- Update nunomaduro/larastan requirement from ^0.6.0 to ^0.7.0
- Move ide-helper generation to artisan command to conditionally run on dev environments only (when dev-package is installed)
- Update missing pages config option
- Change default queue connection to database
- Update doctrine/dbal requirement from ^2.10.0 to ^3.0.0

## [v5.0.0] - 2021-01-02
- Add support for PHP v8
- Upgrade to Composer v2
- Upgrade to Laravel v8
- Disable self-diagnosis composer check
- Autoload and activate all installed modules once autoload is dumped
- Update self-diagnosis config
- Update config files
- Update copyright year
- Remove uneeded composer dependency nunomaduro/laravel-console-dusk
- Drop problematic develop composer dependency nunomaduro/phpinsights
- Update composer dependency names
- Rename core_modules to always_active
- Refactor service provider loading priorities
- Update overridden views
- Update config files
- Update StyleCI & TravisCI config
- Update rinvex/laravel-composer config
- FIx composer dependencies
- Update webpack whitelisted classes
- Add DataTable.ext.buttons.create_popup & .bulkRevoke buttons
- Update datatables script for better view variables support, and realtime pusher
- Update datatables config options
- Remove un-overridden config files
- Move datatables.mark.css to app.scss
- Add maximum number of password characters
- Append datatable params to export url to export only filtered data
- Bind {subdomain} route parameter
- Add authEndpoint named route to Laravel echo
- Generate absolute URLs for laroute
- Update ignition & flare config
- Add missing tinymce editor icons
- Add timeoffset validation error message
- Fix geoip timezone inconsistency
- Add and tweak tinymce buttons

## [v4.0.0] - 2020-06-19
- Update composer dependencies
- Enforce composer version constraints best practices and ease min modules required versions
  - Plus drop two unnecessary modules cortex/console & cortex/forms from the core project
- Add clockwork environment variables
- Add image button to tinymce editor
- Override core Application foundation class and PackageManifest bootstrap cache builder
- Reset countries browser cache
- Utilize .scss instead of .css
- Add more selectors to purgeCss whitelist
- Customize intlTelInput flags image path, and utilize .scss instead of .css style sheet
- Drop unused npm dependencies
- Downgrade datatables.net-buttons to v1.6.1 temporary to avoid multiple issues in v1.6.2
- Add more selectors to the purgeCSS whitelist
- Update tinymce imports
- Update composer and npm dependencies
- Drop using workbox currently
- Tweak selected_ids collection filtration and check

## [v3.1.1] - 2020-05-30
- Update composer dependencies

## [v3.1.0] - 2020-05-30
- Add missing config files
- Fix CSS purge whitelisting
- Fix datatables bulk actions selected_ids
- Fix CS
- Refactor datatables buttons and checkbox
- Update readme note
- Add realtime update to datatables
- Change default broadcast driver to pusher
- Add 'default' as the default queue
- Install datatables checkboxes
- Rename resource assets
- Rename datatables files
- Add missing language phrases
- Update composer dependencies
- Replace str_slug leftover global function with class based counterpart
- Tweak tailwindCss webpack config
- Update queue table names
- Add the ability to skip discovering module webpack files
- Move image assets to cortex/foundation module
- Refactor webpack config, add full frontend dynamic build modularity, and install tailwindcss

## [v3.0.0] - 2020-03-21
- Upgrade to Laravel v7.x
- Require PHP v7.4 minimum
- Refactor webpack to dynamically import module specific requirements
- Refactor composer dependencies and upgrade to Laravel v7.x and PHP v7.4
- Integrate pusher and laravel-echo for real time communication
- Fix medialibrary s3 bucket domain Url
- Tweak ID obscure feature
- Update npm dependencies
- Tweak public manifest file
- Update composer dependencies
- Remove module related dependencies
- Install workbox PWA support
- Enforce consistent composer dependency versions
- Downgrade npm fontawesome-iconpicker package version to support Fontawesome 4.7

## [v2.2.0] - 2019-11-23
- Update project to Laravel v6.5
- Use singular guard name instead of plural
- Update composer dependencies
- Update media config options
- Update config files & enforce consistency
- Remove manual adding of X-CSRF-TOKEN header (https://github.com/laravel/laravel/pull/5083)
- Use singular guard names for email verification brokers and passwords
- Update jquery.validation library
- Cast process.env.MIX_HASHIDS_LENGTH to number to fix JS error
- Add new reauthentication config option
- Fix phone number input display issue

## [v2.1.1] - 2019-06-28
- Disable cache paths by default
- Enforce latest composer package versions
- Enforce consistency
- Update language files
- Prevent Laroute from adding trailing slash
- Simple tweak to artisan commands
- Add .DS_Store to project .gitignore
- Turn off output buffering
- Fix TinyMCE issues

## [v2.1.0] - 2019-06-02
- Drop travis php v7.1 check
- Update composer deps
- Remove useless node packages: codemirror, chart.js, jquery.terminal
- Replace node-sass with sass package, update deps, and drop pace-progress
- Replace node-sass with sass package
- Drop useless node packages
- Clean things and remove useless files
- Remove pace code, update turbolinks code, fix node bootstrap & intlTelInput issues
- Add new logging channel for installer
- Publish error views and required config files

## [v2.0.0] - 2019-03-03
- Require PHP 7.2 & Laravel 5.8
- Update npm dependencies
- Update composer dependencies
- Enforce using node-sass instead of dart sass to fix issues with laravel-mix v4
- Add favicon
- Replace vanilla intl-tel-input package with jquery wrapped version (v14 issue)
- Simplify and flatten resources/public directories
- Add --ansi option to artisan commands in webpack shell
- Install appstract/laravel-opcache composer package
- Add manifest.json file
- Replace purify-css with purgecss
- Replace wysihtml with tinymce
- Whitelist purgeCss tokens
- Remove unused modules from composer
- Require axios, vue, popper.js npm packages
- Copy tinymce skins directory on assets build process
- Initialize Tinymce
- Install axios & lodash npm dependencies
- Preserve sidebar scroll
- Initialize Vue
- Fix turbolinks / jquery / datatables issues
- Allow customizing cache paths
- Add fallback language for JS Lang lib
- Tweak webpack
- Enforce consistency
 
## [v1.0.4] - 2018-12-22
- Update composer config
- Update installation steps
- Update npm dependencies
- Enforce using node-sass instead of dart sass to fix issues with laravel-mix v4
- Add favicon
- Replace vanilla intl-tel-input package with jquery wrapped version (v14 issue)
- Enforce consistency
- Simplify and flatten resources/public directories

## [v1.0.3] - 2018-10-25
- Update documentation

## [v1.0.2] - 2018-10-22
- Update .gitattributes

## [v1.0.1] - 2018-10-22
- Fix minor grammar typos
- Update jquery.terminal npm package verson
- Update composer options

## [v1.0.0] - 2018-10-06
- Too many changes, stable release, Laravel v5.7+ support

## [v0.0.4] - 2017-03-22
- Update composer dependencies

## [v0.0.3] - 2017-03-14
- Fix stupid gitattributes export-ignore issues

## [v0.0.2] - 2017-03-14
- Upgrade Laravel Mix to v0.8.8 & cleanup frontend build processes
- Fix deployment issues and apply few tweaks, and update composer dependencies

## v0.0.1 - 2017-03-13
- First tagged beta release

[v6.0.8]: https://github.com/rinvex/cortex/compare/v6.0.7...v6.0.8
[v6.0.7]: https://github.com/rinvex/cortex/compare/v6.0.6...v6.0.7
[v6.0.6]: https://github.com/rinvex/cortex/compare/v6.0.5...v6.0.6
[v6.0.5]: https://github.com/rinvex/cortex/compare/v6.0.4...v6.0.5
[v6.0.4]: https://github.com/rinvex/cortex/compare/v6.0.3...v6.0.4
[v6.0.3]: https://github.com/rinvex/cortex/compare/v6.0.2...v6.0.3
[v6.0.2]: https://github.com/rinvex/cortex/compare/v6.0.1...v6.0.2
[v6.0.1]: https://github.com/rinvex/cortex/compare/v6.0.0...v6.0.1
[v6.0.0]: https://github.com/rinvex/cortex/compare/v5.0.0...v6.0.0
[v5.0.0]: https://github.com/rinvex/cortex/compare/v4.0.0...v5.0.0
[v4.0.0]: https://github.com/rinvex/cortex/compare/v3.1.1...v4.0.0
[v3.1.1]: https://github.com/rinvex/cortex/compare/v3.1.0...v3.1.1
[v3.1.0]: https://github.com/rinvex/cortex/compare/v3.0.0...v3.1.0
[v3.0.0]: https://github.com/rinvex/cortex/compare/v2.2.0...v3.0.0
[v2.2.0]: https://github.com/rinvex/cortex/compare/v2.1.1...v2.2.0
[v2.1.1]: https://github.com/rinvex/cortex/compare/v2.1.0...v2.1.1
[v2.1.0]: https://github.com/rinvex/cortex/compare/v2.0.0...v2.1.0
[v2.0.0]: https://github.com/rinvex/cortex/compare/v1.0.3...v2.0.0
[v1.0.3]: https://github.com/rinvex/cortex/compare/v1.0.2...v1.0.3
[v1.0.2]: https://github.com/rinvex/cortex/compare/v1.0.1...v1.0.2
[v1.0.1]: https://github.com/rinvex/cortex/compare/v1.0.0...v1.0.1
[v1.0.0]: https://github.com/rinvex/cortex/compare/v0.0.4...v1.0.0
[v0.0.4]: https://github.com/rinvex/cortex/compare/v0.0.3...v0.0.4
[v0.0.3]: https://github.com/rinvex/cortex/compare/v0.0.2...v0.0.3
[v0.0.2]: https://github.com/rinvex/cortex/compare/v0.0.1...v0.0.2
