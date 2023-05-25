import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from '../../../constants/api';
// import * as Yup from 'yup';

export default function Contact() {

  React.useEffect(() => {
    AOS.init();
    //getBlogs()
    window.scrollTo(0,0)
   
  }, [])
  const applyChanges = () => {};

  const [user, setUser] = React.useState({
    first_name:'', last_name:'', email:'', message:'',});

    let name, value;


    
  const handleChange = (e) => {
   
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value });
    console.log({[name]:value});
    // lname = e.target.lname
    // email = e.target.email
    // message = e.target.message
}
  const ContactSubmit = () =>{
    
      api.post('/addContact',{
        first_name:user.first_name,
        last_name:user.last_name,
        email:user.email,
        message:user.message
      }).then(res=>{
              console.log(res)
              
      })
      console.log(user)
    }
    
//Email
const sendMail = () => {
  if (
    window.confirm(
      ' Are you sure do you want to send Mail to this Client \n',
    )
  ) {
   
  //    const to= "meeera@520@gmail.com";
  //     const subject= "Email From Enquiry";
  //     const text = user.first_name;
  //     // const templateId="d-6a4a5194199c4185ba3c06b23329f801"
      
  api
    .post('/sendemail',)
    .then(() => {
    })
    
  }
 else {
  applyChanges();
}
};

// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Email is invalid').required('Email is required'),
//   first_name: Yup.string()
//     .required('name is required'),
// });

 

  return (<>

<section class="page-title page-title-overlay bg-cover overflow-hidden" data-background='#11476a'>
  <div class="container">
    <div class="row">
      <div class="col-lg-7">
        <h1 class="text-white position-relative">Contact<span class="watermark-sm">Contact</span></h1>
        <p class="text-white pt-4 pb-4">We are happy to assist you!!</p>
      </div>
      <div class="col-lg-3 ml-auto align-self-end">
        <nav class="position-relative zindex-1" aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-lg-end bg-transparent mb-4 px-0">
            <li class="breadcrumb-item"><a href="index.html" class="text-white">Home</a></li>
            <li class="breadcrumb-item text-white fw-bold" aria-current="page">Contact</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>

<section style={{paddingTop:150}} class="section section-lg bg-light">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 text-center">
        <p class="subtitle">Message</p>
        <h2 class="section-title">Leave A Message</h2>
      </div>
      <div class="col-lg-6 text-center">
        <form action="#" class="row" >
       

          <div class="col-lg-6">
            <input type="text" class="form-control mb-4" placeholder="First Name" name="first_name" value={user.first_name} onChange={(event) => handleChange(event)}/>
          </div>
          <div class="col-lg-6">
            <input type="text" class="form-control mb-4" placeholder="Last Name" name="last_name" value={user.last_name} onChange={(event) => handleChange(event)}/>
          </div>
          <div class="col-12">
            <input type="text" class="form-control mb-4" placeholder="Email" name="email" 
            value={user.email} 
            onChange={(event) => handleChange(event)}/>
          </div>
          <div class="col-12">
            <textarea name="message" class="form-control mb-4" placeholder="Message" value={user.message} onChange={(event) => handleChange(event)}></textarea>
          </div>
          <div class="col-8">
          <button 
              color="success"
              onClick={() => {
                
                  sendMail();
                ContactSubmit();
              }}type="button" className="btn btn-primary">Submit Now</button>
          </div>
        </form>
        </div>
    


      <div class="col-lg-6">
        <div class="p-5 rounded-xs shadow">
          <h3 class="text-dark">Keep in Touch</h3>
          <p class="border-bottom pb-4">United Technologies</p>
          <ul class="list-unstyled">
            <li class="d-flex mb-4" data-aos="fade-up" data-aos-delay="100">
              <i class="fa fa-map-o icon-primary"></i>
              <div class="pl-3">
                <h6 class="text-dark">Address</h6>
                <ul class="list-unstyled">
                  <li>United Technologies Pte Ltd 10 Jalan Besar #15-02A Sim Lim Tower Singapore - 208787</li>
                </ul>
              </div>
            </li>
            <li class="d-flex mb-4" data-aos="fade-up" data-aos-delay="200">
              <i class="fa fa-envelope-o icon-primary"></i>
              <div class="pl-3">
                <h6 class="text-dark">Email</h6>
                <ul class="list-unstyled">

                  <li><a class="text-dark" href="mailto:enquiry@usoftsolutions.com">admin@unitdtechnologies.com</a></li>
                </ul>
              </div>
            </li>
            <li class="d-flex mb-4" data-aos="fade-up" data-aos-delay="300">
              <i class="fa fa-phone icon-primary"></i>
              <div class="pl-3">
                <h6 class="text-dark">Phone</h6>
                <ul class="list-unstyled">
                  <li><a className="text-dark" href="tel:+65 6396 7554">+65 6396 7554</a></li>
                </ul>
              </div>
            </li>
          </ul>
          </div>
    </div>
    </div>
    </div>
  </section> 

</>
  )
  }
