import "./Hero.css";
import { heroData } from "../../data";
import RotatingText from "../rotating-text/RotatingText";

export function Hero() {
  return (
    <section className="hero">
      <img src={heroData.image} alt={heroData.title} />
      <h1>{heroData.title}</h1>
      <p>
        {heroData.description}
        <RotatingText />
      </p>
    </section>
  );
}
