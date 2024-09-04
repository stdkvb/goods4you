import { useState } from "react";
import styles from "./Accordion.module.scss";
import { AccordionProps } from "../../types";
import { plusIcon } from "../../assets/icons";

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${styles.accordion} ${isActive ? styles.active : ""}`}
      data-testid="accordion"
    >
      <button
        className={styles.head}
        aria-expanded={isActive}
        aria-controls={`content-${data.id}`}
        onClick={handleToggle}
        data-testid="accordion-button"
      >
        <h3 className={styles.title}>{data.question}</h3>
        <span className={`${styles.icon} ${isActive ? styles.active : ""}`}>
          {plusIcon}
        </span>
      </button>
      <div
        id={`content-${data.id}`}
        className={styles.content}
        role="region"
        aria-labelledby={`accordion-${data.id}`}
      >
        <div className={styles.divider}></div>
        <p>{data.answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
