describe('playlist_module Testcases', () => {
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

  it('panel_duplicate_panel', () => {
    cy.fixture('Data').then((data) => {
    // Navigate to panels
    cy.get('[href="/sessions"] > span').click();
    waitForLoaderToDisappear();

    // Create a new panel
    cy.get('.header-icons > :nth-child(4)').click();
    waitForLoaderToDisappear();
    cy.get('.input-field', { timeout: 10000 }).should('be.visible').type(data.panel_name);

    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();

    // Select entity
    cy.get('.entities-dropdown > :nth-child(3)').click();
    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();

    // Select candidate
    cy.get('.add-candidates-conatiner > :nth-child(2) > :nth-child(1) > input').click();
    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();

    
    cy.get('.schedule-start > .input-field').then(($input) => {
      const inputValue = $input.val();
      const inputDate = inputValue ? new Date(inputValue) : null;
      const now = new Date();

      const pad = (num) => num.toString().padStart(2, '0');
      const formattedDateTime = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;

      if (!inputDate || isNaN(inputDate.getTime()) || inputDate < now) {
        cy.wrap($input).clear().type(formattedDateTime);
        cy.log(`Updated start time to current: ${formattedDateTime}`);
      } else {
        cy.log('Start time is valid');
      }
    });

    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
    cy.log('Panel created');
  });
  cy.fixture('Data').then((data) => {
    // Back Button functionalites checking
    // Create a new panel
    cy.get('.header-icons > :nth-child(4)').click();
    waitForLoaderToDisappear();
    cy.get('.input-field').type(data.panel_name_search);
    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();

    // Select entity
    cy.get('.entities-dropdown > :nth-child(3)').click();
    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();

    // Select candidate
    cy.get('.add-candidates-conatiner > :nth-child(2) > :nth-child(1) > input').click();
    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();

    
    cy.get('.schedule-start > .input-field').then(($input) => {
      const inputValue = $input.val();
      const inputDate = inputValue ? new Date(inputValue) : null;
      const now = new Date();

      const pad = (num) => num.toString().padStart(2, '0');
      const formattedDateTime = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;

      if (!inputDate || isNaN(inputDate.getTime()) || inputDate < now) {
        cy.wrap($input).clear().type(formattedDateTime);
        cy.log(`Updated start time to current: ${formattedDateTime}`);
      } else {
        cy.log('Start time is valid');
      }
    });
    cy.get('body').then(($body) => {
    const backBtn = $body.find('.cam-body > .btn-container > .orange-hollow-btn');
    if (backBtn.length && backBtn.is(':visible')) {
    cy.log('Back button is visible and working.');
    // Optionally, click the back button to test navigation:
     cy.get('.cam-body > .btn-container > .orange-hollow-btn').click();
  } else {
    throw new Error('Back button is NOT visible or not working.');
  }
  cy.log('user is navigated to add candidate tab');
});
cy.get('body').then(($body) => {
    const backBtn = $body.find('.cam-body > .btn-container > .orange-hollow-btn');
    if (backBtn.length && backBtn.is(':visible')) {
    cy.log('Back button is visible and working.');
    // Optionally, click the back button to test navigation:
     cy.get('.cam-body > .btn-container > .orange-hollow-btn').click();
  } else {
    throw new Error('Back button is NOT visible or not working.');
  }
  cy.log('user is navigated to select evaluator');
});
    cy.get('body').then(($body) => {
    const backBtn = $body.find('.cam-body > .btn-container > .orange-hollow-btn');
    if (backBtn.length && backBtn.is(':visible')) {
    cy.log('Back button is visible and working.');
    // Optionally, click the back button to test navigation:
     cy.get('.cam-body > .btn-container > .orange-hollow-btn').click();
  } else {
    throw new Error('Back button is NOT visible or not working.');
  }
  cy.log('user is navigated to panel name');
});
    cy.get('body').then(($body) => {
    const backBtn = $body.find('.cam-body > .btn-container > .orange-hollow-btn');
    if (backBtn.length && backBtn.is(':visible')) {
    cy.log('Back button is visible and working.');
    // Optionally, click the back button to test navigation:
     cy.get('.cam-body > .btn-container > .orange-hollow-btn').click();
  } else {
    throw new Error('Back button is NOT visible or not working.');
  }
    cy.log('user is navigated to panel list screen');
});   
    });
  });
   });

