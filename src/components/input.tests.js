import React, { useState } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CostInput from "./Input";

const setup = () => {
  const utils = render(<CostInput />);
  const input = utils.getByLabelText("cost-input");
  return {
    input,
    ...utils,
  };
};

// test("It should keep a $ in front of the input", () => {
//   const { input } = setup();
//   fireEvent.change(input, { target: { value: "23" } });
//   expect(input.value).toBe("$23");
// });
// test("It should allow a $ to be in the input when the value is changed", () => {
//   const { input } = setup();
//   fireEvent.change(input, { target: { value: "$23.0" } });
//   expect(input.value).toBe("$23.0");
// });

// test("It should not allow letters to be inputted", () => {
//   const { input } = setup();
//   expect(input.value).toBe(""); // empty before
//   fireEvent.change(input, { target: { value: "Good Day" } });
//   expect(input.value).toBe(""); //empty after
// });

// test("It should allow the $ to be deleted", () => {
//   const { input } = setup();
//   fireEvent.change(input, { target: { value: "23" } });
//   expect(input.value).toBe("$23"); // need to make a change so React registers "" as a change
//   fireEvent.change(input, { target: { value: "" } });
//   expect(input.value).toBe("");
// });

test("Formato de correo inválido!", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "testgmailcom" } });
    const warning = screen.getByText(/Invalid email format!/i);
    expect(warning).toBeInTheDocument();
});


test("Correo no válido!", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "test@gmail.com" } });
  const warning = screen.getByText(/Email not allowed!/i);
  expect(warning).toBeInTheDocument();
});

// test("email valid", () => {
//   const { input } = setup();
//   fireEvent.change(input, { target: { value: "test@pixel.com" } });
//   const warning = screen.getByText(/Email not allowed!/i);
//   expect(queryByText("i, Email not allowed")).not.toBeInTheDocument();
// });

// describe("testing", () => {
    
//   test("should show the no valid format warning", () => {
//     const { input } = setup();
//     fireEvent.change(input, { target: { value: "testgmail.com" } });
//     const warning = screen.getByText(/Invalid email format!/i);
//     expect(warning).toBeInTheDocument();
//   });
// });
