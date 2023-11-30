import styles from "./InterviewGuide.module.css";
import { useState, useEffect } from "react";

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
  const [data, setData] = useState<any[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/interview");
        if (!response.ok) {
          throw new Error("Network error");
        }
        const result = await response.json();
        console.log(result, "result");
        setData(result);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLocaleLowerCase());
  };

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
            <input
              className={styles.inputComponent}
              placeholder="Search..."
              onChange={handleSearchChange}
            />
            <p className={styles.interviewFilterParag}>Filter by Skills</p>
            <ToggleButtons />
          </div>
          <div>
            <ol className={styles.interviewGuideCartGrid}>
              {data.filter((item: string) => {
                  return (
                    !search || item.name.toLowerCase().includes(search)
                  )}).map((interview: any) => (
                  <a
                    key={interview.name}
                    className={styles.interviewGuideCartGridATag}
                  >
                    <div className={styles.interviewGuideCartImg}></div>
                    <div className={styles.interviewContentContainer}>
                      <h2 className={styles.interviewContentHeader}>
                        {interview.name}
                      </h2>
                      <p className={styles.interviewContentDesc}>
                        {interview.description}
                      </p>
                      <div className={styles.interviewContentStats}>
                        <div className={styles.interviewContentStat}>
                          <span>
                            <p>IMG</p>
                          </span>
                          <div>{interview.skills}</div>
                        </div>
                        <p className={styles.interviewContentStat}>
                          <span>IMG</span>
                          {interview.inteviewCount}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewGuide;
