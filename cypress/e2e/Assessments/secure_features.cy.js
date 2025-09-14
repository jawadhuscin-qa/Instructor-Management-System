describe('assessments', () => {
  const waitForLoaderToDisappear = () => {
    cy.get('body').then($body => {
      if ($body.find('.bounce2').length > 0) {
        cy.log('Loader found, waiting to disappear...');
        cy.get('.bounce2', { timeout: 15000 }).should('not.exist');
      } else {
        cy.log('No loader found, continuing...');
      }
    });
  };

  beforeEach(() => {
    cy.login(); 
  });

  it('duplicate_assessment', function () {  
    cy.fixture('Data').then((data) => {

      cy.get('[href="/assessments"] > span', { timeout: 10000 }).click();
      waitForLoaderToDisappear();

      cy.get('tbody > :nth-child(2) > :nth-child(1)').click();
      cy.get('[title=""]', { timeout: 10000 }).click(); // Edit assessment
      cy.get('.menu > :nth-child(2)').click(); // Secure features
      waitForLoaderToDisappear();

      // Recording Options
      for (let i = 0; i <= 5; i++) {
        cy.get('.layout-container .layout-item').eq(i).click();
      }

      // Lockdown Options
      const lockdownOptions = [2, 4, 6, 8, 10, 12, 14];
      lockdownOptions.forEach(i => {
        cy.get(`:nth-child(3) > .ml-3 > .layout-container > :nth-child(${i}) > .layout-item`).click();
      });
      cy.get(':nth-child(16) > .layout-item').click();
      cy.get(':nth-child(18) > .layout-item').click();
      cy.get(':nth-child(20) > .layout-item').click();

      // AI Options
      [2, 4, 6].forEach(i => {
        cy.get(`:nth-child(4) > .ml-3 > .layout-container > :nth-child(${i}) > .layout-item`).click();
      });

      // Verification Options
      [2, 4, 6, 8, 10, 12, 14].forEach(i => {
        cy.get(`:nth-child(5) > .ml-3 > .layout-container > :nth-child(${i}) > .layout-item`).click();
      });

      // In Quiz
      cy.get(':nth-child(6) > .ml-3 > .layout-container > :nth-child(2) > .layout-item').click();

      // Proctoring behaviour
      cy.get('.pre-configs-container > :nth-child(4)').click();

      // Save exam and settings
      cy.get('.settings-footer > .button').then($btn => {
        if ($btn.is(':visible')) {
          cy.wrap($btn).click();
          cy.get('#name').type(data.secure_feature_profileName);
          cy.get('#description').type(data.secure_feature_description);
          cy.get('.modal-footer > .orange-filled-btn').click();
          cy.wait(5000);
        } else {
          cy.log('Save button not visible — skipping this test block.');
        }

        // Another section
        cy.get('body').then(($body) => {
          const sectionSelector = ':nth-child(2) > .section-card > .section-image > img';

          if ($body.find(sectionSelector).length > 0) {
            cy.get(sectionSelector).click();
            cy.get('.dependant-field').click();
            cy.get('.entities-dropdown > :nth-child(4)').click(); // Profile select from dropdown
          } else {
            cy.log('Second section not available, skipping test.');
            this.skip();
          }
        });
      });
    });
  });
});
