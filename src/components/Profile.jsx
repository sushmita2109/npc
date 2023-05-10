import { useBook } from "../context/BookContext";

export const Profile = () => {
  const { users } = useBook();
  return (
    <div>
      <h1>Profile</h1>
      <img src={users.img} alt="userimage" width="250px" height="150px" />
      <p>
        {users.name}--{users.bio}
      </p>
    </div>
  );
};
