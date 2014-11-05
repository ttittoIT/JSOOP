define(['TodoDomElement'], function (TodoDomElement) {

    // var TodoList = TodoList || {};
    var Container = (function () {
        function Container(header) {
            TodoDomElement.call(this, document.getElementsByTagName('body')[0]);

            this.setHeader(header);
        }

        Container.prototype = Object.create(TodoDomElement.prototype);
        Container.prototype.constructor = this;

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

        Container.prototype.addToDOM = function (parent) {
            this._parent.appendChild(this._header);
            TodoDomElement.prototype.addToDOM.call(this, parent);
        };

        return Container;
    }());

    return Container;
});