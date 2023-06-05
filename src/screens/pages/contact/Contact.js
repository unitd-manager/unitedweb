import React,{useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from '../../../constants/api';
// import * as Yup from 'yup';

export default function Contact() {
  const [email, setEmail] = useState();
  const [companyname, setCompanyName] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();

  React.useEffect(() => {
    AOS.init();
    getEmail();
    getCompanyName();
    getAddress();
    getMobile();
    //getBlogs()
    window.scrollTo(0,0)
   
  }, [])
  const applyChanges = () => {};

  const [user, setUser] = React.useState({
    name:'',  email:'', message:'',});

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
    if (
        user.name  &&
        user.email &&
        user.message        ) {
      api.post('/addContact',{
        name:user.name,
        email:user.email,
        message:user.message
      }).then((res)=>{
              console.log(res)
              // alert('Record created successfully', 'success'); 
      })
      .catch(() => {
        alert('Unable to edit record.', 'error');
       
      });
      console.log(user)
    } else {
      alert('Please fill all required fields.', 'error');
    }
    }
    
//Email
const sendMail = () => {
  if (
    user.name  &&
    user.email &&
    user.message        ) {
      const dynamic_template_data= 
      {name:user.name,
      email:user.email,
      message:user.message};
  api
    .post('/sendemail',{dynamic_template_data})
    .then(() => {
      alert('Thanks for contacting us. We will respond to your enquiry as soon as possible'); 
    })  
  } else {
   applyChanges()
  }

};

const getEmail = () =>{
  api.get('/getEmail').then(res=>{
    setEmail(res.data.data[0])
   })
}

const getCompanyName= () =>{
  api.get('/getCompanyName').then(res=>{
    setCompanyName(res.data.data[0])
   })
}

const getAddress = () =>{
  api.get('/getAddress').then(res=>{
    setAddress(res.data.data[0])
   })
}

const getMobile = () =>{
  api.get('/getContacts').then(res=>{
    setContact(res.data.data[0])
   })
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
            <input type="text" class="form-control mb-4" placeholder="Name*" name="name" value={user.name} onChange={(event) => handleChange(event)}/>
          </div>
         
          <div class="col-12">
            <input type="text" class="form-control mb-4" placeholder="Email*" name="email" 
            value={user.email} 
            onChange={(event) => handleChange(event)}/>
          </div>
          <div class="col-12">
            <textarea name="message" class="form-control mb-4" placeholder="Message*" value={user.message} onChange={(event) => handleChange(event)}></textarea>
          </div>
          <div class="col-8">
          <button 
              color="success"
              onClick={() => { 
                
                ContactSubmit();
                sendMail();
                setTimeout(() => {
                  window.location.reload()
              }, 1000);
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
               <li>{companyname&&companyname.companyname}{address&&address.address}</li>
                </ul>
              </div>
            </li>
            <li class="d-flex mb-4" data-aos="fade-up" data-aos-delay="200">
              <i class="fa fa-envelope-o icon-primary"></i>
              <div class="pl-3">
                <h6 class="text-dark">Email</h6>
                <ul class="list-unstyled">

                  <li><a class="text-dark" href="mailto:enquiry@usoftsolutions.com"> {email&&email.mailId}</a></li>
                </ul>
              </div>
            </li>
            <li class="d-flex mb-4" data-aos="fade-up" data-aos-delay="300">
              <i class="fa fa-phone icon-primary"></i>
              <div class="pl-3">
                <h6 class="text-dark">Phone</h6>
                <ul class="list-unstyled">
                  <li><a className="text-dark" href="tel:+65 6396 7554">{contact&&contact.phone}</a></li>
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
