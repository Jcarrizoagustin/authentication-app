import { Route, Routes } from "react-router-dom";
import "./App.css";
import JoinPage from "./pages/JoinPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<JoinPage />} />
        <Route path="/personal" element={<PersonalInfoPage />} />
      </Routes>
    </>
  );
}

export default App;
