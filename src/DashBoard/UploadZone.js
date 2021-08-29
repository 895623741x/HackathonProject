import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./UploadZone.css";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function UploadZone({ onSuccess }) {
   const [files, setFiles] = useState([]);
   const history = useHistory();
   // console.log(files);

   const onChangeHandler = (e) => {
      setFiles(e.target.files);
   };
   // console.log(files);
   // console.log("good");

   const onSubmitHandler = (e) => {
      e.preventDefault();
      const data = new FormData();

      for (let i = 0; i < files.length; i++) {
         data.append("file", files[i]);
      }
      //   onPreserve(files);
      // console.log(data);
      axios
         //  .post("https://pdfbackend1.herokuapp.com/upload", data)
         .post("http://localhost:8000/upload", data)
         .then((res) => {
            console.log("Success");
            onSuccess(res.data);
            // console.log("a ok");
            // console.log(res.data);
         })
         .catch((e) => {
            console.log("Error", e);
         });
   };

   return (
      <div className="upload-zone">
         <h2>CSV/Excel File Upload</h2>
         <form method="post" action="#" id="#" onSubmit={onSubmitHandler}>
            <div className="form-group files">
               {/* <label>Upload Your File </label> */}
               <input type="file" className="form-control" multiple onChange={onChangeHandler} />
            </div>

            <Popup trigger={<button className="submit-btn">Submit</button>} position="right center">
               <div>Upload Successfully!!</div>
            </Popup>
         </form>
      </div>
   );
}

export default UploadZone;
