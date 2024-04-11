var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Створіть класи Circle, Rectangle, Square і Triangle.
// У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
// У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі
var Shape = /** @class */ (function () {
    function Shape(name, color) {
        this.name = name;
        this.color = color;
    }
    Shape.prototype.calculateArea = function () {
        throw new Error("Method 'calculateArea' must be implemented.");
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius, color) {
        var _this = _super.call(this, "Circle", color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height, color) {
        var _this = _super.call(this, "Rectangle", color) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.print = function () {
        console.log("Formula for area of Rectangle: width * height");
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(sideLength, color) {
        return _super.call(this, sideLength, sideLength, color) || this;
    }
    Square.prototype.print = function () {
        console.log("Formula for area of Square: sideLength * sideLength");
    };
    return Square;
}(Rectangle));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(base, height, color) {
        var _this = _super.call(this, "Triangle", color) || this;
        _this.base = base;
        _this.height = height;
        return _this;
    }
    Triangle.prototype.calculateArea = function () {
        return 0.5 * this.base * this.height;
    };
    return Triangle;
}(Shape));
