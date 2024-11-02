import React from 'react';

const Faculty = () => {
  const faculty = [
    { id: 1, name: 'Dr. A', department: 'CSE', designation: 'Professor' },
    { id: 2, name: 'Dr. B', department: 'ECE', designation: 'Associate Professor' },
    { id: 3, name: 'Dr. C', department: 'ME', designation: 'Assistant Professor' }
  ];

  return (
    <div>
      <h2>Faculty</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map(member => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.department}</td>
              <td>{member.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Faculty;
