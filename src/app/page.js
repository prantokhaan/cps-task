import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Home/HeroSection";
import UpcomingCourses from "./components/Home/UpcomingCourse";
import TrainersSection from "./components/Home/Trainers";
import StudentSuccessSection from "./components/Home/Success";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <UpcomingCourses />
        <TrainersSection />
        <StudentSuccessSection />
      </main>
    </>
  );
}
