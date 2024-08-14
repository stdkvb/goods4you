import styles from "./FAQ.module.scss";
import data from "../../../data.json";
import { FaqItem } from "../../types";
import Accordion from "../accordion/Accordion";

const FAQ = () => {
  return (
    <section
      className={`container ${styles.faq}`}
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className={styles.wrapper}>
        <h2 id="faq-heading">FAQ</h2>
        <div className={styles.list} role="list" aria-labelledby="faq-heading">
          {data.faq.map((item: FaqItem) => (
            <Accordion key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
