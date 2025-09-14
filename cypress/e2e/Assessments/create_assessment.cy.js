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

  it('create_assessment', () => {
    cy.fixture('Data').then((data) => {

    cy.get('[href="/assessments"] > span',{ timeout: 10000 }).click();
    waitForLoaderToDisappear();

    // Create single section assessment
    cy.get('.buttons-block > :nth-child(4)').click();
    cy.get('.tab-block > input').type(data.assessment_name);
    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
    cy.get('.section-body > :nth-child(1) > input').click();
    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
    cy.get('.fields > input').type(data.section_name);
    
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
    cy.log('Assessment with single section is created');
    cy.wait(3000);

    // Create assessment with multiple sections
    cy.get('.buttons-block > :nth-child(4)').click();
    cy.get('.tab-block > input').type(data.assessment_name);
    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
    cy.get('.section-body > :nth-child(2) > input').click();
    cy.get('.number-field > input').type('2');
    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
    cy.get(':nth-child(1) > .fields > input').type(data.section_name);
    cy.get(':nth-child(2) > .fields > input').type(data.section_name);
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
    cy.wait(5000);

    //cancel button
    cy.get('.buttons-block > :nth-child(4)').click();
    cy.get('.cam-body > .btn-container > .orange-hollow-btn').click();
    
    //back button
    cy.get('.buttons-block > :nth-child(4)').click();
    cy.get('.tab-block > input').type('Cypress Assessment');
    cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
    cy.get('.cam-body > .btn-container > .orange-hollow-btn').click();
    cy.log('screen is navigated to assessment name');
    
 });
  }); 
  }); 