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
          <Link legacyBehavior href={"/about"}>
            <a className="mr-5 hover:text-neutral-600 text-neutral-950 delay-75">
              About us
            </a>
          </Link>
          <Link legacyBehavior href={"/predict"}>
            <a className="mr-5 hover:text-neutral-600 text-neutral-950 delay-75">
              Predict
            </a>
          </Link>
          {user ? (
            <>
              <button
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-neutral-900 delay-75 text-base mt-4 md:mt-0"
                onClick={signOut}
              >
                Logout
              </button>
              <span>Hello, {user?.identities[0].identity_data.full_name}</span>
            </>
          ) : (
            // <GoogleButton onClick={signInWithGoogle} />
            <button
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-neutral-900 delay-75 text-base mt-4 md:mt-0"
              onClick={signInWithGoogle}
            >
              SignIn
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
