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

  it('duplicate_assessment', () => {
    cy.fixture('Data').then((data) => {

    cy.get('[href="/assessments"] > span',{ timeout: 10000 }).click();
    waitForLoaderToDisappear();
     cy.get('tbody > :nth-child(2) > :nth-child(1)').click();
     waitForLoaderToDisappear();

     cy.get('#dropdown-basic-button > div > .button').click(); //actions button
     
//      //import and invite
//      cy.get('.list-unstyled > :nth-child(1)').click();
//     cy.get('.dropzone > :nth-child(1)') 
//   .selectFile('cypress\\Dummy file for upload.pdf', { force: true }); 

    //change assessment last date
    cy.get('.list-unstyled > :nth-child(2)').click();
    cy.get('input').type(data.assessment_last_date)
    cy.get('.orange-filled-btn').click();
     cy.get('#dropdown-basic-button > div > .button').click(); //actions button
     cy.get('.list-unstyled > :nth-child(2)').click();
     cy.get('.invite-modal-btn-block > .orange-hollow-btn').click();

     //change assessment status - opened
     cy.get('#dropdown-basic-button > div > .button').click(); //actions button
     cy.get('.list-unstyled > :nth-child(3)').click();
     //cy.get('.drop-down').select('2');
     cy.get('.drop-down').select(data.drop_down_selection);
     cy.get('.orange-filled-btn').click();
     // Check the assessment duration after clicking
// cy.get('.assessment-duration-input').then(($input) => {
//   const durationValue = $input.val();

//   if (!durationValue || durationValue.trim() === '') {
//     // Duration not filled
//     cy.log('Error: Assessment duration is required');
//     // Optionally, fail the test
//     throw new Error('Assessment duration is required');
//   } else {
//     // Duration is filled
//     cy.log(`Assessment duration is set: ${durationValue}`);
//   }
// });
//change assessment status - closed
     
 });
  }); 
  }); 