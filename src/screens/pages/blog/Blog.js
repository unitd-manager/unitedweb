import React,{useState} from 'react'
import AOS from 'aos';
import axios from 'axios';
import api from '../../../constants/api';
import { Link } from 'react-router-dom';
import moment from 'moment';
// import CommonTable from '../../../CommonTable';
// import LottieComponent from '../../../LottieComponent';

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  // const [loading, setLoading] = useState(false)
  //const [getFile, setGetFile] = useState(null);

  // const getBlogs = () => {
  //   axios.post('https://unitdweb.unitdtechnologies.com:3003/fileUploads/getListOfFiles', { record_id: 1, room_name: "Blog" }).then((res) => {
  //     setBlogs(res.data);
  //     console.log(res.data)
  //   });
  // };

    React.useEffect(() => {
        AOS.init();
        getBlogs();
        window.scrollTo(0,0)
        setTimeout(()=>{
        
        },5000)
       
      }, [])

    const getBlogs = () =>{
      //setLoading(true);
      api.get('/getBlogImage').then(res=>{
        setBlogs(res.data.data)
        console(res.data);
       // setLoading(false);
      })
      .catch(() => {
       // setLoading(false)
      });
   
      }
 
  return (
    <>
     
     
    <section class="page-title page-title-overlay bg-cover overflow-hidden" data-background="assets/images/background/about.jpg">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <h1 class="text-white position-relative">Blog<span class="watermark-sm">Blog</span></h1>
          {/* <p class="text-white pt-4 pb-4">Cupidatat non proident sunt culpa qui officia deserunt mollit <br/> anim idest
            laborum sed ut perspiciatis.</p> */}
        </div>
        <div class="col-lg-3 ml-auto align-self-end">
          <nav class="position-relative zindex-1" aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-lg-end bg-transparent mb-4 px-0">
              <li class="breadcrumb-item"><a href="index.html" class="text-white">Home</a></li>
              <li class="breadcrumb-item text-white fw-bold" aria-current="page">Blog</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  
 <section class="section mt-lg-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row blog-slide px-4">
          {blogs && blogs.map (data=>(
            <div class="col-sm-6 mb-4">
              <div class="card border-0 rounded-lg">
                <div className="px-3 mb-5">
                <Link to="/blogdetail" state={{ data: data }} className="link">
                  <div className="card border-0 shadow rounded-xs">
                     <img src={`http://43.228.126.245/unitd-api/storage/uploads/${data.file_name}`} className="img-fluid card-img-top" alt="post-thumb" /> 
                      {/* <img src={`http://localhost:3003/uitedwebapi/storage/uploads/${data.file_name}`} className="img-fluid card-img-top" alt="post-thumb" /> */}
                    <div className="card-body">
                      {/* <p className="card-date">{moment(data.date.substring(0,10), 'YYYY-MM-DD').format('MMMM Do YYYY')}</p>  */}
                       <h5>{data.title}</h5>
                      <br></br>
                  </div>
                </div>
                </Link>
              </div>
              </div>
            </div>
                  ))}
           
          </div>
        </div>
        <div class="col-lg-4">
    <div class="rounded-sm shadow bg-white pb-4">
      <div class="widget">
        <h4>Search</h4>
        <form action="#">
          <div class="position-relative">
            <input type="text" placeholder="Search here" class="border-bottom form-control rounded-0 px-0"/>
            <button class="search-btn" type="submit"><i class="fa fa-search"></i></button>
          </div>
        </form>
      </div>
      <div class="widget">
        <h4>Category</h4>
        <ul class="list-styled list-bordered">
          <li><a class="text-color d-block py-3" href="blog-details.html">Investment Planning</a></li>
          <li><a class="text-color d-block py-3" href="blog-details.html">Valuable Idea</a></li>
          <li><a class="text-color d-block py-3" href="blog-details.html">Market Strategy</a></li>
          <li><a class="text-color d-block py-3" href="blog-details.html">development Maping</a></li>
          <li><a class="text-color d-block py-3" href="blog-details.html">Afiliated Marketing</a></li>
          <li><a class="text-color d-block py-3" href="blog-details.html">Targated Marketing</a></li>
        </ul>
      </div>
      <div class="widget">
        <h4>Latest Article</h4>
        <ul class="list-unstyled list-bordered">
          <li class="media border-bottom py-3">
            <img src="assets/images/men/sm-img-1.jpg" class="rounded-sm mr-3" alt="post-thumb"/>
            <div class="media-body">
              <h6 class="mt-0"><a href="blog-details.html" class="text-dark">Aiusmod tempor did labore dolory</a></h6>
              <p class="mb-0 text-color">Aug 02, 2018</p>
            </div>
          </li>
          <li class="media border-bottom py-3">
            <img src="assets/images/men/sm-img-2.jpg" class="rounded-sm mr-3" alt="post-thumb"/>
            <div class="media-body">
              <h6 class="mt-0"><a href="blog-details.html" class="text-dark">Aiusmod tempor did labore dolory</a></h6>
              <p class="mb-0 text-color">Aug 02, 2018</p>
            </div>
          </li>
          <li class="media border-bottom py-3">
            <img src="assets/images/men/sm-img-3.jpg" class="rounded-sm mr-3" alt="post-thumb"/>
            <div class="media-body">
              <h6 class="mt-0"><a href="blog-details.html" class="text-dark">Aiusmod tempor did labore dolory</a></h6>
              <p class="mb-0 text-color">Aug 02, 2018</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="widget">
        <h4>Tags</h4>
        <ul class="list-inline tag-list mt-4">
          <li class="list-inline-item mb-3"><a href="blog-details.html" class="text-color shadow">Business</a></li>
          <li class="list-inline-item mb-3"><a href="blog-details.html" class="text-color shadow">Market Analysis</a></li>
          <li class="list-inline-item mb-3"><a href="blog-details.html" class="text-color shadow">Consultancy</a></li>
          <li class="list-inline-item mb-3"><a href="blog-details.html" class="text-color shadow">Marketing</a></li>
          <li class="list-inline-item mb-3"><a href="blog-details.html" class="text-color shadow">Finance</a></li>
        </ul>
      </div>
    </div>
  </div>
      </div>
    </div>
  </section>

  {/* <section class="subscription bg-white">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="subscription-wrapper">
            <div class="d-flex position-relative mx-5 justify-content-between align-items-center flex-column flex-md-row text-center text-md-left">
              <h3 class="flex-fill">Subscribe <br/> to our newsletter</h3>
              <form action="#" class="row flex-fill">
                <div class="col-lg-7 my-md-2 my-2">
                  <input type="email" class="form-control px-4 border-0 w-100 text-center text-md-left" id="email" placeholder="Your Email" name="email"/>
                </div>
                <div class="col-lg-5 my-md-2 my-2">
                  <button type="submit" class="btn btn-primary btn-lg border-0 w-100">Subscribe Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  </>
  )
}
