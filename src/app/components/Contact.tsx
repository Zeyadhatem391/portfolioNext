"use client";
// import { useState } from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

interface ContactProps {
  theme?: "light" | "dark";
}

export default function Contact({ theme = "light" }: ContactProps) {
  const bgPrimary = theme === "light" ? "bg-gray-100" : "bg-gray-900";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const cardBg = theme === "light" ? "bg-white" : "bg-gray-800";
  const inputBg = theme === "light" ? "bg-white" : "bg-gray-700";
  const borderColor = theme === "light" ? "border-gray-300" : "border-gray-600";

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert("Message sent!");
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };

  return (
    <section className={`py-24 ${bgPrimary}`} id="contact">
      {/* العنوان */}
      <div className="text-center mb-14">
        <h2 className={`text-5xl font-bold mb-4 ${textColor}`}>Contact Me</h2>
        <p className={`text-lg opacity-70 ${textColor}`}>
          Let&apos;s build something great together
        </p>
        <div className="w-28 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-6">

        {/* الكروت */}
        <div className="flex flex-col gap-6">
          {[
            { icon: <FaPhone />, title: "Phone", info: "+20 111 207 9724" },
            { icon: <FaEnvelope />, title: "Email", info: "zeyadhatem151177" },
            { icon: <FaMapMarkerAlt />, title: "Location", info: "Mansoura, Egypt" },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-lg border ${borderColor} ${cardBg}
              flex items-center gap-5 hover:translate-x-2 transition-all duration-300`}
            >
              <div className="text-4xl text-blue-600">{item.icon}</div>
              <div className={`${textColor}`}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="opacity-80">{item.info}</p>
              </div>
            </div>
          ))}
        </div>

        {/* الفورم */}
        <form action="https://formspree.io/f/mqaevapl" method="post"
          // onSubmit={handleSubmit}
          className={`lg:col-span-2 p-10 rounded-2xl shadow-xl border ${borderColor} ${cardBg}
          grid grid-cols-1 md:grid-cols-2 gap-6`}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            // value={formData.name}
            // onChange={handleChange}
            className={`p-4 rounded-xl border ${borderColor} ${inputBg} ${textColor}
            focus:ring-2 focus:ring-blue-600 shadow-sm`}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            // value={formData.email}
            // onChange={handleChange}
            className={`p-4 rounded-xl border ${borderColor} ${inputBg} ${textColor}
            focus:ring-2 focus:ring-blue-600 shadow-sm`}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            // value={formData.subject}
            // onChange={handleChange}
            className={`p-4 md:col-span-2 rounded-xl border ${borderColor} ${inputBg} ${textColor}
            focus:ring-2 focus:ring-blue-600 shadow-sm`}
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Message"
            // value={formData.message}
            // onChange={handleChange}
            className={`p-4 md:col-span-2 rounded-xl border ${borderColor} ${inputBg} ${textColor}
            focus:ring-2 focus:ring-blue-600 shadow-sm`}
          ></textarea>

          <button
            type="submit"
            className="md:col-span-2 py-4 bg-blue-600 text-white font-semibold rounded-full 
            hover:bg-blue-700 hover:shadow-lg transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
