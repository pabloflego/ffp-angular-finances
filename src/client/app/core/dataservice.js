(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($http, $location, $q, exception, logger, _, jaydataService) {
        var isPrimed = false;
        var primePromise;

        var service = {
            getConcepts: getConcepts,
            ready: ready
        };

        return service;

        function getConcepts() {
            var Concept = $data.define("Concept", {

            });
            var concepts = [
                {
                    id: 1,
                    name: 'Cuota Terreno Paso',
                    c_date: new Date(),
                    date_start: new Date('2014-01-01T12:00:00'),
                    values: {
                        2014: {
                            1: -1000, 2:-1000, 5:-2000, 6:-2000,
                            7:-2000, 9:-2000, 10:494.00, 11:-2000, 12:-2000
                        },
                        2015: {
                            1:-4000
                        }
                    }
                },
                {
                    id: 2,
                    name: 'Sueldo Neto',
                    c_date: new Date(),
                    date_start: new Date('2014-02-01T12:00:00'),
                    values: {
                        2014: {
                            1: 6336.00, 2:7026.00, 3:6831.67, 4:6831.67, 5:7302.00, 6:7044.00,
                            7:12800.00, 8:8288.00, 9:8562.65, 10:7494.00, 11:9365.00
                        }
                    }
                }
            ];
            return $q.when(concepts);
        }

        function prime() {
            // This function can only be called once.
            if (primePromise) {
                return primePromise;
            }

            primePromise = $q.when(true).then(success);
            return primePromise;

            function success() {
                isPrimed = true;
                logger.info('Primed data');
            }
        }

        function ready(nextPromises) {
            var readyPromise = primePromise || prime();

            return readyPromise
                .then(function() { return $q.all(nextPromises); })
                .catch(exception.catcher('"ready" function failed'));
        }

    }
})();
