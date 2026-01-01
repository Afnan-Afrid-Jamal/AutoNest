import Banner from "./Components/Shared/Banner";
import FAQSection from "./Components/Shared/FAQSection";
import WhyChooseSection from "./Components/Shared/WhyChooseSection";

export default function Home() {
  return (

    <div>
      <Banner></Banner>
      <div>
        <WhyChooseSection></WhyChooseSection>
      </div>
      <div>
        <FAQSection></FAQSection>
      </div>
    </div>

  );
}
