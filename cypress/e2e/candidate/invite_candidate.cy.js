describe('candidateTestcases', () => {
  const selectors = {
    inviteButton: '[style="width: 80px; height: auto; min-height: 34px; border-radius: 5px;"]',
    candidateCheckbox: (index) => `.invite-modal-candidate-list > :nth-child(${index}) > .checkBox-container > .checkmark`,
    searchCandidateInput: '.search-candidate',
    searchIcon: '.invite-modal-item-detail-name > .search-icon',
    assessmentDropdown: '.dependant-field',
    assessmentOption: '.entities-dropdown > :nth-child(1)',
    startDateInput: '.invite-modal-schedule-start > input',
    endDateInput: '.invite-modal-schedule-time > .invite-modal-schedule-end > input',
    notifyCheckbox: '.invite-modal-schedule-block > .invite-modal-section > .checkBox-container > .checkmark',
    scheduleSlider: '.slider',
    scheduleEndInput: '.schedule-invite > .invite-modal-schedule-end > input',
    sendButton: '.invite-modal-btn-block > div > .button',
  };

  beforeEach(() => {
    cy.login();
  });

  // Format date 
  function formatDateTime(date) {
    const pad = (n) => n.toString().padStart(2, '0');
    return (
      date.getFullYear() +
      '-' +
      pad(date.getMonth() + 1) +
      '-' +
      pad(date.getDate()) +
      'T' +
      pad(date.getHours()) +
      ':' +
      pad(date.getMinutes())
    );
  }

  // Get valid datetime (future or now)
  function getValidDateTime(inputDateTimeStr) {
    const now = new Date();
    const inputDate = new Date(inputDateTimeStr);
    const finalDate = inputDate < now ? now : inputDate;
    return formatDateTime(finalDate);
  }

  // Select candidates by index array
  function selectCandidates(indexes = []) {
    indexes.forEach((i) => {
      cy.get(selectors.candidateCheckbox(i)).click();
    });
  }

  // Fill invite modal and send
  function fillInviteModal({ candidateIndexes = [], searchText = '', notify = true, scheduleInvite = false, startDateTime, endDateTime, scheduleEndTime }) {
    // Open invite modal
    cy.get(selectors.inviteButton).click();

    if (searchText) {
      cy.get(selectors.searchCandidateInput).clear().type(searchText);
      cy.get(selectors.searchIcon).click();
      // Wait for search results
      cy.get('.invite-modal-candidate-list').should('be.visible');
    }

    selectCandidates(candidateIndexes);

    cy.get(selectors.assessmentDropdown).click();
    cy.get(selectors.assessmentOption).click();

    cy.get(selectors.startDateInput).clear().type(startDateTime);
    cy.get(selectors.endDateInput).clear().type(endDateTime);

    if (!notify) {
      cy.get(selectors.notifyCheckbox).click();
    }

    if (scheduleInvite) {
      cy.get(selectors.notifyCheckbox).click();
      cy.get(selectors.scheduleSlider).click();
      cy.get(selectors.scheduleEndInput).clear().type(scheduleEndTime);
    }

    cy.get(selectors.sendButton).click();

    cy.log(`Candidate(s) invited${searchText ? ` by search '${searchText}'` : ''}${!notify ? ' without notify' : ''}${scheduleInvite ? ' by schedule invite' : ''}`);

    cy.get(selectors.inviteButton).should('be.visible'); // Wait for modal to close by checking invite button visible again
  }

  it('candidate', () => {
    cy.fixture('Data').then((data) => {
      const startDateTime = getValidDateTime(data.startDateTime || '2025-08-25T14:30');
      const endDateTime = getValidDateTime(data.endDateTime || '2025-09-25T14:30');

      // Calculate schedule end time (10 minutes after start)
      const scheduleEndDate = new Date(startDateTime);
      scheduleEndDate.setMinutes(scheduleEndDate.getMinutes() + 10);
      const scheduleEndTime = formatDateTime(scheduleEndDate);

      // 1. Invite candidates directly
      fillInviteModal({
        candidateIndexes: [1, 3],
        startDateTime,
        endDateTime,
      });

      // 2. Invite candidates by search
      fillInviteModal({
        candidateIndexes: [1, 3],
        searchText: 'mohsin',
        startDateTime,
        endDateTime,
      });

      // 3. Invite candidates without notify
      fillInviteModal({
        candidateIndexes: [1, 2],
        searchText: 'mohsin',
        notify: false,
        startDateTime,
        endDateTime,
      });

      // 4. Invite candidates by schedule invite
      fillInviteModal({
        candidateIndexes: [1, 3],
        searchText: 'mohsin',
        notify: false,
        scheduleInvite: true,
        startDateTime,
        endDateTime,
        scheduleEndTime,
      });
    });
  });
});
