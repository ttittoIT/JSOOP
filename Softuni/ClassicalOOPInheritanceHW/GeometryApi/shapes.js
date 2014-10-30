var Shapes = (function () {
    var Point = (function () {
        var self = this;

        function Point(x, y) {
            self._x = x;
            self._y = y;
        }

        function getX() {
            return self._x;
        }

        function getY() {
            return self._y;
        }

        Point.prototype = {
            x: getX,
            y: getY,
            draw: function () {
                // TODO: implement point drawing on a canvas
                console.log("Point drawn.");
            }
        }

        return Point;
    }());

    var Shape = (function () {
        var self = this;

        function Shape(point, color) {
            self._type = "Shape";
            self._point = point;
            self._color = color;
        }

        function getShapeType() {
            return this._type || self._type;
        }

        function getColor() {
            return self._color;
        }

        function getPoint() {
            return self._point;
        }

        Shape.prototype = {
            A: getPoint,
            color: getColor,
            draw: function () {
                // TODO: Implement shape drawing on a canvas
                console.log("Shape drawn");
            },
            getShapeType: getShapeType,
            toString: function () {
                return getShapeType() + " - X: " + getPoint().x() + ", Y: " + getPoint().y() + ", Color: " + getColor().toHex();
            }
        };

        return Shape;
    }());

    var Circle = (function () {
        var self = this;

        function validateRadius(radius) {
            if (radius <= 0) {
                return false;
            }
            return true;
        }

        function Circle(point, radius, color) {
            Shape.call(this, point, color);
            if (!validateRadius(self._radius)) {
                throw new Error("Circle radius should be positive number!");
            }
            self._type = "Circle";
            self._radius = radius;
        }

        Circle.prototype = new Shape();

        function getRadius() {
            return self._radius;
        }

        Circle.prototype = {
            radius: getRadius,
            draw: function () {
                // TODO: Implement circle drawing on a canvas
                console.log("Circle drawn.");
            },
            toString: function () {
                var circleStr = Shape.prototype.toString.call(self);
                circleStr += ", Radius: " + getRadius();
                return circleStr;
            }
        };

        return Circle;
    }());

    var Rectangle = (function () {
        var self = this;

        function Rectangle(point, color, width, height) {
            Shape.call(this, point, color);
            self._type = "Rectangle";
            self._width = width;
            self._height = height;
        }

        Rectangle.prototype = new Shape();

        function getWidth() {
            return self._width;
        }

        function getHeight() {
            return self._height;
        }

        Rectangle.prototype = {
            width: getWidth(),
            height: getHeight(),
            draw: function draw() {
                // TODO: Implement drawing rectangle on a canvas
                console.log("Rectangle drawn.");
            },
            toString: function () {
                var rectStr = Shape.prototype.toString.call(self);
                rectStr += ", Width: " + getWidth() + ", Height: " + getHeight();
                return rectStr;
            }
        }

        return Rectangle;
    }());

    var Triangle = (function () {
        var self = this;

        function Triangle(firstPoint, color, secondPoint, thirdPoint) {
            Shape.call(self, firstPoint, color);
            self._type = "Triangle";
            self._secondPoint = secondPoint;
            self._thirdPoint = thirdPoint;
        }

        function getFirstPoint() {
            console.log(Shape.prototype.A());
            return Shape.prototype.A();
        }

        function getSecondPoint() {
            return this._secondPoint;
        }

        function getThirdPoint() {
            return this._thirdPoint;
        }

        function validateTriangle() {
            //TODO: validate if the given points can build a triangle
        }

        Triangle.prototype = new Shape();
        Triangle.prototype = {
            A: getFirstPoint(),
            B: getSecondPoint(),
            C: getThirdPoint(),
            draw: function draw() {
                // TODO: implement triangle drawing on a canvas
                console.log("Triangle drawn.");
            },
            toString: function () {
                var triangleStr = Shape.prototype.toString.call(self);
                triangleStr += ", X2: " + getSecondPoint().x() + ", Y2: " + getSecondPoint().y()
                    + ", X3: " + self._thirdPoint.x() + ", Y3: " + self._thirdPoint.y();
                return triangleStr;
            }
        }

        return Triangle;

    }());

    // Module returned objects
    return{
        Point: Point,
        Shape: Shape,
        Circle: Circle,
        Rectangle: Rectangle,
        Triangle: Triangle
    }
}());

var Utils = (function () {
    var Color = (function () {
        var self = this;

        function Color(r, g, b) {
            // TODO: Validate values of the color components (0 - 255)
            self._r = r;
            self._g = g;
            self._b = b;
        }

        function compToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }

        function colorToHex() {
            var colorStr = "#" + compToHex(self._r) + compToHex(self._g) + compToHex(self._b);
            return colorStr.toUpperCase();
        }

        Color.prototype = {
            toHex: colorToHex
        }

        return Color;
    }());

    return {
        Color: Color
    }
}());

// TESTS
var color = new Utils.Color(54, 16, 28);
console.log(color.toHex());

var point = new Shapes.Point(2, 3);
point.draw();
console.log(point.x());

var shape = new Shapes.Shape(new Shapes.Point(2, 3), new Utils.Color(28, 24, 26));
shape.draw();
console.log(shape.toString());

var circle = new Shapes.Circle(new Shapes.Point(4, 5), 22, new Utils.Color(58, 54, 56));
circle.draw();
console.log(circle.toString());

var rect = new Shapes.Rectangle(new Shapes.Point(6, 7), new Utils.Color(58, 54, 56), 220, 330);
rect.draw();
console.log(rect.toString());

var triangle = new Shapes.Triangle(
    new Shapes.Point(6, 7),
    new Utils.Color(58, 54, 56),
    new Shapes.Point(9, 10),
    new Shapes.Point(8, 15));

triangle.draw();
console.log(triangle.toString());

