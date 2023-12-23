// App.js
import React from "react";
import Header from "./components/header";
// import BorrowHistory from "./components/borrowHistory"; 
import Books from "./components/books";
// Move this line up
import Footer from "./components/footer";
import ScrollToTop from "./components/scrolltotop";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Books></Books>
      {/* <BorrowHistory />  */}
      <ScrollToTop></ScrollToTop>
      <Footer></Footer>
    </div>
  );
};

export default App;
