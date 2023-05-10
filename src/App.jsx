import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { Favrouite } from "./components/Favrouite";
import { Profile } from "./components/Profile";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favrouite" element={<Favrouite />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
