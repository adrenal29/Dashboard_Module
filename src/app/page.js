'use client'
import Form from "./components/Form";

export default function Home() {

  return (
    <>
      <div className="p-8 bg-blue-500 login-head md:hidden">
        <img src="./icons/LogoResponsive.svg"></img>
      </div>
      <div className="flex main">

        <div className="w-1/2 h-screen bg-605BFF clippedPath md:block hidden">
          <div className="logo">
            <img src="./icons/Logo.svg"></img>
            <img src="./icons/LogoBreak.svg" className="absolute  top-1/3"></img>
          </div>
          <div className="title"><h1><b>BASE</b></h1></div>
          <div className="flex justify-between socials">
            <img src="./icons/Github.svg"></img>
            <img src="./icons/Twitter.svg"></img>
            <img src="./icons/Linkedin.svg"></img>
            <img src="./icons/Discord.svg"></img>
          </div>
        </div>
        <div className="md:w-1/2 right ">
          <div className="flex flex-col signIn">
            <h1 className="">Sign In</h1>
            <h2>Sign in to your account</h2>
            <div className="flex  mt-10  flex social-btns ml-10">
              <button className="flex items-center justify-between mr-20">
                <img src="./icons/Google.svg" className="mr-2"></img>
                <h4>Sign in with Google</h4>
              </button>
              <button className="flex items-center justify-between">
                <img src="./icons/Apple.svg" className="mr-2"></img>
                <h4>Sign in with Apple</h4>
              </button>
            </div>
            <div className="ml-6 mt-6 loginForm ">
              <Form />
            </div>
            <div className="md:hidden mx-auto mt-5">
            <img src="./icons/SocialFooter.svg" ></img>  
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
