export function factorial(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}

export function isPrime(n: number): boolean {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
        return false;
        }
    }

    return true;
}