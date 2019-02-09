export function square(x: number) {
  return x * x;
}

export function cube(x: number = 1): number {
  const a = [1, 2];
  const c = [...a];
  for (const key of a) {
    console.log(key);
  }
  return x * x * x;
}
