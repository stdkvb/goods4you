import { useState } from "react";
import styles from "./Accordion.module.scss";
import { faqItem } from "../../types";
import { plusIcon } from "../../assets/icons";

interface AccordionProps {
  data: faqItem;
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li
      key={data.id}
      className={`${styles.accordion} ${isActive ? `${styles.active}` : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={styles.head}>
        <h3 className={styles.title}>{data.question}</h3>
        <span
          className={`${styles.icon} ${isActive ? `${styles.active}` : ""}`}
        >
          {plusIcon}
        </span>
      </div>
      <div className={styles.content}>
        <p>{data.answer}</p>
      </div>
    </li>
  );
};

export default Accordion;
