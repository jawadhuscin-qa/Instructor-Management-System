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

  it('assessment_complete_setup', () => {
    cy.fixture('Data').then((data) => {
    cy.get('[href="/assessments"] > span',{ timeout: 10000 }).click();
    waitForLoaderToDisappear();
    // Create assessment with multiple sections
    cy.get('.buttons-block > :nth-child(4)').click();
    cy.get('.tab-block > input').type(data.assessment_name);
    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
    cy.get('.section-body > :nth-child(2) > input').click();
    cy.get('.number-field > input').type('2');
    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
    cy.get(':nth-child(1) > .fields > input').type(data.assessment_name);
    cy.get(':nth-child(2) > .fields > input').type(data.assessment_name);
    cy.get('section > input').click(); //allow interruption
    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
    cy.get('.schedule-start > input').then(($input) => {
      const inputValue = $input.val();
      const inputDate = inputValue ? new Date(inputValue) : null;
      const now = new Date();

      const pad = (num) => num.toString().padStart(2, '0');
      const formattedDateTime = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;

      if (!inputDate || isNaN(inputDate.getTime()) || inputDate < now) {
        cy.wrap($input).clear().type(formattedDateTime);
        cy.log(`Updated start time to current: ${formattedDateTime}`);
      } else {
        cy.log('Start date and time is valid');
      }
    });

    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
    cy.log('Assessment with multiple sections is created');
    waitForLoaderToDisappear();

    cy.get('tbody > :nth-child(1) > :nth-child(1)').click(); // assessment list
    cy.get('[title=""]', { timeout: 10000 }).click();


    cy.get('.dependant-field').click(); // select template
    cy.log('dropdown clicked');
    // cy.get('.entities-dropdown > :nth-child(2)').click();
    cy.log('template selected');

    cy.get('span > input').type(data.assessment_duration);
    cy.log('time is set');

    // if another section is available
    cy.get('body').find(':nth-child(2) > .section-card > .section-image > img')
      .then($section => {
        if ($section.length > 0) {
          cy.wrap($section).click();
          cy.get('.dependant-field').click(); // select template
          cy.log('dropdown clicked');
          // cy.get('.entities-dropdown > :nth-child(2)').click(); // optional template selection
          cy.log('template selected');
          cy.get('span > input').type('20');
          cy.log('time is set');

          const cancelBtn = Cypress.$('.cancel_button');
          if (cancelBtn.length > 0) {
            cy.wrap(cancelBtn).click();
            cy.log('Cancel button clicked.');
          } else {
            cy.log('Cancel button not found, skipping click.');
          }

          cy.log('message is closed');
        }

        cy.get('.menu > :nth-child(2)').click(); // secure features
        waitForLoaderToDisappear();

        // Recording Options
        for (let i = 0; i <= 5; i++) {
          cy.get('.layout-container .layout-item').eq(i).click();
        }

        // Lockdown Options
        for (let i = 2; i <= 14; i += 2) {
          cy.get(`:nth-child(3) > .ml-3 > .layout-container > :nth-child(${i}) > .layout-item`).click();
        }
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
            waitForLoaderToDisappear();
          } else {
            cy.log('Save button not visible — skipping this test block.');
          }
        });

        // Another section
        cy.get(':nth-child(1) > .section-card > .section-image > img').click();
        cy.wait(3000);
        cy.get('.dependant-field').click();
        cy.get('.entities-dropdown > :nth-child(4)').click(); // Profile select from down
      });

    // Question navigation
    cy.get('.menu > :nth-child(3)').click();
    cy.get(':nth-child(1) > :nth-child(1) > .checkBox-container > .checkmark').click();
    cy.get(':nth-child(5) > :nth-child(1) > .checkBox-container > .checkmark').click();
    cy.get('.added-items > button').click();

    // Another section
    cy.get('.section-card').then($sections => {
      const sectionCount = $sections.length;

      // Always run for the first section
      cy.get(':nth-child(1) > :nth-child(1) > .checkBox-container > .checkmark').click();
      cy.get(':nth-child(5) > :nth-child(1) > .checkBox-container > .checkmark').click();
      cy.get('.added-items > button').click();

      if (sectionCount >= 2) {
        cy.get(':nth-child(2) > .section-card > .section-image > img').should('exist');
        cy.get(':nth-child(1) > :nth-child(1) > .checkBox-container > .checkmark').click();
        cy.get(':nth-child(5) > :nth-child(1) > .checkBox-container > .checkmark').click();
        cy.get('.added-items > button').click();
      }

      if (sectionCount >= 3) {
        cy.get(':nth-child(3) > .section-card > .section-image > img').should('exist');
        cy.get(':nth-child(1) > :nth-child(1) > .checkBox-container > .checkmark').click();
        cy.get(':nth-child(5) > :nth-child(1) > .checkBox-container > .checkmark').click();
        cy.get('.added-items > button').click();
      }
    });

    // Instructions and resources
    cy.get('.menu > :nth-child(4)').click();
    waitForLoaderToDisappear();
    cy.get(':nth-child(1) > :nth-child(1) > .checkBox-container > .checkmark').click();
    cy.get('.added-items > button').click();

    cy.get('.menu-container-instruction > .menu > :nth-child(2)').click();
    cy.get(':nth-child(1) > :nth-child(1) > .checkBox-container > .checkmark').click();
    cy.get('.added-items > button').click();

    cy.get('.menu-container-instruction > .menu > :nth-child(3)').click();
    cy.get(':nth-child(1) > :nth-child(1) > .checkBox-container > .checkmark').click();
    cy.get(':nth-child(4) > :nth-child(1) > .checkBox-container > .checkmark').click();
    cy.get('.added-items > button').click();
    cy.get('.orange-filled-btn').click();

    // Another section
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
    cy.get('.form-control').type('S1Q2');
    cy.get('.search-icon').click();
    cy.get(':nth-child(1) > .checkBox-container > .checkmark').click();
    cy.get('.added-items > button').click();

   // cy.get('.added-items > button').click();
    cy.get('.menu-container-instruction > .menu > :nth-child(2)').click();
    cy.get('.form-control').type('S1Q2');
    cy.get('.search-icon').click();
    // cy.get('body').find(':nth-child(1) > .checkBox-container > .checkmark')
    //   .then($el => {
    //     if ($el.length > 0) {
    //       cy.wrap($el).click();
    //     } else {
    //       cy.log('Checkbox not found, skipping click.');
    //     }
        //cy.get('.added-items > button').click();
        //question navigation
        cy.get('.menu-container > .menu > :nth-child(3)').click();
        cy.wait(3000);
        cy.get(':nth-child(1) > :nth-child(1) > .checkBox-container > .checkmark').click();
        cy.get('.added-items > button').click();
        cy.get('.orange-filled-btn').click();
        cy.wait(5000);

        //Open Assessment status
        cy.get('#dropdown-basic-button > div > .button').click();
        cy.get('.list-unstyled > :nth-child(3)').click();
        cy.wait(2000);
        cy.get('.drop-down').select(data.drop_down_selection);
        cy.get('.orange-filled-btn').click();

      });
  }); 
  }); 
