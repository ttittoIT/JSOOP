(function () {
    'use strict';

    require(['./Container', './TodoDomElement', './Section', "./Item"],
        function (Container, TodoDomElement, Section, Item) {

            var container = new Container("Container header");
            container.addToDOM(document.body);

            function attachAddSectionClickEvent() {

            }
        });
}());