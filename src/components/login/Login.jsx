import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((response) => {
        dispatch(login({ user: response.user.photoURL }));
      })
      .catch((error) => {
        return;
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png"
          alt="logo"
        />
        <div className="login__text">
          <h1>Sign in to gmail</h1>
        </div>

        <Button onClick={() => signIn()}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
