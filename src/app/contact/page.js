"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import Breadcrum from "@/components/common/Breadcrum";
import SelectComponent from "@/components/common/SelectComponent";
import Footer1 from "@/components/Footer/Footer1";
import Home1FooterTop from "@/components/Footer/Home1FooterTop";
import Header1 from "@/components/header/Header1";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    service_type: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (value) => {
    setForm({ ...form, service_type: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      full_name: form.full_name,
      email: form.email,
      phone: form.phone,
      service_type: form.service_type || "Not selected",
      message: form.message,
      submitted_time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_c2zvfqr", 
        "template_fr0e07l",
        templateParams,
        "KyZHll6hYFKvjlPQL"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
          });

          setForm({
            full_name: "",
            email: "",
            phone: "",
            service_type: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });

          console.log("EmailJS Error:", error);
        }
      );
  };

  return (
    <>
      <Header1 fluid={"container-fluid"} />
      <Breadcrum
        content="Any Question With Us"
        pageTitle={"Contact"}
        pagename={"Contact"}
      />

      <div className="home6-contact-section pt-120 mb-120">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row gy-5 align-items-center">

              {/* LEFT SIDE */}
              <div className="col-lg-5">
                <div className="contact-content">
                  <div className="section-title">
                    <h2>Connect with our team.</h2>
                  </div>

                  <ul className="contact-list">
                    <li className="single-contact">
                      <div className="content">
                        <span>To More Inquiry</span>
                        <h6>
                          <a href="tel:+92-21-32424292">+92-21-32424292</a>
                        </h6>
                      </div>
                    </li>

                    <li className="single-contact">
                      <div className="content">
                        <span>To Send Mail</span>
                        <h6>
                          <a href="mailto:info@apexsurfacessolution.com">
                            info@apexsurfacessolution.com
                          </a>
                        </h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* RIGHT SIDE FORM */}
              <div className="col-lg-7">
                <div className="contact-form-wrap">
                  <form onSubmit={sendEmail}>
                    <div className="row g-4">

                      <div className="col-md-12">
                        <div className="form-inner">
                          <label>Full Name *</label>
                          <input
                            type="text"
                            name="full_name"
                            value={form.full_name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-inner">
                          <label>Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-inner">
                          <label>Phone *</label>
                          <input
                            type="text"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-inner">
                          <label>Service Type</label>
                          <SelectComponent
                            options={["Minerals", "Marbles", "Engineered Stones"]}
                            placeholder="Service Type"
                            onSelect={handleSelect}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-inner">
                          <label>Message *</label>
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="primary-btn2">
                      <span>Submit Now</span>
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Home1FooterTop />
      <Footer1 />

      {/* Toast Notification Container */}
      <ToastContainer position="top-center" autoClose={3000} />

    </>
  );
};

export default Page;
 