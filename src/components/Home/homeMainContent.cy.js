import React from 'react'
import MainContent from './home'

describe('<MainContent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MainContent />)
  })
})