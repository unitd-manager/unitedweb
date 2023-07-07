import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import api from "../../../constants/api";
import moment from "moment";
import ReactHtmlParser from "react-html-parser";
import imageBase from "../../../constants/image.js";

export default function BlogDetails(props) {
  const [blogs, setBlogs] = useState([]);

  React.useEffect(() => {
    AOS.init();
    getBlogs();
    window.scrollTo(0, 0);
  }, []);
  const getBlogs = () => {
    api.post("/getBlogImage").then((res) => {
      setBlogs(res.data.data);
    });
  };
  const getFormatedText = (title) =>{
    var formatedd = title.toLowerCase()
    return formatedd.split(' ').join('-')
  }

  const location = useLocation();
  console.log(props, " props");
  console.log(location, " useLocation Hook");
  const data = location.state?.data;

  return (
    <>
      <section
        class="page-title page-title-overlay bg-cover overflow-hidden"
        data-background="assets/images/background/about.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <h1 class="text-white position-relative">{data.title}</h1>
            </div>
            <div class="col-lg-3 ml-auto align-self-end">
              <nav class="position-relative zindex-1" aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-lg-end bg-transparent mb-4 px-0">
                  <li class="breadcrumb-item">
                    <a href="index.html" class="text-white">
                      Home
                    </a>
                  </li>
                  <li
                    class="breadcrumb-item text-white fw-bold"
                    aria-current="page"
                  >
                    Blog Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 rounded-sm pr-5">
              {/* {data ? data.title : "Go to Home"} */}
              <img
                src={`${imageBase}${data.file_name}`}
                className="irounded-sm img-fluid w-100 mb-5"
                alt="post-thumb"
              />
              {/* <img src="assets/images/men/lg-img-1.jpg" class="rounded-sm img-fluid w-100 mb-5" alt="post-thumb"/> */}
              <p class="text-color card-date position-relative d-inline-block">
                {moment(data.date.substring(0, 10), "YYYY-MM-DD").format(
                  "MMMM Do YYYY"
                )}
              </p>
              <h3 class="mb-3 text-dark">{data.title}</h3>
              <p></p>
              <p>{ReactHtmlParser(data.description)}</p>
              <div class="my-5">
                <h5 class="d-inline-block mr-3">Share:</h5>
                <ul class="list-inline d-inline-block">
                  <li class="list-inline-item">
                    <a href="#" class="text-color">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="text-color">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="text-color">
                      <i class="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="text-color">
                      <i class="fa fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="rounded-sm shadow bg-white pb-4">
                <div class="widget">
                  <h4>Latest Article</h4>
                  <ul class="list-unstyled list-bordered">
                    {blogs &&
                      blogs.slice(0, 5).map((data) => (
                        <li class="media border-bottom py-3">
                          <img
                            src={`${imageBase}${data.file_name}`}
                            class="rounded-sm mr-3"
                            alt="post-thumb"
                          />
                          {/* <img src="assets/images/men/sm-img-1.jpg" class="rounded-sm mr-3" alt="post-thumb"/> */}
                          <div class="media-body">
                            <h6 class="mt-0">
                              {" "}
                              <Link
                                to={'/'+'blogs'+'/'+getFormatedText(data.title)}
                                state={{ data: data }}
                                className="text-dark"
                              >
                                {data.title}
                              </Link>
                            </h6>
                            <p class="mb-0 text-color">
                              {moment(
                                data.date.substring(0, 10),
                                "YYYY-MM-DD"
                              ).format("MMMM Do YYYY")}
                            </p>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
