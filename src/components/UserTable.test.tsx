import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import UserTable from "./UserTable";

test("renders user table title", () => {
  render(<UserTable />);
  expect(screen.getByTestId("table-title")).toBeInTheDocument();
});

test("renders data grid", () => {
  render(<UserTable />);
  expect(screen.getByTestId("data-grid")).toBeInTheDocument();
});
