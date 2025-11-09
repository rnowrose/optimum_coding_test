describe("Movie Management", () => {
     beforeEach(() => {
        cy.visit("/");
    });

    it('click on a movie to view details', () => {
      cy.get('[data-cy=trend-movie]').first().click();
      cy.get('[data-cy=movie-details]').should('be.visible');
    });

});