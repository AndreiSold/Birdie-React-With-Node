context('Care Recipients', () => {
  describe('Care Recipients test', () => {
    it('should have the static data', () => {
      cy.visit('/care-recipients');
      cy.get('[data-cy=title]').should('have.text', 'OUR CARE RECIPIENTS');
      cy.get('[data-cy=subtitle]').should(
        'have.text',
        'Select one of our care recipients in order to see statistics regarding their general mood and the full history of events related to them.'
      );
    });
    it('should have care recipients loaded', () => {
      cy.wait(10000);
      cy.get('[data-cy=care-recipients-container]')
        .find('> button')
        .its('length')
        .should('be.gte', 1);
    });
    it('should navigate to the care recipient individual page', () => {
      cy.get('[data-cy=care-recipients-container]')
        .find('> button')
        .eq(0)
        .click({ force: true });
      cy.wait(10000);
      cy.get('[data-cy=care-recipient-name]').its('length').should('be.gte', 0);
      cy.get('[data-cy=mood-observations-canvas]').should(
        'have.css',
        'height',
        '300px'
      );
      cy.get('[data-cy=events-history-table] .MuiDataGrid-renderingZone')
        .find('> .MuiDataGrid-row')
        .its('length')
        .should('be.gte', 1);
    });
  });
});
