import { getGreeting } from '../support/app.po';

describe('playground', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to playground!');
  });
});
