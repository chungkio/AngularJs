class Rectangle {
    private length: number;
    private width: number;

    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }
  
    calculateArea = (): number => this.length * this.width;
}

const rectangleOne = new Rectangle(25, 11);
const area = rectangleOne.calculateArea();
  
console.log(`The area of the rectangle is: ${area}`);