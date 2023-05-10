import { useBook } from "../context/BookContext";

import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { bookData, handleFav } = useBook();

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("favrouite");
  };
  return (
    <div>
      <h1>Home</h1>
      {/* <Link to="/favrouite">Fav</Link> */}
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {bookData?.map((book) => (
          <div
            key={book.id}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
              padding: "8px",
            }}
          >
            <img
              src={book.image}
              alt="bookimage"
              width="250px"
              height="150px"
            />
            <p>{book.title}</p>
            <p>{book.author}</p>
            {!book.fav ? (
              <button onClick={() => handleFav(book.id)}>Add To Fav</button>
            ) : (
              <button onClick={handleNavigation}>Link</button>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};
