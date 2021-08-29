import React from "react";
import "./Header.css";
import { Button } from "react-bootstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
   const history = useHistory();
   const [{ user }, dispatch] = useStateValue();

   const handleLogout = () => {
      if (user) {
         auth.signOut();
         dispatch({
            type: "SET_USER",
            user: null,
         });
         history.push("/login");
      }
   };

   const handleUpload = () => {
      history.push("/csv_loading");
   };

   return (
      <div>
         <nav className="header">
            <ul className="navItems">
               <li className="pageOption_account">
                  {user ? (
                     <div className="member_login_div">
                        <div>
                           <AccountCircleIcon fontSize="large" />
                           <span>{user.email}</span>
                        </div>

                        <ul className="member_logout">
                           <li>
                              <Button variant="" onClick={handleLogout}>
                                 Sign Out
                              </Button>
                           </li>
                           <li>
                              <Button variant="" onClick={handleUpload}>
                                 Upload Application
                              </Button>
                           </li>
                        </ul>
                     </div>
                  ) : (
                     <Link to="/login">
                        <AccountCircleIcon fontSize="large" />
                        <span>Hi, guest</span>
                     </Link>
                  )}
               </li>
            </ul>
         </nav>
      </div>
   );
}

export default Header;
