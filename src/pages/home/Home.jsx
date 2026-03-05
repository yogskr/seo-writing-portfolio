import { homeData } from "../../data";
import "./Home.css";

export function Home() {
  return (
    <section className="home">
      <h2>{homeData.title}</h2>
      <p>{homeData.description}</p>
    </section>
  );
}
