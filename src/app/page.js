import Banner from "@/Components/Banner";
import ContactUs from "@/Components/ContactUs";
import Footer from "@/Components/Footer";
import FreQuentlyAskedQuestions from "@/Components/FreQuentlyAskedQuestions";
import HowitWorks from "@/Components/HowitWorks";
import Navbar from "@/Components/Navbar";
import OurImpact from "@/Components/OurImpact";
import ReadyToStart from "@/Components/ReadyToStart";
import StayUpdated from "@/Components/StayUpdated";
import WhyChooseUS from "@/Components/WhyChooseUS";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <WhyChooseUS></WhyChooseUS>
      <OurImpact></OurImpact>
      <ReadyToStart></ReadyToStart>
      <StayUpdated></StayUpdated>
      <HowitWorks></HowitWorks>
      <FreQuentlyAskedQuestions></FreQuentlyAskedQuestions>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
}
