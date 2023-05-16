import React,{useState} from 'react'
import api from '../constants/api';
import AOS from 'aos';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [footerAbout, setFooterAbout] = useState('')
  const [menus, setMenus] = useState([])

  React.useEffect(() => {
    AOS.init();
  getAboutContent()
  getBlogs()
    window.scrollTo(0,0)
   
  }, [])

  const getAboutContent = () =>{
    api.post('/getContent',{recordType:'About Us Footer'}).then(res=>{
      setFooterAbout(res.data.data[0].description)
    })
  }

  const getBlogs = () =>{
    api.post('/getMenu').then(res=>{
     
      let loopData = res.data.data
      var result = loopData.reduce(function (r, a) {
          r[a.section_title] = r[a.section_title] || [];
          r[a.section_title].push(a);
          return r;
      }, Object.create(null));
     
      let menuArray = [];
      Object.keys(result).forEach(function(key, index) {
        menuArray.push({section_title:key,value:result[key]})
      });
      setMenus(menuArray)
      //console.log(menuArray)
     
    })
    
  }

  return (
    <>
    <footer className="bg-secondary">
    <section className="section border-bottom border-color py-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-5 mb-4 mb-md-0">
            <img style={{width:200,height:100}} src="assets/images/logo/logo.svg" className="mb-4" alt="agico"/>
            <p className="text-light mb-4"></p>
            <ul className="list-inline social-icons">
              <li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-youtube"></i></a></li>
              <li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-github"></i></a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4 className="text-white mb-4">Services</h4>
            <ul className="list-styled list-hover-underline">
                {menus.map(data => {
                  return(
                    <Link to={'/'+data.value[0].seo_title}><li className="nav-item">
                      <a className="nav-link text-light" href="">{data.section_title}</a>
                    </li></Link>
                  )
                })}


              {/* <li className="mb-3 text-light"><a href="about.html" className="text-light">Company History</a></li>
              <li className="mb-3 text-light"><a href="about.html" className="text-light">About us</a></li>
              <li className="mb-3 text-light"><a href="contact.html" className="text-light">Contact us</a></li>
              <li className="mb-3 text-light"><a href="services.html" className="text-light">Services</a></li>
              <li className="mb-3 text-light"><a href="#" className="text-light">Privacy Policy</a></li> */}
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <h4 className="text-white mb-4">Contact Info</h4>
            <p className="text-light"> United Technologies Pte Ltd</p>
            <p className="text-light1">10 Jalan Besar
                #15-02A Sim Lim Tower
                Singapore - 208787</p>
            <ul className="list-unstyled">
              <li className="mb-3"><a className="text-light" href="tel:+65 6396 7554">+65 6396 7554</a></li>
              <li className="mb-3"><a className="text-light" href="mailto:admin@unitdtechnologies.com">admin@unitdtechnologies.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  
    <section className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p className="mb-0 text-light">Copyright &copy;
              <script>
                var CurrentYear = new Date().getFullYear()
                document.write(CurrentYear)
              </script>
              <a href="#">United Technologies</a></p>
          </div>
          <div className="col-md-6 text-md-right text-center">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#" className="text-light">Terms of Service</a></li>
              <li className="list-inline-item">| &nbsp;<a href="#" className="text-light">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </footer>
    </>
  )
}
