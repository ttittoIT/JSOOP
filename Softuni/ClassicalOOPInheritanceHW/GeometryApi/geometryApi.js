var GeometryApi = (function () {
    var self;

    function GeometryApi(areaId) {
        this._possibleShapes = ["Point", "Segment", "Triangle", "Rectangle", "Circle"];
        this._shapesToDraw = [];
        this._drawingField = document.querySelector(areaId);
        self = this;
    }

    function getShapeFromString(shapeType) {
        var shapeInstance;
        shapeType = shapeType === "Point" ? "Shape" : shapeType;
        shapeInstance = new Shapes[shapeType]();
        return shapeInstance;
    }

    GeometryApi.prototype = {
        populatePossibleShapes: function populatePossibleShapes(hostSelector) {
            var host = document.querySelector(hostSelector);
            this._possibleShapes.forEach(function (shapeStr) {
                var optElement = document.createElement("option");
                optElement.value = shapeStr;
                optElement.text = shapeStr;
                host.appendChild(optElement);
            });
        },

        attachShapeListChangeEvent: function () {
            var shapeList = document.querySelector("#shape-list");
            shapeList.addEventListener("change",
                function () {
                    self.loadParameterControls.call(this, "#params-inputs", shapeList.options[shapeList.selectedIndex].value);
                });
        },

        loadParameterControls: function loadParameterControls(hostSelector, shapeType) {
            var host = document.querySelector(hostSelector);

            var shape = getShapeFromString(shapeType);
            while (host.firstChild) {
                host.removeChild(host.firstChild);
            }

            shape.getParametersControls().forEach(function (control) {
                host.appendChild(control);
            });
        },

        createShape: function createShape(shapeType) {
//            // TODO: implement full shape creation
        },

        removeShape: function removeShape() {
            // TODO: implement removing shape from the shapesToDraw array on button click
        },

        rearrangeShapes: function rearrangeShapes() {
            // TODO: implement changing the places of two neighbor shapes.
            // Their z-index depends on the position they are situated in the multiple select input
        }
    }

    return GeometryApi;
}());

window.onload = function () {
    var api = new GeometryApi("#params-inputs");
    api.populatePossibleShapes("#shape-list");
    api.attachShapeListChangeEvent();
};
