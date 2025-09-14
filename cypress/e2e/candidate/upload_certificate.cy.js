describe('candidate Testcases', () => {

  beforeEach(() => {
    cy.login();
  });

  it('candidate upload resume', () => {
    // Select the first candidate from the table
    cy.get('tbody > :nth-child(1) > :nth-child(2)').click();

    // Upload resume file
    cy.get('#resume-file').selectFile("cypress\\Dummy file for upload.pdf");
  });
});
