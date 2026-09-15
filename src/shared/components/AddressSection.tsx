
interface Props {
  titel: string;
  text: string;
}

export default function AddressSection({ titel, text }: Props) {
  return (
    <div className="text-center mb-14">
      <h1 className="font-bold mb-1 ds-text-5xl">{titel}</h1>
      <p className="ds-text-lg">{text}</p>
      <div className="w-28 h-1 mx-auto mt-4 bg-blue-600 rounded-full"></div>
    </div>
  );
}
