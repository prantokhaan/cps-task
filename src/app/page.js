import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Home/HeroSection";
import UpcomingCourses from "./components/Home/UpcomingCourse";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <UpcomingCourses />
      </main>
    </>
  );
}
