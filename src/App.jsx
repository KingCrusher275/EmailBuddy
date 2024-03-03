import { useState } from 'react'
import './App.css'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import './App.css'



function App() {

  const [formElements, setFormElements] = useState({textArea:""});
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <div className="header">
        <img className='logo' src="mail-142.svg" alt="Email Buddy Logo" height={40} width={40}/>
        <h1 className="display-4 fw-bold text-body-emphasis cooltitle">Email Buddy</h1>
      </div>

      <form onSubmit={handleSubmit}>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Just upload your emails and watch the magic unfold! Get carefully curated highlights, without all of the fluff.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <input type="file" id="fileUpload" hidden />
        <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3" onClick={handleFileUpload}>Upload Emails</button>
        <button type="submit" className="btn btn-outline-secondary btn-lg px-4">Submit</button>
      </div>
    </div>

  <textarea className="form-control" value={formElements.textArea} onChange={handleChange} id="exampleFormControlTextarea1" rows="5"></textarea>
  </form>

    <div>
      <div className="container px-5">
        <img src="example.jpeg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
      </div>
    </div>
  </div>
  )

  function handleChange(e){
    setFormElements({...formElements, textArea: e.target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(formElements.textArea);
  }
}

function handleFileUpload() {
  const fileUpload = document.getElementById('fileUpload')
  fileUpload.click()
}



export default App
