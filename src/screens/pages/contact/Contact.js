import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from '../../../constants/api';

export default function Contact() {

  React.useEffect(() => {
    AOS.init();
    //getBlogs()
    window.scrollTo(0,0)
   
  }, [])
  const applyChanges = () => {};
//Email
const sendMail = () => {
  if (
    window.confirm(
      ' Are you sure do you want to send Mail to this Client \n',
    )
  ) {
  const to ="sulfiya@unitdtechnologies.com";
  const text = "Hello";
  const subject ="Test Mail";
  api
    .post('/email/sendemail',{to,text,subject})
    .then(() => {
    })
    
  }
 else {
  applyChanges();
}
};



  const [user, setUser] = React.useState({
    fname:'', lname:'', email:'', message:'',});

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

<section class="section section-lg bg-light">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 text-center">
        <p class="subtitle">Message</p>
        <h2 class="section-title">Leave A Message</h2>
      </div>
      <div class="col-lg-6 text-center">
        <form action="#" class="row">

          <div class="col-lg-6">
            <input type="text" class="form-control mb-4" placeholder="First Name" name="fname" value={user.fname} onChange={(event) => handleChange(event)}/>
          </div>
          <div class="col-lg-6">
            <input type="text" class="form-control mb-4" placeholder="Last Name" name="lname" value={user.lname} onChange={(event) => handleChange(event)}/>
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
          <button className='shadow-none'
              color="success"
              onClick={() => {
                
                  sendMail();
                
              }}>Submit Now</button>
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
                  <li>Universal Software Solutions Pte Ltd 10 Jalan Besar #15-02A Sim Lim Tower Singapore - 208787</li>
                </ul>
              </div>
            </li>
            <li class="d-flex mb-4" data-aos="fade-up" data-aos-delay="200">
              <i class="fa fa-envelope-o icon-primary"></i>
              <div class="pl-3">
                <h6 class="text-dark">Email</h6>
                <ul class="list-unstyled">

                  <li><a class="text-dark" href="mailto:enquiry@usoftsolutions.com">enquiry@usoftsolutions.com</a></li>
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
