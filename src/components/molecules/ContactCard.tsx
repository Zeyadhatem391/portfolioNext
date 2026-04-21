import Text from "../atoms/Text";
import Title from "../atoms/Title";
import { Contact } from "@/types/contact";

export default function ContactCard({ title, info, Icon }: Contact) {
  return (
    <div
      className={`p-6 rounded-2xl shadow-lg border ds-border-color ds-bg-alt flex items-center gap-5 hover:translate-x-2 transition-all duration-300`}
    >
      <div className="text-4xl text-blue-600">
        {" "}
        <Icon />
      </div>
      <div>
        <Title size="xl" className="font-semibold">
          {title}
        </Title>
        <Text>{info}</Text>
      </div>
    </div>
  );
}
