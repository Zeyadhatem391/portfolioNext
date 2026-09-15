import { ContactImage } from "@/assets/images/images";
import AddressSection from "@/shared/components/AddressSection";
import ContactForm from "@/shared/components/contact/ContactForm";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Contact() {
  const t = await getTranslations("Contact");
  return (
    <section className="px-6 py-16 lg:px-12" id="contact">
      <AddressSection titel={t("title")} text={t("shortTitle")} />

       <div className="container mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="relative h-[300px] lg:h-[450px] overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <Image
            src={ContactImage}
            alt="Contact"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
