import React from "react";
import { ButtonPrimary } from "./Button.jsx";
import { Mail, User } from "lucide-react";

function ContactForm() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-4xl font-semibold mb-5 ">Get in touch</h2>
      </div>
      <div className="relative w-full">
        <User className="absolute top-1/2 -translate-y-1/2 left-6  text-gray-500 pointer-events-none" />
        <input
          type="text"
          placeholder="Name "
          className="bg-gray-200 rounded-4xl py-3 pl-14 pr-6 text-lg focus:outline-purple-500 w-full"
        />
      </div>
      <div className="relative w-full">
        <Mail className="absolute top-1/2 left-6 -translate-y-1/2 text-gray-500 pointer-events-none" />
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-200 rounded-4xl py-3 pl-14 pr-6 text-lg w-full focus:outline-purple-500"
        />
      </div>
      <textarea
        placeholder="Message..."
        className="bg-gray-200 rounded-4xl h-40 py-3 px-6 mb-5 focus:outline-purple-500"
      ></textarea>
      <ButtonPrimary btnTitle={"Send"} />
    </div>
  );
}

export default ContactForm;
