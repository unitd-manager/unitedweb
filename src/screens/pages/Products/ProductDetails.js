import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../constants/api";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactHtmlParser from "react-html-parser";

const ScreenDetail = () => {
  const [products, setProducts] = useState([]);
  const { title } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    getBlogs();
  }, [title]);

  const getBlogs = () => {
    var formated = title.split("-").join(" ");

    api
      .post("/getProductDetail", { title: formated })
      .then((res) => {
        setProducts(res.data.data);
        console.log(res);
      })
      .catch((err) => {});
  };

  return (
    <>
      <section
        class="page-title page-title-overlay bg-cover overflow-hidden"
        data-background="assets/images/background/about.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <h1 class="text-white position-relative">{title}</h1>
            </div>
            <div class="col-lg-3 ml-auto align-self-end">
              <ol class="breadcrumb justify-content-lg-end bg-transparent mb-4 px-0">
                <li
                  class="breadcrumb-item text-white"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </li>
                <li class="breadcrumb-item text-white fw-bold" aria-current="page">
                  Product Details
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="section pb-0 features">
      <div class="container">
        <div class="row">
          {products.map((data, index) => {
            return (
              <div
                class={`col-lg-${index === 0 ? "12" : "6"} col-sm-6 mb-4 aos-init aos-animate`}
                data-aos="fade-up"
                style={index === 0 ? { textAlign: "center" } : null}
              >
                <div class="position-relative px-4 py-5 ">
                  <h3 class="pt- pb-3 text-capitalize card-title">{data.title}</h3>
                  {ReactHtmlParser(data.description)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
};
export default ScreenDetail;