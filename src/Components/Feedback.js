import React from 'react';

const Feedback = ({ feedbacks }) => {
  return (
    <div>
      <h2>Feedback</h2>
      <table>
        <thead>
          <tr>
            <th>Faculty ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback, index) => (
            <tr key={index}>
              <td>{feedback.facultyId}</td>
              <td>{feedback.name}</td>
              <td>{feedback.course}</td>
              <td>{feedback.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Feedback;
