define(['TodoDomElement'], function (TodoDomElement) {

    // var TodoList = TodoList || {};
    var Container = (function () {
        function Container(header) {
            this.setHeader(header);

            this.setContext();
            TodoDomElement.call(this, document.getElementById("todo-list"));
        }

        Container.prototype = Object.create(TodoDomElement.prototype);
        Container.prototype.constructor = self;

        Container.prototype.getHeader = function getHeader() {
            return this._header;
        };

        Container.prototype.setHeader = function setHeader(header) {
            if (!header) {
                throw  new Error("Container header shouldn't be empty or undefined.");
            }
            var headerEl = document.createElement('h2');
            headerEl.innerHTML = header;

            this._header = headerEl;
        };

        Container.prototype.setContext = function (context) {
            TodoDomElement.prototype.setContext.call(this, context);
        }

        Container.prototype.addToDOM = function (parent) {
            this._parent.appendChild(this._header);
            TodoDomElement.prototype.addToDOM.call(this, parent);
        };

        return Container;
    }());

    return Container;
});