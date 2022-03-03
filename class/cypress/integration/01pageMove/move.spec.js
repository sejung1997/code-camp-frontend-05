it("페이지 이동 연습해보기", () => {
  cy.visit("http://localhost:3000/lecture/3304-cypress-integration-test");
  cy.get("button").click();
  cy.get("div").contains("철수야 놀자");
});
