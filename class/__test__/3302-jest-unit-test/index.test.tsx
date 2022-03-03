import { render, screen } from "@testing-library/react";
import JestUnitTestPage from "../../pages/lecture/3302-jest-unit-test";
import "@testing-library/jest-dom/extend-expect";
it("원하는대로 그려지는지 테스트하기", () => {
  render(<JestUnitTestPage />);
  const myText = screen.getByText("철수 13살");
  expect(myText).toBeInTheDocument;
  const myText2 = screen.getByText("취미입력하기");
  expect(myText2).toBeInTheDocument;
  const myText3 = screen.getByText("철수랑 놀러가기");
  expect(myText3).toBeInTheDocument;
});
