describe('assessments', () => {
  const waitForLoaderToDisappear = () => {
    cy.get('body').then($body => {
      if ($body.find('.bounce2').length > 0) {
        cy.log(' Loader found, waiting to disappear...');
        cy.get('.bounce2', { timeout: 15000 }).should('not.exist');
      } else {
        cy.log(' No loader found, continuing...');
      }
    });
  }
  beforeEach(() => {
    cy.login(); 
  });

  it('edit_template', () => {

    cy.get('[href="/assessments"] > span',{ timeout: 10000 }).click();
    waitForLoaderToDisappear();
    cy.get('tbody > :nth-child(2) > :nth-child(1)').click();
    waitForLoaderToDisappear();
    cy.get('.menu > :nth-child(4)').click(); //edit template
    cy.log('User is navigated to edit template');

    //Complete Template
    cy.get('.subject > input').clear();
    cy.get('.subject > input').type('<p>Thank you for completing your assessment.</p>');
    cy.get('.ql-editor').clear();
   cy.get('.ql-editor').type(
  'Dear {{firstName}} {{lastName}},\n\nThank you for completing your assessment. Your answers have been submitted for evaluation.\n\nBest of Luck & Regards,\n\n{{school}}\n\n*************************************************************************************\n\nThis is a system generated message. Please do not reply to this email.',
  { parseSpecialCharSequences: false }
);
  cy.get('.button').click();
  cy.log('complete template updated');

  //Extension Template
  cy.get('.left-section > .menu > :nth-child(2)').click();
  cy.get('.subject > input').clear();
  cy.get('.subject > input').type('<p>Extended: {{school}} is inviting you to attend an assessment.</p>',
  { parseSpecialCharSequences: false }
);

  cy.get('.ql-editor').clear();
  cy.get('.ql-editor').type(
  'Dear {{firstName}} {{lastName}},\n\nYou have been invited to attend an assessment with {{school}} for the position of {{assessmentName}}. Your last date for this assessment has been extended to {{endAt}}.\n\nIn case this is the first time you are attending an assessment from Mereos you can refer to the Candidate Guide.. You can also attend a Practice Assessment  In case you face any issue during the practice you can contact technical support anytime at +331 79 72 66 00 or support@mereos-secure.com.\n\nOnce you are ready to take your official assessment please click the \'link\' below. Please note that you can use this link as long as assessment is not completed.\n\n{{link}}\n\nYou can also scan {{qrCode}}\n\nYour verification code is {{examCode}}\n\nKindly call +331 79 72 66 00 or raise the support ticket using Raise Support Ticket in case of any assistance with your assessment at the time of taking the assessment itself.\n\nNote:\n\nYou must have an active Internet connection with a minimum speed of 256 Kbps, a webcam, a microphone and speakers / headphones in order to attend the assessment.\nPlease use a good quality microphone for the assessment; inbuilt mic in laptop can be used but do not use mobile phone mic.\nEnsure that you complete it in advance to avoid last minutes technical snags.\n\n\nBest of Luck & Regards,\n\n{{school}}\n\n*************************************************************************************\n\nThis is a system generated message. Please do not reply to this email.',
  { parseSpecialCharSequences: false }
);
    cy.get('.button').click();
    cy.log('extension template updated');

    //Invite Template
    cy.get('.left-section > .menu > :nth-child(3)').click();
    cy.get('.subject > input').clear();
    cy.get('.subject > input').type(
  '<p>{{school}} is inviting you to attend an assessment.</p>',
  { parseSpecialCharSequences: false }
);

    cy.get('.ql-editor').clear();
    cy.get('.ql-editor').type(
  'Dear {{firstName}},\n\nThis is an email from {{school}}. You have been invited to attend an assessment with {{school}} for the position of {{assessmentName}}. Last date to complete the assessment is {{end-date-tz}}.\n\nIn case this is the first time you are attending an assessment from Mereos you can refer to the Candidate Guide.. You can also attend a Practice Assessment .\n\nKindly call +331 79 72 66 00 or raise the support ticket using Raise Support Ticket in case of any assistance with your assessment at the time of taking the assessment itself.\n\nOnce you are ready to take your official assessment please click the \'link\' below. Please note that you can use this link as long as assessment is not completed.\n\n{{link}}\n\nYou can also scan {{qrCode}}\n\nYour verification code is {{examCode}}\n\nKindly call +331 79 72 66 00 or do write to us at support@mereos-secure.com in case of any assistance with your assessment at the time of taking the assessment itself.\n\nNote:\n\nYou must have an active Internet connection with a minimum speed of 256 Kbps, a webcam, a microphone and speakers / headphones in order to attend the assessment.\nPlease use a good quality microphone for the assessment; inbuilt mic in laptop can be used but do not use mobile phone mic.\nEnsure that you complete it in advance to avoid last minutes technical snags.\n\n\nBest of Luck & Regards,\n\n{{school}}\n\n*************************************************************************************\n\nThis is a system generated message. Please do not reply to this email.',
  { parseSpecialCharSequences: false }
);
  cy.get('.button').click();
  cy.log('Invite template updated');

    //Rejection Temlate
    cy.get('.left-section > .menu > :nth-child(4)').click();
    cy.get('.subject > input').clear();
    cy.get('.subject > input').type(
  '<p>Regarding your assessment with {{school}}</p>',
  { parseSpecialCharSequences: false }
);

    cy.get('.ql-editor').clear();
    cy.get('.ql-editor').type(
    'Dear {{firstName}} {{lastName}},\n\nThank you for your time and interest in {{school}}. We have evaluated your responses from your assessment the position {{assessmentName}}. We carefully reviewed your responses and profile although we are unable to find a strong match with your qualifications and the position at this time, we will be keeping your resume and answers active in our system. We will continue to use our database to match your profile with new opportunities and will reach out to you if we find an opening for which you may be qualified.\n\nThanks again for your interest in {{school}} careers and our unique culture; we hope you will remain enthusiastic about our company. If you have any questions, please feel free to contact us.\n\n\nBest of Luck & Regards,\n\n{{school}}\n\n*************************************************************************************\n\nThis is a system generated message. Please do not reply to this email.',
    { parseSpecialCharSequences: false }
);
  cy.get('.button').click();
  cy.log('rejection template updated');

    //Reminder Template
    cy.get('.left-section > .menu > :nth-child(5)').click();
    cy.get('.subject > input').clear();
    cy.get('.subject > input').type(
  '<p>Reminder: {{school}} is inviting you to attend an assessment.</p>',
  { parseSpecialCharSequences: false }
);

  cy.get('.ql-editor').clear();
  cy.get('.ql-editor').type(
  'Dear {{firstName}} {{lastName}},\n\n' +
  'You have been invited to attend an assessment with {{school}} for the position of {{assessmentName}}. Last date to complete the assessment is {{end-date-tz}}.\n\n' +
  'In case this is the first time you are attending an assessment from Mereos you can refer to the Candidate Guide.. You can also attend a Practice Assessment .\n\n' +
  'Kindly call +331 79 72 66 00 or raise the support ticket using Raise Support Ticket in case of any assistance with your assessment at the time of taking the assessment itself.\n\n' +
  "Once you are ready to take your official assessment please click the 'link' below. Please note that you can use this link as long as assessment is not completed.\n\n" +
  '{{link}}\n\n' +
  'You can also scan {{qrCode}}\n\n' +
  'Your verification code is {{examCode}}\n\n\n' +
  'Kindly call +331 79 72 66 00 or do write to us at support@mereos-secure.com in case of any assistance with your assessment at the time of taking the assessment itself.\n\n' +
  'Note:\n\n' +
  'You must have an active Internet connection with a minimum speed of 256 Kbps, a webcam, a microphone and speakers / headphones in order to attend the assessment.\n' +
  'Please use a good quality microphone for the assessment; inbuilt mic in laptop can be used but do not use mobile phone mic.\n' +
  'Ensure that you complete it in advance to avoid last minutes technical snags.\n\n\n' +
  'Best of Luck & Regards,\n\n' +
  '{{school}}\n\n' +
  '*************************************************************************************\n\n' +
  'This is a system generated message. Please do not reply to this email.',
  { parseSpecialCharSequences: false }
);
  cy.get('.button').click();
  cy.log('Reminder template updated');



    //Selection Template
    cy.get('.left-section > .menu > :nth-child(6)').click();
    cy.get('.subject > input').clear();
    cy.get('.subject > input').type(
  '<p>Congratulations! You have cleared your assessment round with {{school}}.</p>',
  { parseSpecialCharSequences: false }
);
    cy.get('.ql-editor').clear();
    cy.get('.ql-editor').type(
  'Dear {{firstName}} {{lastName}},\n\n' +
  'Thank you for your time and interest in {{school}}. We have evaluated your responses from your assessment for the position {{assessmentName}}. It is our pleasure to tell you that you have successfully cleared your assessment round with {{school}} for {{assessmentName}}. Our team will contact you with further instructions.\n\n\n' +
  'Best of Luck & Regards,\n\n' +
  '{{school}}\n\n' +
  '*************************************************************************************\n\n' +
  'This is a system generated message. Please do not reply to this email.',
  { parseSpecialCharSequences: false }
);
  cy.get('.button').click();
  cy.log('selection template updated');


    //Update_Assessment_Finished Template
    cy.get('.left-section > .menu > :nth-child(7)').click();
    cy.get('.subject > input').clear();
    cy.get('.subject > input').type(
  '<p>Information : {{candidateName}} a terminé son test {{assessmentName}}</p>',
  { parseSpecialCharSequences: false }
);
  cy.get('.ql-editor').clear();
  cy.get('.ql-editor').type(
  'Cher {{instructorName}},\n\n' +
  'Le candidat {{candidateName}} a terminé son test {{assessmentName}}.\n\n' +
  'Très bonne journée,\n\n' +
  'Support Mereos\n\n' +
  '*********\n\n' +
  'Ceci est un message généré automatiquement par la plateforme Mereos, veuillez ne pas répondre à ce mail.',
  { parseSpecialCharSequences: false }
);
  cy.get('.button').click();
  cy.log('update_assessment_finished template updated');


    //Update_Assessment_started Template
    cy.get('.left-section > .menu > :nth-child(8)').click();
    cy.get('.subject > input').clear();
    cy.get('.subject > input').type(
  '<p>Information : {{candidateName}} a démarré son test {{assessmentName}}</p>',
  { parseSpecialCharSequences: false }
);
    cy.get('.ql-editor').clear();
    cy.get('.ql-editor').type(
  'Cher {{instructorName}},\n\n' +
  'Le candidat {{candidateName}} a démarré son test {{assessmentName}}.\n\n' +
  'Très bonne journée,\n\n' +
  'Support Mereos\n\n' +
  '*********\n\n' +
  'Ceci est un message généré automatiquement par la plateforme Mereos, veuillez ne pas répondre à ce mail.',
  { parseSpecialCharSequences: false }
);
  cy.get('.button').click();
  cy.log('update_assessment_stared template updated');

    });
});