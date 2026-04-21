import AddressSection from "@/components/molecules/AddressSection";
import ContactCard from "@/components/molecules/ContactCard";
import { Contacts } from "@/data/contact";

export default function Contact() {
  return (
    <section className="py-24" id="contact">
      <AddressSection
        titel="Contact Me"
        text="Let's build something great together"
      />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-6">
        <div className="flex flex-col gap-6">
          {Contacts.map((item) => (
            <ContactCard key={item.id} {...item} />
          ))}
        </div>

        <form
          action="https://formspree.io/f/mqaevapl"
          method="post"
          className={`lg:col-span-2 p-10 rounded-2xl shadow-xl border ds-border-color ds-bg-alt ds-text-base
          grid grid-cols-1 md:grid-cols-2 gap-6`}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={`p-4 rounded-xl border ds-border-color ds-bg-form 
            focus:ring-2 focus:ring-blue-600 shadow-sm`}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={`p-4 rounded-xl border ds-border-color ds-bg-form  
            focus:ring-2 focus:ring-blue-600 shadow-sm`}
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className={`p-4 md:col-span-2 rounded-xl border ds-border-color ds-bg-form  
            focus:ring-2 focus:ring-blue-600 shadow-sm`}
          />

          <textarea
            name="message"
            rows={6}
            placeholder="Message"
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
