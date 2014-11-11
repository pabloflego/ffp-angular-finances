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
        vm.title = 'Dashboard';

        var orderBy = $filter('orderBy');

        activate();

        function activate() {
            var promises = [getConcepts()];
//            Using a resolver on all routes or dataservice.ready in every controller
//            return dataservice.ready(promises).then(function(){
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getConcepts() {
            //TODO: Categorize concepts
            return dataservice.getConcepts().then(function(data) {
                var aux = [],
                    key;
                $.each(data, function() {
                    var concept = this,
                        d = new Date(concept.date_start.valueOf());
                    $.each(concept.values, function(i){
                        d.setMonth(concept.date_start.getMonth()+i);
                        key = (d.getUTCFullYear() + ("0" + (d.getUTCMonth()+1)).slice(-2)).toString();
                        //console.log(i,d.getUTCFullYear(), concept.date_start.getUTCFullYear());
                        if(!(key in aux)) aux[key] = [];
                        aux[key].push(this);
                    });

                });
                //var aux = function(predicate, reverse) {
                //    aux = orderBy(data, predicate, reverse);
                //};
                //aux('+date', false);

                //console.log(aux, aux.length);
                return vm.concepts = data;
            });
        }
    }
})();
