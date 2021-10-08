import "./App.css";
import LoginButton from "./components/LoginButton";
<<<<<<< HEAD
import Dashboard from "./components/Dashboard";
=======
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
>>>>>>> a22281bad55fd1d3b41b2477623ecbb0aa504f54
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
<<<<<<< HEAD
  return <>{isAuthenticated ? <Dashboard /> : <LoginButton />}</>;
=======
  if (isAuthenticated) {
    return (
      <>
        <LogoutButton />
        <Profile />
      </>
    );
  }
  return (
    <>
      <LoginButton />
    </>
  );
>>>>>>> a22281bad55fd1d3b41b2477623ecbb0aa504f54
}

export default App;
