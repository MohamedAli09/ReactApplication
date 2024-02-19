import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Contacts.css";
import { Helmet } from "react-helmet";

export default function Contacts() {
  const labelTopChange = (e) => {
    if (e.target.value !== "") {
      e.target.labels[0].style.top = "-5px";
    } else {
      e.target.labels[0].style.top = "40px";
    }
  };

  return (
    <>
      <div className="Contacts">
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <div className="container">
          <div className="content">
            <h2 className="text-uppercase pt-1 fs-1 fw-bolder   text-center">
              conatct section
            </h2>
            <div className="iconsAndline">
              <div className="line-p "></div>
              <i _ngcontent-pth-c6="" class="fa-solid fa-star i-p"></i>
              <div className="line-p"></div>
            </div>

            <form
              className=" w-75 p-3 mt-5  mx-auto "
              action="
            "
            >
              <label
                _ngcontent-iik-c16=""
                for="userName"
                class="position-relative     "
              >
                userName :
              </label>
              <input
                onInput={(e) => labelTopChange(e)}
                _ngcontent-iik-c16=""
                id="userName"
                type="text"
                placeholder="userName"
                name="userName"
                className="form-control border-0 border-bottom py-3 position-relative w-100   d-flex justify-content-center "
              ></input>
              <label
                _ngcontent-iik-c16=""
                for="userAge"
                class="position-relative   "
              >
                userAge :
              </label>
              <input
                onInput={(e) => labelTopChange(e)}
                _ngcontent-iik-c16=""
                id="userAge"
                type="text"
                placeholder="userAge"
                name="userAge"
                className="form-control border-0 border-bottom py-3 position-relative w-100   d-flex justify-content-center "
              ></input>
              <label
                _ngcontent-iik-c16=""
                for="userEmail"
                class="position-relative   "
              >
                userEmail :
              </label>
              <input
                onInput={(e) => labelTopChange(e)}
                _ngcontent-iik-c16=""
                id="userEmail"
                type="text"
                placeholder="userEmail"
                name="userEmail"
                className="form-control border-0 border-bottom py-3 position-relative w-100   d-flex justify-content-center "
              ></input>
              <label
                _ngcontent-iik-c16=""
                for="userPassword"
                class="position-relative   "
              >
                userPassword :
              </label>
              <input
                onInput={(e) => labelTopChange(e)}
                _ngcontent-iik-c16=""
                id="userPassword"
                type="text"
                placeholder="userPassword"
                name="userPassword"
                className="form-control  no-border border-0 border-bottom py-3 position-relative w-100   d-flex justify-content-center "
              ></input>
              <button className="btn btn-primary   mt-4 text-white">
                {" "}
                send Message{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
