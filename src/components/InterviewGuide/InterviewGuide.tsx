import styles from "./InterviewGuide.module.css";
// import { useState } from "react";

const InterviewGuide = () => {

  // const [isActive, setIsActive] = useState(false);
  
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.interviewContainer}>
          <div className={styles.interviewHeader}>
            <div className={styles.interviewTitleContainer}>
              <h1 className={styles.interviewTitleDesc}>
                7 ready to run interview process
              </h1>
              <p className={styles.interviewParag}>
                Find inspiration for improving your recruitment. Every interview
                process consists of a series of interview templates. Use our
                interview library to jump right in one of our pre-made processes
              </p>
            </div>
            <div className={styles.interviewCart}>
              <h3 className={styles.interviewSubtitle}>
                Start interviewing the right way
              </h3>
              <h3 className={styles.interviewSubtitleDesc}>
                Want to use one of these interviews? We will get you started as
                fast as possible
              </h3>
              <div>
                <a>
                  <button className={styles.interviewGuideBtn}>
                    Schedule a call
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.interviewGuideFilter}>
            <p className={styles.interviewFilterParag}>Filter openings</p>
            <input className={styles.inputComponent} placeholder="Search..." />
            <p className={styles.interviewFilterParag}>Filter by Skills</p>
            <div className={styles.interviewTagsContainer}>
              <button className={styles.interviewTags}>React</button>
              <button className={styles.interviewTags}>Vue</button>
              <button className={styles.interviewTags}>Communication</button>
              <button className={styles.interviewTags}>CSS</button>
              <button className={styles.interviewTags}>HTML</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewGuide;
