import styles from "./InterviewGuide.module.css";
import { useState, useEffect, useMemo } from "react";
import debouce from "lodash.debounce";

interface InterviewGuide {
  name: string;
  description: string;
  interviewCount: number;
  keys: string[];
  skills: string;
}

interface ButtonStates {
  button1: boolean;
  button2: boolean;
  button3: boolean;
  [key: string]: boolean;
}

const buttonConfigs = [
  { key: "Teamwork", text: "Teamwork" },
  { key: "Engineering", text: "Engineering" },
  { key: "Communication", text: "Communication" },
];

const InterviewGuide: React.FC = () => {
  const [data, setData] = useState<InterviewGuide[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState<InterviewGuide[]>([]);
  const [buttonStates, setButtonStates] = useState<ButtonStates>({
    button1: false,
    button2: false,
    button3: false,
  });

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

  useEffect(() => {
    if (search) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(search)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [search, data, buttonStates]);

  useEffect(() => {
    const selectedKeys = Object.keys(buttonStates).filter(
      (key) => buttonStates[key as keyof ButtonStates]
    );
    if (selectedKeys.length === 0) {
      setFilteredData(data);
      return;
    } else {
      const filteredKey = data.filter((item) => {
        return selectedKeys.every((selectedKey) =>
          item.keys.includes(selectedKey)
        );
      });
      setFilteredData(filteredKey);
    }
    console.log(selectedKeys, "selected");
  }, [buttonStates, data]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLocaleLowerCase());
  };

  const toggleButtonColor = (buttonKey: keyof ButtonStates) => {
    setButtonStates((prevStates) => ({
      ...prevStates,
      [buttonKey]: !prevStates[buttonKey],
    }));
  };

  const debouncedResults = useMemo(() => {
    return debouce(handleSearchChange, 300);
  }, []);

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
              onChange={debouncedResults}
            />
            <p className={styles.interviewFilterParag}>Filter by Skills</p>
            <div className={styles.interviewTagsContainer}>
              {buttonConfigs.map((buttonConfig) => (
                <button
                  key={buttonConfig.key}
                  onClick={() => toggleButtonColor(buttonConfig.key)}
                  className={`${
                    buttonStates[buttonConfig.key]
                      ? styles.interviewTags2
                      : styles.interviewTags
                  }`}
                >
                  {buttonConfig.text}
                </button>
              ))}
            </div>
          </div>
          <div>
            <ol className={styles.interviewGuideCartGrid}>
              {filteredData.map((interview: InterviewGuide) => (
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
                        {interview.interviewCount}
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
