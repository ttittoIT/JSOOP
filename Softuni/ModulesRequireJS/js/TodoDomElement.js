define(function () {

    var TodoList = TodoList || {};
    var TodoDomElement = (function () {
        function TodoDomElement(parent) {
            if (this.constructor === TodoDomElement) {
                throw new Error("Can not instantiate abstract class TodoDomElement.");
            }

            this.setParent(parent);
        }

        TodoDomElement.prototype = Object.create(HTMLElement.prototype);
        TodoDomElement.prototype.constructor = this;

        TodoDomElement.prototype.getParent = function () {
            return this._parent;
        };

        TodoDomElement.prototype.setParent = function (parent) {
            // TODO: validate
            this._parent = parent;
        };

        TodoDomElement.prototype.addToDOM = function (parent) {
            // TODO: implement adding base element to DOM
        };

        return TodoDomElement;
    }());
});