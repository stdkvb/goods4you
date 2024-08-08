import styles from "./FAQ.module.scss";
import data from "../../../data.json";
import { faqItem } from "../../types";
import Accordion from "../accordion/Accordion";

const FAQ = () => {
  return (
    <section className={`container ${styles.faq}`} id="faq">
      <div className={styles.wrapper}>
        <h2>FAQ</h2>
        <ul className={styles.list}>
          {data.faq.map((item: faqItem) => (
            <Accordion key={item.id} data={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
