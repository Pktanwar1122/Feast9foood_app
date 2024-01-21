import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
function Productpage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFooditems = async () => {
      try {
        const response = await axios.get('https://feast9foood-app-az2u.vercel.app/api/dishes');
        setProducts(response.data); // Assuming the response contains an array of products
        console.log(response.data);
      } catch (error) {
        console.lo('Error fetching data from backend: ', error);
      }
    }
    fetchFooditems(); // Call the fetch function
 }, []);

  return (
    <div className="h-full-full">
      <div className=" h-[100px]"></div>
      <div className="grid grid-1 sm:grid-cols-2 md:grid-cols-3:grid-cols-4 xl:grid-cols-6 gap-4">
        {products.map((product) => {
          return <Card key={product.id} name={product.name} img={product.img} price={product.price} {...product} />;
        })}
 </div>
    </div>
  );
}

export default Productpage;


