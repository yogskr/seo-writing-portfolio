import "./Hero.css";
import { heroData } from "../../data";

export function Hero() {
  return (
    <section className="hero">
      <h1>{heroData.title}</h1>
      <img src={heroData.picture} alt="Yoga Krisanta" />
      <p>{heroData.description}</p>
    </section>
  );
}
