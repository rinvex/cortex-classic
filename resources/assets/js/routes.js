(function () {

    var laroute = (function () {

        var routes = {

            absolute: false,
            rootUrl: 'http://cortex.rinvex.ext',
            routes: [{"uri": "worker\/schedule", "name": null}, {
                "uri": "worker\/queue",
                "name": null
            }, {
                "uri": "backend\/attributes",
                "name": "backend.attributes.index"
            }, {
                "uri": "backend\/attributes\/create",
                "name": "backend.attributes.create"
            }, {
                "uri": "backend\/attributes\/create",
                "name": "backend.attributes.store"
            }, {
                "uri": "backend\/attributes\/{attribute}",
                "name": "backend.attributes.edit"
            }, {
                "uri": "backend\/attributes\/{attribute}",
                "name": "backend.attributes.update"
            }, {
                "uri": "backend\/attributes\/{attribute}\/logs",
                "name": "backend.attributes.logs"
            }, {
                "uri": "backend\/attributes\/{attribute}",
                "name": "backend.attributes.delete"
            }, {
                "uri": "backend\/categories",
                "name": "backend.categories.index"
            }, {
                "uri": "backend\/categories\/create",
                "name": "backend.categories.create"
            }, {
                "uri": "backend\/categories\/create",
                "name": "backend.categories.store"
            }, {
                "uri": "backend\/categories\/{category}",
                "name": "backend.categories.edit"
            }, {
                "uri": "backend\/categories\/{category}",
                "name": "backend.categories.update"
            }, {
                "uri": "backend\/categories\/{category}\/logs",
                "name": "backend.categories.logs"
            }, {"uri": "backend\/categories\/{category}", "name": "backend.categories.delete"}, {
                "uri": "\/",
                "name": "frontend.home"
            }, {"uri": "auth\/login", "name": "frontend.auth.login"}, {
                "uri": "auth\/login",
                "name": "frontend.auth.login.process"
            }, {"uri": "auth\/logout", "name": "frontend.auth.logout"}, {
                "uri": "auth\/register",
                "name": "frontend.auth.register"
            }, {"uri": "auth\/register", "name": "frontend.auth.register.process"}, {
                "uri": "auth\/github",
                "name": "frontend.auth.social.github"
            }, {
                "uri": "auth\/github\/callback",
                "name": "frontend.auth.social.github.callback"
            }, {"uri": "account\/settings", "name": "frontend.account.settings"}, {
                "uri": "account\/settings",
                "name": "frontend.account.settings.update"
            }, {"uri": "account\/sessions", "name": "frontend.account.sessions"}, {
                "uri": "account\/sessions\/{token?}",
                "name": "frontend.account.sessions.flush"
            }, {
                "uri": "account\/twofactor\/totp\/enable",
                "name": "frontend.account.twofactor.totp.enable"
            }, {
                "uri": "account\/twofactor\/totp\/update",
                "name": "frontend.account.twofactor.totp.update"
            }, {
                "uri": "account\/twofactor\/totp\/disable",
                "name": "frontend.account.twofactor.totp.disable"
            }, {
                "uri": "account\/twofactor\/totp\/backup",
                "name": "frontend.account.twofactor.totp.backup"
            }, {
                "uri": "account\/twofactor\/phone\/enable",
                "name": "frontend.account.twofactor.phone.enable"
            }, {
                "uri": "account\/twofactor\/phone\/disable",
                "name": "frontend.account.twofactor.phone.disable"
            }, {
                "uri": "passwordreset\/request",
                "name": "frontend.passwordreset.request"
            }, {"uri": "passwordreset\/send", "name": "frontend.passwordreset.send"}, {
                "uri": "passwordreset\/reset",
                "name": "frontend.passwordreset.reset"
            }, {
                "uri": "passwordreset\/process",
                "name": "frontend.passwordreset.process"
            }, {
                "uri": "verification\/phone\/request",
                "name": "frontend.verification.phone.request"
            }, {
                "uri": "verification\/phone\/send",
                "name": "frontend.verification.phone.send"
            }, {
                "uri": "verification\/phone\/verify",
                "name": "frontend.verification.phone.verify"
            }, {
                "uri": "verification\/phone\/process",
                "name": "frontend.verification.phone.process"
            }, {
                "uri": "verification\/email\/request",
                "name": "frontend.verification.email.request"
            }, {
                "uri": "verification\/email\/send",
                "name": "frontend.verification.email.send"
            }, {"uri": "verification\/email\/verify", "name": "frontend.verification.email.verify"}, {
                "uri": "backend",
                "name": "backend.home"
            }, {"uri": "backend\/abilities", "name": "backend.abilities.index"}, {
                "uri": "backend\/abilities\/create",
                "name": "backend.abilities.create"
            }, {
                "uri": "backend\/abilities\/create",
                "name": "backend.abilities.store"
            }, {
                "uri": "backend\/abilities\/{ability}",
                "name": "backend.abilities.edit"
            }, {
                "uri": "backend\/abilities\/{ability}",
                "name": "backend.abilities.update"
            }, {
                "uri": "backend\/abilities\/{ability}\/logs",
                "name": "backend.abilities.logs"
            }, {"uri": "backend\/abilities\/{ability}", "name": "backend.abilities.delete"}, {
                "uri": "backend\/roles",
                "name": "backend.roles.index"
            }, {"uri": "backend\/roles\/create", "name": "backend.roles.create"}, {
                "uri": "backend\/roles\/create",
                "name": "backend.roles.store"
            }, {"uri": "backend\/roles\/{role}", "name": "backend.roles.edit"}, {
                "uri": "backend\/roles\/{role}",
                "name": "backend.roles.update"
            }, {"uri": "backend\/roles\/{role}\/logs", "name": "backend.roles.logs"}, {
                "uri": "backend\/roles\/{role}",
                "name": "backend.roles.delete"
            }, {"uri": "backend\/users", "name": "backend.users.index"}, {
                "uri": "backend\/users\/create",
                "name": "backend.users.create"
            }, {"uri": "backend\/users\/create", "name": "backend.users.store"}, {
                "uri": "backend\/users\/{user}",
                "name": "backend.users.edit"
            }, {
                "uri": "backend\/users\/{user}",
                "name": "backend.users.update"
            }, {"uri": "backend\/users\/{user}\/logs", "name": "backend.users.logs"}, {
                "uri": "backend\/users\/{user}",
                "name": "backend.users.delete"
            }, {"uri": "backend\/tags", "name": "backend.tags.index"}, {
                "uri": "backend\/tags\/create",
                "name": "backend.tags.create"
            }, {"uri": "backend\/tags\/create", "name": "backend.tags.store"}, {
                "uri": "backend\/tags\/{tag}",
                "name": "backend.tags.edit"
            }, {"uri": "backend\/tags\/{tag}", "name": "backend.tags.update"}, {
                "uri": "backend\/tags\/{tag}\/logs",
                "name": "backend.tags.logs"
            }, {"uri": "backend\/tags\/{tag}", "name": "backend.tags.delete"}, {
                "uri": "backend\/tenants",
                "name": "backend.tenants.index"
            }, {
                "uri": "backend\/tenants\/create",
                "name": "backend.tenants.create"
            }, {
                "uri": "backend\/tenants\/create",
                "name": "backend.tenants.store"
            }, {
                "uri": "backend\/tenants\/{tenant}",
                "name": "backend.tenants.edit"
            }, {
                "uri": "backend\/tenants\/{tenant}",
                "name": "backend.tenants.update"
            }, {
                "uri": "backend\/tenants\/{tenant}\/logs",
                "name": "backend.tenants.logs"
            }, {"uri": "backend\/tenants\/{tenant}", "name": "backend.tenants.delete"}, {
                "uri": "__clockwork\/{id}",
                "name": null
            }],
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

