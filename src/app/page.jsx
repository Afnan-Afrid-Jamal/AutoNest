import Banner from "./Components/Shared/Banner";
import FAQSection from "./Components/Shared/FAQSection";
import HowAutoNestWorks from "./Components/Shared/HowAutoNestWorks ";
import WhyChooseSection from "./Components/Shared/WhyChooseSection";

export default function Home() {
  return (

    <div>
      <Banner></Banner>
      <div>
        <WhyChooseSection></WhyChooseSection>
      </div>
      <div>
        <HowAutoNestWorks></HowAutoNestWorks>
      </div>
      <div>
        <FAQSection></FAQSection>
      </div>
    </div>

  );
}
