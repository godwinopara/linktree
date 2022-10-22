import "./index.css";
import Footer from "./components/Footer";
import Links from "./components/Links";

function App() {
  return (
    <>
      <header>
        <div className="profile">
          <div></div>
        </div>
      </header>
      <main className="content_wrapper">
        <Links />
      </main>
      <Footer />
    </>
  );
}

export default App;
