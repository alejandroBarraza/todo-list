import React from 'react'

export const Input = ({ text, handleChange, handleKeyDown }) => {
  return (
    <input
      type='text'
      className='input'
      value={text}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
    />
  )
}
