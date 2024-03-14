import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState<string | null>(null);

  const handleClick = () => {

  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)    
  }



  return (
    <div className="w-full h-2/3 bg-black flex flex-col gap-16 items-center">
      <h1 className="text-5xl font-serif font-medium pt-3 text-white">
        Subscribe for more
      </h1>
      <div className="w-3/4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
        <input type="email" className="w-11/12 sm:w-1/2 px-5 sm:px-9 py-3 rounded-lg" placeholder="Enter your email" onChange={(e) => handleChange(e)}/>
        <button onClick={handleClick} className="bg-white px-4 py-3 rounded-lg font-semibold duration-100 ease-in hover:bg-gray-300">
          Subscribe
        </button>
      </div>
      <p className="text-gray-400 text-lg font-light w-4/5 sm:w-2/5 text-center">
        Stay in the loop and elevate your fitness journey by subsribing to our
        newsletter. Receive exclusive content, expert tips, and exciting updates
        right in your inbox. Whether your're a gym enthusiast, a fitness
        beginner, or someone looking for motivation, our newsletter has
        something for everyone.
      </p>
    </div>
  );
};

export default Footer;
