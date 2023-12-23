// Book.js
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import defaultBook from "../img/defaultBook.png";
import { motion } from "framer-motion";

const Book = ({ id, volumeInfo, onBorrow }) => {
  const imageVariants = {
    hover: {
      scale: 1.7,
      boxShadow: "0px 0px 8px #000",
      transition: {
        duration: 0.5,
        type: "spring",
        delay: 0.15,
      },
    },
  };

  let { title, authors, publisher, previewLink, imageLinks } = volumeInfo;

  // Setting up default values for volume info data
  title = title || "Title is not available";
  authors = authors || "Author(s) name not available";
  publisher = publisher || "Publisher company not available";
  previewLink = previewLink || "https://books.google.co.in/";

  return (
    <section key={id} className="loading-card">
      <div>
        <div>
          <motion.img
            src={imageLinks ? imageLinks.thumbnail : defaultBook}
            width="100px"
            alt="Book-cover"
            variants={imageVariants}
            whileHover="hover"
          />
        </div>
        <div>
          {title && (
            <div>
              <h3 className="inline">{title}</h3>
            </div>
          )}
        </div>

        <div>
          {authors && (
            <h4 style={{ paddingBottom: "1rem", color: "black" }}>
              {" "}
              Author:{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "#3B3B3B",
                }}
              >
                {" "}
                {authors}{" "}
              </span>
            </h4>
          )}
        </div>

        <div>
          {publisher && (
            <h5 style={{ paddingBottom: "1rem", color: "black" }}>
              {" "}
              Published by:{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "#3B3B3B",
                }}
              >
                {" "}
                {publisher}{" "}
              </span>
            </h5>
          )}
        </div>

        <div>
          {previewLink && (
            <h5
              style={{
                fontWeight: "bold",
                color: "black",
                paddingBottom: "1rem",
              }}
            >
              Read more :{" "}
              <a href={previewLink} target="_blank" rel="noreferrer">
                {" "}
                Google Books <BiLinkExternal></BiLinkExternal>{" "}
              </a>
            </h5>
          )}
        </div>

        <div>
        <button className="borrow-button"
  onClick={() => onBorrow({ title })}
  style={{
    backgroundColor: "#6c0931", // Background color
    color: "white",             // Text color
    padding: "10px 15px",        // Padding
    borderRadius: "5px",         // Border radius
    cursor: "pointer",           // Cursor style
    fontSize: "16px",            // Font size
    border: "none",              // Remove border
  }}
>
  Borrow
</button>
        </div>
      </div>
    </section>
  );
};

export default Book;
