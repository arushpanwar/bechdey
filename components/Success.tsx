import React from "react";

const Success = (props) => {
  return (
    <>
      <div className="text-center p-20">
        "Your Order ID : {props.id} has been placed successfully. Please contact
        seller for further details."
      </div>
      <div className="align-center p-2">
        <button
          type="button"
          className="text-l bg-red-800 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow-md"
        >
          <a href={props.newLink}>Chat with Seller</a>
        </button>
      </div>
    </>
  );
};

export default Success;
