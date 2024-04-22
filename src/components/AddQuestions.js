import React,{useState,useEffect} from 'react'
import mongoose from 'mongoose';


const AddQuestions = () => {
    const [credentials, setCredentials] = useState({ pprid: "", pprsetid: "", question_id: "", description: "",answer:"",examid:"" });
    const [message, setMessage] = useState('');
    const [exams, setExams] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
          ...credentials,
          [name]: value
        });
      };
      const handleSubmit1 = async (e) => {
        e.preventDefault();
        try {
          const response1 = await fetch("http://localhost:5000/api/paperRoute/addpaper", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials)  
          });
          const json = await response1.json();
          console.log(json);
          alert('Response successful');
        } catch (error) {
          console.error('Error submitting form:', error);
          // Handle errors here
        }
      };
  return (
    <div className='addCandidates'>
      <div className="addCandidatespage">
        <div className="newExam">
        <h3>Add a new Paper to Database</h3>
        <form onSubmit={handleSubmit1}>
              <div class="mb-3">
                <label for="pprid" class="form-label" >pprid</label>
                <input type="text" class="form-control" id="pprid" aria-describedby="pprid" name="pprid" value={credentials.pprid} onChange={handleChange} placeholder='Please enter pprid'/>
                {/* <div id="Help" class="form-text">*Enter a Valid Email Address</div> */}
              </div>
              <div class="mb-3">
                <label for="pprsetid" class="form-label">pprsetid</label>
                <input type="text" class="form-control" id="pprsetid" name='pprsetid' value={credentials.pprsetid} onChange={handleChange} placeholder='Please enter pprsetid'/>
              </div>
              <div class="mb-3">
                <label for="question_id" class="form-label">question_id</label>
                <input type="text" class="form-control" id="question_id" name='question_id' value={credentials.question_id} onChange={handleChange} placeholder='Please enter question_id'/>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">description</label>
                <input type="text" class="form-control" id="description" name='description' value={credentials.description} onChange={handleChange} placeholder='Please enter description'/>
              </div>
              <div class="mb-3">
                <label for="answer" class="form-label">answer</label>
                <input type="text" class="form-control" id="answer" name='answer' value={credentials.answer} onChange={handleChange} placeholder='answer'/>
              </div>
              <div class="mb-3">
                <label for="examid" class="form-label">examid</label>
                <input type="text" class="form-control" id="examid" name='examid' value={credentials.examid} onChange={handleChange} placeholder='examid'/>
              </div>
              
              <button type="submit" class="btn btn-primary" style={{width:"100%","backgroundColor":"#fa5f1a","border":"1px solid #fa5f1a"}}>Create Exam</button>
          </form>
        <div>{message}</div>
        </div>
        </div>
    </div>
  )
}

export default AddQuestions
