import { portfolioData } from "../../data";
import "./Portfolio.css";
import {
  bitdegreeCard,
  hostingerCard,
  wordpressCard,
} from "../../components/cards/Cards";

export function Portfolio() {
  return (
    <div className="portfolio-container">
      <section className="portfolio-header">
        <h2 className="portfolio-title">{portfolioData.header.title}</h2>
      </section>
      <section className="portfolio-content">
        <hr className="line-break" />
        <div className="bitdegree">
          <img
            src={portfolioData.logos.bitdegree}
            alt={portfolioData.companies[0]}
            className="logo bitdegree-logo"
          />
          {bitdegreeCard()}
        </div>
        <hr className="line-break" />
        <div className="hostinger">
          <img
            src={portfolioData.logos.hostinger}
            alt={portfolioData.companies[1]}
            className="logo hostinger-logo"
          />
          {hostingerCard()}
        </div>
        <hr className="line-break" />
        <div className="wordpress">
          <img
            src={portfolioData.logos.wordpress}
            alt={portfolioData.companies[2]}
            className="logo wordpress-logo"
          />
          {wordpressCard()}
        </div>
      </section>
    </div>
  );
}
