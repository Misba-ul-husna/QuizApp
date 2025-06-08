import {data} from './data'
import React, { useState } from 'react' 
import './Style.css'

export default function QuizApp() {
    let [index, setIndex] = useState(0);
    let [score, setScore] = useState(0);
    let [finish, setFinish] = useState(false);
    let [option, SetOption] = useState('');

    const correctOption = ['option1','option1','option4','option1',
        'option1','option1','option1','option1','option1','option1']

    const handleNext =() =>{
          if(index<data.length-1){ 
            if(correctOption[index] === option) {
             setScore(score+1)
            }
        setIndex(++index);
        SetOption('');
    }
    else {
        setFinish(true);
    }
}
const handleSelect =(optn)=>{
    SetOption(optn)
}

if(finish) {
    return(
        <div className='scorePage'>
        <h1>Quiz Finished..!</h1>
        <h3>Your Score is: {score} of {data.length} </h3>
        </div>
    )
}

  return (
   <>
   <div className='quiz'>
    <h1>Quiz App</h1>
   <h3>{data[index].Question}</h3>
   <ul>
          <li className= {option === 'option1'? 'selected':''}
         onClick={()=>{handleSelect('option1')}}>{data[index].Option1}</li>
          
          <li className= {option === 'option2'? 'selected':''}
          onClick={()=>{handleSelect('option2')}}>{data[index].Option2}</li>
          
          <li className= {option === 'option3'? 'selected':''}
          onClick={()=>{handleSelect('option3')}}>{data[index].Option3}</li>
         
          <li className= {option === 'option4'? 'selected':''}
          onClick={()=>{handleSelect('option4')}}>{data[index].Option4}</li>
   </ul>



   <button onClick={handleNext} disabled ={!option}>Next</button>
   <h5>Question {index+1} of{data.length}</h5>
   </div>
   </>
  )
}
