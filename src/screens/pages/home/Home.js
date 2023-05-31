import React,{useState} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import api from '../../../constants/api';
// //import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import { Link,useNavigate } from 'react-router-dom';
import imageBase from "../../../constants/image.js"


export default function Home() {

  const [blogs, setBlogs] = useState([])
  const [testimonial, setTestimonials] = useState([])
  const [products, setProducts] = useState([])
  const [services, setServices] = useState([]) 
  const [choose, setWhychooseus] = useState([])
 
  const navigate = useNavigate()

  const [contact, setContact] = React.useState({
    name:'', email:'', phone:'', message:''});
 
const [product, setProduct] = useState([])
const [service, setService] = useState([])

const handleProductChange = (e) => {
  // Destructuring
  const { value, checked } = e.target;
    
  console.log(`${value} is ${checked}`);
   
  // Case 1 : The user checks the box
  if (checked) {
    setProduct( [...product, value]);
  }

  // Case 2  : The user unchecks the box
  else {
    setProduct(product.filter((e) => e !== value));
  }
};
const applyChanges = () => {};


const handleServiceChange = (e) => {
  // Destructuring
  const { value, checked } = e.target;
    
  console.log(`${value} is ${checked}`);
   
  // Case 1 : The user checks the box
  if (checked) {
    setService( [...service, value]);
  }

  // Case 2  : The user unchecks the box
  else {
    setService(service.filter((e) => e !== value));
  }
};
const updateContactFields = e => {
  const fieldName = e.target.name
  setContact(existingValues => ({
    // Retain the existing values
    ...existingValues,
    // update the current field
    [fieldName]: e.target.value,
  }))
}
  const onEquirySubmit = () =>{
    if (
      
      contact.name  &&
      contact.email &&
      contact.message        ){
    
    api.post('/addEnquiry',{
      name:contact.name,
      email:contact.email,
      phone:contact.phone,
      message:contact.message,
      products:product.join(','),
      services:service.join(',')
    }).then((res)=>{
            console.log(res)        
   // alert('Record created successfully', 'success'); 
      })
      .catch(() => {
        alert('Unable to edit record.', 'error');
      });
    console.log(contact)
  } else {
    alert('Please fill all required fields.', 'error');
  }
  }
  
  //Email
const sendMail = () => {
  if (
    contact.name  &&
    contact.email &&
    contact.message        ) {
    const dynamic_template_data= 
    {name:contact.name,
    email:contact.email,
    message:contact.message};
  api
    .post('/sendemail',{dynamic_template_data})
    .then(() => {
    })
    
  }
 else {
  applyChanges();
}
};


  React.useEffect(() => {
    AOS.init();
    getBlogs()
    window.scrollTo(0,0)
    setTimeout(()=>{
      
    },1000)
   
  }, [])
  
 
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 5,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
    ]
  };
  const settings3 = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
    ]
  };
  const getBlogs = () =>{
  api.get('/getBlogImage').then(res=>{
      setBlogs(res.data.data)
    })
    api.post('/getContent',{recordType:'Testimonialpart'}).then(res=>{
      setTestimonials(res.data.data)
    })
    api.post('/getContent',{recordType:'Home Products'}).then(res=>{
      setProducts(res.data.data)
    })
    api.post('/getContent',{recordType:'Our Services'}).then(res=>{
      setServices(res.data.data)
    
    })
    api.post('/getContent',{recordType:'Why Choose Us'}).then(res=>{
      setWhychooseus(res.data.data)
      // console.log(res.data.data)
    }) 
 
    
  }
  const getServiceDetail = (title) =>{
    if(title === 'Web/ E Commerce Development'){
      navigate('services/website-development-software')
    }else{
      var formated = title.toLowerCase().split(' ').join('-')
    
      navigate('/services/'+formated)
    }
    
  }
  const getFormatedText = (title) =>{
    var formatedd = title.toLowerCase()
    return formatedd.split(' ').join('-')
  }
  return (
    <>
  
  <section className="hero-area hero-area-lg position-relative">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 text-center text-lg-left mb-4 mb-lg-0">
        <h2 className="text-dark position-relative" >Build Your Business Together with United Technologies<span className="watermark">Build</span></h2>
        <p className="text-dark mb-4">Our Mission - To create set of online products for growing industries, to minimize the work load, produce efficient results, margin revenues to high pitch.</p>
        <ul className="list-inline">
          <li className="list-inline-item mx-1 my-2">
            <a href="#" className="btn btn-primary">
              <img src="assets/images/icon/google-play-white.png" className="img-fluid mr-2 rounded" alt="play-store"/> Google Play</a>
          </li>
          <li className="list-inline-item mx-1 my-2">
            <a href="#" className="btn btn-outline-primary"><i className="fa fa-apple text-secondary mr-3 transition"></i>App
              Store</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-6">
        <img src="assets/images/banner/banner-3.png" className="img-fluid w-100 shadow rounded-lg" alt="app-interface" data-aos="fade-left" data-aos-delay="1000" />
      </div>
    </div>
  </div>
  <img src="assets/images/homepage-3/banner-shape.png" className="img-fluid bg-shape-4" alt="shape" />
</section>
<section style={{paddingTop:10}} className="section pb-0 features">
  <div className="container">
    
    <div className="row features-slider px-4" data-aos="fade-up">
      
      <div className="col-12 text-center">
        <div className="subtitle aos-init aos-animate" > 
        <p className="subtitle aos-init aos-animate mt-5"  >Products </p>
        <h2 className="section-title aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">Exclusive Products</h2>
      </div>
      </div>
      {products.map((data,index)=>{
        if(index%2 !== 0){
          return ( 
           
          <div className="col-lg-4 col-sm-6 mb-4 aos-init aos-animate" data-aos="fade-up" style={{height:200}}>
             <Link to={data.external_link} className="link">
          <div className="text-center position-relative px-4 py-5 rounded-lg shadow card-active" >
            <img src="assets/images/feature/feature-1.png" className="img-fluid" alt="feature-image"/>
            <h5 className="pt-5 pb-3 text-capitalize card-title">{data.title}</h5>
            { ReactHtmlParser(data.description) }
            
            <Link to={data.external_link} className="btn btn-outline-primary">read more</Link>
          </div>
          </Link>
        </div>
        )
        }else{
          return ( <div className="col-lg-4 col-sm-6 mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
          <Link to={data.external_link} className="link">
          <div className="text-center position-relative px-4 py-5 rounded-lg shadow">
            <img src="assets/images/feature/feature-2.png" className="img-fluid" alt="feature-image"/>
            <h5 className="pt-5 pb-3 text-capitalize card-title">{data.title}</h5>
          
            { ReactHtmlParser(data.description) }
            <Link to={data.external_link} className="btn btn-outline-primary">read more</Link>
          </div>
          </Link>
        </div>)
        }
       
      })}
     
      
    </div>
  </div>
</section>
<section className="position-relative mt-5">
  <div className="container">
    <div className="row ">
    <div className="col-12 text-center">
        <p className="subtitle aos-init aos-animate mt-5" >Services</p>
        <h2 className="section-title aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">Our Services</h2>
      </div>
      {services.map(data=>(
        <div onClick={()=>{getServiceDetail(data.title)}}  className="col-lg-3 col-sm-6 mb-4 mb-lg-0" data-aos="fade-right" >
         <Link to={data.internal_link} className="link"></Link>
            <div className="card border-0 shadow rounded-xs pt-5 h-100">
            
              <div className="card-body">
                <i className="fa fa-desktop icon-lg icon-blue icon-bg-blue icon-bg-circle mb-3"></i>
                <h4 className="mt-4 mb-3">{data.title}</h4>
                <p>{ReactHtmlParser(data.description)}</p>
               
              </div>
            </div>
        
      </div>
      ))}
      
    </div>
  </div>
  <img src="/assets/images/dot/dot-1.png" className="img-fluid feature-bg-shape-1" alt="background-dots"/>
  <img src="/assets/images/shape/shape-bg.png" className="img-fluid feature-bg-shape-2" alt="background-shape"/>
</section>
<section className="section position-relative overflow-hidden">
  <div className="container">
    <div className="row">
      <div className="col-md-6 align-self-center pr-lg-4 mb-4 mb-md-0">
        <p className="subtitle" data-aos="fade-up">Why choose us</p>
        <h2 className="section-title" data-aos="fade-up" data-aos-delay="200">Get in touch and discover how we can help in problem solving, expertise methodology, agile deployment with innovation driven.</h2>
        {/* <p data-aos="fade-up" data-aos-delay="500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu santium
          doloreque laudantum.</p> */}
      </div>
      <div className="col-md-6 pl-lg-4">
        <ul className="list-unstyled process-steps">
          {choose.map(res=>( <li className="bg-white d-inline-flex shadow rounded-xs p-4" data-aos="fade-right" data-aos-delay="200">
            <div className="mr-3">
              <span className="text-secondary step-number bg-gray-light rounded-circle"><i className='fa fa-trophy'></i></span>
            </div>
            <div className="align-self-center">
              <h5>{res.title}</h5>
              <p className="mb-0">
                {ReactHtmlParser(res.description)}
              </p>
            </div>
          </li>))}
          
        </ul>
      </div>
    </div>
  </div>
  <img src="assets/images/shape/curve-shape-2.png" className="img-fluid process-bg-shape" alt="bg-shape"/>
</section>

<section style={{paddingTop:0}}className="bg-light py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
        <p className="h2 text-dark"><span className="counter" data-count="100">0</span>+</p>
        <h6 className="text-dark font-weight-normal">HAPPY CLIENTS</h6>
      </div>
      <div className="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
        <p className="h2 text-dark"><span className="counter" data-count="200">0</span>+</p>
        <h6 className="text-dark font-weight-normal">FINISHED PROJECTS</h6>
      </div>
      <div className="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
        <p className="h2 text-dark"><span className="counter" data-count="30">0</span>+</p>
        <h6 className="text-dark font-weight-normal">SKILLED EXPERTS</h6>
      </div>
      <div className="col-md-3 col-sm-6 mb-4 mb-md-0 text-center">
        <p className="h2 text-dark"><span className="counter" data-count="300">0</span>+</p>
        <h6 className="text-dark font-weight-normal">MEDIA POSTS</h6>
      </div>
    </div>
  </div>
</section>

<section className="bg-light py-5">
  <div className="bg-gradient-primary section bg-triangles">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <p className="subtitle text-white" data-aos="fade-up">_testimonial_</p>
          <h2 className="section-title text-white" data-aos="fade-up" data-aos-delay="100">What Our Clients Says?</h2>
        </div>
      </div>
    </div>
  </div>
  <div className="translate-top">
    <div className="container-fluid">
      <div className="row testimonial-slider px-5" data-aos="fade-up">
       <div className='col-12'>
        <Slider {...settings3}>
          {testimonial.map(data=>{
            return(
            <div className="px-4 py-5 mb-5 border-0 rounded-lg text-center mb-5 mt-3">
            <div className="card border-0 shadow rounded-xs py-4">
              <i class="fa fa-quote-right icon-quote mb-4 mx-auto text-primary"></i>
              <div className="card-body">
                <p className="card-date">{ ReactHtmlParser(data.description)}</p>
                <span class="h6">Happy client</span>
                <br></br>
              </div>
            </div>
          </div>     
            )
          })}
        </Slider>
         </div>
      </div>
    </div>
  </div>
</section>

<section  className="section" >
<div className="container">
  <div className="row">
    <div className="col-12">
      <p className="subtitle" >latest blogs</p>
      <h2 className="section-title">Blogs</h2>
    </div>
    <div className="col-12">
      <div className="blog-slider">
      <Slider {...settings2}>
        {blogs && blogs.slice(0, 5).map(data=>(
          <div className="px-3 mb-5">
         <Link
                            to={'/'+'blogs'+'/'+getFormatedText(data.title)}
                            state={{ data: data }}
                            className="link"
                          >
          <div className="card border-0 shadow rounded-xs">
             <img src={`${imageBase}${data.file_name}`} className="img-fluid card-img-top" alt="post-thumb" /> 
            <div className="card-body">
         {/* <p className="card-date">{moment(data.date.substring(0,10), 'YYYY-MM-DD').format('MMMM Do YYYY')}</p> */}
              <h5><Link to={getFormatedText(data.title)} state={{ data: data }} className="text-dark">{data.title}</Link></h5>
              <br></br>
            </div>
          </div>
          </Link>
        </div>
        ))}
      </Slider>
      </div>
    </div>
  </div>
</div>
</section>

<section style={{paddingTop:10}} className="section">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
        <p className="subtitle">Enquiry</p>
        <h2 className="section-title">HOW CAN WE HELP YOU</h2>
      </div>
      <div className="col-12 text-center">
        <form action="#" className="row">
          <div className="col-lg-4">
            <input onChange={updateContactFields} type="text" 
            className="bg-light form-control mb-4" placeholder="Your Name*" name="name" />
          </div>
          <div className="col-lg-4">
            <input  onChange={updateContactFields} type="text" className="bg-light form-control mb-4" placeholder="Your Email*" name="email"/>
          </div>
          <div className="col-lg-4">
            <input  onChange={updateContactFields} type="text" className="bg-light form-control mb-4" placeholder="Your Phone" name="phone"/>
          </div>
          <div className="col-lg-12">
            <textarea  onChange={updateContactFields} className="bg-light form-control mb-4" placeholder="Message*" name="message"></textarea>
          </div>
          <div className="col-lg-6 text-left">
            <h3>Products</h3>
          <Checkbox color="primary" name="products" value="Hospital Management System" onChange={handleProductChange}>Hospital Management System</Checkbox><br></br>
          <Checkbox color="primary" name="products" value="School Management System" onChange={handleProductChange}>School Management System</Checkbox><br></br>
          <Checkbox color="primary" name="products" value="Trading Management System" onChange={handleProductChange}>Trading Management System</Checkbox><br></br>
          <Checkbox color="primary" name="products" value="Customer Management System" onChange={handleProductChange}>Customer Management System</Checkbox><br></br>
          <Checkbox color="primary" name="products" value="Learning Management System" onChange={handleProductChange}>Learning Management System</Checkbox><br></br>
          <Checkbox color="primary" name="products" value="Payroll Management System" onChange={handleProductChange}>Payroll Management System</Checkbox><br></br>
          </div>
          <div className="col-lg-5 text-left">
          <h3>Services</h3>
          <Checkbox name="services" value="Web/ E commerce Development" onChange={handleServiceChange}>Web/ E commerce Development</Checkbox><br></br>
          <Checkbox name="services" value="Mobile App Development" onChange={handleServiceChange}>Mobile App Development</Checkbox><br></br>
          <Checkbox name="services" value="Digital Marketing" onChange={handleServiceChange}>Digital Marketing</Checkbox><br></br>
          <Checkbox name="services" value="Cloud Hosting" onChange={handleServiceChange}>Cloud Hosting</Checkbox><br></br>
          </div>
          <div className="col-12">
            <button onClick={()=>{
             
              onEquirySubmit();
              sendMail();
            //   setTimeout(() => {
            //     window.location.reload()
            // }, 1000);
            }} type="button" className="btn btn-primary">Submit Now</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


    </>
  )
}
