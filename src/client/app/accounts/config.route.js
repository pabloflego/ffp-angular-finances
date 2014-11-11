(function() {
    'use strict';

    angular
        .module('app.accounts')
        .run(appRun);

    // appRun.$inject = ['routehelper']

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/accounts',
                config: {
                    templateUrl: 'app/accounts/accounts.html',
                    controller: 'Accounts',
                    controllerAs: 'vm',
                    title: 'accounts',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Accounts'
                    }
                }
            }
        ];
    }
})();
