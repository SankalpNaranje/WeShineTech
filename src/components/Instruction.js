import React, { useState } from "react";
import './Instruction.css'

const Instruction = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    // <div className='instructions'>
    //   <div className="instruction-heading">
    //     <h1>Exam Instructions</h1>
    //   </div>

    //   <p>Please read these instructions carefully before starting the exam.</p>

    //   <section id="important-info">
    //     <h2>Important Information</h2>
    //     <ul>
    //       <li>Duration: [Insert exam duration]</li>
    //       <li>Allowed Materials: [List allowed materials (e.g., pencils, calculators)]</li>
    //       <li>Grading: [Explain how the exam will be graded (e.g., point system, penalty for wrong answers)]</li>
    //     </ul>
    //   </section>

    //   <section id="instructions">
    //     <h2>Exam Instructions</h2>
    //     <ol>
    //       <li>Read each question carefully before answering.</li>
    //       <li>Manage your time effectively.</li>
    //       <li>Answer all questions to the best of your ability.</li>
    //       <li>Write clearly and legibly.</li>
    //       <li>If you have any questions, raise your hand and ask the proctor.</li>
    //     </ol>
    //   </section>

    //   <label>
    //     <input type="checkbox" onChange={handleCheckboxChange} />
    //     I have read and understood the instructions.
    //   </label>

    //   <button disabled={!isChecked} type="submit">
    //     Submit
    //   </button>
    // </div>
    <div className="instructions">
      <div className="exam-instructions">
        <h1>Exam Instruction</h1>
        <p>
          Please read these instructions carefully before starting the exam.
        </p>
      </div>
      <div className="important_information">
        <h2>Important Information</h2>
        <ul>
          <li>Duration: [Insert exam duration]</li>
          <li>
            Allowed Materials: [List allowed materials (e.g., pencils,
            calculators)]
          </li>
          <li>
            Grading: [Explain how the exam will be graded (e.g., point system,
            penalty for wrong answers)]
          </li>
        </ul>
      </div>
      <div className="instructions1">
      <h2>Exam Instructions</h2>
        <ol>
           <li>Read each question carefully before answering.</li>
           <li>Manage your time effectively.</li>
           <li>Answer all questions to the best of your ability.</li>
           <li>Write clearly and legibly.</li>
           <li>If you have any questions, raise your hand and ask the proctor.</li>
        </ol>
      </div>
      <label>
        <input type="checkbox" onChange={handleCheckboxChange} />
         I have read and understood the instructions.
       </label>

       <button disabled={!isChecked} type="submit">
         Submit
       </button>
    </div>
  );
};

export default Instruction;
