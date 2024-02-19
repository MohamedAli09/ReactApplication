import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import avataaars from "/home/mohamed/React/test2/my-app/src/Images/avataaars.svg";
import { Helmet } from "react-helmet";

export default function About() {
  
  return (
    <>
      <div className="About">
        <Helmet>
          <title>About</title>
        </Helmet>
        <div className="content">
          <figure className="d-flex justify-content-center">
            <img className="avataaars   " src={avataaars} alt="img1" />
          </figure>
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-light text-center">
            about component
          </h2>
          <div className="iconsAndline">
            <div className="line"></div>
            <i _ngcontent-pth-c6="" class="fa-solid fa-star"></i>
            <div className="line"></div>
          </div>
          <div className="container pt-3">
            <div className="row">
              <div className=" col-md-6 ">
                <div className="card">
                  <p className="text-light ">
                    {" "}
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.{" "}
                  </p>
                </div>
              </div>
              <div className=" col-md-6 ">
                <div className="card">
                  <p className="text-light">
                    {" "}
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
