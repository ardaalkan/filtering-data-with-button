
import React from "react";
import styles from "../InterviewGuide/InterviewGuide.module.css"

interface ButtonProps {
  label: string;
  key: string;
  isActive: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, isActive, onClick, key }) => {
  return (
    <button
    key={key}
      onClick={onClick}
      className={isActive ? styles.interviewTags2 : styles.interviewTags}
    >
      {label}
    </button>
  );
};

export default Button;
