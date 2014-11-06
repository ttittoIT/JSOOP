(function () {
    'use strict';

    require(['./Container', './TodoDomElement', './Section', "./Item"],
        function (Container, TodoDomElement, Section, Item) {

            var container = new Container("TODO List");

            var frm = document.createElement("form");
            frm.id = "add-section-frm";

            var inputBtn = document.createElement("input");
            inputBtn.type = "button";
            inputBtn.id = 'add-section-btn';
            inputBtn.value = "New Section";
            frm.appendChild(inputBtn);

            var inputFld = document.createElement("input");
            inputFld.type = 'text';
            inputFld.className = "section-title";
            inputFld.placeholder = "Title...";
            frm.appendChild(inputFld);

            container.setContext(frm);

            container.addToDOM(document.getElementById("todo-list"));
            function addSectionEventHandler() {
                var target = event.target || event.srcElement;
                var section = new Section(target.parentNode, "sample title");
                section.addToDOM(section.getParent());
            }

            function attachAddSectionClickEvent() {
                var btn = document.getElementById("add-section-btn");
                btn.addEventListener("click", addSectionEventHandler);
            }
        });
}());