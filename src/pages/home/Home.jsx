import { heroData, homeData } from "../../data";
import { NavBar } from "../../components/navigation/NavBar";
import RotatingText from "../../components/rotating-text/RotatingText";
import "./Home.css";

export function Home() {
  return (
    <div className="home">
      <section className="hero-container">
        <div className="hero-content">
          <img
            className="heroImage"
            src={heroData.image}
            alt={heroData.title}
          />
          <h1 className="hero-title">
            {heroData.description}
            <RotatingText />
          </h1>
          <div className="hero-description">
            <p className="hero-name">{heroData.title}</p>
            <p className="hero-text">{homeData.description}</p>
          </div>
          <hr className="line-break" />
          <NavBar />
        </div>
      </section>
    </div>
  );
}
