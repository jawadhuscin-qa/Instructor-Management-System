describe('recruiter_dashboard_setting', () => {
  beforeEach(() => {
    cy.login(); 
  });

  it('languages', () => {
    const clickLanguage = (title) => {
      const selector = `div[title='${title}'] span`;
      cy.get('body').then(($body) => {
        if ($body.find(selector).length > 0) {
          cy.get(selector).should('be.visible').click()
            .then(() => {
              cy.log(`Clicked on language: ${title}`);
            });
        } else {
          throw new Error(`Language "${title}" not found or not visible`);
        }
      });
    };

    const languages = [
      'French',
      'Espagnol',
      'Galés',
      'Eidaleg',
      'Portoghese (Brasile)',
      'Alemão',
      'Niederländisch',
      'Engels'
    ];

    languages.forEach((lang) => {
      cy.get('.user-profile').click();
      clickLanguage(lang);
    });
  });
});
