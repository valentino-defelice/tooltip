odoo.define('example.tour', function(require) {
    "use strict";
    
    var core = require('web.core');
    var tour = require('web_tour.tour');
    
    var _t = core._t;
    
    tour.register('tooltip', {
        url: "/web",
    }, [tour.STEPS.MENU_MORE, {
        trigger: '.o_app[data-menu-xmlid="contacts.menu_contacts"]',
        content: _t('Hola! Tenes <b>dudas</b>?<br/><i>Veamos como intercambiar vistas en Odoo.</i>'),
        position: 'bottom',
    },
    {
        trigger: '.o_cp_switch_list',
        content: _t('Con este botón, podrás cambiar a Vista Lista.'),
        position: 'bottom',
        width: 200,
    },
    {
        trigger: '.o_cp_switch_kanban',
        content: _t('Con este, volveras a Vista Kanban.'),
        position: 'bottom',
        width: 200,
    },
]);    
});
