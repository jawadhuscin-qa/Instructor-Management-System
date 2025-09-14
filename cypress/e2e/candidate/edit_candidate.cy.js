describe('candidate Testcases', () => {

  beforeEach(() => {
    cy.login();

    // Intercept candidate update API
    cy.intercept('PUT', '**/candidate/**').as('updateCandidate');

    // Load fixture data once before each test
    cy.fixture('Data').as('updateData');
  });

  // open edit modal for first candidate
  const openEditCandidateModal = () => {
    cy.get('tbody > :nth-child(1) > :nth-child(3)').click();
    cy.get('.btn-block > :nth-child(5)').click();
  };

  // update candidate fields
  const updateCandidateFields = ({ firstName, surname, phone, externalId, groupId }) => {
    if (firstName !== undefined) {
      cy.get(':nth-child(1) > .create-candidate-item-detail-value').clear().type(firstName);
    }
    if (surname !== undefined) {
      cy.get(':nth-child(2) > .create-candidate-item-detail-value').clear().type(surname);
    }
    if (phone !== undefined) {
      cy.get(':nth-child(4) > .create-candidate-item-detail-value').clear().type(phone);
    }
    if (externalId !== undefined) {
      cy.get(':nth-child(5) > .create-candidate-item-detail-value').clear().type(externalId);
    }
    if (groupId !== undefined) {
      cy.get(':nth-child(6) > .create-candidate-item-detail-value').clear().type(groupId);
    }
  };

  it('edit_candidate', function () {
    const data = this.updateData;

    // 1. Open edit modal and update all fields
    openEditCandidateModal();
    updateCandidateFields({
      firstName: data.firstName,
      surname: data.surname,
      phone: data.phone,
      externalId: data.external_id,
      groupId: data.group_id
    });
    cy.get('.create-candidate-btn-container > .button').click();
    cy.wait('@updateCandidate');
    cy.log('Candidate updated with all fields');

    // 2. Update only first name and external id
    cy.get('.btn-block > :nth-child(5)').click();
    updateCandidateFields({
      firstName: data.firstName,
      externalId: data.external_id
    });

    // 3. Check if email field is editable
    cy.get(':nth-child(3) > .create-candidate-item-detail-value').then($input => {
      if ($input.is(':disabled') || $input.attr('readonly')) {
        cy.log('Email field is not editable');
      } else {
        cy.wrap($input).clear().type('abc@mereos.com');
        cy.log('Email entered successfully');
        cy.get('.create-candidate-cancel-btn').click();
      }
    });
  });

});
