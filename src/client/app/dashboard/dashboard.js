window.global = [];
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('Dashboard', Dashboard);

    Dashboard.$inject = ['$q', 'dataservice', 'logger', '$filter'];

    function Dashboard($q, dataservice, logger, $filter) {

        /*jshint validthis: true */
        var vm = this;

        vm.concepts = [];
        vm.currentYear = 2014;
        vm.title = 'Dashboard';
        vm.totals = [];

        activate();

        function activate() {
            var promises = [getConcepts()];

            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getConcepts() {
            //TODO: Categorize concepts
            return dataservice.getConcepts().then(function(data) {
                vm.concepts = data;
                // Initialize vm.totals
                for (var i = 0; i < 12; i++) vm.totals.push(0);
                $.each(vm.concepts, function(){
                    for (var i = 1; i < 12; i++) {
                        vm.totals[i] += this.values[vm.currentYear][i] | 0;
                    }
                });

                return vm.concepts;
            });
        }

        function getColTotals() {

            return vm.totals;
        }

    }
})();
