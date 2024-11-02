import React from 'react';
import AttendanceButton from './AttendanceButton';

const Students = () => {
  const students = [
    { id: 1, name: 'Peter Parker', branch: 'CSE', year: '2nd' },
    { id: 2, name: 'Tony Stark', branch: 'ECE', year: '3rd' },
    { id: 3, name: 'Steve Rogers', branch: 'ME', year: '1st' },
    { id: 4, name: 'Natasha Romanoff', branch: 'IT', year: '4th' },
    { id: 5, name: 'Bruce Banner', branch: 'BT', year: '2nd' },
    { id: 6, name: 'Thor Odinson', branch: 'EE', year: '3rd' }
  ];

  return (
    <div>
      <h2> Students </h2>
      <table className="students-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Year</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.year}</td>
              <td><AttendanceButton /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
