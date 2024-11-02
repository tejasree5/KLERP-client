import React, { useState } from 'react';
import Students from './Components/Students';
import Faculty from './Components/Faculty';
import Timetable from './Components/Timetable';
import Counsellor from './Components/Counsellor';
import Feedback from './Components/Feedback';
import Courses from './Components/Courses';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import Skill from './Components/Skill';
import Books from './Components/Books';

const feedbacks = [
  { facultyId: 'F001', name: 'Dr. Smith', course: 'MERN Stack Development', description: 'Excellent' },
  { facultyId: 'F002', name: 'Dr. Johnson', course: 'Database Management Systems', description: 'Very Good' },
  { facultyId: 'F003', name: 'Dr. Brown', course: 'Artificial Intelligence & Machine Learning', description: 'Good' },
  { facultyId: 'F004', name: 'Dr. Taylor', course: 'Mathematical Programming', description: 'Average' },
  { facultyId: 'F005', name: 'Dr. Anderson', course: 'Linux Administration', description: 'Poor' }
];

const counsellors = [
  { id: 'C001', name: 'Mr. Adams', studentCount: 30, branch: 'CS' },
  { id: 'C002', name: 'Ms. Baker', studentCount: 25, branch: 'IT' },
  { id: 'C003', name: 'Mr. Clark', studentCount: 20, branch: 'ECE' },
  { id: 'C004', name: 'Ms. Davis', studentCount: 35, branch: 'ME' },
  { id: 'C005', name: 'Mr. Evans', studentCount: 40, branch: 'CE' }
];

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'students':
        return <Students />;
      case 'faculty':
        return <Faculty />;
      case 'timetable':
        return <Timetable />;
      case 'courses':
        return <Courses />;
      case 'feedback':
        return <Feedback feedbacks={feedbacks} />;
      case 'counsellor':
        return <Counsellor counsellors={counsellors} />;
      case 'skill' :
        return <Skill/>
      case 'books' :
        return <Books/>
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header />
      <nav>
        <button onClick={() => setActiveComponent('students')}>Students</button>
        <button onClick={() => setActiveComponent('faculty')}>Faculty</button>
        <button onClick={() => setActiveComponent('timetable')}>Timetable</button>
        <button onClick={() => setActiveComponent('courses')}>Courses</button>
        <button onClick={() => setActiveComponent('feedback')}>Feedback</button>
        <button onClick={() => setActiveComponent('counsellor')}>Counsellor</button>
        <button onClick={() => setActiveComponent('skill')}>Skill</button>
        <button onClick={() => setActiveComponent('books')}>Books</button>
      </nav>
      {renderComponent()}
      <Footer />
      
    </div>
  );
}

export default App;
