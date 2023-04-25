import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";
import Router from "next/router";
import GoogleButton from "react-google-button";

const Header = () => {
  const [user, setUser] = useState(null);
  const [currentSession, setCurrentSession] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: session } = await supabase.auth.getSession();
      // console.log(session);
      setUser(session?.user ?? null);
    };

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    checkUser();
  }, []);

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    Router.reload();
  }

  console.log(user?.identities[0].identity_data.full_name);

  return (
    <header className="text-gray-600 body-font flex flex-col justify-center">
      <div className="bg-white flex pb-2 px-8 flex-col items-center ">
        <div className=" w-full flex justify-between items-center pl-[26rem] pr-[21rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7    h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <Link legacyBehavior href={"/"}>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 py-2 ml-4">
              <img
                src="/logo2.png"
                className="w-64"
                alt="logo"
              />
              {/* <span className="ml-3 font-semibold text-violet-950 text-3xl">
                Rentway
              </span> */}
            </a>
          </Link>
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 mx-2 cursor-pointer "
              onClick={signInWithGoogle}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
        </div>
        <nav className="md:mx-auto flex flex-row justify-center items-center mb-2">
          <Link legacyBehavior href={"/products"}>
            <a className="mx-5 hover:text-red-700 text-neutral-950 delay-75">
              All Products
            </a>
          </Link>
          <Link legacyBehavior href={"/submit"}>
            <a className="mx-5 hover:text-red-700 text-neutral-950 delay-75">
              Upload
            </a>
          </Link>
          <Link legacyBehavior href={"/about"}>
            <a className="mx-5 hover:text-red-700 text-neutral-950 delay-75">
              About us
            </a>
          </Link>
          <Link legacyBehavior href={"/predict"}>
            <a className="mx-5 hover:text-red-700 text-neutral-950 delay-75">
              Predict
            </a>
          </Link>
          {user ? (
            <>
              <button
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 hover:text-white rounded text-neutral-900 delay-75 text-base mt-4 md:mt-0"
                onClick={signOut}
              >
                Logout
              </button>
              <span className="px-6">Hello, {user?.identities[0].identity_data.full_name}</span>
            </>
          ) : (
            // <GoogleButton onClick={signInWithGoogle} />
            <button
              className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-red-700 hover:text-white rounded text-neutral-900 delay-75 text-base mt-4 md:mt-0"
              onClick={signInWithGoogle}
            >
              Sign In
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
