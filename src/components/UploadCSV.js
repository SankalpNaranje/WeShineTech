import React, { useState } from 'react';
import './addcandidates.css'

const UploadCSV = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setMessage('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/api/userRoute/importuser', {
        method: 'POST',
        body: formData,
        withCredentials: true,    
        crossorigin: true,    
        mode: 'no-cors',
        headers: {
            'Content-Type':'form-data'
        }
      });

      const responseBody = await response.text();
        console.log('Response Body:', responseBody); // Log the response body

        const data = JSON.parse(responseBody);

      if (data.success) {
        setMessage('File uploaded successfully.');
      } else {
        setMessage(data.msg);
      }
    } catch (error) {
      setMessage('Error uploading file: ' + error.message);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  
 

  const [credentials, setCredentials] = useState({ name: "", rollno: "", prn: "", password: "" });

  const handleSubmit1 = async (e) => {
    
    e.preventDefault();
    try {
      console.log("reached 0")
      console.log(credentials)
      console.log(JSON.stringify(credentials))
      
      const response1 = await fetch("http://localhost:5000/api/userRoute/addcandidate", {
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


  return (
    <div className='addCandidates'>
      <div className="addCandidatespage">
        <h1>Add Candidate to Database</h1>
        <h3>Upload CSV File</h3>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input type="file" onChange={handleFileChange} accept=".csv" />
          <button type="submit">Upload</button>
        </form>
        <div>{message}</div>
      <span style={{"marginTop":"20px"}} >OR</span>


      <div className='addCandidates'>
      <div className="addCandidatespage">
        <h1>Add Candidate to Database</h1>
        <h3>Manually Add Candidate</h3>
        <form onSubmit={handleSubmit1}>
              <div class="mb-3">
                <label for="name" class="form-label" >name</label>
                <input type="text" class="form-control" id="name" aria-describedby="name" name="name" value={credentials.name} onChange={handleChange} placeholder='Please enter name'/>
                {/* <div id="Help" class="form-text">*Enter a Valid Email Address</div> */}
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">rollno</label>
                <input type="text" class="form-control" id="rollno" name='rollno' value={credentials.rollno} onChange={handleChange} placeholder='Please enter rollno'/>
              </div>
              <div class="mb-3">
                <label for="prn" class="form-label">prn</label>
                <input type="text" class="form-control" id="prn" name='prn' value={credentials.prn} onChange={handleChange} placeholder='Please enter prn'/>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">password</label>
                <input type="text" class="form-control" id="password" name='password' value={credentials.password} onChange={handleChange} placeholder='Please enter password'/>
              </div>
              
              <button type="submit" class="btn btn-primary" style={{width:"100%","backgroundColor":"#fa5f1a","border":"1px solid #fa5f1a"}}>Submit</button>
          </form>
        <div>{message}</div>
      </div>
    </div>

      
      </div>
    </div>
  );
};

export default UploadCSV;
