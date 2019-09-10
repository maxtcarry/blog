// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/demon')
    cy.contains('span', '联系方式')
  })
  it('Visits the app root url', () => {
    cy.visit('/index')
    cy.contains('div', '可乐')
  })
})
