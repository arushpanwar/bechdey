import React, { useState,useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";
import Success from "./Success";
import { supabase } from "@/lib/supabase";

const PurchaseForm = (props) => {
  const [purchased, setPurchased] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const selectedProduct = products.find((product) => product.id == props.id);
  const phoneno=selectedProduct?.email;
  const whatsappLink=`https://wa.me/${phoneno}?text=Hi,%20I%20want%20to%20rent%20Your%20${selectedProduct?.name}%20I%20found%20on%20Rentway%20priced%20at%20${selectedProduct?.price}%20rupees`;
  const newLink=`https://wa.me/${phoneno}?text=Hi,%20I%20have%20rented%20${selectedProduct?.name}%20from%20Rentway%20priced%20at%20${selectedProduct?.price}%20rupees%20Please%20send%20me%20the%20courier%20details.`
  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
      .from<Product>("products")
      .select("*");
      
      if (error) {
        console.error(error);
      } else {
        setProducts(data);
      }
    }
    
    fetchProducts();
  }, []);
  
  const handleInputChange = () => {
    if (
      email !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      address !== "" &&
      phone !== ""
      ) {
        setFormValid(true);
    } else {
      setFormValid(false);
    }
  };
  
  const deleteItem = async (id) => {
    const { data, error } = await supabase
    .from("products")
    .delete()
    .match({ id: id });
    
    if (error) {
      console.log("Error deleting item:", error.message);
    } else {
      console.log("Item deleted successfully:", data);
    }
  };
  
  const router = useRouter();
  
  
  
  
  
  const handleBuyNowClick = (e) => {
    e.preventDefault();
    if (email && firstName && lastName && address && phone) {
      // execute the deleteItem and router.reload() functions
      deleteItem(props.id);
      setPurchased(true);
      // router.push("/success");
      window.alert("Order Placed");
    } else {
      // show an error message or highlight the unfilled fields
      alert("Please fill in all the fields.");
    }
    // window.location.reload();
  };

  return (
    <>
      {purchased ? (
        <Success id={props.id} newLink={newLink} />
      ) : (
        <div className="grid grid-cols-2 ">
          <form className="flex flex-col bg-white p-8 ">
            <div className="grid mb-3 ">
              <div className="flex flex-col mb-3">
                <label
                  htmlFor="email"
                  className="block text-neutral-800 font-semibold mb-2"
                >
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                    handleInputChange();
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="flex flex-col mb-3">
                <label
                  htmlFor="first"
                  className="block text-neutral-800 font-semibold mb-2"
                >
                  First Name :
                </label>
                <input
                  type="text"
                  id="first"
                  name="first"
                  className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    handleInputChange();
                  }}
                />
              </div>

              <div className="flex flex-col mb-3">
                <label
                  htmlFor="last"
                  className="block text-neutral-800 font-semibold mb-2"
                >
                  Last Name :
                </label>
                <input
                  type="text"
                  id="last"
                  name="last"
                  className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => {
                    setLastName(e.target.value);
                    handleInputChange();
                  }}
                />
              </div>
            </div>

            <div className="grid mb-3">
              <div className="flex flex-col mb-3">
                <label
                  htmlFor="address"
                  className="block text-neutral-800 font-semibold mb-2"
                >
                  Address :
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => {
                    setAddress(e.target.value);
                    handleInputChange();
                  }}
                />
              </div>
            </div>

            <div className="grid mb-3">
              <div className="flex flex-col mb-3">
                <label
                  htmlFor="phone"
                  className="block text-neutral-800 font-semibold mb-2"
                >
                  Phone :
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                  onChange={(e) => {
                    setPhone(e.target.value);
                    handleInputChange();
                  }}
                />
              </div>
            </div>
            <div className="flex p-2">
              <div className="p-2">
                <button
                  type="button" 
                  className="text-l bg-red-800 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow-md"
                >
                  <a href={`${whatsappLink}`} target="_blank">Chat with Seller</a>
                </button>
              </div>
              <div className="p-2">
                <button
                  type="submit"
                  className="bg-red-800 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded shadow-md p-4"
                  onClick={handleBuyNowClick}
                >
                  Rent Now
                </button>
              </div>
            </div>
          </form>
          <div className="bg-white flex justify-center">
            <div className="flex flex-col items-center p-8 w-3/5">
              <div className="flex justify-between w-full items-center">
                <img src={props.image} className="w-16 h-16" alt="logo" />
                <div className="flex flex-col">
                  <span className="text-lg">{props.name}</span>
                  <span className="text-neutral-600">XL</span>
                </div>
              </div>
              <div className="flex justify-between mt-5 w-full">
                <input
                  type="text"
                  id="cuopon"
                  name="cuopon"
                  placeholder="Gift card or Coupon code"
                  className="border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline w-full mr-3"
                />
                <button
                  type="submit"
                  className="bg-red-800 hover:bg-amber-300 hover:text-neutral-800 text-white py-2 px-2 ml-2 rounded"
                >
                  Apply
                </button>
              </div>

              <div className="flex flex-row justify-between items-end w-full mt-4">
                <div className="text-xl text-neutral-800">Total</div>
                <div>
                  <span className="text-xs text-neutral-600 pr-2">INR </span>
                  <span className="text-lg text-neutral-800">
                    ₹{props.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PurchaseForm;
