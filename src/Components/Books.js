import React, { useState } from 'react';

const Books = () => {
  const [category, setCategory] = useState('All');
  const books = [
    { BId: '1234', Bname: 'Pro Full Stack', Bauthor: 'Vasanth', Category: 'Web development', Available: 'yes' },
    { BId: '1555', Bname: 'Pro Full Stack', Bauthor: 'Vasanth', Category: 'Web development', Available: 'yes' },
    { BId: '2345', Bname: 'Learn JavaScript', Bauthor: 'John Doe', Category: 'Programming', Available: 'no' },
    { BId: '3456', Bname: 'React Basics', Bauthor: 'Jane Smith', Category: 'Web development', Available: 'yes' },
    { BId: '4567', Bname: 'Advanced CSS', Bauthor: 'Emily Davis', Category: 'Programming', Available: 'no' }
  ];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredBooks = category === 'All' ? books : books.filter(book => book.Category === category);

  return (
    <div>
      <h1>Books</h1>
      <select onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Web development">Web development</option>
        <option value="Programming">Programming</option>
      </select>
      <ul>
        {filteredBooks.map(book => (
          <li key={book.BId} style={{ color: book.Available === 'yes' ? 'green' : 'red' }}>
            {book.Bname} by {book.Bauthor} - {book.Category} - {book.Available}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
