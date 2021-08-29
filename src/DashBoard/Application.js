import React from "react";
import { useStateValue } from "../StateProvider";
import "./Application.css";

function Application({ primaryType, secondaryType, primaryArea, secondaryArea, id }) {
   return (
      <div className="application">
         <h5>#{id}</h5>
         <div>
            <small>Primary Type of Research</small>
            <strong>{primaryType}</strong>
         </div>
         <div>
            <small>Secondary Type of Research (if applicable)</small>
            <strong>{secondaryType}</strong>
         </div>
         <div>
            <small>Primary Research Area</small>
            <strong>{primaryArea}</strong>
         </div>
         <div>
            <small>Secondary Research Area (if applicable)</small>
            <strong>{secondaryArea}</strong>
         </div>
      </div>
   );
}

export default Application;
