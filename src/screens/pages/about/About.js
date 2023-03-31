import React,{useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from '../../../constants/api';
import ReactHtmlParser from 'react-html-parser';
import Slider from "react-slick";

export default function About() {
  const [about, setAbout] = useState([])
  const [testimonial, setTestimonials] = useState([])

  React.useEffect(() => {
    AOS.init();
  getAboutContent()
    window.scrollTo(0,0)
   
  }, [])

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

  const getAboutContent = () =>{
  api.get('/getAboutUs',{recordType:'Record'}).then(res=>{
    setAbout(res.data.data)
    console.log('About us',res.data.data)
    api.post('/getContent',{recordType:'Testimonialpart'}).then(res=>{
      setTestimonials(res.data.data)
    })
  })
}
  return ( <>
    
  {/* <Header style={{background:'white'}} menus={menus}/> */}

<section class="page-title page-title-overlay bg-cover overflow-hidden" data-background="images/background/about.jpg">
  <div class="container">
    <div class="row">
      <div class="col-lg-7">
        <h1 class="text-white position-relative">About Us<span class="watermark-sm">About Us</span></h1>
        <p class="text-white pt-4 pb-4">United Technologies</p>
      </div>
      <div class="col-lg-3 ml-auto align-self-end">
        <nav class="position-relative zindex-1" aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-lg-end bg-transparent mb-4 px-0">
            <li class="breadcrumb-item"><a href="index.html" class="text-white">Home</a></li>
            <li class="breadcrumb-item text-white fw-bold" aria-current="page">About Us</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
  <div class="row">
    
      
      {/* <p class="subtitle" data-aos="fade-up">About United Technologies</p>
      <h2 class="section-title" data-aos="fade-up" data-aos-delay="200">dgfdg</h2> */}
      
 {about.map((data)=>{ 
   return(
    
        <div class="col-md-12 align-self-center pl-lg-4">

      <h2 class="section-title" data-aos="fade-up" data-aos-delay="200">{data.title}</h2>
      <p data-aos="fade-up" data-aos-delay="400">{ ReactHtmlParser(data.description)}</p>
      <p data-aos="fade-up" data-aos-delay="400">{ ReactHtmlParser(data.description1)}</p>
      </div>
    
   )
      })} 

  </div>
</div>
</section>


{/* <section className="bg-light py-5">
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
                <p className="card-date">{data.description_short}</p>
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
</section> */}


<section class="section section-lg-bottom bg-light">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <p class="subtitle">CONTACT</p>
        <h2 class="section-title">Contact Us</h2>
      </div>
      <div class="col-12 text-center">
        <form action="#" class="row">
          <div class="col-lg-12">
            <input type="text" class="form-control mb-4" placeholder="Your email"/>
          </div>
          <div class="col-lg-12">
            <input type="text" class="form-control mb-4" placeholder="Your Name"/>
          </div>
          <div class="col-12">
            <input type="text" class="form-control mb-4" placeholder="Subject"/>
          </div>
          <div class="col-12">
            <textarea name="message" class="form-control mb-4" placeholder="Message"></textarea>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Submit Now</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
