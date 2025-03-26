describe('todos.cy.tsx', () => {
  it('should filter todos', () => {
    cy.visit('/todos')

    cy.get('input').type('todo 1')

    cy.get('#todos').children().should('have.length', 1)
  })
})