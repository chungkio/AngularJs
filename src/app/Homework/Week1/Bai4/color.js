var Color;
(function (Color) {
    Color["RED"] = "Red";
    Color["GREEN"] = "Green";
    Color["BLUE"] = "Blue";
})(Color || (Color = {}));
var printColorName = function (color) { return console.log("The name of the color is: ".concat(color)); };
printColorName(Color.RED);
