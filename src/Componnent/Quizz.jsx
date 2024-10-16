import { useState } from "react";
import {ListQuestion} from "./Data"

const Quizz = () => {
    console.log(ListQuestion[0].question);
    const [count,setcount]=useState(0);
    const [correctans,setcorrectans]=useState(0);
    const [Check,setchek]=useState(false);
    
    const Nextquestion=()=>{
        if(count<ListQuestion.length-1){
            setcount(count+1)
        }else[
            setchek(true)
        ]
    }


    const Chekcorrect=(condition)=>{
        if(condition){
            setcorrectans(correctans+1)
        }
    }
    console.log(correctans)
  return (
    <>
    <h1>Quizz Application</h1>
    {
        Check ? 
        <>
        <h3>Your correct question is {correctans} </h3> 
        <button onClick={()=>window.location.reload()}>Reset</button>
        </>
        :
        (
            <>
            <p>{ListQuestion[count].question}</p>
            <div>{ListQuestion[count].answeres.map((items,index)=>  <button key={index} onClick={()=>Chekcorrect(items.isCorrect)}>{items.ans}</button> )}</div> 
            <button onClick={Nextquestion}>Next</button></>
        )
    }
    </>
  )
}

export default Quizz