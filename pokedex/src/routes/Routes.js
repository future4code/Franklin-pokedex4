import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/components/Main";
import InitialPage from "../pages/initialpage/InitialPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<InitialPage/>}/>
        <Route path="/home" element={<Main />}/>
      </Routes>
    </BrowserRouter>
  );
};