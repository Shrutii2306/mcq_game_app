import React, { useState } from 'react'
import {categories} from "../data/category";
import MCQHomePage from './MCQHomePage';
export default function LandingPage() {
  const [isTopicSelected, setTopic] = useState([]);

  const handleTopicChange =(e) => {

      e.preventDefault();
      setTopic(e.target.value);
      
  }
  return (    
    <>
        <div className='heading'>WELCOME QUIZOPHILES! </div>
       
        {isTopicSelected.id  ? 
          <div><MCQHomePage 
            topic={isTopicSelected}
           /></div> :
          <div><div className='sub-heading'> Choose one of the topics to begin!</div>
        
        <div className='row' style={{justifyContent:'center',width:'75%',margin:'auto',color:'wheat'}}>
        {isTopicSelected}
            {categories.map((category,index) => (
                      <div  key={index} className='category-container col-4'>
                        <div>
                          <button type='button'  onClick={() => setTopic(category)}><img src={category.img} className='category-logo'/>
                          </button>
                        </div>
                        {category.title}

                      </div>
            ) )}
        </div></div>}
    </>
  )
}
