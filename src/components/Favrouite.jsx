import { useBook } from "../context/BookContext";

export const Favrouite = () => {
  const { bookData } = useBook();
  return (
    <div>
      <h1>Fav</h1>
      {bookData.map((book) => {
        return book.fav ? (
          <div key={book.id}>
            <img
              src={book.image}
              alt="bookimage"
              width="350px"
              height="350px"
            />
            <h1>{book.title}</h1>
            <h2>{book.author}</h2>
          </div>
        ) : null;
      })}
    </div>
  );
};
