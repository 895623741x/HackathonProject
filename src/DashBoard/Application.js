import React from "react";
import { useStateValue } from "../StateProvider";
import "./Application.css";

function Application({ primaryType, secondaryType, primaryArea, secondaryArea, id }) {
   return (
      <div className="application">
         <h5>#{id}</h5>
         <p>{primaryType}</p>
         <p>{secondaryType}</p>
         <p>{primaryArea}</p>
         <p>{secondaryArea}</p>
      </div>
   );
}

export default Application;
