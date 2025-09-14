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
    cy.login(); 
  });

  it('playlist_room_scan', () => {
    cy.fixture('Data').then((data) => {
    // Navigate to playlist
    cy.get('[href="/playlists"] > span').click();
    waitForLoaderToDisappear();
    cy.get('.table-body > :nth-child(1) > :nth-child(1)').click();
    waitForLoaderToDisappear();

    // room scan navigation
    cy.get('.playlist-tabs > :nth-child(3)').click();
    cy.log('user is navigated');
    waitForLoaderToDisappear();

    // identity tab exports
    cy.get(':nth-child(4) > div > .button').click();
    cy.get('.list-unstyled > :nth-child(1)').click();
    cy.get(':nth-child(4) > div > .button').click();
    cy.get('.list-unstyled > :nth-child(2)').click();
    cy.get(':nth-child(4) > div > .button').click();
    cy.get('.list-unstyled > :nth-child(3)').click();
    cy.log('identity tab exports is working fine');
    cy.wait(2000);

    // identity action buttons
    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)').click();

    // edit settings
    cy.get(':nth-child(3) > .radio-btn > :nth-child(2) > .radio-button > input').click();
    cy.get(':nth-child(4) > .small-radio-btns > :nth-child(1) > .radio-button > input').click();
    cy.get(':nth-child(5) > .small-radio-btns > :nth-child(2) > .radio-button > input').click();
    cy.get('.btn-container > .orange-filled-btn').click();
    cy.log('settings updated');

    // verify settings
    cy.wait(2000);
    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)').click();
    cy.log('verify settings');
    waitForLoaderToDisappear();
    cy.get('.btn-container > .orange-hollow-btn').click();

    // verify statuses
    cy.get('.header-btns > :nth-child(1)').click(); // pending
    cy.get('.header-btns > :nth-child(2)').click(); // fair
    cy.get('.header-btns > :nth-child(3)').click(); // suspicon
    cy.get('.header-btns > :nth-child(4)').click(); // fraud
    cy.get('.header-btns > :nth-child(1)').click(); // back to pending
    cy.log('user is able to select all statuses');
    cy.wait(2000);

    // check cards if available
    const selectors = [
      '.users-list-box > :nth-child(1)',
      '.users-list-box > :nth-child(2)',
      '.users-list-box > :nth-child(3)',
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

    // evaluation statuses
    cy.get('.room-scanning-tabs > :nth-child(2)').click();
    cy.get('.room-scanning-tabs > :nth-child(3)').click();
    cy.log('user is able to select evaluation statuses');

    // evaluate fair
   cy.get('body').then($body => {
  const statusesExist = $body.find('.room-scanning-tabs').length > 0;
  const sessionsExist = $body.find('.session-card').length > 0; 

  if (!statusesExist) {
    cy.log('Statuses not found — skipping evaluation steps.');
    return;
  }

  if (!sessionsExist) {
    cy.log('No sessions available — skipping evaluation steps.');
    return;
  }

  // Evaluate Fair
  const fairTab = '.room-scanning-tabs > :nth-child(1)';
  if ($body.find(fairTab).length > 0) {
    cy.get(fairTab).click();
    cy.get('textarea').type(data.playlist_feedbacks_comments);
    cy.get('.next-btn > .button').then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click();
      } else {
        cy.log('Next button not visible after fair evaluation — skipping.');
      }
    });
    cy.wait(2000);
  } else {
    cy.log('Fair evaluation tab not found.');
  }

  // Evaluate Suspicion
  cy.get('.next-btn > .button').then($btn => {
    if ($btn.is(':visible')) {
      cy.wrap($btn).click();
      cy.get('textarea').type(data.playlist_feedbacks_comments);
      cy.get('.next-btn > .button').then($btn2 => {
        if ($btn2.is(':visible')) {
          cy.wrap($btn2).click();
        } else {
          cy.log('Next button not visible after suspicion evaluation — skipping.');
        }
      });
    } else {
      cy.log('Next button not visible for suspicion evaluation — skipping.');
    }
  });
  cy.wait(2000);

  // Evaluate Fraud
  const fraudTab = '.room-scanning-tabs > :nth-child(3)';
  if ($body.find(fraudTab).length > 0) {
    cy.get(fraudTab).click();
    cy.get('textarea').type(data.playlist_feedbacks_comments);
    cy.get('.next-btn > .button').then($btn => {
      if ($btn.is(':visible')) {
        cy.wrap($btn).click();
      } else {
        cy.log('Next button not visible after fraud evaluation — skipping.');
      }
    });
    cy.wait(2000);
  } else {
    cy.log('Fraud evaluation tab not found.');
  }
});

  });

  });

});
