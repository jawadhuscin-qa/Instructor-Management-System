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

  it('assessment_instruction', () => {
    cy.fixture('Data').then((data) => {

      cy.get('[href="/assessments"] > span').click();
      waitForLoaderToDisappear();
      
      cy.get('tbody > :nth-child(2) > :nth-child(1)').click();
      cy.get('[title=""]').click(); //edit assessment
      waitForLoaderToDisappear();
      cy.get('.menu > :nth-child(4)').click();
      cy.wait(3000);

      // pre instruction
      cy.get(':nth-child(1) > :nth-child(1) > .checkBox-container > .checkmark').click();
      cy.get('.added-items > button').click();

      // post instruction
      cy.get('.menu-container-instruction > .menu > :nth-child(2)').click();
      cy.get(':nth-child(1) > :nth-child(1) > .checkBox-container > .checkmark').click();
      cy.get('.added-items > button').click();

      // resources
      cy.get('.menu-container-instruction > .menu > :nth-child(3)').click();
      cy.get(':nth-child(1) > :nth-child(1) > .checkBox-container > .checkmark').click();
      cy.get(':nth-child(4) > :nth-child(1) > .checkBox-container > .checkmark').click();
      cy.get('.added-items > button').click();
      cy.get('.orange-filled-btn').click();

      // another section
      cy.get(':nth-child(2) > .section-card > .section-image > img').then($el => {
        if ($el.length > 0) {
          cy.wrap($el).click();
        } else {
          cy.log('Other section not found, skipping click.');
        }
      });

      cy.get(':nth-child(4) > :nth-child(1) > .checkBox-container > .checkmark').click();
      cy.get('.added-items > button').click();
      cy.get('.menu-container-instruction > .menu > :nth-child(2)').click();
      cy.get('.form-control').type(data.assessment_instructions);
      cy.get('.search-icon').click();
      cy.get(':nth-child(1) > .checkBox-container > .checkmark').click();
      cy.get('.added-items > button').click();

      // another section
      cy.get('.section-add').click();
      cy.get(':nth-child(3) > .section-card > .section-image > img', { timeout: 0, log: false }).then($el => {
        if ($el.length > 0) {
          // Section is available
          cy.wrap($el).click();
          cy.get('.section-add').click();
          // cy.get(':nth-child(4) > :nth-child(1) > .checkBox-container > .checkmark').click();
          cy.get('.added-items > button').click();
          cy.get('.menu-container-instruction > .menu > :nth-child(2)').click();
          cy.get('.form-control').type(data.assessment_instructions);
          cy.get('.search-icon').click();

          // Step 2: Wait for checkbox to appear, if it does, click it
          cy.get('.checkBox-container .checkmark', { timeout: 10000 }).then($checkbox => {
            if ($checkbox.length > 0) {
              cy.wrap($checkbox.first()).click(); // Click the first one if multiple exist
            } else {
              cy.log('Checkbox not found, skipping click.');
            }
          });

          // Step 3: Click the "added-items" button
          cy.get('.added-items > button', { timeout: 5000 }).then($btn => {
            if ($btn.length > 0) {
              cy.wrap($btn).click();
            } else {
              cy.log('Section 3 not available, skipping full flow.');
            }
          });

        } else {
          cy.log('Third section image not found, skipping click.');
        }
      });

    }); 
  }); 
}); 
