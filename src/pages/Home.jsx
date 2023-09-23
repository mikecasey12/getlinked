import { useEffect } from "react";
import CriteriaSection from "../components/CriteriaSection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import IdeaSection from "../components/IdeaSection";
import PartnerSection from "../components/PartnerSection";
import PrivacyTermsSection from "../components/PrivacyTermsSection";
import RewardSection from "../components/RewardSection";
import RulesSection from "../components/RulesSection";
import TimelineSection from "../components/TimelineSection";
import { useLocation } from "react-router-dom";

const Home = () => {
  const params = useLocation();
  const { hash } = params;

  //Handle sections scroll into view
  useEffect(() => {
    if (hash.length) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [hash]);
  return (
    <>
      <HeroSection />
      <IdeaSection />
      <RulesSection />
      <CriteriaSection />
      <FAQSection />
      <TimelineSection />
      <RewardSection />
      <PartnerSection />
      <PrivacyTermsSection />
      <Footer />
    </>
  );
};

export default Home;
