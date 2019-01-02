import React from 'react'
import { shallow } from 'enzyme'
import {findAttr, checkProps} from '../../../test/testUtils'
import GuessedWords from '../GuessedWords'

//----Test Setup-----//

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', matchCount: 3 }],
}

const setup = ( props={} ) => {
    const setProps = {...defaultProps, ...props}
    return shallow(<GuessedWords {...setProps}/> )
}

//----Test Setup-----//


describe('Guessed Words Component', () => {

    test('Should render without crashing', () => {
        const wrapper = setup()
        const comp = findAttr(wrapper, 'comp-guessed-words')
        expect(comp).toHaveLength(1)
    })

    test('Does not throw warning with expected props', () => {
        const error = checkProps(GuessedWords, defaultProps)
        expect(error).toBeUndefined();
    })

    describe('No Words Guessed', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup({ guessedWords: [] })
        })
        
        test('Renders without error', () => {
            const comp = findAttr(wrapper, 'p-instructions')
            expect(comp).toHaveLength(1)
        })

    })


})
