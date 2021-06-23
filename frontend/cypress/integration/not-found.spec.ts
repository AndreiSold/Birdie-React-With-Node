context('Not Found', () => {
  describe('Not Found tests', () => {
    it('should display the not found image', () => {
      cy.visit('/definitely-a-random-and-unprepared-route');
      cy.get('[data-cy=not-found-image]').should(
        'have.css',
        'justifyContent',
        'center'
      );
    });
  });
});
