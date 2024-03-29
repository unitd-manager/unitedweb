import React, { useState, useEffect } from "react";
import AOS from "aos";
// import { getSortedCategories } from "./BlogCategory";
import api from "../../../constants/api";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import imageBase from "../../../constants/image.js"
import { Helmet } from "react-helmet";


export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  //const [Category, setCategory] = useState([]);
  // const [offset, setOffset] = useState(0);
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [currentData, setCurrentData] = useState([]);
  //   const [sortedProducts, setSortedProducts] = useState([]);
   const [filterSortType, setFilterSortType] = useState('');
     const [filterSortValue, setFilterSortValue] = useState('');
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [categories, setCategories] = useState();

  const location = useLocation();
  const navigate = useNavigate();
  // const pageLimit = 15;
  

  console.log("search", searchQuery);
  React.useEffect(() => {
    AOS.init();
    getBlogs();
    //getCategory();

    
  }, []);

  const getBlogs = () => {
   // var formated = title.split("-").join(" ");
    api
      .get("/getBlogImage" )
      .then((res) => {
        setBlogs(res.data.data);
        //setCurrentData(res.data.data);
      })
      .catch(() => {});
  };

 

const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
}

//useEffect(() => {
//     const filter=async()=>{
//     //let sortedProducts =await getSortedCategories(categories, sortType, sortValue)
//     console.log('sortedProducts',sortedProducts)
//     const filterSortedProducts = getSortedCategories(sortedProducts, filterSortType, filterSortValue);
//     sortedProducts = filterSortedProducts;
//     console.log('sorted',sortedProducts)
//     setSortedProducts(sortedProducts);
//     setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
// }
// filter();
// }, [offset, categories, sortType, sortValue, filterSortType, filterSortValue ]);
  
 
  useEffect(() => {
    
    //search filter
    const urlSearchParams = new URLSearchParams(location.search);
    const query = urlSearchParams.get("search");
    if (query) {
      setSearchQuery(query);
      api
        .post("/getBlogBySearch", { keyword: query })
        .then((res) => {
          setBlogs(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .get("/getBlogImage")
        .then((res) => {
          setBlogs(res.data.data);
          //setCurrentData(res.data.data);
        })
        .catch(() => {
          console.log("error");
        });
    }
    console.log("searchquery", query);
  }, [location]);
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?search=${searchQuery}`);
  };
  //search
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  //Category filter

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
}

useEffect(()=>{

  api.get('/getCategory').then((res)=>{
   setCategories(res.data.data)
    // return message.error("Registered Successfully ");
        }).catch(err=>{console.log(err)});
        //getblogs();
},[])
const getFormatedText = (title) =>{
  var formatedd = title.toLowerCase()
  return formatedd.split(' ').join('-')
}


  return (
    <>
    
      <section
        class="page-title page-title-overlay bg-cover overflow-hidden"
        data-background="assets/images/background/about.jpg">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <h1 class="text-white position-relative">
                Blog<span class="watermark-sm">Blog</span>
              </h1>
              {/* <p class="text-white pt-4 pb-4">Cupidatat non proident sunt culpa qui officia deserunt mollit <br/> anim idest
            laborum sed ut perspiciatis.</p> */}
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
                    Blog
                  </li>
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
                {blogs &&
                  blogs.map((data) => (
                    <div class="col-sm-6 mb-4">
                      <div class="card border-0 rounded-lg">
                        <div className="px-3 mb-5">
                        <Helmet>
              <meta charSet='utf-8' />
              {/* <title>{data.title}</title> */}
              <title>United Technologies</title>
              <meta name="description" content="Digital Marketing"></meta>
              <meta name="keyword" content=""></meta>
            </Helmet>
                          <Link
                            to={getFormatedText(data.title)}
                            state={{ data: data }}
                            className="link"
                          >
                            <div className="card border-0 shadow rounded-xs">
                              <img
                                src={`${imageBase}${data.file_name}`}
                                className="img-fluid card-img-top"
                                alt="post-thumb"
                              />
                               {/* <img src={`http://43.228.126.245/unitd-api/storage/uploads/${data.file_name}`} className="img-fluid card-img-top" alt="post-thumb" />  */}
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
            
                  {/* Blog search */}
                  <div class="rounded-sm shadow bg-white pb-4">
                    <div class="widget">
                      <h4>Search</h4>
                      <form action="/blog">
                        <div class="position-relative">
                          <input
                            type="text"
                            placeholder="Search here..."
                            onChange={handleSearchChange}
                            blogs={blogs}
                          />
                          <button onClick={handleSearchSubmit}>
                            <i class="fa fa-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
          {/* filter by categories */}
      {/* <BlogCategory
        categories={categories}
        getSortParams={getSortParams}
      /> */}
{/*       
     <BlogCategoryDetails categories={categories}
     getSortParams={getSortParams}></BlogCategoryDetails> */}
                {/* <div class="widget">
                  <h4>Category</h4>
                  <ul class="list-styled list-bordered">
                    {Category &&
                      Category.map((data) => (
                        <li>
                          <a
                            class="text-color d-block py-3"
                            href="/#/blog-details.html"
                          >
                            {data.category_title}
                          </a>
                        </li>
                      ))} */}
                    {/* <li><a class="text-color d-block py-3" href="blog-details.html">Investment Planning</a></li>
          <li><a class="text-color d-block py-3" href="blog-details.html">Valuable Idea</a></li>
          <li><a class="text-color d-block py-3" href="blog-details.html">Market Strategy</a></li>
          <li><a class="text-color d-block py-3" href="blog-details.html">development Maping</a></li>
          <li><a class="text-color d-block py-3" href="blog-details.html">Afiliated Marketing</a></li>
          <li><a class="text-color d-block py-3" href="blog-details.html">Targated Marketing</a></li> */}
                  {/* </ul>
                </div> */}

<div class="widget">
      <h4>Latest Article</h4>
      <ul class="list-unstyled list-bordered">
      {blogs && blogs.slice(0, 3).map(data=>(
          <li class="media border-bottom py-3">
            <img src={`${imageBase}${data.file_name}`} class="rounded-sm mr-3" alt="post-thumb" />
          {/* <img src="assets/images/men/sm-img-1.jpg" class="rounded-sm mr-3" alt="post-thumb"/> */}
          <div class="media-body">
           
            <h6 class="mt-0"> <Link
                            to={getFormatedText(data.title)}
                            state={{ data: data }}
                            className="text-dark">{data.title}</Link></h6>
            
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
    
  );
}


