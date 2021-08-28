import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import DashBoard from "./DashBoard/DashBoard";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
   const [{}, dispatch] = useStateValue();

   useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
         console.log("the user is", authUser);

         if (authUser) {
            dispatch({
               type: "SET_USER",
               user: authUser,
            });
         } else {
            dispatch({
               type: "SET_USER",
               user: null,
            });
         }
      });
   }, []);

   return (
      <div>
         <Router>
            <div className="App">
               {/* <UploadZone onSuccess={onSuccess} />
         <Preview files={files} /> */}
               <Switch>
                  <Route path="/dashboard" component={() => <DashBoard />} />
                  <Route exact path="/login" component={() => <Login />} />
               </Switch>
            </div>
         </Router>
      </div>
   );
}

export default App;
