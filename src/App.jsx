import { Route, Routes } from "react-router-dom";
import "./App.css";
import JoinPage from "./pages/JoinPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import EditInfoPage from "./pages/EditInfoPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<JoinPage />} />
        <Route path="/profile" element={<PersonalInfoPage />} />
        <Route path="/edit" element={<EditInfoPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
