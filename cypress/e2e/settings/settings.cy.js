describe('recruiter_dashboard_setting', () => {
  beforeEach(() => {
    cy.login(); 
  });

  it('languages', () => {
    cy.fixture('Data').then((data) => {
cy.get('.user-profile').click();
cy.get('body > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > section:nth-child(5) > div:nth-child(2) > div:nth-child(3) > span:nth-child(2)').click();

//first name
cy.get(':nth-child(1) > .icon-field > input').clear();
cy.get(':nth-child(1) > .icon-field > input').type(data.firstName);

//last name
cy.get(':nth-child(2) > .icon-field > input').clear();
cy.get(':nth-child(2) > .icon-field > input').type(data.lastName);

//phone number 
cy.get(':nth-child(4) > .icon-field > input').clear();
cy.get(':nth-child(4) > .icon-field > input').type(data.phone);

//time zone
cy.get('select').select(data.timezone);

//verify that email field is editable
cy.get(':nth-child(3) > .icon-field > input').then($input => {
  const isDisabled = $input.prop('disabled');
  const isReadOnly = $input.prop('readOnly');

  if (isDisabled || isReadOnly) {
    // Skip test 
    Cypress.log({ name: 'SKIP', message: 'Email field is not editable. Skipping test.' });
    return; 
  } else {
    throw new Error('Email field is editable, but it should not be!');
  }
});

    //verify username is editable 
    cy.get(':nth-child(6) > .icon-field > input').then($input => {
  const isDisabled = $input.prop('disabled');
  const isReadOnly = $input.prop('readOnly');

  if (isDisabled || isReadOnly) {
    Cypress.log({ name: 'SKIP', message: 'Input field is not editable. Skipping test.' });
    return;
  } else {
    throw new Error(' Input field is editable, but it should not be!');
  }
});
    //verify that institute is editable
    cy.get(':nth-child(7) > .icon-field > input').then($input => {
  const isDisabled = $input.prop('disabled');
  const isReadOnly = $input.prop('readOnly');

  if (isDisabled || isReadOnly) {
    Cypress.log({ name: 'SKIP', message: 'Input field is not editable. Skipping test.' });
    return;
  } else {
    throw new Error('Input field is editable, but it should not be!');
  }
});

    //verify that role is editable
    cy.get(':nth-child(8) > .icon-field > input').then($input => {
  const isDisabled = $input.prop('disabled');
  const isReadOnly = $input.prop('readOnly');

  if (isDisabled || isReadOnly) {
    Cypress.log({ name: 'SKIP', message: 'Input field is not editable. Skipping test.' });
    return;
  } else {
    throw new Error('Input field is editable, but it should not be!');
  }
});

    cy.get('.button').click(); //save information button


    //verify that user is able to save profile without first name 
    cy.get(':nth-child(1) > .icon-field > input').clear();
    //save button
    cy.get('body').then($body => {
    const $button = $body.find('.button');

  if ($button.length === 0 || !$button.is(':visible') || $button.prop('disabled')) {
    Cypress.log({ name: 'SKIP', message: 'Button is not visible/clickable. Skipping test.' });
    return;
  } else {
    throw new Error(' Button is visible and clickable, but test expects it NOT to be.');
  }
});

    //verify that user is able to add profile withput enter last name 
    cy.get(':nth-child(1) > .icon-field > input').type(data.firstName);
    cy.get(':nth-child(2) > .icon-field > input').clear();
     //save button
    cy.get('body').then($body => {
    const $button = $body.find('.button');

  if ($button.length === 0 || !$button.is(':visible') || $button.prop('disabled')) {
    Cypress.log({ name: 'SKIP', message: 'Button is not visible/clickable. Skipping test.' });
    return;
  } else {
    throw new Error(' Button is visible and clickable, but test expects it NOT to be.');
  }
});

    //verify that user is able to add profile without enter phone number
    cy.get(':nth-child(4) > .icon-field > input').clear();
    //save button
    cy.get('body').then($body => {
    const $button = $body.find('.button');

  if ($button.length === 0 || !$button.is(':visible') || $button.prop('disabled')) {
    Cypress.log({ name: 'SKIP', message: 'Button is not visible/clickable. Skipping test.' });
    return;
  } else {
    throw new Error(' Button is visible and clickable, but test expects it NOT to be.');
  }
});
















    });


    });
});