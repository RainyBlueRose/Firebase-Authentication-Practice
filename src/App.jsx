import React, { useEffect } from "react";
import Headers from "./components/layouts/Headers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import { useDispatch } from "react-redux";
import { login } from "./store/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idToken = await user.getIdTokenResult();
        console.log("idToken", idToken.token);
        console.log("Hello useEffect", user.email);
        // go Redux
        dispatch(
          login({
            email: user.email,
            token: idToken.token,
          }),
        );
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const roitai = "สวัสดีครับ";
  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
