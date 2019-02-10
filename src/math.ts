import _ from "lodash";

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

function lodashTest2() {
  console.log(`hello123 ${_.join([1, 2, 3], " ")}`);
}
