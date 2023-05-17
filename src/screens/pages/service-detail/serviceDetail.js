import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AOS from "aos";
import api from "../../../constants/api";
import ReactHtmlParser from "react-html-parser";

const Screendetail = () => {
  const [services, setServices] = useState([]);
  const { title } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    getBlogs();
  }, [title]);

  const getBlogs = () => {
    var formated = title.split("-").join(" ");
    api
      .post("/getServiceDetail", { title: formated })
      .then((res) => {
        setServices(res.data.data);
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
              <nav class="position-relative zindex-1" aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-lg-end bg-transparent mb-4 px-0">
                  <li
                    class="breadcrumb-item text-white"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Home
                  </li>
                  <li
                    class="breadcrumb-item text-white fw-bold"
                    aria-current="page"
                  >
                    Service Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section class="section py-0 features">
        <div class="container">
          <div class="row">
            {services.map((data, index) => {
              return (
                <div
                  class="col-lg-12 col-sm-12 mb-4 aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <div class="position-relative px-4 py-5 ">
                    <h3 class="pt-5 pb-3 text-capitalize card-title">
                      {data.title}
                    </h3>
                    {/* <img src={`http://43.228.126.245/unitd-api/storage/uploads/${data.file_name}`} className="img-fluid" alt="feature-image" /> */}
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

export default Screendetail;
