describe('Visit the home page', () => {
  it('should visit the home page', () => {
    cy.visit('/');
  });
});

describe('Visit todos page', () => {
  it('should visit the todos page', () => {
    cy.visit('/todos');
  });
});

describe('Check todos has a search bar', () => {
  it('should check todos has a search bar', () => {
    cy.visit('/todos');
    cy.get('input').should('have.attr', 'placeholder', 'search todos');
  });
});

describe('Check todos has a list of todos', () => {
  it('should check todos has a list of todos', () => {
    cy.visit('/todos');
    cy.get('ul').should('have.id', 'todos');
    cy.get('.todo-item').should('have.length.above', 0);
  });
});