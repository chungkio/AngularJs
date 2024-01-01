const getFirstItemArray = <T>(arr: T[]): T | undefined => arr[0];

const arrData: (string | number)[] = ['data', 1, 2, 3, 'content'];
const arrDataFirst = getFirstItemArray(arrData);

console.log(arrDataFirst !== undefined ? `The first element of the array is: ${arrDataFirst}` : 'Empty array, no elements.');