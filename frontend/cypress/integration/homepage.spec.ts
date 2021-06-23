context('Homepage', () => {
  describe('Homepage tests', () => {
    it('should have the static data', () => {
      cy.visit('/');
      cy.get('[data-cy=title]').should(
        'have.text',
        'CONNECTING FAMILIES WITH HOMECARE SOFTWARE'
      );
      cy.get('[data-cy=subtitle]').should(
        'have.text',
        "Andrew's Birdie is your all-in-one homecare software solution designed to help families stay more connected and help seniors live happily within their own home."
      );
    });
  });
});
