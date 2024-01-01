function sumArray(arr) {
    return arr.reduce(function (acc, curr) { return acc + curr; }, 0);
}
var initArray = [5, 6, 8, 4, 5];
var resultSumArray = sumArray(initArray);
console.log("Results Sum: ".concat(resultSumArray));
