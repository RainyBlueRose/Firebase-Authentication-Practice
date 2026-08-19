  import React from "react";
  import { Container, Button } from "react-bootstrap";
  import { auth, googleAuthProvider } from "../../firebase";
  import { signInWithPopup } from "firebase/auth";
  import { useSelector, useDispatch } from "react-redux";
  import { login, logout } from "../../store/userSlice";

  const Login = () => {
    const currentUser = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLoginByGoogle = async () => {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log("result", result);
      // มีค่าเท่ากับ const user = result.user
      const { user } = result;
      const idToken = await user.getIdTokenResult();

      console.log(user.email, idToken);
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
