import React from 'react';
const Timetable = () => {
  const timetable = [
    { day: 'Monday', periods: ['MERN - Room 101', 'Database - Room 102', 'AI & ML - Room 103', 'Mathematical Programming - Room 104', 'Lunch Break', 'Linux - Room 105', 'MERN - Room 101', 'Database - Room 102', 'AI & ML - Room 103', 'Mathematical Programming - Room 104', 'Linux - Room 105'] },
    { day: 'Tuesday', periods: ['Mathematical Programming - Room 104', 'Linux - Room 105', 'MERN - Room 101', 'Database - Room 102', 'Lunch Break', 'AI & ML - Room 103', 'Mathematical Programming - Room 104', 'Linux - Room 105', 'MERN - Room 101', 'Database - Room 102', 'AI & ML - Room 103'] },
    { day: 'Wednesday', periods: ['Database - Room 102', 'AI & ML - Room 103', 'Mathematical Programming - Room 104', 'Linux - Room 105', 'Lunch Break', 'MERN - Room 101', 'Database - Room 102', 'AI & ML - Room 103', 'Mathematical Programming - Room 104', 'Linux - Room 105', 'MERN - Room 101'] },
    { day: 'Thursday', periods: ['Linux - Room 105', 'MERN - Room 101', 'Database - Room 102', 'AI & ML - Room 103', 'Lunch Break', 'Mathematical Programming - Room 104', 'Linux - Room 105', 'MERN - Room 101', 'Database - Room 102', 'AI & ML - Room 103', 'Mathematical Programming - Room 104'] },
    { day: 'Friday', periods: ['AI & ML - Room 103', 'Mathematical Programming - Room 104', 'Linux - Room 105', 'MERN - Room 101', 'Lunch Break', 'Database - Room 102', 'AI & ML - Room 103', 'Mathematical Programming - Room 104', 'Linux - Room 105', 'MERN - Room 101', 'Database - Room 102'] }
  ];

  return (
    <div>
      <h2>Timetable</h2>
      <table className="timetable-table">
        <thead>
          <tr>
            <th>Day</th>
            {Array.from({ length: 11 }, (_, i) => <th key={i}>{i + 1}</th>)}
          </tr>
        </thead>
        <tbody>
          {timetable.map((daySchedule, index) => (
            <tr key={index}>
              <td>{daySchedule.day}</td>
              {daySchedule.periods.map((period, i) => (
                <td key={i}>{period}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
