import All from "./All";
import "./App.css";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupForm from "./signup";
const App = () => {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/All" element ={<All></All>} />
    <Route path="/SignupForm" element ={<SignupForm/>} />

   </Routes>
   </BrowserRouter>
    </>
  );
};
export default App;
