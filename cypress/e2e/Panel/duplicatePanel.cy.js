describe('playlist_module Testcases', () => {
  beforeEach(() => {
    cy.login(); 
  });

  it('panel_duplicate_panel', () => {
    cy.fixture('Data').then((data) => {
    // Navigate to panels
    cy.get('[href="/panels"] > span').click();
    cy.wait(5000);

    // Create panel with name
    cy.get('.header-icons > :nth-child(2)').click();
    cy.get('.field').type(data.duplicate_panel_name);
    cy.get('.drop-down').select(1);
    cy.get('.duplicate-body > .btn-container > .orange-filled-btn').click();

    // Try to create duplicate panel without name
    cy.get('[href="/panels"] > span').click();
    cy.wait(5000);
    cy.get('.header-icons > :nth-child(2)').click();
    cy.get('.drop-down').select(1);

    cy.get('.duplicate-body > .btn-container > .orange-filled-btn').then(($btn) => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click();
      } else {
        throw new Error('Please enter panel name');
      }
    });
  });

  });

});
