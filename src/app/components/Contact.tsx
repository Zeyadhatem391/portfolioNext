"use client";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import AddressSection from "@/components/molecules/AddressSection";
// import { useState } from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
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
    <section className="py-24" id="contact">
      <AddressSection
        titel="Contact Me"
        text="Let's build something great together"
      />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-6">
        <div className="flex flex-col gap-6">
          {[
            { icon: <FaPhone />, title: "Phone", info: "+20 111 207 9724" },
            { icon: <FaEnvelope />, title: "Email", info: "zeyadhatem151177" },
            {
              icon: <FaMapMarkerAlt />,
              title: "Location",
              info: "Mansoura, Egypt",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-lg border ds-border-color ds-bg-alt
              flex items-center gap-5 hover:translate-x-2 transition-all duration-300`}
            >
              <div className="text-4xl text-blue-600">{item.icon}</div>
              <div>
                <Title size="xl" className="font-semibold">
                  {item.title}
                </Title>
                <Text className="opacity-80">{item.info}</Text>
              </div>
            </div>
          ))}
        </div>

        <form
          action="https://formspree.io/f/mqaevapl"
          method="post"
          // onSubmit={handleSubmit}
          className={`lg:col-span-2 p-10 rounded-2xl shadow-xl border ds-border-color ds-bg-alt ds-text-base
          grid grid-cols-1 md:grid-cols-2 gap-6`}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            // value={formData.name}
            // onChange={handleChange}
            className={`p-4 rounded-xl border ds-border-color ds-bg-form 
            focus:ring-2 focus:ring-blue-600 shadow-sm`}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            // value={formData.email}
            // onChange={handleChange}
            className={`p-4 rounded-xl border ds-border-color ds-bg-form  
            focus:ring-2 focus:ring-blue-600 shadow-sm`}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            // value={formData.subject}
            // onChange={handleChange}
            className={`p-4 md:col-span-2 rounded-xl border ds-border-color ds-bg-form  
            focus:ring-2 focus:ring-blue-600 shadow-sm`}
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Message"
            // value={formData.message}
            // onChange={handleChange}
            className={`p-4 md:col-span-2 rounded-xl border ds-border-color ds-bg-form  
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
