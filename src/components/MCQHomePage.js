import React, { useState } from 'react' 
import {C_questions,Cpp_questions,Dbms_questions,Java_questions, Js_questions,Python_questions} from '../data/Questions';
import back_icon from '../images/back_icon.png';
import Result from './Result';
export default function MCQHomePage({topic}) {
    
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [score, setScore] = useState(0);
    const [finalScore, setFinalScore] = useState(0);
    const [attempt, setAttempt] = useState(false);
    const [isFinished, setFinished] = useState(false);
    var questions = [];
    switch(topic.title){
        case 'C Programming':
            questions = C_questions;
            break;
        case 'C++ Programming':
            questions = Cpp_questions;
            break;
        case 'Java Programming':
            questions = Java_questions;
            break;
        case 'Python Programming':
            questions = Python_questions;
            break;
        case 'DBMS':
            questions = Dbms_questions;
            break;
        case 'JavaScript':
            questions = Js_questions;
            break;
    }

    const handleScoreChange = (action) => {

        switch(action){

            case 'add' :
                setScore(1);
                setAttempt(true);
                break;
            
            case 'subtract':
                setScore(0);
                setAttempt(true);
                break;
        }
    }

    const onSubmitQuestion = function()  {

        setCurrentQuestion(currentQuestion+1)
        setFinalScore(finalScore+score);
        setScore(0);
        setAttempt(false);
    }

    const onSubmitQuiz = function() {

        setFinished(true);
    }

    function refreshPage (){

        window.location.reload();
    }
  return (
    <div style={{overflow:'hidden',display:'flex',flexDirection:'column'}}>
        <div style={{margin:'auto',width:'100%',display:'flex'}} >
            {isFinished ? null :  <div className='back-button'><button 
            type='button' 
            onClick={refreshPage}
        
        ><img src={back_icon} className='back-icon'/></button>Main Menu</div>}
           
        <div className='sub-heading mcq-page'>{isFinished ?<span style={{marginLeft:'30%'}}>Thankyou for attending this quiz !</span> :'You are currently attending ' +`${topic.title}`+' Quiz !'}</div></div>
        
        <div className='row mcq-container' style={{justifyContent:'center',marginTop:'1rem'}}>
            
            {isFinished ? <Result finalScore={finalScore}/>
            :
            <div className='col-8' >

                {questions.map((question,index) => (
                    <div key={index}>
                    { currentQuestion==question.id ? <div>
                        <span className='question-div'>{question.ques}</span>
                        <div className='col' >
                           
                            {question.ans == question.option.O1 ? <button onClick={() => handleScoreChange('add')}className='option-button'>{question.option.O1}</button> :<button  onClick={() => handleScoreChange('subtract')}className='option-button' >{question.option.O1}                         
                            </button>}

                            {question.ans == question.option.O2 ? <button onClick={() => handleScoreChange('add')}className='option-button'>{question.option.O2}</button> :<button  onClick={() => handleScoreChange('subtract')}className='option-button'>{question.option.O2}                         
                            </button>}

                            {question.ans == question.option.O3 ? <button onClick={() => handleScoreChange('add')}className='option-button'>{question.option.O3}</button> :<button  onClick={() => handleScoreChange('subtract')}className='option-button'>{question.option.O3}                         
                            </button>}

                            {question.ans == question.option.O4 ? <button onClick={() => handleScoreChange('add')}className='option-button'>{question.option.O4}</button> :<button  onClick={() => handleScoreChange('subtract')}className='option-button'>{question.option.O4}                         
                            </button>}
                            
                        </div>


                        { question.id!=10 ? 
                        <button 
                            className='submit-button' 
                            onClick={onSubmitQuestion}
                            disabled={attempt? false :true}                            
                            >NEXT</button> 
                        : 
                        <button
                        className='submit-button'
                        disabled={attempt? false :true} 
                        onClick={onSubmitQuiz}
                        >SUBMIT</button>
                        }
                        </div> :null}
                        {attempt}
                    
                    </div>
                ))}
                
            </div>
            }
            
        </div>
    </div>
  )
}
