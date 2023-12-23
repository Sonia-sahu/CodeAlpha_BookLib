// BorrowHistory.js
import React from "react";

const BorrowHistory = ({ borrowedBooks }) => {
  return (
    <div className="borrow-history">
      <h2>Borrow History</h2>
      {borrowedBooks && borrowedBooks.length !== 0 ? (
        <ul>
          {borrowedBooks.map((book, index) => (
            <li key={index}>{book.title}</li>
          ))}
        </ul>
      ) : (
        <p>No books borrowed yet.</p>
      )}
    </div>
  );
};

export default BorrowHistory;
