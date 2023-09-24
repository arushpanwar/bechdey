import { useState, FormEvent } from "react";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";


export default function Submit() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Submit data to Supabase
    const { data, error } = await supabase
      .from("products")
      .insert([{ name, price, image, description, color, email }]);

    if (error) {
      console.error(error);
    } else {
      console.log(data);
      // TODO: Handle successful submission
    }

    //redirect to home page
    window.location.href = "/";
  };

  return (
    <>
      <section className="">
        <div className="py-6 px-10 mx-auto my-6 max-w-2xl lg:py-16 bg-white rounded-lg">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 ">
            Add a new product
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  <div className="mb-1 ml-1">Product Name</div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Type product name"
                    required
                  />
                </label>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  <div className="mb-1 ml-1">Phone Number</div>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    // placeholder="Type Email"
                    required
                  />
                </label>
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  <div className="mb-1 ml-1">Image Link</div>
                  <input
                    type="text"
                    value={image}
                    // onChange={(e) => setImage(e.target.value)}
                    onChange={(e) => setImage(e.target.value.includes('drive.google.com/file/d/')?`https://drive.google.com/uc?export=view&id=${e.target.value.split('/')[5]}`:e.target.value)}
                    name="name"
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Enter Image URL"
                    required
                  />
                </label>
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  <div className="mb-1 ml-1">Price</div>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Product Price"
                    required
                  />
                </label>
              </div>
              <div className="w-full">
                <label
                  htmlFor="color"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  <div className="mb-1 ml-1">Color</div>
                  <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    name="color"
                    id="color"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Product Color"
                    required
                  />
                </label>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  <div className="mb-1 ml-1">Description</div>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    id="description"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Your description here"
                  ></textarea>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-800 hover:bg-amber-300 hover:text-neutral-800 rounded-lg focus:ring-4 focus:ring-primary-200"
            >
              Add product
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
