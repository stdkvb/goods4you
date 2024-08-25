import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Accordion from "./Accordion";
import styles from "./Accordion.module.scss";

const data = {
  id: 1,
  question: "Test question",
  answer: "Test answer",
};

describe("Accordion", () => {
  it('should toggle class "active" on the parent element when the button is clicked', () => {
    const { getByTestId } = render(<Accordion data={data} />);

    const accordion = getByTestId("accordion");
    const button = getByTestId("accordion-button");

    expect(accordion?.classList.contains(styles.active)).toBe(false);

    fireEvent.click(button);

    expect(accordion?.classList.contains(styles.active)).toBe(true);

    fireEvent.click(button);

    expect(accordion?.classList.contains(styles.active)).toBe(false);
  });
});
