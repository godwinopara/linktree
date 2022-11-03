import React from "react";
import Links from "../components/Links";
import Profile from "../components/Profile";
import Social from "../components/Social";

const Home = () => {
  return (
    <>
      <header className="container">
        <Profile />
      </header>
      <main className="container">
        <Links />
        <Social />
      </main>
    </>
  );
};

export default Home;
