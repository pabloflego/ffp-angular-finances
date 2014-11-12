(function() {
    'use strict';

    angular.module('app.core')
        .config(translate);

    /* @ngInject */
    function translate($translateProvider) {
        $translateProvider.translations('es', {
            'GLOBAL': {
                'APP_NAME': "FFP Angular Finances"
            },
            'DASHBOARD': {
                'WIDGET_1': {
                    'TITLE': 'Transacciones',
                    'THEAD': [
                        'Concepto', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                        'Julio', 'Agosto', 'Septiembre', 'Osctubre', 'Noviembre', 'Diciembre'
                    ],
                    'TFOOT': [ 'Totales:' ]
                },
                'WIDGET_2': {
                    'TITLE': 'Nuevo'
                }
            }

        });

        $translateProvider.translations('en', {
            'TITLE': 'Hello',
            'FOO': 'This is a paragraph'
        });

        $translateProvider.preferredLanguage('es');
    }
})();
