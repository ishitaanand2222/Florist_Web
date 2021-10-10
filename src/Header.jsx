import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone} from '@fortawesome/free-solid-svg-icons'

const Header=()=>{
  return(
    <>
    <div class="upper">
  <h6 class="upper_head"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> (425) 454-0882 ||  (888) 513-3043 <i class="fas fa-user-alt"></i> LOG IN <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> CART </h6>
</div>
<div class="logo text-center">
    <h1 class="logo_head">City Flowers 🌸</h1>
    <h4></h4>
  </div>
    </>
  )
}

export default Header;