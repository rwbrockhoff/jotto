import React from 'react'
import { shallow } from 'enzyme'
import { findAttr, checkProps } from '../../../test/testUtils'
import Congrats from '../Congrats'

//-----Set Up------//

const defaultProps = {success: false}

const setup = (props={ success: false }) => {
    const setUpProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setUpProps} />)
}

//-----Set Up------//

describe('Congrats Component', () => {

    test('Render without Crashing', () => {
        const wrapper = setup()
        const comp = findAttr(wrapper, 'comp-congrats')
        expect(comp.length).toBe(1)
    })
    
    test('Renders no text when success prop is false', () => {
        const wrapper = setup()
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


