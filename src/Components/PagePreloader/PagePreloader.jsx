import { useState, useEffect } from "react";
import styles from "./PagePreloader.module.scss";
// import JumpingBall from "./JumpingBall/JumpingBall";

const PagePreloader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 500);
  }, []);

  if (loadingProgress >= 100) {
    // Once loading is complete, you might want to remove or hide the preloader
    return null; // This effectively removes the preloader from the DOM
  }

  return (
    <div className={styles["preloader__scene"]}>
      <div className={styles["loading__block"]}>
        {/* <JumpingBall /> */}
        <div className={styles["title"]}>Loading...</div>
        <div className={styles["progress"]}></div>
      </div>
      <div className={styles["preloader__block"]}></div>
      <div className={styles["preloader__block"]}></div>
    </div>
  );
};

export default PagePreloader;
