import { Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/mainPage/mainPage.tsx";
import LoginPage from "./components/pages/loginPage/loginPage.tsx";
import ProfilePage from "./components/pages/profilePage/profilePage.tsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/perfil" element={<ProfilePage />}></Route>
      </Routes>
    </>
  );
};

export default App;
