import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forms } from "./store/actions/formsActions";
import { Link, Router, Route, Routes } from "react-router-dom";
import CreateForm from "./component/CreateForm";
import Home from "./component/Home";
import { Switch } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(forms());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<CreateForm />} />
    </Routes>
  );
}

export default App;
