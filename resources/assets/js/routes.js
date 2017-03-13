(function () {

    var laroute = (function () {

        var routes = {

            absolute: false,
            rootUrl: 'http://cortex.rinvex.app',
            routes : [{"host":null,"methods":["GET","HEAD"],"uri":"\/","name":"home","action":"Cortex\Foundation\Http\Controllers\HomeController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"asd","name":"asd","action":"Cortex\Foundation\Http\Controllers\HomeController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend","name":"rinvex.fort.backend.dashboard.home","action":"Rinvex\Fort\Http\Controllers\Backend\DashboardController@home"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/abilities","name":"rinvex.fort.backend.abilities.index","action":"Rinvex\Fort\Http\Controllers\Backend\AbilitiesController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/abilities\/create","name":"rinvex.fort.backend.abilities.create","action":"Rinvex\Fort\Http\Controllers\Backend\AbilitiesController@create"},{"host":null,"methods":["POST"],"uri":"backend\/abilities\/create","name":"rinvex.fort.backend.abilities.store","action":"Rinvex\Fort\Http\Controllers\Backend\AbilitiesController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/abilities\/{ability}","name":"rinvex.fort.backend.abilities.edit","action":"Rinvex\Fort\Http\Controllers\Backend\AbilitiesController@edit"},{"host":null,"methods":["PUT"],"uri":"backend\/abilities\/{ability}","name":"rinvex.fort.backend.abilities.update","action":"Rinvex\Fort\Http\Controllers\Backend\AbilitiesController@update"},{"host":null,"methods":["DELETE"],"uri":"backend\/abilities\/{ability}","name":"rinvex.fort.backend.abilities.delete","action":"Rinvex\Fort\Http\Controllers\Backend\AbilitiesController@delete"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/roles","name":"rinvex.fort.backend.roles.index","action":"Rinvex\Fort\Http\Controllers\Backend\RolesController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/roles\/create","name":"rinvex.fort.backend.roles.create","action":"Rinvex\Fort\Http\Controllers\Backend\RolesController@create"},{"host":null,"methods":["POST"],"uri":"backend\/roles\/create","name":"rinvex.fort.backend.roles.store","action":"Rinvex\Fort\Http\Controllers\Backend\RolesController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/roles\/{role}","name":"rinvex.fort.backend.roles.edit","action":"Rinvex\Fort\Http\Controllers\Backend\RolesController@edit"},{"host":null,"methods":["PUT"],"uri":"backend\/roles\/{role}","name":"rinvex.fort.backend.roles.update","action":"Rinvex\Fort\Http\Controllers\Backend\RolesController@update"},{"host":null,"methods":["DELETE"],"uri":"backend\/roles\/{role}","name":"rinvex.fort.backend.roles.delete","action":"Rinvex\Fort\Http\Controllers\Backend\RolesController@delete"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/users","name":"rinvex.fort.backend.users.index","action":"Rinvex\Fort\Http\Controllers\Backend\UsersController@index"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/users\/create","name":"rinvex.fort.backend.users.create","action":"Rinvex\Fort\Http\Controllers\Backend\UsersController@create"},{"host":null,"methods":["POST"],"uri":"backend\/users\/create","name":"rinvex.fort.backend.users.store","action":"Rinvex\Fort\Http\Controllers\Backend\UsersController@store"},{"host":null,"methods":["GET","HEAD"],"uri":"backend\/users\/{user}","name":"rinvex.fort.backend.users.edit","action":"Rinvex\Fort\Http\Controllers\Backend\UsersController@edit"},{"host":null,"methods":["PUT"],"uri":"backend\/users\/{user}","name":"rinvex.fort.backend.users.update","action":"Rinvex\Fort\Http\Controllers\Backend\UsersController@update"},{"host":null,"methods":["DELETE"],"uri":"backend\/users\/{user}","name":"rinvex.fort.backend.users.delete","action":"Rinvex\Fort\Http\Controllers\Backend\UsersController@delete"},{"host":null,"methods":["GET","HEAD"],"uri":"auth\/login","name":"rinvex.fort.frontend.auth.login","action":"Rinvex\Fort\Http\Controllers\Frontend\AuthenticationController@form"},{"host":null,"methods":["POST"],"uri":"auth\/login","name":"rinvex.fort.frontend.auth.login.process","action":"Rinvex\Fort\Http\Controllers\Frontend\AuthenticationController@login"},{"host":null,"methods":["POST"],"uri":"auth\/logout","name":"rinvex.fort.frontend.auth.logout","action":"Rinvex\Fort\Http\Controllers\Frontend\AuthenticationController@logout"},{"host":null,"methods":["GET","HEAD"],"uri":"auth\/register","name":"rinvex.fort.frontend.auth.register","action":"Rinvex\Fort\Http\Controllers\Frontend\RegistrationController@form"},{"host":null,"methods":["POST"],"uri":"auth\/register","name":"rinvex.fort.frontend.auth.register.process","action":"Rinvex\Fort\Http\Controllers\Frontend\RegistrationController@register"},{"host":null,"methods":["GET","HEAD"],"uri":"auth\/github","name":"rinvex.fort.frontend.auth.social.github","action":"Rinvex\Fort\Http\Controllers\Frontend\SocialAuthenticationController@redirectToGithub"},{"host":null,"methods":["GET","HEAD"],"uri":"auth\/github\/callback","name":"rinvex.fort.frontend.auth.social.github.callback","action":"Rinvex\Fort\Http\Controllers\Frontend\SocialAuthenticationController@handleGithubCallback"},{"host":null,"methods":["GET","HEAD"],"uri":"user\/settings","name":"rinvex.fort.frontend.user.settings","action":"Rinvex\Fort\Http\Controllers\Frontend\UserSettingsController@edit"},{"host":null,"methods":["POST"],"uri":"user\/settings","name":"rinvex.fort.frontend.user.settings.update","action":"Rinvex\Fort\Http\Controllers\Frontend\UserSettingsController@update"},{"host":null,"methods":["GET","HEAD"],"uri":"user\/sessions","name":"rinvex.fort.frontend.user.sessions","action":"Rinvex\Fort\Http\Controllers\Frontend\UserSessionsController@index"},{"host":null,"methods":["DELETE"],"uri":"user\/sessions\/{token?}","name":"rinvex.fort.frontend.user.sessions.flush","action":"Rinvex\Fort\Http\Controllers\Frontend\UserSessionsController@flush"},{"host":null,"methods":["GET","HEAD"],"uri":"user\/twofactor\/totp\/enable","name":"rinvex.fort.frontend.user.twofactor.totp.enable","action":"Rinvex\Fort\Http\Controllers\Frontend\TwoFactorSettingsController@enableTotp"},{"host":null,"methods":["POST"],"uri":"user\/twofactor\/totp\/update","name":"rinvex.fort.frontend.user.twofactor.totp.update","action":"Rinvex\Fort\Http\Controllers\Frontend\TwoFactorSettingsController@updateTotp"},{"host":null,"methods":["GET","HEAD"],"uri":"user\/twofactor\/totp\/disable","name":"rinvex.fort.frontend.user.twofactor.totp.disable","action":"Rinvex\Fort\Http\Controllers\Frontend\TwoFactorSettingsController@disableTotp"},{"host":null,"methods":["GET","HEAD"],"uri":"user\/twofactor\/totp\/backup","name":"rinvex.fort.frontend.user.twofactor.totp.backup","action":"Rinvex\Fort\Http\Controllers\Frontend\TwoFactorSettingsController@backupTotp"},{"host":null,"methods":["GET","HEAD"],"uri":"user\/twofactor\/phone\/enable","name":"rinvex.fort.frontend.user.twofactor.phone.enable","action":"Rinvex\Fort\Http\Controllers\Frontend\TwoFactorSettingsController@enablePhone"},{"host":null,"methods":["GET","HEAD"],"uri":"user\/twofactor\/phone\/disable","name":"rinvex.fort.frontend.user.twofactor.phone.disable","action":"Rinvex\Fort\Http\Controllers\Frontend\TwoFactorSettingsController@disablePhone"},{"host":null,"methods":["GET","HEAD"],"uri":"passwordreset\/request","name":"rinvex.fort.frontend.passwordreset.request","action":"Rinvex\Fort\Http\Controllers\Frontend\PasswordResetController@request"},{"host":null,"methods":["POST"],"uri":"passwordreset\/send","name":"rinvex.fort.frontend.passwordreset.send","action":"Rinvex\Fort\Http\Controllers\Frontend\PasswordResetController@send"},{"host":null,"methods":["GET","HEAD"],"uri":"passwordreset\/reset","name":"rinvex.fort.frontend.passwordreset.reset","action":"Rinvex\Fort\Http\Controllers\Frontend\PasswordResetController@reset"},{"host":null,"methods":["POST"],"uri":"passwordreset\/process","name":"rinvex.fort.frontend.passwordreset.process","action":"Rinvex\Fort\Http\Controllers\Frontend\PasswordResetController@process"},{"host":null,"methods":["GET","HEAD"],"uri":"verification\/phone\/request","name":"rinvex.fort.frontend.verification.phone.request","action":"Rinvex\Fort\Http\Controllers\Frontend\PhoneVerificationController@request"},{"host":null,"methods":["POST"],"uri":"verification\/phone\/send","name":"rinvex.fort.frontend.verification.phone.send","action":"Rinvex\Fort\Http\Controllers\Frontend\PhoneVerificationController@send"},{"host":null,"methods":["GET","HEAD"],"uri":"verification\/phone\/verify","name":"rinvex.fort.frontend.verification.phone.verify","action":"Rinvex\Fort\Http\Controllers\Frontend\PhoneVerificationController@verify"},{"host":null,"methods":["POST"],"uri":"verification\/phone\/process","name":"rinvex.fort.frontend.verification.phone.process","action":"Rinvex\Fort\Http\Controllers\Frontend\PhoneVerificationController@process"},{"host":null,"methods":["GET","HEAD"],"uri":"verification\/email\/request","name":"rinvex.fort.frontend.verification.email.request","action":"Rinvex\Fort\Http\Controllers\Frontend\EmailVerificationController@request"},{"host":null,"methods":["POST"],"uri":"verification\/email\/send","name":"rinvex.fort.frontend.verification.email.send","action":"Rinvex\Fort\Http\Controllers\Frontend\EmailVerificationController@send"},{"host":null,"methods":["GET","HEAD"],"uri":"verification\/email\/verify","name":"rinvex.fort.frontend.verification.email.verify","action":"Rinvex\Fort\Http\Controllers\Frontend\EmailVerificationController@verify"}],
            prefix: '',

            route : function (name, parameters, route) {
                route = route || this.getByName(name);

                if ( ! route ) {
                    return undefined;
                }

                return this.toRoute(route, parameters);
            },

            url: function (url, parameters) {
                parameters = parameters || [];

                var uri = url + '/' + parameters.join('/');

                return this.getCorrectUrl(uri);
            },

            toRoute : function (route, parameters) {
                var uri = this.replaceNamedParameters(route.uri, parameters);
                var qs  = this.getRouteQueryString(parameters);

                if (this.absolute && this.isOtherHost(route)){
                    return "//" + route.host + "/" + uri + qs;
                }

                return this.getCorrectUrl(uri + qs);
            },

            isOtherHost: function (route){
                return route.host && route.host != window.location.hostname;
            },

            replaceNamedParameters : function (uri, parameters) {
                uri = uri.replace(/\{(.*?)\??\}/g, function(match, key) {
                    if (parameters.hasOwnProperty(key)) {
                        var value = parameters[key];
                        delete parameters[key];
                        return value;
                    } else {
                        return match;
                    }
                });

                // Strip out any optional parameters that were not given
                uri = uri.replace(/\/\{.*?\?\}/g, '');

                return uri;
            },

            getRouteQueryString : function (parameters) {
                var qs = [];
                for (var key in parameters) {
                    if (parameters.hasOwnProperty(key)) {
                        qs.push(key + '=' + parameters[key]);
                    }
                }

                if (qs.length < 1) {
                    return '';
                }

                return '?' + qs.join('&');
            },

            getByName : function (name) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].name === name) {
                        return this.routes[key];
                    }
                }
            },

            getByAction : function(action) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].action === action) {
                        return this.routes[key];
                    }
                }
            },

            getCorrectUrl: function (uri) {
                var url = this.prefix + '/' + uri.replace(/^\/?/, '');

                if ( ! this.absolute) {
                    return url;
                }

                return this.rootUrl.replace('/\/?$/', '') + url;
            }
        };

        var getLinkAttributes = function(attributes) {
            if ( ! attributes) {
                return '';
            }

            var attrs = [];
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    attrs.push(key + '="' + attributes[key] + '"');
                }
            }

            return attrs.join(' ');
        };

        var getHtmlLink = function (url, title, attributes) {
            title      = title || url;
            attributes = getLinkAttributes(attributes);

            return '<a href="' + url + '" ' + attributes + '>' + title + '</a>';
        };

        return {
            // Generate a url for a given controller action.
            // routes.action('HomeController@getIndex', [params = {}])
            action : function (name, parameters) {
                parameters = parameters || {};

                return routes.route(name, parameters, routes.getByAction(name));
            },

            // Generate a url for a given named route.
            // routes.route('routeName', [params = {}])
            route : function (route, parameters) {
                parameters = parameters || {};

                return routes.route(route, parameters);
            },

            // Generate a fully qualified URL to the given path.
            // routes.route('url', [params = {}])
            url : function (route, parameters) {
                parameters = parameters || {};

                return routes.url(route, parameters);
            },

            // Generate a html link to the given url.
            // routes.link_to('foo/bar', [title = url], [attributes = {}])
            link_to : function (url, title, attributes) {
                url = this.url(url);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given route.
            // routes.link_to_route('route.name', [title=url], [parameters = {}], [attributes = {}])
            link_to_route : function (route, title, parameters, attributes) {
                var url = this.route(route, parameters);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given controller action.
            // routes.link_to_action('HomeController@getIndex', [title=url], [parameters = {}], [attributes = {}])
            link_to_action : function(action, title, parameters, attributes) {
                var url = this.action(action, parameters);

                return getHtmlLink(url, title, attributes);
            }

        };

    }).call(this);

    /**
     * Expose the class either via AMD, CommonJS or the global object
     */
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return laroute;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = laroute;
    }
    else {
        window.routes = laroute;
    }

}).call(this);

