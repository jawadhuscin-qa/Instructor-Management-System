describe('candidateTestcases', () => {

  beforeEach(() => {
    cy.login();

    // Intercept candidate creation API
    cy.intercept('POST', '**/candidate/').as('createCandidate');

    cy.fixture('Data').as('data');
  });

  // open the candidate creation modal
  const openCandidateModal = () => {
    cy.get('[style="width: auto; height: auto; min-height: 34px; border-radius: 5px; padding: 5px 10px;"]').click();
  };

  //  fill candidate fields
  const fillCandidateForm = ({ firstName, surname, email, phone, externalId, groupId }) => {
    if (firstName) cy.get(':nth-child(1) > .create-candidate-item-detail-value').type(firstName);
    if (surname) cy.get(':nth-child(2) > .create-candidate-item-detail-value').type(surname);
    if (email) cy.get(':nth-child(3) > .create-candidate-item-detail-value').type(email);
    if (phone) cy.get(':nth-child(4) > .create-candidate-item-detail-value').type(phone);
    if (externalId) cy.get(':nth-child(5) > .create-candidate-item-detail-value').type(externalId);
    if (groupId) cy.get(':nth-child(6) > .create-candidate-item-detail-value').type(groupId);
  };

  it('candidate creation scenarios', function () {
    const data = this.data;

    // 1. Create full candidate
    openCandidateModal();
    fillCandidateForm({
      firstName: data.firstName,
      surname: data.surname,
      email: data.email_id,
      phone: data.phone,
      externalId: data.external_id,
      groupId: data.group_id
    });
    cy.get('.create-candidate-btn-container > .button').click();
    cy.wait('@createCandidate');
    cy.log('Candidate created');

    // 2. Try to create candidate with only first + last name (should disable button)
    openCandidateModal();
    fillCandidateForm({
      firstName: data.firstName,
      surname: data.surname
    });
    cy.get('.create-candidate-btn-container > .button').should('be.disabled');
    cy.get('.create-candidate-cancel-btn').click();
    cy.log('Validation: mandatory fields missing');

    // 3. Create with first + last name + valid email
    openCandidateModal();
    fillCandidateForm({
      firstName: data.firstName,
      surname: data.surname,
      email: data.email_id
    });
    cy.get('.create-candidate-btn-container > .button').click();
    cy.wait('@createCandidate');
    cy.log('Candidate created with email');

    // 4. Try to create candidate with invalid email
    const invalidEmail = 'invalidemail';
    openCandidateModal();
    fillCandidateForm({
      firstName: data.firstName,
      surname: data.surname,
      email: invalidEmail
    });
    cy.get('.create-candidate-btn-container > .button').should('be.disabled');
    cy.get('.create-candidate-cancel-btn').click();
    cy.log('Validation: invalid');
  });

});
