define(["./TodoDomElement"], function (TodoDomElement) {
    var Section = (function () {
        function Section(parent, title) {
            TodoDomElement.call(this, parent);
            this.setTitle(title);
        }

        Section.prototype = Object.create(TodoDomElement.prototype);
        Section.prototype.constructor = this;

        Section.prototype.getTitle = function () {
            return this._title;
        };

        Section.prototype.setTitle = function (title) {
            this._title = title;
        };

        Section.prototype.setContext = function (context) {

            context = document.createElement('section');
            context.className = "list-section";

            var frm = document.createElement("form");
            frm.id = "add-item-frm";

            var inputBtn = document.createElement("input");
            inputBtn.type = "button";
            inputBtn.id  = 'add-item-btn';
            inputBtn.value = "+";
            frm.appendChild(inputBtn);

            var inputFld = document.createElement("input");
            inputFld.type = 'text';
            inputFld.className = "item-title";
            inputFld.placeholder = "Add item...";
            frm.appendChild(inputFld);

            context.appendChild(frm);
        }


        return Section;
    }());

    return Section;
});
