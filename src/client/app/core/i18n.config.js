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
                    'TITLE': 'Resumen',
                    'THEAD': [
                        'Concepto', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
                    ],
                    'TFOOT': [ 'Totales:' ]
                },
                'WIDGET_2': {
                    'TITLE': 'Nuevo'
                }
            }

        });

        $translateProvider.translations('en', {
            'GLOBAL': {
                'APP_NAME': "FFP Angular Finances"
            }
        });

        $translateProvider.preferredLanguage('es');
    }
})();
