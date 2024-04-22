import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const history = useNavigate();

  
  const handleLoginClick = () => {
    history('/login'); 
  };

  return (
    <div className='homepage'>
      <div className="homepageInfo">
        <div className="stenographyimfo">
          <h1>STENOGRAPHY</h1>
          <p>The word “stenography” is older than any of our modern stenotype keyboards or machines. It comes from the Greek “steno” meaning narrow and “graphy” meaning writing. “Narrow writing” described systems of shorthand, back when conversations were transcribed by hand. Hence, what does “stenographer” mean? Simply, a shorthand writer. 
          Modern-day stenographers use shorthand typing machines called stenotypes. These machine marvels allow stenographers to type at rates exceeding 300 words per minute. In comparison, an average speaking speed is about 150 words per minute. This incredible rate of writing lets a high-quality stenographer keep up with complex conversations, even when multiple people may be speaking in a court or event setting.</p>
        </div>
        <div className="registrationInfo">
          <span>STENOGRAPHY 2024 ONLINE APPLICATION PROCESSING SYSTEM IS NOW OPEN</span>
          {/* Call handleLoginClick function when button is clicked */}
          <button type="button" className="btn btn-success" style={{ "backgroundColor": "#005059", "margin": "20px" }} onClick={handleLoginClick}>Login...</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
