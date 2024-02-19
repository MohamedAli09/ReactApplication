import img1 from "/home/mohamed/React/test2/my-app/src/Images/poert1.png";
import img2 from "/home/mohamed/React/test2/my-app/src/Images/port2.png";
import img3 from "/home/mohamed/React/test2/my-app/src/Images/port3.png";
import React from "react";
import { useState } from "react";
import "./Portfolio.css";
import { Helmet } from "react-helmet";

export default function Portfolio() {
  const [data, setData] = useState([
    {
      img: img1,
      id: "img1",
    },
    {
      img: img2,
      id: "img2",
    },
    {
      img: img3,
      id: "img3",
    },
    {
      img: img1,
      id: "img4",
    },
    {
      img: img2,
      id: "img5",
    },
    {
      img: img3,
      id: "img6",
    },
  ]);

  window.addEventListener("click", (e) => {
    let singleImage = document.getElementById("singleImage");
    if (
      e.target.id == "singleImage" &&
      !singleImage.classList.contains("d-none")
    ) {
      singleImage.classList.add("d-none");
    }
  });
  let action = (e) => {
    let img = e.target.id;
    let singleImage = document.getElementById("singleImage");
    singleImage.classList.remove("d-none");
    singleImage.innerHTML = `<img src=${img} alt="" />`;
  };
  return (
    <section id="Portfolio" className="">
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <div id="singleImage" className="d-none"></div>

      <div className="container">
        <h2 className="text-center fw-bold pt-4 text-uppercase fs-1">
          portfolio component
        </h2>
        <div className="iconsAndline  ">
          <div className="line "></div>
          <i _ngcontent-pth-c6="" class="fa-solid fa-star"></i>
          <div className="line"></div>
        </div>

        <div className="row g-4">
          {data.map((item) => {
            return (
              <div className="col-md-4" key={item.id}>
                <div
                  onClick={(e) => action(e)}
                  className="portfolio-item position-relative"
                >
                  <img src={item.img} alt="  " className="w-100" />
                  <div className="item-info" id={`${item.img}`}>
                    <i
                      _ngcontent-wal-c19=""
                      className="text-white fa-solid fa-plus fa-6x"
                      id={`${item.img}`}
                    ></i>{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
