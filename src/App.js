import styles from "./App.css";
import BackToTopButton from "./Components/BackToTopButton/BackToTopButton";
import VideoSection from "./Components/VideoSection/VideoSection";
import Google from "./Components/Google/Google";
import SectionDivider from "./Components/SectionDivider/SectionDivider";
import NewGallery from "./Components/NewGallery/NewGallery";
import NavMenu from "./Components/NavMenu/NavMenu";
import TennisBenefits from "./Components/TennisBenefits/TennisBenefits";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className={styles["App"]}>
      <NavMenu />
      <VideoSection />
      <SectionDivider />
      <TennisBenefits />
      <SectionDivider />
      <Google />
      <SectionDivider />
      <NewGallery />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
