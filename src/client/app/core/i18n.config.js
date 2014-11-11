(function() {
    'use strict';

    angular.module('app.core')
        .config(translate);

    /* @ngInject */
    function translate($translateProvider) {
        $translateProvider.translations('en', {
            'TITLE': 'Hello',
            'FOO': 'This is a paragraph'
        });

        $translateProvider.translations('es', {
            'DASHBOARD': {
                'WIDGET_1': {
                    'TITLE': 'Transacciones',
                    'COLS': [
                        'Concepto', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                        'Julio', 'Agosto', 'Septiembre', 'Osctubre', 'Noviembre', 'Diciembre'
                    ]
                },
                'WIDGET_2': {
                    'TITLE': 'Nuevo',
                    'COLS': {0: 'Col 1', 1: 'Col 2'}
                }
            }

        });

        $translateProvider.preferredLanguage('es');
    }
})();
