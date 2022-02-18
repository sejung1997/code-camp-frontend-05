// 1. 클로져 기초
export function firstFunc(arg1: string) {
  return function secondFunc(arg2: number): [string, number] {
    return [arg1, arg2];
  };
}
const resultFunc01 = firstFunc("영희")(10);
console.log(resultFunc01);

// 2. 클로져 기초(any)
export function firstFunc2(arg1: any) {
  return function secondFunc2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}
const resultFunc02 = firstFunc2("영희")(10);
console.log(resultFunc02);

// 3. 클로져 기초(generic)
export function firstFunc3<T>(arg1: T) {
  return function secondFunc3<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}
const resultFunc03 = firstFunc3(20)(10);
console.log(resultFunc03);

// 4. 클로져 기초(generic) - 화살표
// prettier-ignore
export const firstFunc4 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
  };

const resultFunc04 = firstFunc4(20)(10);
console.log(resultFunc04);

// 5. 클로져 기초(generic) - HOC
// prettier-ignore
export const firstFunc5 = <c>(Conponent: c) => <p>(props: p): [c, p] => {
  return [Conponent,props];
};

const resultFunc05 = firstFunc5("bbb")({ aaa: "철수" });
console.log(resultFunc05);
