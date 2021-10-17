import React from "react";
import HeroPage from "../Components/HeroPage";
import Features from "../Components/Features";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <section className="container px-5 py-5 pt-md-0">
        <HeroPage />
      </section>
      <section className="container-fluid p-5 bg-secondary">
        <Features />
      </section>
      <section className="container-fluid p-5 bg-dark">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
