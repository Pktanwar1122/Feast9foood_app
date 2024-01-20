import React, { useState } from "react";

function Card({ name, img, price }) {
  const [quantity, setquantity] = useState(0);

  const increasehandler = () => {
    setquantity(quantity + 1);
  };
  const decreasehandler = () => {
    if (quantity === 0) {
      setquantity(0);
    } else {
      setquantity(quantity - 1);
    }
  };

  return (
    <div className="rounded-md bg-blue-100  shadow-2xl text-center mb-8 border-8 border-blue-300 p-4 flex flex-col items-center">
      <div className="h-3/4 border-2 border-black rounded-md mb-2 overflow-hidden">
        <img src={img} alt={name} className="w-full object-contain" />
      </div>

      <div className=" h-1/4 w-full">
        <h2 className="text-lg font-bold">{`${name}- ₹${price}`}</h2>

        <div className=" flex justify-center justify-between ">
          <div className=" flex h-8 w-20  border-black border-2 justify-center items-center rounded-md ">
            <button
              className=" flex  justify-center items-center  border-r pl-10 "
              onClick={decreasehandler}
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
              </svg>
            </button>

            <div className=" px-1 font-bold text-3xl  ">{quantity}</div>

            <button
              className=" text-2xl border-l pr-10 "
              onClick={increasehandler}
            >
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <defs>
                  <style />
                </defs>
                <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
                <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
              </svg>
            </button>
          </div>
          <button className=" border-2 font-bold border-black  px-1 rounded-md">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
