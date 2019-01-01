import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findAttr, checkProps } from '../../../test/testUtils'
import Congrats from '../Congrats'

Enzyme.configure({adapter: new EnzymeAdapter() })

const setup = (props={}) => {
    return shallow(<Congrats {...props} />)
}

describe('Congrats Component', () => {

    test('Render without Crashing', () => {
        const wrapper = setup()
        const comp = findAttr(wrapper, 'comp-congrats')
        expect(comp.length).toBe(1)
    })
    
    test('Renders no text when success prop is false', () => {
        const wrapper = setup( {success: false} )
        const comp = findAttr(wrapper, 'comp-congrats')
        expect(comp.text().length).toBe(0)
    })
    
    test('Renders non-empty congrats message ', () => {
        const wrapper = setup( {success: true} )
        const message = findAttr(wrapper, 'p-message')
        expect(message.text().length).not.toBe(0)
    })

    test('Does not throw warning with expected props', () => {
        const expectedProps = {success: false}
        const error = checkProps(Congrats, expectedProps)
        expect(error).toBeUndefined()
    })

})


