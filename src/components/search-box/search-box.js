import React from 'react';
import './search-box.styles.css';

const Input = ({placeholder, handleChange, label}) => {
  return (
    <form>
      {label? <label className="label"> {label} </label> : null }
      <input type="search" className="search" placeholder={placeholder} onChange={handleChange} />
    </form>
  )
}

export default Input;