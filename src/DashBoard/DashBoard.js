import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import "./Dashboard.css";
import Header from "./Header";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useHistory } from "react-router-dom";
import Application from "./Application";

function Dashboard() {
   const history = useHistory();
   const [{ applications }, dispatch] = useStateValue();

   const addNewApplication = () => {
      history.push("/build_application");
   };

   return (
      <div className="dashboard">
         <Header />
         {applications.map((application, index) => (
            <Application
               primaryType={application.primaryType}
               secondaryType={application.secondaryType}
               primaryArea={application.primaryArea}
               secondaryArea={application.secondaryArea}
               id={application.id}
               key={index}
            />
         ))}

         <div></div>

         <button onClick={addNewApplication}>
            <strong>+</strong>
         </button>
      </div>
   );
}

export default Dashboard;
