export function fib(n: number): number {
  let a = 1, b = 0;
  while (n > 0){
    const temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  return b
}
