// 1.뮨자

export function getString(args: string): string {
  return args;
}
const result01 = getString("철수");
console.log(result01);

// 2.숫자
export function getNumber(args: number): number {
  return args;
}
const result02 = getNumber(8);
console.log(result02);

// 3.any

export function getAny(args: any): any {
  return args;
}
const result030 = getAny("철수");
const result031 = getAny(8);
const result032 = getAny(true);

console.log(result030);
console.log(result031);
console.log(result032);

// 4.generic 타입 : 들어온 타입을 그대로사용
export function getGeneric<MyType>(args: MyType): MyType {
  return args;
}
const aaa: string = "철수";
const bbb: number = 8;
const ccc: boolean = true;

const result040 = getGeneric(aaa);
const result041 = getGeneric(bbb);
const result042 = getGeneric(ccc);
console.log(result040);
console.log(result041);
console.log(result042);

// 5.any 응용
// prettier-ignore
export function getAnyReverse(arg1: any, arg2: any, arg3: any): [any,any,any] {
  return [arg3, arg2, arg1];
}
const result5 = getAnyReverse("철수", "다람쥐", 8);
console.log(result5);

// 6.generic 응용
// prettier-ignore
export function getGenericReverse<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}
const result6 = getGenericReverse("철수", "다람쥐", 8);
console.log(result6);

// 7.generic 응용 축약버전
// prettier-ignore
export function getGenericReverseT<t1, t2, t3>(arg1: t1, arg2: t2, arg3: t3): [t3, t2, t1] {
  return [arg3, arg2, arg1];
}
const result7 = getGenericReverseT("철수", "다람쥐", 8);
console.log(result7);

// 7.generic 응용 축약버전2
// prettier-ignore
export function getGenericReverseTUV<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result8 = getGenericReverseT("철수", "다람쥐", 8);
console.log(result8);
