import { render } from "@testing-library/react"
import LoginButton from "../components/LoginButton"

test("Renders a login button", () => {
  const { getByText } = render(<LoginButton />) ;
  const loginButton = getByText(/Log In/);
  expect(loginButton).toBeTruthy()
})