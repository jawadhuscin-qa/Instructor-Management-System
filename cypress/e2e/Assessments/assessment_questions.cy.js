describe('assessments', () => {
  const waitForLoaderToDisappear = () => {
    cy.get('body').then($body => {
      if ($body.find('.bounce2').length > 0) {
        cy.log(' Loader found, waiting to disappear...');
        cy.get('.bounce2', { timeout: 15000 }).should('not.exist');
      } else {
        cy.log(' No loader found, continuing...');
      }
    });
  }
  beforeEach(() => {
    cy.login(); 
  });

  it('assessment_questions', () => {

    cy.get('[href="/assessments"] > span',{ timeout: 10000 }).click();
    waitForLoaderToDisappear();
    
     cy.get('tbody > :nth-child(2) > :nth-child(1)').click();
     cy.get('[title=""]',{ timeout: 10000 }).click();
      waitForLoaderToDisappear();
     //question navigation
     cy.get('.menu > :nth-child(3)').click();
     cy.get(':nth-child(1) > :nth-child(1) > .checkBox-container > .checkmark').click();
     cy.get(':nth-child(5) > :nth-child(1) > .checkBox-container > .checkmark').click();
     cy.get('.added-items > button').click();

     //another section
     cy.get('.section-card').then($sections => {
    const sectionCount = $sections.length;

  // Always run for the first section
  cy.get(':nth-child(1) > :nth-child(1) > .checkBox-container > .checkmark').click();
  cy.get(':nth-child(5) > :nth-child(1) > .checkBox-container > .checkmark').click();
  cy.get('.added-items > button').click();

  // Conditionally run for the second section if it exists
  if (sectionCount >= 2) {
    cy.get(':nth-child(2) > .section-card > .section-image > img').should('exist');

    cy.get(':nth-child(1) > :nth-child(1) > .checkBox-container > .checkmark').click();
    cy.get(':nth-child(5) > :nth-child(1) > .checkBox-container > .checkmark').click();
    cy.get('.added-items > button').click();
  }

  // Optionally repeat for third section if needed
  if (sectionCount >= 3) {
    cy.get(':nth-child(3) > .section-card > .section-image > img').should('exist');

    cy.get(':nth-child(1) > :nth-child(1) > .checkBox-container > .checkmark').click();
    cy.get(':nth-child(5) > :nth-child(1) > .checkBox-container > .checkmark').click();
    cy.get('.added-items > button').click();
  }
});

    });
});