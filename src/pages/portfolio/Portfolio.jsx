import { portfolioData } from "../../data";
import "./Portfolio.css";
import {
  bitdegreeCard,
  hostingerCard,
  wordpressCard,
} from "../../components/cards/Cards";

export function Portfolio() {
  return (
    <>
      <section className="portfolio-header">
        <h2>{portfolioData.header.title}</h2>
      </section>
      <section className="portfolio-content">
        <hr className="line-break"></hr>
        <div className="bitdegree">
          <p className="description">
            Currated articles and news from {portfolioData.companies[0]}
          </p>
          {bitdegreeCard()}
        </div>
        <hr className="line-break"></hr>
        <div className="hostinger">
          <p className="description">
            Currated articles from {portfolioData.companies[1]}
          </p>
          {hostingerCard()}
        </div>
        <hr className="line-break"></hr>
        <div className="wordpress">
          <p className="description">
            Currated articles from {portfolioData.companies[2]}
          </p>
          {wordpressCard()}
        </div>
      </section>
    </>
  );
}
