import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

const setup = () => {
  const component = render(<Login />);
  const input = component.getByLabelText("email-input");
  return {
    input,
    ...component,
  };
};


/**
 * Nombre: Validación de Correo
 * Objetivo: Verificar que valida el formato del correo, mostrando el warning correctamente
 * Datos de prueba: testgmailcom
 */
test("Formato de correo inválido - se espera el warning", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "testgmailcom" } });
  const warning = screen.getByText(/Invalid email format!/i);
  expect(warning).toBeInTheDocument();
});

/**
 * Nombre: Validación de Correos corporativos
 * Objetivo: Verificar que valida el tipo del correo, mostrando el warning correctamente
 * Datos de prueba: test@gmail.com
 */
test("Correo no válido!", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "test@gmail.com" } });
  const warning = screen.getByText(/Email not allowed!/i);
  expect(warning).toBeInTheDocument();
});

/**
 * Nombre: Validación de Correo
 * Objetivo: Verificar que valida el formato del correo, NO muestra el warning
 * Datos de prueba: test@gmailcom
 */
test("Formato de correo válido - se espera que oculte el warning", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "test@gmail.com" } });
  const warning = screen.queryByText(/Invalid email format!/i);
  expect(warning).not.toBeInTheDocument();
});

/**
 * Nombre: Validación de Correos corporativos
 * Objetivo: Verificar que valida el tipo del correo, NO muestra el warning correctamente
 * Datos de prueba: test@angel.com
 */
test("Correo no válido!", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "test@angel.com" } });
  const warning = screen.queryByText(/Email not allowed!/i);
  expect(warning).not.toBeInTheDocument();
});