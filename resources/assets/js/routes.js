(function () {

    var laroute = (function () {

        var routes = {

            absolute: false,
            rootUrl: 'http://cortex.rinvex.ext',
            routes: [{"host": null, "uri": "worker\/schedule", "name": null}, {
                "host": null,
                "uri": "worker\/queue",
                "name": null
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/attributes",
                "name": "backend.attributes.index"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/attributes\/create",
                "name": "backend.attributes.create"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/attributes\/create",
                "name": "backend.attributes.store"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/attributes\/{attribute}",
                "name": "backend.attributes.edit"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/attributes\/{attribute}",
                "name": "backend.attributes.update"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/attributes\/{attribute}\/logs",
                "name": "backend.attributes.logs"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/attributes\/{attribute}",
                "name": "backend.attributes.delete"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/categories",
                "name": "backend.categories.index"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/categories\/create",
                "name": "backend.categories.create"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/categories\/create",
                "name": "backend.categories.store"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/categories\/{category}",
                "name": "backend.categories.edit"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/categories\/{category}",
                "name": "backend.categories.update"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/categories\/{category}\/logs",
                "name": "backend.categories.logs"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/categories\/{category}",
                "name": "backend.categories.delete"
            }, {"host": "cortex.rinvex.ext", "uri": "\/", "name": "frontend.home"}, {
                "host": "cortex.rinvex.ext",
                "uri": "auth\/login",
                "name": "frontend.auth.login"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "auth\/login",
                "name": "frontend.auth.login.process"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "auth\/logout",
                "name": "frontend.auth.logout"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "auth\/register",
                "name": "frontend.auth.register"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "auth\/register",
                "name": "frontend.auth.register.process"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "auth\/github",
                "name": "frontend.auth.social.github"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "auth\/github\/callback",
                "name": "frontend.auth.social.github.callback"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "account\/settings",
                "name": "frontend.account.settings"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "account\/settings",
                "name": "frontend.account.settings.update"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "account\/sessions",
                "name": "frontend.account.sessions"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "account\/sessions\/{token?}",
                "name": "frontend.account.sessions.flush"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "account\/twofactor\/totp\/enable",
                "name": "frontend.account.twofactor.totp.enable"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "account\/twofactor\/totp\/update",
                "name": "frontend.account.twofactor.totp.update"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "account\/twofactor\/totp\/disable",
                "name": "frontend.account.twofactor.totp.disable"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "account\/twofactor\/totp\/backup",
                "name": "frontend.account.twofactor.totp.backup"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "account\/twofactor\/phone\/enable",
                "name": "frontend.account.twofactor.phone.enable"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "account\/twofactor\/phone\/disable",
                "name": "frontend.account.twofactor.phone.disable"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "passwordreset\/request",
                "name": "frontend.passwordreset.request"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "passwordreset\/send",
                "name": "frontend.passwordreset.send"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "passwordreset\/reset",
                "name": "frontend.passwordreset.reset"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "passwordreset\/process",
                "name": "frontend.passwordreset.process"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "verification\/phone\/request",
                "name": "frontend.verification.phone.request"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "verification\/phone\/send",
                "name": "frontend.verification.phone.send"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "verification\/phone\/verify",
                "name": "frontend.verification.phone.verify"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "verification\/phone\/process",
                "name": "frontend.verification.phone.process"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "verification\/email\/request",
                "name": "frontend.verification.email.request"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "verification\/email\/send",
                "name": "frontend.verification.email.send"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "verification\/email\/verify",
                "name": "frontend.verification.email.verify"
            }, {"host": "cortex.rinvex.ext", "uri": "backend", "name": "backend.home"}, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/abilities",
                "name": "backend.abilities.index"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/abilities\/create",
                "name": "backend.abilities.create"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/abilities\/create",
                "name": "backend.abilities.store"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/abilities\/{ability}",
                "name": "backend.abilities.edit"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/abilities\/{ability}",
                "name": "backend.abilities.update"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/abilities\/{ability}\/logs",
                "name": "backend.abilities.logs"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/abilities\/{ability}",
                "name": "backend.abilities.delete"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/roles",
                "name": "backend.roles.index"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/roles\/create",
                "name": "backend.roles.create"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/roles\/create",
                "name": "backend.roles.store"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/roles\/{role}",
                "name": "backend.roles.edit"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/roles\/{role}",
                "name": "backend.roles.update"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/roles\/{role}\/logs",
                "name": "backend.roles.logs"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/roles\/{role}",
                "name": "backend.roles.delete"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/users",
                "name": "backend.users.index"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/users\/create",
                "name": "backend.users.create"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/users\/create",
                "name": "backend.users.store"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/users\/{user}",
                "name": "backend.users.edit"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/users\/{user}",
                "name": "backend.users.update"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/users\/{user}\/logs",
                "name": "backend.users.logs"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/users\/{user}\/activities",
                "name": "backend.users.activities"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/users\/{user}",
                "name": "backend.users.delete"
            }, {"host": null, "uri": "_debugbar\/open", "name": "debugbar.openhandler"}, {
                "host": null,
                "uri": "_debugbar\/clockwork\/{id}",
                "name": "debugbar.clockwork"
            }, {"host": null, "uri": "_debugbar\/assets\/stylesheets", "name": "debugbar.assets.css"}, {
                "host": null,
                "uri": "_debugbar\/assets\/javascript",
                "name": "debugbar.assets.js"
            }, {"host": null, "uri": "__clockwork\/{id}", "name": null}, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/tags",
                "name": "backend.tags.index"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/tags\/create",
                "name": "backend.tags.create"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/tags\/create",
                "name": "backend.tags.store"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/tags\/{tag}",
                "name": "backend.tags.edit"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/tags\/{tag}",
                "name": "backend.tags.update"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/tags\/{tag}\/logs",
                "name": "backend.tags.logs"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/tags\/{tag}",
                "name": "backend.tags.delete"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/tenants",
                "name": "backend.tenants.index"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/tenants\/create",
                "name": "backend.tenants.create"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/tenants\/create",
                "name": "backend.tenants.store"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/tenants\/{tenant}",
                "name": "backend.tenants.edit"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/tenants\/{tenant}",
                "name": "backend.tenants.update"
            }, {
                "host": "cortex.rinvex.ext",
                "uri": "backend\/tenants\/{tenant}\/logs",
                "name": "backend.tenants.logs"
            }, {"host": "cortex.rinvex.ext", "uri": "backend\/tenants\/{tenant}", "name": "backend.tenants.delete"}],
            prefix: '',

            route: function (name, parameters, route) {
                route = route || this.getByName(name);

                if (!route) {
                    return undefined;
                }

                return this.toRoute(route, parameters);
            },

            url: function (url, parameters) {
                parameters = parameters || [];

                var uri = url + '/' + parameters.join('/');

                return this.getCorrectUrl(uri);
            },

            toRoute: function (route, parameters) {
                var uri = this.replaceNamedParameters(route.uri, parameters);
                var qs = this.getRouteQueryString(parameters);

                if (this.absolute && this.isOtherHost(route)) {
                    return "//" + route.host + "/" + uri + qs;
                }

                return this.getCorrectUrl(uri + qs);
            },

            isOtherHost: function (route) {
                return route.host && route.host != window.location.hostname;
            },

            replaceNamedParameters: function (uri, parameters) {
                uri = uri.replace(/\{(.*?)\??\}/g, function (match, key) {
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

            getRouteQueryString: function (parameters) {
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

            getByName: function (name) {
                for (var key in this.routes) {
                    if (this.routes.hasOwnProperty(key) && this.routes[key].name === name) {
                        return this.routes[key];
                    }
                }
            },

            getCorrectUrl: function (uri) {
                var url = this.prefix + '/' + uri.replace(/^\/?/, '');

                if (!this.absolute) {
                    return url;
                }

                return this.rootUrl.replace('/\/?$/', '') + url;
            }
        };

        var getLinkAttributes = function (attributes) {
            if (!attributes) {
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
            title = title || url;
            attributes = getLinkAttributes(attributes);

            return '<a href="' + url + '" ' + attributes + '>' + title + '</a>';
        };

        return {

            // Generate a url for a given named route.
            // routes.route('routeName', [params = {}])
            route: function (route, parameters) {
                parameters = parameters || {};

                return routes.route(route, parameters);
            },

            // Generate a fully qualified URL to the given path.
            // routes.route('url', [params = {}])
            url: function (route, parameters) {
                parameters = parameters || {};

                return routes.url(route, parameters);
            },

            // Generate a html link to the given url.
            // routes.link_to('foo/bar', [title = url], [attributes = {}])
            link_to: function (url, title, attributes) {
                url = this.url(url);

                return getHtmlLink(url, title, attributes);
            },

            // Generate a html link to the given route.
            // routes.link_to_route('route.name', [title=url], [parameters = {}], [attributes = {}])
            link_to_route: function (route, title, parameters, attributes) {
                var url = this.route(route, parameters);

                return getHtmlLink(url, title, attributes);
            },

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
    else if (typeof module === 'object' && module.exports) {
        module.exports = laroute;
    }
    else {
        window.routes = laroute;
    }

}).call(this);

