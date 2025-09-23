import AboutSection from "@/component/features/home/section/AboutSection/AboutSection";
import BlogSection from "@/component/features/home/section/BlogSection/BlogSection";
import FirstView from "@/component/features/home/section/firstView/FirstView";
import ServiceSection from "@/component/features/home/section/ServiceSection/ServiceSection";
import MainWrapper from "@/component/layouts/MainWrapper";

export default async function HomeTemplate() {
  return (
    <>
      <MainWrapper className="top">
          <FirstView />
          <ServiceSection />
          <BlogSection />
          <AboutSection />
      </MainWrapper>
    </>
  );
}
