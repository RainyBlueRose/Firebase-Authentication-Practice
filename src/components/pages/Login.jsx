import React from "react";
import { Container, Button } from "react-bootstrap";

const Login = () => {

    const handleLoginByGoogle = async() => {
        alert('ok click')
    }

  return (
    <Container>
      <Button onClick={handleLoginByGoogle}>SignIn Google</Button>
    </Container>
  );
};

export default Login;
