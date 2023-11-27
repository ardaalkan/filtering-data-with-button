import styles from "./InterviewGuide.module.css";
import { useState } from "react";

interface ButtonStates {
  button1: boolean;
  button2: boolean;
  button3: boolean;
}

const ToggleButtons: React.FC = () => {
  const [buttonStates, setButtonStates] = useState<ButtonStates>({
    button1: false,
    button2: false,
    button3: false,
  });

  const toggleButtonColor = (buttonKey: keyof ButtonStates) => {
    setButtonStates((prevStates) => ({
      ...prevStates,
      [buttonKey]: !prevStates[buttonKey],
    }));
  };

  return (
    <div className={styles.interviewTagsContainer}>
      <button
        onClick={() => toggleButtonColor("button1")}
        className={`${
          buttonStates.button1 ? styles.interviewTags2 : styles.interviewTags
        }`}
      >
        React
      </button>
      <button
        onClick={() => toggleButtonColor("button2")}
        className={`${
          buttonStates.button2 ? styles.interviewTags2 : styles.interviewTags
        }`}
      >
        Vue
      </button>
      <button
        onClick={() => toggleButtonColor("button3")}
        className={`${
          buttonStates.button3 ? styles.interviewTags2 : styles.interviewTags
        }`}
      >
        Communication
      </button>
    </div>
  );
};

const InterviewGuide: React.FC = () => {
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
            <ToggleButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewGuide;
