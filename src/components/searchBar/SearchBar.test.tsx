import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SearchBar from "./SearchBar";

vi.mock("lodash", () => ({
  debounce: (fn: any, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  },
}));

describe("Search bar", () => {
  it("calls query with correct input value after debounce", async () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);

    const inputElement = screen.getByTestId("search-input");

    fireEvent.change(inputElement, { target: { value: "test" } });

    await waitFor(
      () => {
        expect(onSearch).toHaveBeenCalledWith("test");
      },
      { timeout: 600 }
    );
  });

  it("calls query only once after multiple changes within debounce", async () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);

    const inputElement = screen.getByTestId("search-input");

    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.change(inputElement, { target: { value: "test test" } });

    await waitFor(
      () => {
        expect(onSearch).toHaveBeenCalledTimes(1);
        expect(onSearch).toHaveBeenCalledWith("test test");
      },
      { timeout: 600 }
    );
  });
});
