import { render } from "@testing-library/react";
import JestUnitTestPage from "../../pages/lecture/3303-jest-unit-test-snapshot";
import "@testing-library/jest-dom/extend-expect";
it("컴포넌트가 기존이랑 바뀐게 없는지 비교-스냅샷 테스트", () => {
  const result = render(<JestUnitTestPage />);
  expect(result.container).toMatchSnapshot(); // 스냅샷 없으면 스냅샷 찍기 있으면 기존 스냅샷과 비교
});
