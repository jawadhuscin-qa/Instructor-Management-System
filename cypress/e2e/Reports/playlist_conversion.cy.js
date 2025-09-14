describe('Reports', () => {
  const waitForLoaderToDisappear = () => {
    cy.get('body').then($body => {
      if ($body.find('.bounce2').length > 0) {
        cy.log(' Loader found, waiting to disappear...');
        cy.get('.bounce2', { timeout: 30000 }).should('not.exist');
      } else {
        cy.log(' No loader found, continuing...');
      }
    });
  }
  beforeEach(() => {
    cy.login(); 
  });

  it('assessment_playlist_conversion', () => {
    cy.fixture('Data').then((data) => {

    cy.get('[href="/reports"] > span').click();
    waitForLoaderToDisappear();
    cy.get(':nth-child(3) > .report-types > :nth-child(1)').click();
    //Download Graphs
    cy.get('.apexcharts-menu-icon').click();
    cy.get('.exportSVG').click();
    cy.get('.apexcharts-menu-icon').click();
    cy.get('.exportPNG').click();
    cy.get('.apexcharts-menu-icon').click();
    cy.get('.exportCSV').click();

    cy.get('.date-box > img').click();
    cy.wait(3000);
    // cy.get('.dependant-field').click();
    // cy.wait(2000);
    // cy.get('.entities-dropdown > :nth-child(2)').click();
     cy.get(':nth-child(1) > .invite-modal-schedule-time > .invite-modal-schedule-start > input').type(data.report_from);
    cy.get(':nth-child(2) > .invite-modal-schedule-time > .invite-modal-schedule-start > input').type(data.report_to);
    cy.get('.orange-filled-btn').click();
    cy.log('Result is display');
    cy.get('.date-box > img').click();
    cy.get('.orange-hollow-btn').click(); //cancel button
    
    });
});
});