import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import { Session } from "inspector";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  console.log(isLoggedIn);

  useEffect(() => {
    const checkUser = async () => {
      const { data: session } = await supabase.auth.getSession();
      setIsLoggedIn(session !== null);
      console.log(session);
      console.log(isLoggedIn);
    };

    checkUser();
  }, []);

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
    } else {
      router.push("/");
    }
  }

  console.log(isLoggedIn);

  return (
    <header className="text-gray-600 body-font flex justify-around">
      <div className="container flex flex-wrap py-4 px-8 flex-col md:flex-row items-center ">
        <Link legacyBehavior href={"/"}>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/logo.png" className="w-10 h-10 -rotate-45" alt="logo" />
            <span className="ml-3 font-semibold italic text-2xl">Rentway</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link legacyBehavior href={"/products"}>
            <a className="mr-5 hover:text-neutral-600 text-neutral-950 delay-75">
              All Products
            </a>
          </Link>
          <Link legacyBehavior href={"/submit"}>
            <a className="mr-5 hover:text-neutral-600 text-neutral-950 delay-75">
              Sell
            </a>
          </Link>
          <Link legacyBehavior href={"/aboutus"}>
            <a className="mr-5 hover:text-neutral-600 text-neutral-950 delay-75">
              About us
            </a>
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-neutral-900 delay-75 text-base mt-4 md:mt-0"
            >
              Logout
            </button>
          ) : (
            <>
              <Link legacyBehavior href="/login">
                <a className="mr-5 hover:text-neutral-600 text-neutral-950 delay-75">
                  Login
                </a>
              </Link>
              <Link legacyBehavior href="/signup">
                <a className="mr-5 hover:text-neutral-600 text-neutral-950 delay-75">
                  Sign Up 
                </a>
              </Link>
            </>
          )}
        </nav>
        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-neutral-900 delay-75 text-base mt-4 md:mt-0">
          Logout
        </button> */}
      </div>
    </header>
  );
};

export default Header;
