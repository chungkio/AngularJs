enum Color {
    RED = 'Red',
    GREEN = 'Green',
    BLUE = 'Blue'
  }
  
const printColorName = (color: Color): void => console.log(`The name of the color is: ${color}`);

printColorName(Color.RED);