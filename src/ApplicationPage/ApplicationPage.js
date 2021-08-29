import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./ApplicationPage.css";

function ApplicationPage() {
   const history = useHistory();
   const [{ applications }, dispatch] = useStateValue();
   console.log(applications);

   const [primaryType, setPrimaryType] = useState("");
   const [secondaryType, setSecondaryType] = useState("");
   const [primaryArea, setPrimaryArea] = useState("");
   const [secondaryArea, setSecondaryArea] = useState("");

   const onSubmitHandler = () => {
      dispatch({
         type: "ADD_TO_APPLICATIONS",
         options: {
            primaryType: primaryType,
            secondaryType: secondaryType,
            primaryArea: primaryArea,
            secondaryArea: secondaryArea,
            id: Math.floor(Math.random() * (9000 - 1000) + 1000),
         },
      });
      history.push("/dashboard");
   };

   return (
      <div>
         <div>
            <form className="container">
               <h3>Primary Type of Research</h3>

               <div>
                  <button
                     value="Basic/Fundamental"
                     onClick={(e) => {
                        e.preventDefault();
                        setPrimaryType("Basic/Fundamental");
                     }}
                  >
                     Basic/Fundamental
                  </button>
                  <button
                     value="Clinical"
                     onClick={(e) => {
                        e.preventDefault();
                        setPrimaryType("Clinical");
                     }}
                  >
                     Clinical
                  </button>
                  <button
                     value="Translational"
                     onClick={(e) => {
                        e.preventDefault();
                        setPrimaryType("Translational");
                     }}
                  >
                     Translational
                  </button>
               </div>

               <h3>Secondary Type of Research (if applicable)</h3>

               <div>
                  <button
                     value="Basic/Fundamental"
                     onClick={(e) => {
                        e.preventDefault();
                        setSecondaryType("Basic/Fundamental");
                     }}
                  >
                     Basic/Fundamental
                  </button>
                  <button
                     value="Clinical"
                     onClick={(e) => {
                        e.preventDefault();
                        setSecondaryType("Clinical");
                     }}
                  >
                     Clinical
                  </button>
                  <button
                     value="Translational"
                     onClick={(e) => {
                        e.preventDefault();
                        setSecondaryType("Translational");
                     }}
                  >
                     Translational
                  </button>
               </div>

               <h3>Primary Research Area</h3>

               <div>
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                        setPrimaryArea("Neurodegenerative Disorders and Injury");
                     }}
                  >
                     Neurodegenerative Disorders and Injury
                  </button>
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                        setPrimaryArea("Integrative Physiology and Behaviour");
                     }}
                  >
                     Integrative Physiology and Behaviour
                  </button>
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                        setPrimaryArea("Development");
                     }}
                  >
                     Development
                  </button>
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                        setPrimaryArea("Sensory Systems");
                     }}
                  >
                     Sensory Systems
                  </button>
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                        setPrimaryArea("Cognition");
                     }}
                  >
                     Cognition
                  </button>
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                        setPrimaryArea("Motivation and Emotion");
                     }}
                  >
                     Motivation and Emotion
                  </button>
               </div>

               <h3>Secondary Research Area (if applicable)</h3>

               <div>
                  <button
                     onClick={(e) => {
                        e.preventDefault();

                        setSecondaryArea("Neurodegenerative Disorders and Injury");
                     }}
                  >
                     Neurodegenerative Disorders and Injury
                  </button>
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                        setSecondaryArea("Integrative Physiology and Behaviour");
                     }}
                  >
                     Integrative Physiology and Behaviour
                  </button>
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                        setSecondaryArea("Development");
                     }}
                  >
                     Development
                  </button>
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                        setSecondaryArea("Sensory Systems");
                     }}
                  >
                     Sensory Systems
                  </button>
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                        setSecondaryArea("Cognition");
                     }}
                  >
                     Cognition
                  </button>
                  <button
                     onClick={(e) => {
                        e.preventDefault();
                        setSecondaryArea("Motivation and Emotion");
                     }}
                  >
                     Motivation and Emotion
                  </button>
               </div>

               <button type="submit" onClick={onSubmitHandler}>
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
}

export default ApplicationPage;
