describe('assessments', () => {
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

  it('assessment_configuration', () => {
    cy.fixture('Data').then((data) => {

    cy.get('[href="/assessments"] > span',{ timeout: 10000 }).click();
    waitForLoaderToDisappear();
    cy.get('tbody > :nth-child(2) > :nth-child(1)').click();
    waitForLoaderToDisappear();
    cy.get('[title=""]',{ timeout: 10000 }).click();
    cy.get('.dependant-field').click(); //select template
    cy.log('dropdown clicked');
    //cy.get('.entities-dropdown > :nth-child(2)').click();
    cy.log('template selected');

    cy.get('span > input').type(data.assessment_duration); //assessment_duration
    cy.log('time is set');

    //cancel alert message
    cy.get('body').find('.cancel_button')
  .then($btn => {
    if ($btn.length > 0) {
      cy.wrap($btn).click();
      cy.log('Cancel button clicked.');
    } else {
      cy.log('Cancel button not found, skipping click.');
    }
  });

    //assessment type
    cy.get(':nth-child(2) > .radio-button > input').click(); //random
    //if type is select random
    cy.get(':nth-child(3) > .radio-buttons > :nth-child(2) > .radio-button > input').click();
    cy.get(':nth-child(5) > .max-section-time > span > input').type(data.assessment_duration); //number of items
    //assessment type fixed
    // cy.get(':nth-child(4) > .radio-buttons > :nth-child(2) > .radio-button > input').click();
    // cy.get(':nth-child(5) > .radio-buttons > :nth-child(1) > .radio-button > input').clcik(); //shuffle item yes

    //if another section is available
    cy.get('body').find(':nth-child(2) > .section-card > .section-image > img')
    .then($section => {
    if ($section.length > 0) {
      cy.wrap($section).click();
      cy.get('.dependant-field').click(); // select template
      cy.log('dropdown clicked');
      // cy.get('.entities-dropdown > :nth-child(2)').click(); // optional template selection
      cy.log('template selected');
      cy.get('span > input').type(data.assessment_duration);
      cy.log('time is set');
    const cancelBtn = Cypress.$('.cancel_button');

    if (cancelBtn.length > 0) {
    cy.wrap(cancelBtn).click();
    cy.log('Cancel button clicked.');
  }   
    else {
    cy.log('Cancel button not found, skipping click.');
  }

      cy.log('message is closed');
      cy.get(':nth-child(2) > .radio-button > input').click();
      cy.get(':nth-child(4) > .radio-buttons > :nth-child(2) > .radio-button > input').click(); // assessment type fixed
      cy.get(':nth-child(5) > .radio-buttons > :nth-child(1) > .radio-button > input').click(); // shuffle item yes
    } else {
      cy.log('Another section not available, skipping setup steps.');
    }
  });
    cy.get('.orange-filled-btn').click(); //save butotn

    });
  }); 
  }); 
