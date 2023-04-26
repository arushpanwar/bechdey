import React from "react";
import { useRouter } from "next/router";


const Success = (props) => {
  const router = useRouter();
  const handleChatClick = ()=>{
    router.push('/');
  }
  return (
    <>
      
      <div className="flex flex-col justify-center items-center p-10 h-80">
        <h1 className="text-5xl font-bold font-mono">YAY!</h1>
      <div className="text-center pt-5 pb-8 mb-6 ">
        "Your Order ID : {props.id} has been placed successfully. Please contact
        seller for further details."
      </div>
        <button
          type="button"
          onClick={handleChatClick}
          className="text-l bg-red-800 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow-md"
        >
          <a href={props.newLink} target="_blank">Chat with Seller</a>
        </button>
      </div>
    </>
  );
};

export default Success;
