import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import Button from '../Button'

describe('Button (Snapshot)', () => {
  it('should render Button component', () => {
    const component = renderer.create(<Button text={''} />)
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })
})

describe('Button Click', () => {
  const text = 'Button'
  const onClick = jest.fn()
  const button = mount(<Button text={text} onClick={onClick} />)

  it('Click requires onClick prop', () => {
    expect(button.props().onClick).toBeDefined()
  })

  it('should renders button', () => {
    const buttonElement = button.find('button')
    expect(buttonElement).toBeDefined()
  })

  it('Button click calls onClick', () => {
    const buttonElement = button.find('button')
    buttonElement.simulate('click')
    // expect(onClick).toHaveBeenCalled()
    expect(onClick.mock.calls.length).toEqual(1)
  })
})
