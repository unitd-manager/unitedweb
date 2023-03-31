import React,{useState,useEffect} from 'react'
import { useParams, useNavigate, } from "react-router-dom";
import api from '../../../constants/api';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactHtmlParser from 'react-html-parser';

const ScreenDetail = ()=> {
  const [products, setProducts] = useState([])
  const {title} = useParams()
  const navigate = useNavigate();
  
  useEffect(() => {
    AOS.init();
    getBlogs()
  }, [title])
  

  const getBlogs = () =>{
    var formated = title.split('-').join(' ')

    api.post('/getProductDetail',{title:formated}).then(res=>{
      setProducts(res.data.data)
      console.log(res)
    })
    .catch(err=>{

    })
  
    }
 

  
  return (
  <>
  
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
            <li class="breadcrumb-item text-white fw-bold" aria-current="page">Product Details</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>

  <section class="section pb-0 features">
  <div class="container">
    <div class="row">
      {products.map((data,index)=>{
     
          return ( 
           
          <div class="col-lg-6 col-sm-6 mb-4 aos-init aos-animate" data-aos="fade-up">
          
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
 </>

  )
}
export default ScreenDetail