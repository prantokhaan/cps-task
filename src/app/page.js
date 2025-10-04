import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Home/HeroSection";
import UpcomingCourses from "./components/Home/UpcomingCourse";
import TrainersSection from "./components/Home/Trainers";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <UpcomingCourses />
        <TrainersSection />
      </main>
    </>
  );
}
