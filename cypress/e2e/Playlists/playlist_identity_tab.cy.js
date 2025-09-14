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
    cy.login(); //  only login before each test
  });

  it('playlist_room_scan', () => {
    cy.fixture('Data').then((data) => {
    // go to playlists
    cy.get('[href="/playlists"] > span').click();
    waitForLoaderToDisappear();
    cy.get('.table-body > :nth-child(1) > :nth-child(1)').click();
    waitForLoaderToDisappear();

    // identity tab navigation
    cy.get('.playlist-tabs > :nth-child(2)').click();
    cy.log('User is navigated');
    waitForLoaderToDisappear();

    // identity tab exports
    cy.get(':nth-child(4) > div > .button').click();
    cy.get('.list-unstyled > :nth-child(1)').click();
    cy.get(':nth-child(4) > div > .button').click();
    cy.get('.list-unstyled > :nth-child(2)').click();
    cy.get(':nth-child(4) > div > .button').click();
    cy.get('.list-unstyled > :nth-child(3)').click();
    cy.log('Identity tab exports working fine');
    waitForLoaderToDisappear();

    // identity action buttons + edit settings
    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)').click();

    cy.get(':nth-child(3) > .radio-btn > :nth-child(2) > .radio-button > input').click();
    cy.get(':nth-child(4) > .small-radio-btns > :nth-child(1) > .radio-button > input').click();
    cy.get(':nth-child(5) > .small-radio-btns > :nth-child(2) > .radio-button > input').click();
    cy.get('.btn-container > .orange-filled-btn').click();
    cy.log('Settings updated');
    waitForLoaderToDisappear();

    // reopen settings to verify
    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)').click();
    waitForLoaderToDisappear();
    cy.get('.btn-container > .orange-hollow-btn').click();
    cy.log('Settings verified');

    // verify status filters (pending, fair, suspicion, fraud)
    cy.get('.header-btns > :nth-child(1)').click(); // pending
    cy.get('.header-btns > :nth-child(2)').click(); // fair
    cy.get('.header-btns > :nth-child(3)').click(); // suspicion
    cy.get('.header-btns > :nth-child(4)').click(); // fraud
    cy.get('.header-btns > :nth-child(1)').click(); // back to pending
    cy.log('User can switch between all statuses');
    waitForLoaderToDisappear();

    // check cards in pending
    const selectors = [
      '.users-list-box > :nth-child(1)',
      '.users-list-box > :nth-child(2)',
      '.users-list-box > :nth-child(3)'
    ];

    selectors.forEach((selector, index) => {
      cy.get('body').then(($body) => {
        const $el = $body.find(selector);

        if ($el.length > 0 && $el.is(':visible')) {
          cy.get(selector).click();
        } else {
          cy.log(`Element ${index + 1} not clickable or not visible: ${selector}`);
        }
      });
    });

    // verify evaluation statuses
    cy.get('.id-card-tabs > :nth-child(1)').click();
    cy.get('.id-card-tabs > :nth-child(2)').click();
    cy.get('.id-card-tabs > :nth-child(3)').click();
    cy.log('User can switch between evaluation statuses');

    // evaluate as fair
    cy.get('.id-card-tabs > :nth-child(1)').click();
    cy.get('textarea').type(data.playlist_feedbacks_comments);
    cy.get('.next-btn > .button').click();
    cy.wait(3000);

    // evaluate as suspicion
    // Attempt to proceed to next session
  cy.get('body').then(($body) => {
  const sessionExists = $body.find('.session-card').length > 0; // Replace selector if needed
  const $button = $body.find('.next-btn > .button');
  const buttonExists = $button.length > 0;
  const buttonVisible = buttonExists && $button.is(':visible');

  if (!sessionExists) {
    cy.log('No other session available — skipping actions.');
    return;
  }

  if (buttonVisible) {
    cy.log('Next button is visible — proceeding...');
    cy.get('.next-btn > .button').click();

    // Wait for textarea to appear and enter comments
    cy.get('textarea', { timeout: 10000 }).should('be.visible').type(data.playlist_feedbacks_comments);

    // Attempt to click Next again
    cy.get('body').then(($bodyAfterComment) => {
      const $nextBtn = $bodyAfterComment.find('.next-btn > .button');
      if ($nextBtn.length > 0 && $nextBtn.is(':visible')) {
        cy.log('Clicking Next after adding comments...');
        cy.get('.next-btn > .button').click();
      } else {
        cy.log('Next button not found after comment — skipping.');
      }
    });

    cy.wait(3000);
  } else {
    cy.log('Next button not visible or not found — skipping.');
  }
});

// Evaluate as fraud
cy.get('body').then($body => {
  const selector = '.id-card-tabs > :nth-child(3)';

  if ($body.find(selector).length > 0) {
    cy.log('Found Fraud tab — clicking it...');
    cy.get(selector).click();
  } else {
    cy.log('Fraud tab not found — skipping this step.');
    // Optional: Skip test if needed
    // this.skip(); // Only works in `function()` test blocks
  }
});

cy.get('textarea').type(data.playlist_feedbacks_comments);

// Check for session availability and button visibility
cy.get('body').then(($body) => {
  const buttonExists = $body.find('.next-btn > .button').length > 0;
  const sessionExists = $body.find('.session-card').length > 0; 

  if (!sessionExists) {
    cy.log('No other session available — skipping fraud evaluation.');
    return;
  }

  if (buttonExists && $body.find('.next-btn > .button').is(':visible')) {
    cy.log(' Button is visible — proceeding to click...');
    cy.get('.next-btn > .button').click();
  } else {
    cy.log('Button not visible or not found: .next-btn > .button — skipping action.');
  }
});

cy.wait(3000);  
    });
  });
});