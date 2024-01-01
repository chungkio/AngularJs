function sumArray(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const initArray: number[] = [5, 6, 8, 4, 5];
const resultSumArray: number = sumArray(initArray);
console.log(`Results Sum: ${resultSumArray}`);
