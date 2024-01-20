
import React from "react";
import {data } from "../components/Data";
import Card from "../components/Card";

const products = data;
function Productpage() {
  return (
    <div className="h-full w-full">
    <div className=" h-[100px]"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {products.map((product) => {
          return <Card key={product.id} name={product.name} img={product.img} price={product.price} {...product} />;
        })}
      </div>
    </div>
  );
}

export default Productpage;

