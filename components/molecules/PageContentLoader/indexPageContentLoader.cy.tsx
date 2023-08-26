import React from 'react'
import PageContentLoader from './index'

describe('<PageContentLoader />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PageContentLoader />)
  })
})