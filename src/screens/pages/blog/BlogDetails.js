import React,{useState} from 'react'
import { Link, useLocation } from "react-router-dom";
import AOS from 'aos';
import api from '../../../constants/api';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';

export default function BlogDetails( props ) {
    const [blogs, setBlogs] = useState([])

    React.useEffect(() => {
        AOS.init();
        getBlogs()
       window.scrollTo(0,0)
      }, [])
    const getBlogs = () =>{
          api.get('/getProjects').then(res=>{
            setBlogs(res.data.data)
          })
      }

      const location = useLocation();
      console.log(props, " props");
      console.log(location, " useLocation Hook");
      const data = location.state?.data;

  return (
    <>

    <section class="page-title page-title-overlay bg-cover overflow-hidden" data-background="assets/images/background/about.jpg">
  <div class="container">
    <div class="row">
      <div class="col-lg-7">
        <h1 class="text-white position-relative">{data.title}
       
        </h1>
        {/* <p class="text-white pt-4 pb-4">Cupidatat non proident sunt culpa qui officia deserunt mollit <br/> anim idest
          laborum sed ut perspiciatis.</p> */}
      </div>
      <div class="col-lg-3 ml-auto align-self-end">
        <nav class="position-relative zindex-1" aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-lg-end bg-transparent mb-4 px-0">
            <li class="breadcrumb-item"><a href="index.html" class="text-white">Home</a></li>
            <li class="breadcrumb-item text-white fw-bold" aria-current="page">Blog Details</li>
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
        <img src="assets/images/men/lg-img-1.jpg" class="rounded-sm img-fluid w-100 mb-5" alt="post-thumb"/>
        <p class="text-color card-date position-relative d-inline-block">{moment(data.date.substring(0,10), 'YYYY-MM-DD').format('MMMM Do YYYY')}</p>
        <h3 class="mb-3 text-dark">{data.title}</h3>
        <p></p>
        {/* <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed eiusmod tempor incididunt labore
            dolore magna aliqua. enim minim veniam quis nostrud exercitation ullamco.
            laboris nisi ut aliquip ex ea commodo.</p>
          <h6>by Michelle Fischer</h6>
        </blockquote> */}
        <p>{ReactHtmlParser(data.description)}</p>
        <div class="my-5">
          <h5 class="d-inline-block mr-3">Share:</h5>
          <ul class="list-inline d-inline-block">
            <li class="list-inline-item"><a href="#" class="text-color"><i class="fa fa-facebook"></i></a>
            </li>
            <li class="list-inline-item"><a href="#" class="text-color"><i class="fa fa-twitter"></i></a>
            </li>
            <li class="list-inline-item"><a href="#" class="text-color"><i class="fa fa-linkedin"></i></a>
            </li>
            <li class="list-inline-item"><a href="#" class="text-color"><i class="fa fa-google-plus"></i></a>
            </li>
          </ul>
        </div>
        {/* <h5 class="text-dark">Comments 03</h5>
        <div class="media border-bottom py-4">
          <img src="assets/images/men/sm-img-4.jpg" class="img-fluid align-self-start rounded-circle mr-3" alt=""/>
          <div class="media-body">
            <h5 class="mt-0">Carole Marvin.</h5>
            <p>15 january 2015 At 10:30 pm</p>
            <p>Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea cu lupta
              definitionem.</p>
            <a href="#" class="btn btn-light btn-sm">Reply</a>

            <div class="media my-5">
              <img src="assets/images/men/sm-img-5.jpg" class="img-fluid align-self-start rounded-circle mr-3" alt=""/>
              <div class="media-body">
                <h5 class="mt-0">Jaquan Rolfson.</h5>
                <p>15 january 2015 At 10:30 pm</p>
                <p>Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea cu lupta
                  definitionem.</p>
                <a href="#" class="btn btn-light btn-sm">Reply</a>
              </div>
            </div>
          </div>
        </div>
        <div class="media py-4 mb-70">
          <img src="assets/images/men/sm-img-6.jpg" class="img-fluid align-self-start rounded-circle mr-3" alt=""/>
          <div class="media-body">
            <h5 class="mt-0">Bruce Bernier.</h5>
            <p>15 january 2015 At 10:30 pm</p>
            <p>Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea cu lupta
              definitionem.</p>
            <a href="#" class="btn btn-light btn-sm">Reply</a>
          </div>
        </div> */}
        {/* <h5 class="mb-4">Leave a Comment</h5>
        <form action="#" class="row">
          <div class="col-lg-6 mb-4">
            <input type="text" class="form-control font-italic shadow-sm rounded" placeholder="Name *" name="name"
              id="name"/>
          </div>
          <div class="col-lg-6 mb-4">
            <input type="text" class="form-control font-italic shadow-sm rounded" placeholder="Email *" name="mail"
              id="mail"/>
          </div>
          <div class="col-12 mb-4">
            <textarea name="comment" id="comment" placeholder="Message"
              class="font-italic shadow-sm form-control rounded"></textarea>
          </div>
          <div class="col-12 mb-4">
            <button type="submit" class="btn btn-primary">Send Message</button>
          </div>
        </form> */}
      </div>
      <div class="col-lg-4">
  <div class="rounded-sm shadow bg-white pb-4">
    {/* <div class="widget">
      <h4>Search</h4>
      <form action="#">
        <div class="position-relative">
          <input type="text" placeholder="Search here" class="border-bottom form-control rounded-0 px-0"/>
          <button class="search-btn" type="submit"><i class="fa fa-search"></i></button>
        </div>
      </form>
    </div> */}
    {/* <div class="widget">
      <h4>Category</h4>
      <ul class="list-styled list-bordered">
        <li><a class="text-color d-block py-3" href="/blogdetail">Investment Planning</a></li>
        <li><a class="text-color d-block py-3" href="/blogdetail">Valuable Idea</a></li>
        <li><a class="text-color d-block py-3" href="/blogdetail">Market Strategy</a></li>
        <li><a class="text-color d-block py-3" href="/blogdetail">development Maping</a></li>
        <li><a class="text-color d-block py-3" href="/blogdetail">Afiliated Marketing</a></li>
        <li><a class="text-color d-block py-3" href="/blogdetail">Targated Marketing</a></li>
      </ul>
    </div> */}
    <div class="widget">
      <h4>Latest Article</h4>
      <ul class="list-unstyled list-bordered">
      {blogs && blogs.slice(0, 5).map(data=>(
          <li class="media border-bottom py-3">
          <img src="assets/images/men/sm-img-1.jpg" class="rounded-sm mr-3" alt="post-thumb"/>
          <div class="media-body">
            <h6 class="mt-0"><Link to="/blogdetail" state={{ data: data }} className="text-dark">{data.title}</Link></h6>
            <p class="mb-0 text-color">{moment(data.date.substring(0,10), 'YYYY-MM-DD').format('MMMM Do YYYY')}</p>
          </div>
          </li>

      ))}


       
        {/* <li class="media border-bottom py-3">
          <img src="assets/images/men/sm-img-2.jpg" class="rounded-sm mr-3" alt="post-thumb"/>
          <div class="media-body">
            <h6 class="mt-0"><a href="blogdetail" class="text-dark">Aiusmod tempor did labore dolory</a></h6>
            <p class="mb-0 text-color">Aug 02, 2018</p>
          </div>
        </li>
        <li class="media border-bottom py-3">
          <img src="assets/images/men/sm-img-3.jpg" class="rounded-sm mr-3" alt="post-thumb"/>
          <div class="media-body">
            <h6 class="mt-0"><a href="blogdetail" class="text-dark">Aiusmod tempor did labore dolory</a></h6>
            <p class="mb-0 text-color">Aug 02, 2018</p>
          </div>
        </li> */}
      </ul>
    </div>
    {/* <div class="widget">
      <h4>Tags</h4>
      <ul class="list-inline tag-list mt-4">
        <li class="list-inline-item mb-3"><a href="blogdetail" class="text-color shadow">Business</a></li>
        <li class="list-inline-item mb-3"><a href="blogdetail" class="text-color shadow">Market Analysis</a></li>
        <li class="list-inline-item mb-3"><a href="blogdetail" class="text-color shadow">Consultancy</a></li>
        <li class="list-inline-item mb-3"><a href="blogdetail" class="text-color shadow">Marketing</a></li>
        <li class="list-inline-item mb-3"><a href="blogdetail" class="text-color shadow">Finance</a></li>
      </ul>
    </div> */}
  </div>
</div>
    </div>
  </div>
</section>

    </>
  )
}
