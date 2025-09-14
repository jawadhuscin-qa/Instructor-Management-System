describe('playlist_module Testcases', () => {
  const waitForLoaderToDisappear = () => {
    cy.get('body').then($body => {
      if ($body.find('.bounce2').length > 0) {
        cy.log(' Loader found, waiting to disappear...');
        cy.get('.bounce2', { timeout: 50000 }).should('not.exist');
      } else {
        cy.log(' No loader found, continuing...');
      }
    });
  }
  beforeEach(() => {
    cy.login(); 
  });

  it('panel_overview_actions', () => {
    cy.fixture('Data').then((data) => {
    // Navigate to panels
    cy.get('[href="/panels"] > span', { timeout: 10000 }).should('be.visible').click();
    cy.get('.table-body > :nth-child(5) > :nth-child(1)').click();

    //Actions
    cy.get(':nth-child(2) > div > .button').click();

    //Duplicate panel
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)').click();
    cy.get('.field').type(data.duplicate_panel_name);
    cy.get('.duplicate-body > .btn-container > .orange-filled-btn').click();

    cy.log('duplicate panel created');

    cy.get('.table-body > :nth-child(5) > :nth-child(1)').click();

    //Actions- duplicate cancel button
    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)').click();
    cy.get('.duplicate-body > .btn-container > .orange-hollow-btn').click();


    //actions _add sessions
    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(2)').click();
    waitForLoaderToDisappear();
    cy.get('.candidates-container > :nth-child(1) > input', { timeout: 10000 }).should('be.visible').click();
    cy.get('.candidates-container > :nth-child(2) > input').click();
    cy.get('.add-candidate-modal > .btn-container > .orange-filled-btn').click();

    cy.log('sessions added');

    cy.get(':nth-child(2) > div > .button').click();
      waitForLoaderToDisappear();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(2)').click();
    waitForLoaderToDisappear();
    cy.get('.add-candidate-modal > .btn-container > .orange-hollow-btn').click();
 });
  });
});