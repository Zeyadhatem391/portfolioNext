import { Certifications } from "@/data/certificates";
import AddressSection from "@/components/molecules/AddressSection";
import CertificationCard from "@/components/molecules/CertificationCard";

export default function Certification() {
  return (
    <>
      <section
        className="w-full min-h-screen px-6 md:px-28 py-16 "
        id="certification"
      >
        <AddressSection
          titel="Certifications"
          text="Certificates that reflect dedication and growth"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center">
          {Certifications.map((Certification) => (
            <CertificationCard key={Certification.id} {...Certification} />
          ))}
        </div>
      </section>
    </>
  );
}
