import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const showProfile = useSelector(
    (state) => state.authentication.authentication
  );

  return (
    <>
      <Header />
     {!showProfile && <Auth />}
      <Counter />
      {showProfile && <UserProfile />}
    </>
  );
}

export default App;
