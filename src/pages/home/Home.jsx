import "./Home.css";
import { heroData, homeData } from "../../data";
import { NavBar } from "../../components/navigation/NavBar";
import RotatingText from "../../components/rotating-text/RotatingText";

export function Home() {
  return (
    <div className="home">
      <h1 className="hero-title">
        {heroData.description}
        <RotatingText />
      </h1>

      <section className="hero">
        <img className="heroImage" src={heroData.image} alt={heroData.title} />
        <div className="hero-description">
          <p className="hero-name">{heroData.title}</p>
          <p className="hero-text">{homeData.description}</p>
        </div>
        <hr className="line-break" />
        <NavBar />
      </section>
    </div>
  );
}
