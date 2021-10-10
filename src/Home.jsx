import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Home=()=>{
  return(
    <>
    <div class="he">
    <h1 class="yo">Make Your Special Day<span class="spanji">Special</span></h1>
    <h2 class="yo">Know more About US</h2>
    <div class="para">
    <p class="para1">Whatever the occassion,our flowers will make it.
      <br/><span class="para2"> Where flowers are our inspiration to create lasting memories</span></p>
    </div>
    <a href="https://www.cityflowers.com/about-us">
    <button type="button" class="btn btn-danger mt-3 sty">Click here</button>
  </a>
  </div>
  <h1 class="text-center mt-5 cate">Our Special Categories</h1>
  <div className="container-fluid mb-5">
      <div className="row ">
        <div className="col-10 mx-auto">
          <div className="row gy-4">
            {
              Sdata.map((val,ind)=>{
                return <Card key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  msg={val.msg}
                />
              })
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;