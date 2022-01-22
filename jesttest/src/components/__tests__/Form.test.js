import { cleanup, screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "../Form";

afterEach(cleanup);

test("form should render", () => {
  render(<Form />);

  const form = screen.getByTestId("inputform");

  expect(form).toBeInTheDocument();
});

test("Ok button should be disabled if there are no input values", () => {
  render(<Form />);
  const us = screen.getByRole("textbox", { name: /username/i });
  const pw = screen.getByRole("textbox", { name: /password/i });
  const button = screen.getByRole("button", { name: /ok/i });

  expect(button).toBeDisabled();

  userEvent.type(us, "käyttäjänimi");
  userEvent.type(pw, "salasana");

  expect(button).toBeEnabled();
});
