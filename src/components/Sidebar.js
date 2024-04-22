import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for better handling of active states
import './Sidebar.css';

const Sidebar = () => {
    // Get the current pathname
    const currentPath = window.location.pathname;
    const [activeLink , setActiveLink] = useState('Main dashboard');

    // Function to handle click on sidebar links
    const handleClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className='sidebar'>

            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                <div class="position-sticky">
                    <div class="list-group list-group-flush mx-3 mt-4">
                        <NavLink
                            to="/home"
                            className={`list-group-item list-group-item-action py-2 ripple ${currentPath === '/home' ? 'active' : ''}`}
                            onClick={() => handleClick('Main dashboard')}
                        >
                            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                            <span>Main dashboard</span>
                        </NavLink>
                        <NavLink
                            to="/schedule-exam"
                            className={`list-group-item list-group-item-action py-2 ripple ${currentPath === '/schedule-exam' ? 'active' : ''}`}
                            onClick={() => handleClick('Create Exam')}
                        >
                            <i class="fas fa-chart-area fa-fw me-3"></i><span>Schedule Exam</span>
                        </NavLink>
                        <NavLink
                            to="/generate-exam-papers"
                            className={`list-group-item list-group-item-action py-2 ripple ${currentPath === '/generate-exam-papers' ? 'active' : ''}`}
                            onClick={() => handleClick('Generate Exam Papers')}
                        >
                            <i class="fas fa-chart-area fa-fw me-3"></i><span>Generate Exam Papers</span>
                        </NavLink>
                        <NavLink
                            to="/create-exam"
                            className={`list-group-item list-group-item-action py-2 ripple ${currentPath === '/create-exam' ? 'active' : ''}`}
                            onClick={() => handleClick('Create Exam')}
                        >
                            <i class="fas fa-chart-area fa-fw me-3"></i><span>Create Exam Paper</span>
                        </NavLink>
                        <NavLink
                            to="/uploadcsv"
                            className={`list-group-item list-group-item-action py-2 ripple ${currentPath === '/add-candidate' ? 'active' : ''}`}
                            onClick={() => handleClick('Add Candidate')}
                        >
                            <i class="fas fa-chart-area fa-fw me-3"></i><span>Add Candidate</span>
                        </NavLink>
                       
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar;
