(function() {
    'use strict';

    angular.module('blocks.vendors')
        // Wrap Underscore lib
        .factory('_', underscoreWrapper)
        // Wrap JayData lib
        .factory('jaydataService', jaydataService);

    jaydataService.$inject = ['$window'];
    function jaydataService($window) {
        return $window.$data;
    };

    underscoreWrapper.$inject = ['$window'];
    function underscoreWrapper($window) {
        return $window._;
    };
})();