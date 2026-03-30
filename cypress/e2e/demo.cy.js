describe("Demo Test", () => {
  it("Loads homepage", () => {
    cy.visit("http://localhost:5173");

    // FIXED LINE 👇
    cy.contains("Movie App");
  });
});