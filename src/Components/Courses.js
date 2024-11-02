import React from 'react';
const Courses = () => {
  const courses = [
    { code: 'MERN101', name: 'MERN Stack Development', lpts: '3-0-2', credits: 4 },
    { code: 'DB102', name: 'Database Management Systems', lpts: '3-1-0', credits: 4 },
    { code: 'AI103', name: 'Artificial Intelligence & Machine Learning', lpts: '3-0-2', credits: 4 },
    { code: 'MP104', name: 'Mathematical Programming', lpts: '3-1-0', credits: 4 },
    { code: 'LIN105', name: 'Linux Administration', lpts: '2-0-2', credits: 3 }
  ];

  return (
    <div>
      <h2>Courses</h2>
      <div className="card-container">
        {courses.map(course => (
          <div key={course.code} className="card">
            <div className="card-inner">
              <div className="card-front">
                <h3>{course.name}</h3>
              </div>
              <div className="card-back">
                <p>Code: {course.code}</p>
                <p>LPTS: {course.lpts}</p>
                <p>Credits: {course.credits}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
