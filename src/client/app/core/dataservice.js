(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($http, $location, $q, exception, logger) {
        var isPrimed = false;
        var primePromise;

        var service = {
            getAvengersCast: getAvengersCast,
            getAvengerCount: getAvengerCount,
            getAvengers: getAvengers,
            //getAccounts: getAccounts,
            getTransactions: getTransactions,
            getConcepts: getConcepts,
            ready: ready
        };

        return service;

        function getAvengers() {
            return $http.get('/api/maa')
                .then(getAvengersComplete)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getAvengers')(message);
                    $location.url('/');
                });

            function getAvengersComplete(data, status, headers, config) {
                return data.data[0].data.results;
            }
        }

        function getAvengerCount() {
            var count = 0;
            return getAvengersCast()
                .then(getAvengersCastComplete)
                .catch(exception.catcher('XHR Failed for getAvengerCount'));

            function getAvengersCastComplete (data) {
                count = data.length;
                return $q.when(count);
            }
        }

        function getAvengersCast() {
            var cast = [
                {name: 'Robert Downey Jr.', character: 'Tony Stark / Iron Man'},
                {name: 'Chris Hemsworth', character: 'Thor'},
                {name: 'Chris Evans', character: 'Steve Rogers / Captain America'},
                {name: 'Mark Ruffalo', character: 'Bruce Banner / The Hulk'},
                {name: 'Scarlett Johansson', character: 'Natasha Romanoff / Black Widow'},
                {name: 'Jeremy Renner', character: 'Clint Barton / Hawkeye'},
                {name: 'Gwyneth Paltrow', character: 'Pepper Potts'},
                {name: 'Samuel L. Jackson', character: 'Nick Fury'},
                {name: 'Paul Bettany', character: 'Jarvis'},
                {name: 'Tom Hiddleston', character: 'Loki'},
                {name: 'Clark Gregg', character: 'Agent Phil Coulson'}
            ];
            return $q.when(cast);
        }

        function getAccounts() {
            var accounts = [
                {
                    id: 1,
                    name: "Pablo"

                }
            ];
            return $q.when(accounts);
        }

        function getTransactions() {
            var transactions = [
                {
                    t_date: new Date(),
                    qty: 1,
                    start_date: new Date('2014-05-01T12:00:00'),
                    value: -2000,
                    type: 3
                },
                { date: new Date('2014-01-01T12:00:00'), value: -1000, type: 1 },
                { date: new Date('2014-02-01T12:00:00'), value: -1000, type: 2 },
                { date: new Date('2014-06-01T12:00:00'), value: -2000, type: 4 }
            ];
            return $q.when(transactions);
        }

        function getConcepts() {
            var concepts = [
                {
                    id: 1,
                    name: 'Cuota Terreno Paso',
                    c_date: new Date(),
                    date_start: new Date('2014-01-01T12:00:00'),
                    values: [
                        -1000, -1000, 0, 0, -2000, -2000, -2000, 0, -2000, -4000, -2000, -2000,
                        -4000
                    ]
                },
                {
                    id: 2,
                    name: 'Sueldo Neto',
                    c_date: new Date(),
                    date_start: new Date('2014-01-01T12:00:00'),
                    values: [
                        6336.00, 7026.00, 6831.67, 6831.67, 7302.00, 7044.00, 12800.00, 8288.00, 8562.65, 7494.00, 9365.00
                    ]
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
