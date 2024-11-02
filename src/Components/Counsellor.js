import React from 'react';

const Counsellor = ({ counsellors }) => {
  return (
    <div>
      <h2>Counsellors</h2>
      <div className="card-container">
        {counsellors.map((counsellor, index) => (
          <div key={index} className="card">
            <div className="card-inner">
              <div className="card-front">
                <h3>{counsellor.name}</h3>
              </div>
              <div className="card-back">
                <p>ID: {counsellor.id}</p>
                <p>Student Count: {counsellor.studentCount}</p>
                <p>Branch: {counsellor.branch}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counsellor;
