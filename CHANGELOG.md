# Rinvex Cortex Change Log

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](CONTRIBUTING.md).


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
