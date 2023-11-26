import styles from "./InterviewGuide.module.css";

const InterviewGuide = () => {
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
              <h3 className={styles.interviewSubtitle}>Start interviewing the right way</h3>  
              <h3 className={styles.interviewSubtitleDesc}>Want to use one of these interviews? We will get you started as fast as possible</h3>
              <div>
                <a>
                  <button className={styles.interviewGuideBtn}>Schedule a call</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewGuide;
