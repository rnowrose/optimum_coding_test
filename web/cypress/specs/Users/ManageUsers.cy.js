 describe("User Management", () => {
    const firstName = "test"
    const lastName = "user"
    const email = "testuser@aol.com"
    const username = "testuser";
    const password = "testpassword";

    beforeEach(() => {
        cy.visit("/login");
    });

    it("should be able to loging successfully", () => {
      cy.get('[data-cy=sign-up]').click();
      cy.get('[data-cy=register-firstname-input]').type(firstName);
      cy.get('[data-cy=register-lastname-input]').type(lastName);
      cy.get('[data-cy=register-email-input]').type(email);
      cy.get('[data-cy=register-username-input]').type(username);
      cy.get('[data-cy=register-password-input]').type(password);
      cy.get('button[type=submit]').click();
      
      // After registration, it should redirect to login page
      cy.url().should('include', '/login');

    });


    it("should log in successfully with valid credentials", () => {
        cy.get('[data-cy="login-username-input"]').type(username);
        cy.get('[data-cy="login-password-input"]').type(password);
        cy.get('[data-cy="login-submit-button"]').click();

        // Verify successful login by checking for a logout button or user profile
        cy.contains("Logout").should("be.visible");
    });
});