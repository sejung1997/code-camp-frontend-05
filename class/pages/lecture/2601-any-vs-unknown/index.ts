export const getAny = (args: any) => {
  const answer = args + 2;
  return answer;
};
const result01 = getAny("철수");

console.log(result01);

// unknown 타입
export const getUnknown = (args: unknown) => {
  if (typeof args === "number") {
    const answer = args + 2;
    return answer;
  } else return "숫자를 넣어주세요";
};
const result02 = getUnknown("철수");
console.log(result02);
