import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className=" container ">
          <div className="row ">
            <div className=" col-md-4 ">
              <div className="card ">
                <div className="card-body text-center text-light">
                  <h3 className="card-title">LOCATION</h3>
                  <p className=" ">2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
            </div>

            <div className=" col-md-4 ">
              <div className="card">
                <div className="card-body text-center text-light">
                  <h3 className="card-title">AROUND THE WEB</h3>
                  <div className="icons-footer">
                    <i
                      _ngcontent-tvn-c21=""
                      className="fa-brands fa-facebook mx-1 icon  "
                    ></i>
                    <i
                      _ngcontent-tvn-c21=""
                      className="fa-brands fa-twitter mx-1 icon"
                    ></i>
                    <i
                      _ngcontent-tvn-c21=""
                      className="fa-brands fa-linkedin-in mx-1 icon"
                    ></i>
                    <i
                      _ngcontent-tvn-c21=""
                      className="fa-solid fa-globe mx-1 icon"
                    ></i>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-md-4 ">
              <div className="card">
                <div className="card-body text-center text-light">
                  <h3 className="card-title">ABOUT FREELANCER</h3>
                  <p className="card-text">
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-rights text-center">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
