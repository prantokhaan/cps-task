import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Home/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
