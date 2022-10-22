import "./index.css";
import Footer from "./components/Footer";
import Links from "./components/Links";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <header className="container">
        <Profile />
      </header>
      <main className="container">
        <Links />
      </main>
      <Footer />
    </>
  );
}

export default App;
