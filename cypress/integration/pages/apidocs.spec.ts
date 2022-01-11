import { beforeEach, cy, describe, it } from 'local-cypress';

describe('API Docs Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/apidocs');
  });

  it('should display correct heading', () => {
    cy.get('h1').should('contain', 'API');
  });
});
