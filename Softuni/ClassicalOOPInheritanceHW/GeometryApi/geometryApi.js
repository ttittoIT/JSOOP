var GeometryApi = (function () {
    function GeometryApi(areaId) {
        this._possibleShapes = [];
        this._shapesToDraw = [];
        this._drawingField = document.querySelector(areaId);
    }

    GeometryApi.prototype = {
        populatePossibleShapes: function populatePossibleShapes() {
            // TODO: populate combo box with possible shapes
        },
        loadParameterControls: function loadParameterControls(shapeType) {
            // TODO: implement loading of the additional input fields depending on the selected shape
        },
        createShape: function createShape(shapeType){
            // TODO: implement shape creation by given name of the class as string
        },
        removeShape: function removeShape(){
            // TODO: implement removing shape from the shapesToDraw array on button click
        },
        rearrangeShapes: function rearrangeShapes (){
            // TODO: implement changing the places of two neighbor shapes.
            // Their z-index depends on the position they are situated in the multiple select input
        }
    }

    return GeometryApi;
}());
