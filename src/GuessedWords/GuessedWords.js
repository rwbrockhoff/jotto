import React from 'react'
import PropTypes from 'prop-types'

export default function GuessedWords(props) {
  return (
    <div data-test="comp-guessed-words">
      {
          props.guessedWords.length ? 
          <p>You have stuff</p>
          :
          <p data-test="p-instructions">Guess a word to get started!</p>
      }
    </div>
  )
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            matchCount: PropTypes.number.isRequired
        })
    ).isRequired
}