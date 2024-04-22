import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Instruction from './components/Instruction';
import AddCandidateForm from './components/AddCandidateForm';
import UploadCSV from './components/UploadCSV';
import './App.css';
import AddExam from './components/AddExam';
import AddQuestions from './components/AddQuestions';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="appcontainer">
          <div className="sidebarcontainer">
            <Sidebar />
          </div>

          <div className="appcontent">
            <Routes>
              <Route exact path="/home" element={<Home  />} />
              <Route exact path="/uploadcsv" element={<UploadCSV />} />

              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Signup />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/instruction" element={<Instruction />} />
              <Route exact path="/addcandidate" element={<AddCandidateForm />} />
              <Route exact path="/create-exam" element={<AddExam />} />
              <Route exact path="/generate-exam-papers" element={<AddQuestions />} />
              
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
