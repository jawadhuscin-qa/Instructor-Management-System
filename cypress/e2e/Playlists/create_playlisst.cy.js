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
      // Navigate to playlists
      cy.get('[href="/playlists"] > span').click();
     waitForLoaderToDisappear();

      // Create playlist
      cy.get('.header-icons > :nth-child(4)').click();
     waitForLoaderToDisappear();
      cy.get('.input-field', { timeout: 10000 }).should('be.visible').type(data.playlist_name);
      cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
      waitForLoaderToDisappear();

      // Select proctor
      cy.get('.entities-dropdown > :nth-child(2)').click();
      cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
      waitForLoaderToDisappear();
      // Select candidate
      cy.get('.add-candidates-conatiner > :nth-child(2) > :nth-child(1) > input').click();
      cy.get('.cam-body > .btn-container > .orange-filled-btn').click();

      // Validate & update schedule time
      cy.get('.schedule-start > .input-field').then(($input) => {
        const inputValue = $input.val();
        const inputDate = new Date(inputValue);
        const now = new Date();

        // Format current date/time as YYYY-MM-DDThh:mm
        const pad = (num) => num.toString().padStart(2, '0');
        const formattedDateTime = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;

        if (isNaN(inputDate.getTime()) || inputDate < now) {
          cy.get('.schedule-start > .input-field').clear().type(formattedDateTime);
          cy.log(`Updated start time to current: ${formattedDateTime}`);
        } else {
          cy.log('Start time is valid');
        }
      }).then(() => {
        cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
        cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
      });

      waitForLoaderToDisappear();

      // Back button functionalities
      cy.get('.header-icons > :nth-child(4)').click();
      waitForLoaderToDisappear();
      cy.get('.input-field', { timeout: 10000 }).should('be.visible').type(data.playlist_name);
      cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
      waitForLoaderToDisappear();

      // Select proctor
      cy.get('.entities-dropdown > :nth-child(2)').click();
      cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
      waitForLoaderToDisappear();

      // Select candidate
      cy.get('.add-candidates-conatiner > :nth-child(2) > :nth-child(1) > input').click();
      cy.get('.cam-body > .btn-container > .orange-filled-btn').click();

      // Validate & update schedule time
      cy.get('.schedule-start > .input-field').then(($input) => {
        const inputValue = $input.val();
        const inputDate = new Date(inputValue);
        const now = new Date();

        // Format current date/time as YYYY-MM-DDThh:mm
        const pad = (num) => num.toString().padStart(2, '0');
        const formattedDateTime = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;

        if (isNaN(inputDate.getTime()) || inputDate < now) {
          cy.get('.schedule-start > .input-field').clear().type(formattedDateTime);
          cy.log(`Updated start time to current: ${formattedDateTime}`);
        } else {
          cy.log('Start time is valid');
        }
      }).then(() => {
        cy.get('.cam-body > .btn-container > .orange-filled-btn').click();
        
        //playlist settings button
        //Logic: If button is not working then stop the test
        cy.get('.cam-body > .btn-container > .orange-hollow-btn', { timeout: 10000 }).should('be.visible').and('not.be.disabled')
        .then(($btn) => {
        if ($btn.length === 0) {
        throw new Error('Playlist settings screen Back button is not working');
    } 
        else {
      cy.wrap($btn).click();
      cy.log('Back button worked. Navigation changed.');
    }
    });
    //playlist date and time back button 
      cy.get('.cam-body > .btn-container > .orange-hollow-btn', { timeout: 10000 }).should('exist').should('be.visible').and('not.be.disabled')
      .then(($btn) => {
      if ($btn.length === 0) {
      throw new Error('Playlist date and time  screen Back button is not working');
    }

    cy.wrap($btn).click();
    cy.log('Back button worked. Navigation changed.');
  });

    //Add Candidate screen Back button
    cy.get('.cam-body > .btn-container > .orange-hollow-btn', { timeout: 10000 }).should('exist').should('be.visible').and('not.be.disabled')
      .then(($btn) => {
      if ($btn.length === 0) {
      throw new Error('Add candidate screen Back button is not working');
    }

    cy.wrap($btn).click();
    cy.log('Back button worked. Navigation changed.');
  });

    //select proctor screen back button
    cy.get('.cam-body > .btn-container > .orange-hollow-btn', { timeout: 10000 }).should('exist').should('be.visible').and('not.be.disabled')
      .then(($btn) => {
      if ($btn.length === 0) {
      throw new Error('Select proctor screen Back button is not working');
    }

    cy.wrap($btn).click();
    cy.log('Back button worked. Navigation changed.');
  });

    //Playlist name screen
     cy.get('.cam-body > .btn-container > .orange-hollow-btn', { timeout: 10000 }).should('exist').should('be.visible').and('not.be.disabled')
      .then(($btn) => {
      if ($btn.length === 0) {
      throw new Error('Playlist name screen back button is not working');

    }

    cy.wrap($btn).click();
    cy.log('Back button worked. Navigation changed.');
  }); 
});
}); 
  }); 

});
