import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Home/HeroSection";
import UpcomingCourses from "./components/Home/UpcomingCourse";
import TrainersSection from "./components/Home/Trainers";
import StudentSuccessSection from "./components/Home/Success";
import FAQSection from "./components/Home/faq";
import Footer from "./components/Home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <UpcomingCourses />
        <TrainersSection />
        <StudentSuccessSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
