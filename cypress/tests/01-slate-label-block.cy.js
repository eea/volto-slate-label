import { slateBeforeEach, slateAfterEach } from '../support/e2e';

describe('Slate label', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('allows adding a label via the editor toolbar', () => {
    cy.getSlateEditorAndType('Colorless green ideas sleep furiously.');

    cy.get('.content-area .slate-editor [contenteditable=true]')
      .last()
      .type('{selectAll}');

    cy.setSlateCursor('Colorless').dblclick();
    cy.setSlateSelection('Colorless', 'green');

    cy.get('.slate-inline-toolbar .button-wrapper a[title="Label"]')
      .trigger('mousedown', { force: true });

    cy.wait(500);

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('label.label').contains('Colorless green');
  });

  it('allows removing a label', () => {
    cy.getSlateEditorAndType('Colorless green ideas sleep furiously.');

    cy.get('.content-area .slate-editor [contenteditable=true]')
      .last()
      .type('{selectAll}');

    cy.setSlateCursor('Colorless').dblclick();
    cy.setSlateSelection('Colorless', 'green');

    cy.get('.slate-inline-toolbar .button-wrapper a[title="Label"]')
      .trigger('mousedown', { force: true });

    cy.wait(300);

    cy.setSlateSelection('Colorless', 'green');
    cy.get(
      '.slate-inline-toolbar .button-wrapper a[title="Remove label"]',
    ).trigger('mousedown', { force: true });

    cy.wait(500);

    cy.get('#toolbar-save').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/cypress/my-page');

    cy.get('label.label').should('not.exist');
  });
});
