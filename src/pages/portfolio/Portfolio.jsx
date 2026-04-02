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
        <hr className="line-break" />
        <div className="bitdegree">
          <img
            src={portfolioData.logos.bitdegree}
            alt={portfolioData.companies[0]}
            className="logo bitdegree-logo"
          />
          <p className="description">
            Currated articles and news from {portfolioData.companies[0]}
          </p>
          {bitdegreeCard()}
        </div>
        <hr className="line-break" />
        <div className="hostinger">
          <img
            src={portfolioData.logos.hostinger}
            alt={portfolioData.companies[1]}
            className="logo hostinger-logo"
          />
          <p className="description">
            Currated articles from {portfolioData.companies[1]}
          </p>
          {hostingerCard()}
        </div>
        <hr className="line-break" />
        <div className="wordpress">
          <img
            src={portfolioData.logos.wordpress}
            alt={portfolioData.companies[2]}
            className="logo wordpress-logo"
          />
          <p className="description">
            Currated articles from {portfolioData.companies[2]}
          </p>
          {wordpressCard()}
        </div>
      </section>
    </>
  );
}
