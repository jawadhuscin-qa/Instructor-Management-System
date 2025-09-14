describe('candidate Testcases', () => {

  beforeEach(() => {
    cy.login(); 
  });

  it('candidate_fraud_report', () => {

    cy.fixture('Data').then((updateData) => {
     cy.get('tbody > :nth-child(5) > :nth-child(2)').click();
     

      //------------------ On Hold status ----------------------
      cy.get('.active > .assessment-list > img').click();
      cy.get('.ql-editor > p').type(updateData.fraud_report_description);
      cy.get('.drop-down').select(2);
      cy.get('.dropzone').selectFile('cypress\\Dummy file for upload.pdf', { action: 'drag-drop' });
      cy.get('.buttons > .orange-filled-btn').click();
      cy.get('.add-solution').click();
      cy.wait(5000);

      //------------------ Invalid status ----------------------
      cy.get('.active > .assessment-list > img').click();
      cy.get('.ql-editor > p').type(updateData.fraud_report_description);
      cy.get('.dropzone').selectFile('cypress\\Dummy file for upload.pdf', { action: 'drag-drop' });
      cy.get('.buttons > .orange-filled-btn').click();

      //------------------ Multiple solutions ------------------
      cy.get('.active > .assessment-list > img').click();
      cy.get('.ql-editor > p').type(updateData.fraud_report_description);
      cy.get('.dropzone').selectFile('cypress\\Dummy file for upload.pdf', { action: 'drag-drop' });
      cy.get('.add-solution').click();
      cy.get(':nth-child(3) > .dropzone-container > .files-dropzone > .dropzone')
        .selectFile('cypress\\Dummy file for upload.pdf', { action: 'drag-drop' });
      cy.get('.buttons > .orange-filled-btn').click();
    }); 

  }); 

});
