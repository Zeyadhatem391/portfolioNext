import Title from "../atoms/Title";
import Text from "../atoms/Text";

interface Props {
  titel: string;
  text: string;
}

export default function AddressSection({ titel, text }: Props) {
  return (
    <div className="text-center mb-14">
      <Title size="5xl" className="font-bold mb-4">
        {titel}
      </Title>
      <Text size="lg">{text}</Text>
      <div className="w-28 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
    </div>
  );
}
