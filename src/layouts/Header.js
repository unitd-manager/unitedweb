import React,{useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from '../constants/api';
import {Link} from 'react-router-dom'

export default function Header({style}) {
  
  const [menus, setMenus] = useState([])

  React.useEffect(() => {
    AOS.init();
    getBlogs()
   
  }, [])

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
  const getFormatedText = (section_title) =>{
    var formatedd = section_title.toLowerCase()
    return formatedd.split(' ').join('-')
  }
  return (
    <>
     <div style={style} className="naviagtion naviagtion-white fixed-top transition">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light p-0">
      <a className="navbar-brand p-0" href=""><img style={{width:200,height:100}} src="logo-dark.svg" alt="Agico" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
          aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
          <div className="collapse navbar-collapse text-center" id="navigation">
          <ul className="navbar-nav mx-auto">
           {menus.map(data=>{
            if(data.value.length > 1 ){
              let submenu = data.value
              
              return ( <li className="nav-item dropdown">
              <a className="nav-link text-dark dropdown-toggle" href="#" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">{data.section_title}</a>
              <div className="dropdown-menu">
                {submenu.map(option=>( <Link to={'/'+option.seo_title+'/'+getFormatedText(option.category_title)}><p className="dropdown-item text-color text-dark" >{option.category_title}</p></Link>))}
               
              </div>
            </li>)
            }else{
              return (<Link to={'/'+data.value[0].seo_title}><li className="nav-item">
              <a className="nav-link text-dark" href="">{data.section_title}</a>
            </li></Link>)
            }
           })}
            {/* <li className="nav-item">
              <a className="nav-link text-dark text-capitalize" href="about.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark text-capitalize" href="about.html">About Us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link text-dark text-capitalize dropdown-toggle" href="#" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Services</a>
              <div className="dropdown-menu">
                <a className="dropdown-item text-color" href="team.html">Our Team</a>
                <a className="dropdown-item text-color" href="pricing.html">Our Pricing</a>
                <a className="dropdown-item text-color" href="career.html">Our Career</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link text-dark text-capitalize dropdown-toggle" href="#" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Products</a>
              <div className="dropdown-menu">
                <a className="dropdown-item text-color" href="team.html">Our Team</a>
                <a className="dropdown-item text-color" href="pricing.html">Our Pricing</a>
                <a className="dropdown-item text-color" href="career.html">Our Career</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark text-capitalize" href="blog.html">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark text-capitalize" href="contact.html">Contact Us</a>
            </li> */}
          </ul>
          <a href="#" className="btn btn-outline-primary text-white ml-3">Enquiry now</a>
          </div>
      </nav>
    </div>
  </div> 
    </>
  )
}
