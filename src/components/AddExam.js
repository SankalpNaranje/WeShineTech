import React,{useState,useEffect} from 'react'
import './addcandidates.css'

const AddExam = () => {
    const [credentials, setCredentials] = useState({ examid: "", examname: "", total_marks: "", time_alloted: "",isactive:"" });
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
      console.log("reached 0")
      console.log(credentials)
      console.log(JSON.stringify(credentials))
      
      const response1 = await fetch("http://localhost:5000/api/ExamRoute/addexam", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify(credentials) 
      });
      
      const json = await response1.json();
      console.log("reached 2")
      console.log(json);
      alert('response1 Successful');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors here
    }
  };

  const getallbookings = async () => {
    const response = await fetch('http://localhost:5000/api/ExamRoute/allExams', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    const json = await response.json();
    console.log(json);
    setExams(json); // Set fetched exams data
    console.log(exams)
  };

  useEffect(() => {
    // Fetch exams data when component mounts
    getallbookings();
  }, []);

  return (
    <div className='addCandidates'>
      <div className="addCandidatespage">
        <div className="newExam">
        <h3>Add a new Exam to Database</h3>
        <form onSubmit={handleSubmit1}>
              <div class="mb-3">
                <label for="examid" class="form-label" >examid</label>
                <input type="text" class="form-control" id="examid" aria-describedby="examid" name="examid" value={credentials.examid} onChange={handleChange} placeholder='Please enter examid'/>
                {/* <div id="Help" class="form-text">*Enter a Valid Email Address</div> */}
              </div>
              <div class="mb-3">
                <label for="examname" class="form-label">examname</label>
                <input type="text" class="form-control" id="examname" name='examname' value={credentials.examname} onChange={handleChange} placeholder='Please enter examname'/>
              </div>
              <div class="mb-3">
                <label for="total_marks" class="form-label">total_marks</label>
                <input type="text" class="form-control" id="total_marks" name='total_marks' value={credentials.total_marks} onChange={handleChange} placeholder='Please enter Total Marks for Exam'/>
              </div>
              <div class="mb-3">
                <label for="time_alloted" class="form-label">time_alloted(in min)</label>
                <input type="text" class="form-control" id="time_alloted" name='time_alloted' value={credentials.time_alloted} onChange={handleChange} placeholder='Please enter time alloted for the exam'/>
              </div>
              <div class="mb-3">
                <label for="isactive" class="form-label">Status</label>
                <input type="text" class="form-control" id="isactive" name='isactive' value={credentials.isactive} onChange={handleChange} placeholder='Active or Deactive'/>
              </div>
              
              <button type="submit" class="btn btn-primary" style={{width:"100%","backgroundColor":"#fa5f1a","border":"1px solid #fa5f1a"}}>Create Exam</button>
          </form>
        <div>{message}</div>
        </div>
      <div className="examstilldate">
            <h1>Current Exams</h1>
            <div className="examDetails">
            <div className="exam-cards">
            {exams.map(exam => (
              <div key={exam.examid} className="exam-card">
                
                <div class="card w-50">
                <div class="card-body">
                    <h5 class="card-title">{exam.examname}</h5>
                    <p class="card-text">Total Marks: {exam.total_marks}</p>
                    <p class="card-text">Time Alloted: {exam.time_alloted} min</p>
                    <p class="card-text">Status: {exam.isactive}</p>
                    
                </div>
                </div>
              </div>
            ))}
          </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default AddExam
