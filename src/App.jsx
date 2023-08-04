import { Route, Routes } from "react-router-dom";
import "./App.css";
import JoinPage from "./pages/JoinPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import EditInfoPage from "./pages/EditInfoPage";
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";
import { Toaster } from 'react-hot-toast';

function App() {
  const [auth,setAuth] = useState(false)
  

  useEffect(() => {
    const isAuthenticated = (sessionStorage.getItem('isAuthenticated') === 'true')
    setAuth(isAuthenticated)
  },[])
  return (
    <>
      
      <Routes>
        <Route path="/" element={<JoinPage auth={auth} setAuth={setAuth}/>} />
        <Route path="/profile" element={<PersonalInfoPage auth={auth} setAuth={setAuth}/>} />
        <Route path="/edit" element={<EditInfoPage auth={auth} setAuth={setAuth}/>  } />
        <Route path="/login" element={<LoginPage auth={auth} setAuth={setAuth}/>} />
        {/* TODO: create an 404 error page (NotFound element)*/}
        {/*<Route path='*' element={<NotFound />} />*/}
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
