define(['TodoDomElement'], function (TodoDomElement) {

   // var TodoList = TodoList || {};
    var Container = (function () {
        function Container(parent, header) {
            TodoDomElement.call(this, parent);

            if (!validateChildrenAreSections(this.childNodes)) {
                throw new Error("Container children should be of type Section");
            }

            this.setHeader(header);
            alert("Container loaded");
        }

        Container.prototype = Object.create(TodoDomElement.prototype);
        Container.prototype.constructor = this;

        function validateChildrenAreSections(children) {
            for (var i = 0; i < children.length; i++) {
                if (!(children[i] instanceof TodoList.Section)) {
                    return false;
                }
            }

            return true;
        }

        Container.prototype.getHeader = function getHeader() {
            return this._header;
        };

        Container.prototype.setHeader = function setHeader(header) {
            if (!header) {
                throw  new Error("Container header shouldn't be empty or undefined.");
            }

            this._header = header;
        };

        Container.prototype.addToDOM = function addToDOM(parents) {
            // TODO: implement adding a container to DOM
        };

        return Container;
    }());

    return Container;
});