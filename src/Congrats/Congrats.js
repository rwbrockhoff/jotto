import React from 'react'
import PropTypes from 'prop-types'

export default function Congrats(props) {
  return props.success ? 
  
    <div data-test="comp-congrats">
      <p data-test="p-message">Congrats! You guessed the word correctly!</p>
    </div>
 :
    <div data-test="comp-congrats"/>    
}
