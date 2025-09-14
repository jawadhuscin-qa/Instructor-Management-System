describe('candidateTestcases', () => {

  beforeEach(() => {
    cy.login();
  });

  it('candidate search tests', () => {
    cy.fixture('Data').then((data) => {

      // function to perform search steps
      function performSearch(searchTerm) {
        
        cy.get('.form-control').clear();
        cy.get('.form-control').type(searchTerm);
        cy.get('.search-icon').click();

        cy.get('.search-icon', { timeout: 10000 }).should('be.visible');
      }

      // Perform all search types one after another
      performSearch(data.validSearch);
      performSearch(data.invalidSearch);
      performSearch(data.specialChars_search);
      performSearch(data.alphaNumeric_search);
      performSearch(data.email_search);
      performSearch(data.phone_search);
      performSearch(data.external_id_search);

    });
  });

});
