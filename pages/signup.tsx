import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabase";
import { useFormFields } from "@/lib/utils";
import { useMessage } from "@/lib/message";

type SignUpFieldProps = {
  email: string,
  password: string
}

const FORM_VALUES: SignUpFieldProps = {
  email: '',
  password: ''
}

type SupabaseSignupPayload = SignUpFieldProps

export default function Signup() {
  const [loading, setLoading] = useState(false)
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const router = useRouter();

  const { handleMessage } = useMessage();
  const [values, handleChange ] = useFormFields<SignUpFieldProps>(FORM_VALUES)

  // sign-up a user with provided details
  const signUp = async (payload: SupabaseSignupPayload) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signUp(payload)
      if (error) {
        handleMessage({ message: error.message, type: 'error' })
        console.log('error', error);
      }
      else {
        //handleMessage({ message: 'Signup successful. Please check your inbox for a confirmation email!', type: 'success' })
        console.log('success');
      }
    } catch (error) {
      //handleMessage({ message: error.error_description || error, type: 'error' })
      console.log('error', error);
    } finally {
      setLoading(false)
    }
  }

  const handleSumbit = (event: React.FormEvent) => {
    event.preventDefault()
    signUp(values)
  }

  // async function handleSignup() {
  //   const { error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //   });
  //   if (error) {
  //     setError(error.message);
  //   } else {
  //     router.push("/login");
  //   }
  // }

  return (
    // <div>
    //   <h1>Sign Up</h1>
    //   <input
    //     type="email"
    //     placeholder="Email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   {error && <p>{error}</p>}
    //   <button onClick={handleSignup}>Sign Up</button>
    // </div>
    <div className="h-screen flex flex-col justify-center items-center relative">

      {/* App logo and tagline*/}
      <div className="w-full text-center mb-4 flex  flex-col place-items-center">
        {/* <div><FaLock className="text-gray-600 text-5xl shadow-sm"/></div> */}
        <h3 className="text-3xl text-gray-600">Supa<strong>Auth</strong></h3>
        <small>Please provide your <strong>email</strong> and <strong>password</strong> and sign up</small>
      </div>

      {/* Sign Up form  */}
      <form className="w-full sm:w-1/2 xl:w-1/3" onSubmit={handleSumbit}>
        <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold text-gray-800 mb-2">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border  hover:border-gray-400"
              placeholder="Your Email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold text-gray-800 mb-2">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border hover:border-gray-400"
              placeholder="Your password"
              value={values.password}
              onChange={handleChange}
              required
            />
          </div>

          {/*  Sign Up form: Actions */}

          <div className="flex pt-4 gap-2">
            <button type="submit" disabled={loading} className="flex-1 bg-gray-500 border border-gray-600 text-white py-3 rounded w-full text-center shadow"
            onClick={(evt) => {
              evt.preventDefault()
              // console.log(`sign up with ${values.email}`);
              handleMessage({ message: 'will sign up..', type: 'success'})
            }}
            >
              Sign Up
            </button>
          </div>
          </div>
        </form>
      </div>
  );
}
