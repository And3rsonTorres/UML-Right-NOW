import Head from "next/head";
import {useState, useEffect} from "react";

export default function SignUp() {

    const [didMount, setDidMount] = useState(false);
    useEffect(() => {
        setDidMount(true);
    }, []);

    if (!didMount) {
        return null;
    }

    return (
        <>
            <Head>
                <title>Sign Up</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://accounts.google.com/gsi/client" async defer></script>
            </Head>
            <main>
                <div className="mt-20 relative flex-col justify-center min-h-screen overflow-hidden">
                    <div className="w-full p-6 m-auto lg:max-w-xl">
                        <h1 className="text-3xl font-semibold text-left text-rowdy-blue">Sign Up</h1>
                        <form className="mt-6">

                            <div className="mb-2">
                                <label htmlFor="username" className="block text-m font-semibold">Username</label>
                                <input type="username" className="block w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="email" className="block text-m font-semibold">Email</label>
                                <input type="email" className="block w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="verifyEmail" className="block text-m font-semibold">Re-Enter Email</label>
                                <input type="email" className="block w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="password" className="block text-m font-semibold">Password</label>
                                <input type="password" className="block w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="verifyPassword" className="block text-m font-semibold">Re-Enter Password</label>
                                <input type="password" className="block w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>

                            <div className="mt-2 mb-2 text-xs">
                                <p>Password must be longer than 10 characters</p>
                                <p>Password must contain at least one capital letter</p>
                                <p>Password must contain at least one number</p>
                                <p>Password must contain at least one special character, i.e. !@#$%^&*</p>
                            </div>

                            <a href="#" className="text-m hover:underline">Forgot Password?</a>
                            
                            <div className="mt-6">
                                <button className="w-full px-4 py-2 tracking-wide text-white bg-rowdy-blue rounded-md transition-colors duration-200 transform focus:outline-none">
                                Create Account
                                </button>
                            </div>
                        </form>

                        <p className="mt-8 text-m font-light text-left">
                            Already have an account?{" "}
                            <a href="login" className="font-medium hover:underline">Login</a>
                        </p>

                        <p className="mt-4 text-m font-light text-left">or</p>

                        <p><br></br></p>

                        <div id="g_id_onload"
                            data-client_id="793557852728-bjnm83d8lqunpbpbjl8kqvp976d3aptg.apps.googleusercontent.com"
                            data-login_uri="http://localhost:3000/login"
                            data-auto_prompt="false">
                        </div>
                        <div className="g_id_signin w-40"
                            data-type="standard"
                            data-size="large"
                            data-theme="outline"
                            data-text="sign_in_with"
                            data-shape="rectangular"
                            data-logo_alignment="left">
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}