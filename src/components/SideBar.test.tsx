import React from "react";
import { render, screen, within } from "@testing-library/react";
import '@testing-library/jest-dom'
import Sidebar from "./Sidebar";

test("renders sidebar title", () => {
  render(<Sidebar />);
  expect(screen.getByTestId("sidebar-title")).toBeInTheDocument();
});

test("renders a list of 2 items", () => {
  render(<Sidebar />);
  const list = screen.getByRole("list", {
    name: /items/,
  });
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");
  expect(items.length).toBe(2);
});
