import { Route, Routes } from "react-router-dom";
import "./App.css";
import JoinPage from "./pages/JoinPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import EditInfoPage from "./pages/EditInfoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<JoinPage />} />
        <Route path="/profile" element={<PersonalInfoPage />} />
        <Route path="/edit" element={<EditInfoPage />} />
      </Routes>
    </>
  );
}

export default App;
