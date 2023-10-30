import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';
export default function Result({finalScore}) {

    function refreshPage(){

        window.location.reload();
    }
  return (
    <div>
        Your Final Score is : 
        <div className='score-div'>{finalScore}/10</div>
    <button type='button' onClick={refreshPage} className='main-menu-btn'>
        Go Back to main menu</button>
    </div>
    
  )
}
