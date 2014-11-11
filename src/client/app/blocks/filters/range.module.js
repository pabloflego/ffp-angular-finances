(function() {
    'use strict';

    angular.module('filters.range', [])
        .filter('range', function() {
            return function(input, total) {
                total = parseInt(total);
                for (var i=0; i<total; i++)
                    input.push(i);
                return input;
            };
        });
})();
