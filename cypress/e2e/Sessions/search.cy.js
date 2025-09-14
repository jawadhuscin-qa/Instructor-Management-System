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
    // Open Sessions
    cy.get('[href="/sessions"] > span').click();
    waitForLoaderToDisappear();

    //search by name
    cy.get('.form-control').type(data.firstName);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by name is successfull');

    //search by section name 
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.section_name_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by section name is successfull');

    //search by playlist name
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.playlist_name_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by playlist name is successfull');

    //search by panel name
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.panel_name_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by panel name is successfull');

    //search by assessment name
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.assessment_name_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by assessment name is successfull');

    //search by browser
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.browser_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by browser is successfull');

    //search by audio recording
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.audio_recording_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by audio recording is successfull');

    //search by browser version
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.browser_version_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by browser version is successfull');

    //search by camera recording
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.camera_recording_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by camera recording is successfull');

    //search by candidate ID
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.candidate_id_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by candidate id is successfull');

    //search by candidate name
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.candidate_name_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by candidate name is successfull');

    //search by candidate invite section assessment
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.candidate_invite_section_assessment_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by candidate invite section assessment is successfull');

    //search by conversation id
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.conversation_id_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by conversation id is successfull');

    //search by Course ID
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.course_id_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by course Id is successfull');

    //Search by Room ID
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.room_id_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by Room Id is successfull');

    //Search by school name 
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.school_name_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by school is successfull');

    //search by room scan recording
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.room_scan_recording_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('search by room scan recording is successfull');

    //search by partial keyword
    cy.get('.form-control').clear();
    cy.get('.form-control').type(data.partial_keyword_search);
    cy.get('.search-icon').click();
    waitForLoaderToDisappear();
    cy.log('Result is display successfully');
  }); 
  });   

});     

