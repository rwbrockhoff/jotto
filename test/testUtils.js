import checkPropTypes from 'check-prop-types'

//Finds An Element given its data-test attribute
export const findAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`)
}

//Checks Component Props against Expected Props
export const checkProps = (component, expectedProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        expectedProps,
        'prop',
        component.name
    )
    return propError   
}