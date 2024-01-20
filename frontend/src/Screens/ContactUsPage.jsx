import React from "react";
import FeedbackForm from "../components/feedbackform";

const ContactUsPage = () => {
  return (
    <div className=" flex flex-col bg-white justify-center items-center py-24">
      <div className=" h-[100px] w-3/5 "></div>
      <div className=" w-3/5 flex flex-col justify-start  ">
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">
            We'd love to hear from you! Reach out to us using the contact
            information below:
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p>Email: info@fooddeliveryapp.com</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p>123 Main Street, City, State, Zip Code</p>
          </div>
          <div className="mb-6"></div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <p>
              Connect with us on social media:{" "}
              <a
                className=" text-blue-400 font-bold"
                href="https://www.facebook.com/fooddeliveryapp"
              >
                Facebook
              </a>
              ,{" "}
              <a
                className=" text-blue-400 font-bold"
                href="https://www.instagram.com/fooddeliveryapp"
              >
                Instagram
              </a>
              ,{" "}
              <a
                className=" text-blue-400 font-bold"
                href="https://www.twitter.com/fooddeliveryapp"
              >
                Twitter
              </a>
            </p>
      </div>
          </div>
          <br />
          <FeedbackForm />
        </div>
    </div>
  );
};

export default ContactUsPage;
