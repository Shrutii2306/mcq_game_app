import React from 'react'

export default function Button({option}) {
  return (
    <div>
        <button className='option-button' >
            <div className='row'>
                {option}
            </div>
        </button>
        
    </div>
  )
}
