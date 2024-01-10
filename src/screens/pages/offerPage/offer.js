import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import api from "../../../constants/api";
import Address1 from "../../../assets/images/attachments/digital.png";
// import Address2 from "../../../assets/images/attachments/address2.png";
// import Address3 from "../../../assets/images/attachments/address3.png";
import { Button,  Form, Input, message } from "antd";
// import * as Yup from 'yup';

export default function Offer() {
  // const [email, setEmail] = useState();
  // const [companyname, setCompanyName] = useState();
  // const [address, setAddress] = useState();
  // const [address1, setAddress1] = useState();
  // const [contact, setContact] = useState();
  const [mailId, setmailId] = useState("");

  React.useEffect(() => {
    AOS.init();
    // getEmail();
    // getCompanyName();
    // getAddress();
    // getAddress1();
    // getMobile();
    getEnquiryEmail();
    window.scrollTo(0, 0);
  }, []);
  const applyChanges = () => {};

  const [user, setUser] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log({ [name]: value });
    // lname = e.target.lname
    // email = e.target.email
    // message = e.target.message
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    api
      .post("/addContact", values)
      .then((res) => {
        console.log(res.data.data);
        return message.error("Registered Successfully ");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const getEnquiryEmail = () => {
    api.get("/getMailId").then((res) => {
      setmailId(res.data.data[0]);
    });
  };

  //Email
  const sendMail = () => {
    if (user.name && user.email && user.message) {
      const to = mailId.email;
      const dynamic_template_data = {
        name: user.name,
        email: user.email,
        message: user.message,
      };
      api.post("/sendemail", { to, dynamic_template_data }).then(() => {
        alert(
          "Thanks for contacting us. We will respond to your enquiry as soon as possible"
        );
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
    } else {
      applyChanges();
    }
  };

  // const getEmail = () => {
  //   api.get("/getEmail").then((res) => {
  //     setEmail(res.data.data[0]);
  //   });
  // };

  // const getCompanyName = () => {
  //   api.get("/getCompanyName").then((res) => {
  //     setCompanyName(res.data.data[0]);
  //   });
  // };

  // const getAddress = () => {
  //   api.get("/getAddress").then((res) => {
  //     setAddress(res.data.data[0]);
  //   });
  // };
  // const getAddress1 = () => {
  //   api.get("/getAddress1").then((res) => {
  //     setAddress1(res.data.data[0]);
  //   });
  // };
  // const getMobile = () => {
  //   api.get("/getContacts").then((res) => {
  //     setContact(res.data.data[0]);
  //   });
  // };

  return (
    <>
      <section
        class="page-title page-title-overlay bg-cover overflow-hidden"
        data-background="#11476a"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <h1 class="text-white position-relative">
                <span class="watermark-sm">Offer Page</span>
              </h1>
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
                    Offer
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    

      <section style={{ paddingTop: 150 }} className="section section-lg bg-light">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <div className="container center" style={{ width: "200%", height: '100vh', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div className="pl-3" style={{ textAlign: 'left', marginBottom: '20px' }}>
            <img src={Address1} alt="Address" width="100%" height="auto" />
          </div>

          <div style={{ maxWidth: "600px", width: '100%', border: "3px solid #007bff", borderRadius: "5px", padding: "20px" }}>            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={(event) => handleChange(event)}
                  placeholder="Name"
                  style={{ width: "100%", color: "blue" }}                 />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not a valid email!",
                  },
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={(event) => handleChange(event)}
                  placeholder="Email"
                  style={{ width: "100%", color: "blue" }}                 />
              </Form.Item>

              <Form.Item>
              <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          type="primary"
          onClick={sendMail}
          shape="round"
          size="large"
          htmlType="submit"
          className="login-form-button"
          style={{
            width: '100%',
            padding: '0px',  // Adjust padding as needed
            fontSize: '30px',
            backgroundColor: 'red',
            border: 'none',
            lineHeight: '1',  // Adjust line-height to vertically center the text
          }}
        >
          GET OFFER
        </Button>
    
  </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
