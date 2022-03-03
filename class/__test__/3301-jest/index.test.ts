// describe("내가 하고싶은 테스트", () => {
//   it("작은 테스트", () => {

import { add } from "../../pages/lecture/3301-jest/index";

//   })
//   it("작은 테스트", () => {

//   })
//   it("작은 테스트", () => {

//   })
// })

it("더하기 잘되는지 테스트", () => {
  const result = add(3, 5);
  expect(result).toBe(8);
});
