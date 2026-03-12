import { slateBeforeEach, slateAfterEach } from '../support/e2e';

const API_PATH = Cypress.env('API_PATH') || 'http://localhost:8080/Plone';
const AUTH = {
  user: 'admin',
  pass: 'admin',
};

const setLabelBlocks = () =>
  cy.request({
    method: 'PATCH',
    url: `${API_PATH}/cypress/my-page`,
    headers: {
      Accept: 'application/json',
    },
    auth: AUTH,
    body: {
      blocks: {
        title: {
          '@type': 'title',
        },
        slate: {
          '@type': 'slate',
          plaintext: 'Colorless green ideas sleep furiously.',
          value: [
            {
              type: 'p',
              children: [
                {
                  type: 'label',
                  data: {
                    uid: 'uid1',
                    label_type: 'simple',
                  },
                  children: [{ text: 'Colorless green' }],
                },
                { text: ' ideas sleep furiously.' },
              ],
            },
          ],
        },
      },
      blocks_layout: {
        items: ['title', 'slate'],
      },
    },
  });

describe('Slate label', () => {
  beforeEach(slateBeforeEach);
  afterEach(slateAfterEach);

  it('renders a saved slate label', () => {
    setLabelBlocks();
    cy.visit('/cypress/my-page');
    cy.waitForResourceToLoad('my-page');

    cy.get('label.label').contains('Colorless green');
  });
});
