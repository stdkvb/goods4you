import { useState } from "react";
import styles from "./Accordion.module.scss";
import { FaqItem } from "../../types";
import { plusIcon } from "../../assets/icons";

interface AccordionProps {
  data: FaqItem;
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [isActive, setIsActive] = useState(data.open);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.accordion} ${isActive ? styles.active : ""}`}>
      <button
        className={styles.head}
        aria-expanded={isActive}
        aria-controls={`content-${data.id}`}
        onClick={handleToggle}
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
        <p>{data.answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
