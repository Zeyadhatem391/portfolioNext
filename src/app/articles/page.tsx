import DesignSystem from "./components/DesignSystem";
import AtomicDesign from "./components/AtomicDesign";
import GitFlow from "./components/GitFlow";
import HomeLayout from "@/components/layout/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <section className="w-full  px-6 md:px-28 py-20 ">
        <GitFlow />
        <AtomicDesign />
        <DesignSystem />
      </section>
    </HomeLayout>
  );
}
