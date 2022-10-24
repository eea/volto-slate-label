import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Slate label', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('Add slate label', () => {
    // Complete chained commands
    cy.getSlateEditorAndType('Colorless green ideas sleep furiously.');

    // Footnote
    cy.setSlateSelection('Colorless', 'green');
    cy.clickSlateButton('Label');

    cy.get('.sidebar-container .form .header button:first-of-type').click();

    // Save
    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    // then the page view should contain our changes
    cy.get('label.label').contains('Colorless green');
  });
});
