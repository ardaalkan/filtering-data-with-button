import { useState, useEffect } from "react";
import styles from "../InterviewGuide/InterviewGuide.module.css";

interface ButtonStates {
  button1: boolean;
  button2: boolean;
  button3: boolean;
  [key: string]: boolean;
}

interface ToggleButtonsProps {
  onFilterChange: (keys: string[]) => void;
}

const buttonConfigs = [
  { key: "React", text: "React" },
  { key: "Vue", text: "Vue" },
  { key: "Communication", text: "Communication" },
];

const ToggleButtons: React.FC<ToggleButtonsProps> = () => {
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

  useEffect(() => {
    const selectedKeys = Object.keys(buttonStates).filter(
      (key) => buttonStates[key as keyof ButtonStates]
    );
    console.log(selectedKeys, "SelectedKeys Style");
  }, [buttonStates]);

  return (
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
  );
};

export default ToggleButtons;
