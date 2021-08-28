import React, { useState } from "react";
import "./Login.css";
import { auth } from "../firebase";
import { Link, useHistory } from "react-router-dom";

function Login() {
   const history = useHistory();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const signIn = (e) => {
      e.preventDefault();

      auth
         .signInWithEmailAndPassword(email, password)
         .then((auth) => {
            history.push("/dashboard");
         })
         .catch((error) => alert(error.message));
   };

   const register = (e) => {
      e.preventDefault();

      auth
         .createUserWithEmailAndPassword(email, password)
         .then((auth) => {
            if (auth) {
               history.push("/dashboard");
            }
            console.log(auth);
         })
         .catch((error) => alert(error.message));
   };

   return (
      <div className="login">
         <div className="login_container">
            <h1>Sign-In</h1>

            <form>
               <h5>E-mail</h5>
               <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>

               <h5>Password</h5>
               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

               <button onClick={signIn}>Sign In</button>
               <button onClick={register}>Don't have an account? Create one!</button>
            </form>
         </div>
      </div>
   );
}

export default Login;
