import React, { useEffect } from "react";
import Headers from "./components/layouts/Headers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import { useDispatch } from "react-redux";
import { login } from "./store/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { currentUser } from "./components/functions/auth";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idToken = await user.getIdTokenResult();
        // console.log("idToken", idToken.token);
        // console.log("Hello useEffect", user.email);

        try {
          const res = await currentUser(idToken.token);
          console.log("res", res);

          // go Redux
          dispatch(
            login({
              email: res.data.email,
              name: res.data.name,
              token: idToken.token,
            }),
          );
        } catch (err) {
          console.log("err", err);
        }
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
