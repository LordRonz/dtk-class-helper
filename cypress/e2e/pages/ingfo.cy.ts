import { beforeEach, cy, describe, it } from 'local-cypress';

describe('Ingfo Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/ingfo');
  });

  it('should display correct heading', () => {
    cy.get('h1').should('contain', 'Ingfo');
  });
});
