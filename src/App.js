import "./App.css";
import LoginButton from "./components/LoginButton";
import Dashboard from "./components/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return <>{isAuthenticated ? <Dashboard /> : <LoginButton />}</>;
}

export default App;
