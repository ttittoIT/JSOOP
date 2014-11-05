define(function () {
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
            if (!(parent instanceof HTMLElement)) {
                parent = document.getElementById(parent);
            }

            if(!parent){
                throw  new Error("Parent element is not found. Parent should be HTMLElement or HTMLElement id should be passed as parameter.");
            }

            this._parent = parent;
        };

        TodoDomElement.prototype.addToDOM = function (parent) {
           parent.appendChild(this);
        };

        return TodoDomElement;
    }());

    return TodoDomElement;
});