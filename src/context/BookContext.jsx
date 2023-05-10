import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fakeFetch } from "../Data/fakeFetch";
export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  const [users, setUsers] = useState({});

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/books");
      if (res.status === 200) {
        setBookData(res.data.books);
        setUsers(res.data.user);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleFav = (bookId) => {
    const filteredData = bookData.map((book) =>
      book.id === bookId ? { ...book, fav: true } : { ...book }
    );
    setBookData(filteredData);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(users);

  console.log("book", bookData);
  return (
    <BookContext.Provider value={{ bookData, handleFav, users }}>
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useBook = () => useContext(BookContext);
