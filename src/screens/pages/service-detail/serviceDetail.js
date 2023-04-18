import React,{useEffect,useState} from 'react'
import { useParams,useNavigate } from "react-router-dom";
import AOS from 'aos';
import api from '../../../constants/api';
import ReactHtmlParser from 'react-html-parser';
import CommonTable from '../../../CommonTable';

const Screendetail = ()=> {
    const [services, setServices] = useState([]) 
    const {title} = useParams()
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    useEffect(() => {
      AOS.init();
      getBlogs()
    }, [title])
    

    const getBlogs = () =>{
      var formated = title.split('-').join(' ')
      setLoading(true);
      api.post('/getServiceDetail',{title:formated}).then(res=>{
        setServices(res.data.data)
        setLoading(false)
      }).catch(err=>{
        setLoading(false)

      })
    
      }

   return (

<>
<CommonTable 
        loading={loading}>
<section class="page-title page-title-overlay bg-cover overflow-hidden" data-background="assets/images/background/about.jpg">
  <div class="container">
    <div class="row">
      <div class="col-lg-7">
      <h1 class="text-white position-relative">{title}</h1>
        {/* <span class="watermark-sm">Blog Details</span> */}

        {/* <p class="text-white pt-4 pb-4">Cupidatat non proident sunt culpa qui officia deserunt mollit <br/> anim idest
          laborum sed ut perspiciatis.</p> */}
      </div>
      <div class="col-lg-3 ml-auto align-self-end">
        <nav class="position-relative zindex-1" aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-lg-end bg-transparent mb-4 px-0">
            <li class="breadcrumb-item text-white" onClick={()=>{navigate('/')}}>Home</li>
            <li class="breadcrumb-item text-white fw-bold" aria-current="page">Service Details</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>


<section class="section py-0 features">
  <div class="container">
    <div class="row">
      {services.map((data,index)=>{
     
          return ( 
           
          <div class="col-lg-12 col-sm-12 mb-4 aos-init aos-animate" data-aos="fade-up">
          
            <div class="position-relative px-4 py-5 ">
              {/* <img src="assets/images/feature/feature-1.png" class="img-fluid" alt="feature-image"/> */}
              <h3 class="pt-5 pb-3 text-capitalize card-title">{data.title}</h3>
              { ReactHtmlParser(data.description) }
              
            </div>
  
        </div>
     
        )
       
      })}
     
      
    </div>
  </div>
</section>

{/* <section class="section">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <p class="subtitle" data-aos="fade-up">Services</p>
                <h2 class="section-title" data-aos="fade-up" data-aos-delay="200">Our Service Area</h2>
            </div>
            <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                <div class="card border-0 shadow rounded-xs pt-5">
                    <div class="card-body">
                        <i class="fa fa-object-ungroup icon-lg icon-primary icon-bg-primary icon-bg-circle mb-3"></i>
                        <h4 class="mt-4 mb-3">Networking</h4>
                        <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="400">
                <div class="card border-0 shadow rounded-xs pt-5">
                    <div class="card-body">
                        <i class="fa fa-users icon-lg icon-yellow icon-bg-yellow icon-bg-circle mb-3"></i>
                        <h4 class="mt-4 mb-3">Social Activity</h4>
                        <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="600">
                <div class="card border-0 shadow rounded-xs pt-5">
                    <div class="card-body">
                        <i class="fa fa-desktop icon-lg icon-purple icon-bg-purple icon-bg-circle mb-3"></i>
                        <h4 class="mt-4 mb-3">Web Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="800">
                <div class="card border-0 shadow rounded-xs pt-5">
                    <div class="card-body">
                        <i class="fa fa-cloud icon-lg icon-cyan icon-bg-cyan icon-bg-circle mb-3"></i>
                        <h4 class="mt-4 mb-3">Cloud Service</h4>
                        <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                <div class="card border-0 shadow rounded-xs pt-5">
                    <div class="card-body">
                        <i class="fa fa-comments icon-lg icon-red icon-bg-red icon-bg-circle mb-3"></i>
                        <h4 class="mt-4 mb-3">Consulting</h4>
                        <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="400">
                <div class="card border-0 shadow rounded-xs pt-5">
                    <div class="card-body">
                        <i class="fa fa-search-plus icon-lg icon-green icon-bg-green icon-bg-circle mb-3"></i>
                        <h4 class="mt-4 mb-3">SEO Optimization</h4>
                        <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="600">
                <div class="card border-0 shadow rounded-xs pt-5">
                    <div class="card-body">
                        <i class="fa fa-line-chart icon-lg icon-orange icon-bg-orange icon-bg-circle mb-3"></i>
                        <h4 class="mt-4 mb-3">Usability Testing</h4>
                        <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="800">
                <div class="card border-0 shadow rounded-xs pt-5">
                    <div class="card-body">
                        <i class="fa fa-wpexplorer icon-lg icon-blue icon-bg-blue icon-bg-circle mb-3"></i>
                        <h4 class="mt-4 mb-3">UX Prototyping</h4>
                        <p>Lorem ipsum dolor sit amet consectetur elit sed do</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


    <><section class="bg-light section section-lg-bottom">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <p class="subtitle" data-aos="fade-up" data-aos-delay="00">Features</p>
                    <h2 class="section-title" data-aos="fade-up" data-aos-delay="200">exclusive features</h2>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="00">
                    <div class="text-center shadow card py-3 border-0 rounded-sm">
                        <div class="card-body">
                            <i class="fa fa-desktop icon-lg icon-bg-square mb-5 icon-primary"></i>
                            <h4 class="mb-3">Exclusive Design</h4>
                            <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore
                                magna.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
                    <div class="text-center shadow card py-3 border-0 rounded-sm">
                        <div class="card-body">
                            <i class="fa fa-gears icon-lg icon-bg-square mb-5 icon-primary"></i>
                            <h4 class="mb-3">Easy Customize</h4>
                            <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore
                                magna.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="400">
                    <div class="text-center shadow card py-3 border-0 rounded-sm">
                        <div class="card-body">
                            <i class="fa fa-shield icon-lg icon-bg-square mb-5 icon-primary"></i>
                            <h4 class="mb-3">Extreme Security</h4>
                            <p>Lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore magna.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <Footer footerAbout={footerAbout}/>

    </> */}
</CommonTable>
</>

  )
}
    
export default Screendetail