import React from 'react'
import renderer from 'react-test-renderer'

import Ex from '../Ex'

it('renders an X', () => {
  const tree = renderer.create(<Ex />).toJSON()

  expect(tree).toMatchSnapshot()
})