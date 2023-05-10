import { Link } from "react-router-dom";
import { useBook } from "../context/BookContext";
export const Header = () => {
  const { bookData } = useBook();
  const count = bookData.reduce(
    (acc, curr) => (curr.fav ? (acc = acc + 1) : acc),
    0
  );
  return (
    <nav>
      <Link to="/favrouite">Favrouite:{count}</Link>||
      <Link to="/profile">Profile</Link>||
      <Link to="/">Home</Link>
    </nav>
  );
};
