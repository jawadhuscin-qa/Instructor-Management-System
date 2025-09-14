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
    // Navigate to playlists
    cy.get('[href="/playlists"] > span').click();
    waitForLoaderToDisappear();
    cy.get('.table-body > :nth-child(1) > :nth-child(1)').click();
    waitForLoaderToDisappear();
    cy.get('.playlist-tabs > :nth-child(5)').click();
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
    cy.wait(2000);

    cy.get(':nth-child(2) > div > .button').click();
    cy.get('.show.dropdown > .dropdown-menu > .list-unstyled > :nth-child(1)').click();
    cy.log('verify settings');
    waitForLoaderToDisappear();
    cy.get('.btn-container > .orange-hollow-btn').click();

    // Add Sessions
    cy.get('.ai-logs-header > div > p').click();
    waitForLoaderToDisappear();
    cy.get('.candidates-container > :nth-child(1) > input', { timeout: 10000 }).should('be.visible').click();
    cy.get('.btn-container > .orange-filled-btn').click();
    waitForLoaderToDisappear();

    // verify cancel button functionality
    cy.get('.ai-logs-header > div > p').click();
    waitForLoaderToDisappear();
    cy.get('.btn-container > .orange-hollow-btn').click();

    // slider
    cy.get('.orange-slider')
      .should('be.visible')
      .then(($slider) => {
        const width = $slider.width();
        cy.wrap($slider)
          .trigger('mousedown', { which: 1, pageX: 0, force: true })
          .trigger('mousemove', { which: 1, pageX: width * 0.75, force: true })
          .trigger('mouseup', { force: true });
      });

    cy.log('Slider moved to position');
  });
});
