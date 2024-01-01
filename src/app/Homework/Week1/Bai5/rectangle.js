var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        var _this = this;
        this.calculateArea = function () { return _this.length * _this.width; };
        this.length = length;
        this.width = width;
    }
    return Rectangle;
}());
var rectangleOne = new Rectangle(25, 11);
var area = rectangleOne.calculateArea();
console.log("The area of the rectangle is: ".concat(area));
