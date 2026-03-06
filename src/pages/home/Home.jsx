import "./Home.css";
import { heroData } from "../../data";
import { NavBar } from "../../components/navigation/NavBar";
import RotatingText from "../../components/rotating-text/RotatingText";

export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <img className="heroImage" src={heroData.image} alt={heroData.title} />
        <h1>{heroData.title}</h1>
        <p>
          {heroData.description}
          <RotatingText />
        </p>
      </section>
      <NavBar />
    </div>
  );
}
