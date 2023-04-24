import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabase";
import GoogleButton from 'react-google-button'

export default function Login() {
    async function signInWithGoogle() {
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
        })
      }

  return (
    <div>
      <GoogleButton onClick={signInWithGoogle} />
    </div>
  );
}
