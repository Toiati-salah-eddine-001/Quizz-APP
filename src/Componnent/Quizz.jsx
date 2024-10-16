import { useRef, useState } from "react";
import { ListQuestion } from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Quizz.css";

const Quizz = () => {
  console.log(ListQuestion[0].question);
  const [count, setcount] = useState(0);
  const [correctans, setcorrectans] = useState(0);
  const [Check, setchek] = useState(false);
  const btn=useRef(null);

  const Nextquestion = () => {
    if (count < ListQuestion.length - 1) {
      setcount(count + 1);
      const buttons = document.querySelectorAll('.neon-btn');
      buttons.forEach(button => button.style.backgroundColor = "");

    } else {
      setchek(true);
    }
  };

  const Chekcorrect = (condition,e,id) => {
    if (condition) {
      setcorrectans(correctans + 1);
        console.log(e.target);
        e.target.style.backgroundColor="green";
    }else if(!condition){
        e.target.style.backgroundColor="red";
    }
  };
  console.log(correctans);
  return (
    <>
      <div className="quiz-container d-flex justify-content-center align-items-center vh-100">
        <div className="glass-card p-5">
          <h1 className="text-center mb-4 fw-bold">Quiz Application</h1>
          {Check ? (
            <div className="text-center">
              <h3 className="text-success">
                Your correct question is {correctans}
              </h3>
              <button
                className="btn btn-primary neon-btn mt-3"
                onClick={() => window.location.reload()}
              >
                Reset
              </button>
            </div>
          ) : (
            <>
              <p className="lead mb-3 text-center question-simple">
                {ListQuestion[count].question} ?
              </p>
              <div className="d-flex flex-column gap-3 align-items-center">
                {ListQuestion[count].answeres.map((items, index) => (
                  <button
                    key={index}
                    className="btn btn-outline-light neon-btn btn-lg w-75"
                    onClick={(e) => Chekcorrect(items.isCorrect,e,index)}
                  >
                    {items.ans}
                  </button>
                ))}
              </div>
              <p className="text-success text-center mt-3 mb-3">
                {count + 1}/{ListQuestion.length}
              </p>
              <button
                className="btn btn-secondary neon-btn next-btn w-75 "
                onClick={Nextquestion}
              >
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Quizz;
