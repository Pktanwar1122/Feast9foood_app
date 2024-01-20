import React from 'react';
import DeliveryPersonImage from '../assets/delivery_person_image.avif';
import customersuppotimage from '../assets/customer-support.avif'
import restaurantimage from '../assets/restaurant-image.jpg'

const AboutUsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 ">
      <h1 className="text-4xl font-bold mb-4">About Us:</h1>

      <p className="text-gray-700 text-center mb-8"> Introducing our app Feast9, where passion for food meets the convenience of technology. 
      As the founder of this innovative food delivery platform, 
      I envisioned a seamless and delightful experience for both customers and partner restaurants. 
      Our commitment to excellence drives us to constantly enhance the app's features and ensure quick, reliable, and delicious deliveries. 
      Join us in this culinary journey, and let's savor the flavors of convenience together.  </p>

      <div className="flex flex-col lg:flex-row items-center justify-around w-full">
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center mb-8 lg:mb-0">
          <img src={DeliveryPersonImage} alt="Delivery Person" className="rounded-full h-32 w-32 object-cover mx-auto mb-4" />
          <p className="text-lg font-semibold mb-2">Fast and Reliable Service</p>
          <p className="text-gray-700">Our dedicated delivery team ensures your orders are delivered promptly and with care.</p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center mb-8 lg:mb-0">
          <img src={restaurantimage} alt="Delivery Person" className="rounded-full h-32 w-32 object-cover mx-auto mb-4" />
          <p className="text-lg font-semibold mb-2">Wide Range of Restaurants</p>
          <p className="text-gray-700">Explore a variety of cuisines from local favorites to popular chains.</p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg text-center">
          <img src={customersuppotimage} alt="Delivery Person" className="rounded-full h-32 w-32 object-cover mx-auto mb-4" />
          <p className="text-lg font-semibold mb-2">Exceptional Customer Support</p>
          <p className="text-gray-700">Our support team is available to assist you with any inquiries or concerns.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
