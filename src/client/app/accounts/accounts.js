(function() {
    'use strict';

    angular
        .module('app.accounts')
        .controller('Accounts', Accounts);

    /* @ngInject */
    function Accounts(dataservice, logger) {
        /*jshint validthis: true */
        var vm = this;
        vm.avengers = [];
        vm.title = 'Accounts';

        activate();

        function activate() {
//            Using a resolver on all routes or dataservice.ready in every controller
            return getAvengers().then(function() {
                logger.info('Activated Accounts View');
            });
        }

        function getAvengers() {
            return dataservice.getAvengers().then(function(data) {
                vm.avengers = data;
                return vm.avengers;
            });
        }
    }
})();
