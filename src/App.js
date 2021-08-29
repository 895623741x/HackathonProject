import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import ApplicationPage from "./ApplicationPage/ApplicationPage";
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
                  <Route exact path="/login" component={() => <Login />} />
                  <Route path="/dashboard" component={() => <Dashboard />} />
                  <Route path="/build_application" component={() => <ApplicationPage />} />
               </Switch>
            </div>
         </Router>
      </div>
   );
}

export default App;
