describe("test highlight name", () => {
	beforeEach(() => {
		cy.visit("http://localhost:5173");
	});
	it("highlights name with 'Breaking Bad'", () => {
		cy.findByTestId("firstNameInput").type("Breaking");
		cy.findByTestId("lastNameInput").type("Bad");
		cy.findAllByRole("button").click();
		cy.get("span").eq(1).should("have.class", "bg-secondary");
	});

	it("highlights name with 'Silicon Valley'", () => {
		cy.findByTestId("firstNameInput").type("Silicon");
		cy.findByTestId("lastNameInput").type("Valley");
		cy.findAllByRole("button").click();
		cy.get("span").eq(1).should("have.class", "bg-secondary");
	});

	it("highlights name with 'Helium Hike'", () => {
		cy.findByTestId("firstNameInput").type("Helium");
		cy.findByTestId("lastNameInput").type("Hike");
		cy.findAllByRole("button").click();
		cy.get("span").eq(1).should("have.class", "bg-secondary");
	});

	it("highlights name with 'Iron Man'", () => {
		cy.findByTestId("firstNameInput").type("Iron");
		cy.findByTestId("lastNameInput").type("Man");
		cy.findAllByRole("button").click();
		cy.get("span").eq(1).should("have.class", "bg-secondary");
	});

	it("highlights name with 'Gold Rush'", () => {
		cy.findByTestId("firstNameInput").type("Gold");
		cy.findByTestId("lastNameInput").type("Rush");
		cy.findAllByRole("button").click();
		cy.get("span").eq(1).should("have.class", "bg-secondary");
	});

	it("highlights name with 'Albert Einstein'", () => {
		cy.findByTestId("firstNameInput").type("Albert");
		cy.findByTestId("lastNameInput").type("Einstein");
		cy.findAllByRole("button").click();
		cy.get("span").eq(1).should("have.class", "bg-secondary");
	});

	it("highlights name with 'Calcium Case'", () => {
		cy.findByTestId("firstNameInput").type("Calcium");
		cy.findByTestId("lastNameInput").type("Case");
		cy.findAllByRole("button").click();
		cy.get("span").eq(1).should("have.class", "bg-secondary");
	});

	it("highlights name with 'Mercury Rising'", () => {
		cy.findByTestId("firstNameInput").type("Mercury");
		cy.findByTestId("lastNameInput").type("Rising");
		cy.findAllByRole("button").click();
		cy.get("span").eq(1).should("have.class", "bg-secondary");
	});

	it("highlights name with 'Silver Surfer'", () => {
		cy.findByTestId("firstNameInput").type("Silver");
		cy.findByTestId("lastNameInput").type("Surfer");
		cy.findAllByRole("button").click();
		cy.get("span").eq(1).should("have.class", "bg-secondary");
	});

	it("highlights name with 'Chromium Cat'", () => {
		cy.findByTestId("firstNameInput").type("Chromium");
		cy.findByTestId("lastNameInput").type("Cat");
		cy.findAllByRole("button").click();
		cy.get("span").eq(1).should("have.class", "bg-secondary");
	});

	it("highlights name with 'Radium Rocket'", () => {
		cy.findByTestId("firstNameInput").type("Radium");
		cy.findByTestId("lastNameInput").type("Rocket");
		cy.findAllByRole("button").click();
		cy.get("span").eq(1).should("have.class", "bg-secondary");
	});
});
