import React from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";
import { auth, googleAuthProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../store/userSlice";

const Login = () => {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const createAndUpdateUser = async (authToken) => {
    return axios.post(
      `${import.meta.env.VITE_APP_API}/auth`,
      {},
      {
        headers: {
          authToken,
        },
      },
    );
  };

  const handleLoginByGoogle = async () => {
    const result = await signInWithPopup(auth, googleAuthProvider);
    // console.log("result", result);
    // มีค่าเท่ากับ const user = result.user
    const { user } = result;
    const idToken = await user.getIdTokenResult();
    // console.log(user.email, idToken.token);

    try {
      const res = await createAndUpdateUser(idToken.token);
      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <Container>
      <h1>{currentUser.value}</h1>
      <Button onClick={handleLoginByGoogle}>SignIn Google</Button>
      <hr />
      <Button onClick={() => dispatch(login())}>Login</Button>
      <Button onClick={() => dispatch(logout())}>LogOut</Button>
    </Container>
  );
};

export default Login;
