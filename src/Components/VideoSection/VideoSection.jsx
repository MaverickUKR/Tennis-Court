import "./VideoSection.scss";
import presentVideo from "../../assets/videos/presentation720.mp4";

const VideoSection = () => {
  return (
    <main style={{ width: "100%", height: "100%" }} id="Home">
      <div className="video__container">
        <video
          width="100%"
          height="100%"
          loop
          autoplay="autoplay"
          id="autoplay"
        >
          <source src={presentVideo} type="video/mp4" />
        </video>
      </div>
    </main>
  );
};

export default VideoSection;
