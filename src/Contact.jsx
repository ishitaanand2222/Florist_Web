import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact=()=>{
  return(
    <>
    <h1 class="about_head">Fill in the form below and
    <br/>
    we will instantly contact you via what's app  <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></h1>
    <div>
    <form class="form-ji">
    <div class="mb-3">
    <label for="exampleInputPhone" class="form-label">Phone Number</label>
    <input type="phone" class="form-control" id="exampleInputPhone"/>
  </div>
  <div class="mb-3 mt-5 ">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-danger">Submit</button>
</form>
</div>
    </>
  )
}

export default Contact;