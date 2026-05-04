import { workData } from "../../data";
import {
  bitdegreeCard,
  hostingerCard,
  wordpressCard,
} from "../../components/cards/Cards";
import { useIsScrolled } from "../../hooks/stickyHeader";

export function Work() {
  const isScrolled = useIsScrolled();

  return (
    <div className="work-container">
      <section className={isScrolled ? "work-header scrolled" : "work-header"}>
        <h2 className="work-title">{workData.header.title}</h2>
      </section>
      <section className="work-content">
        <hr className="line-break" />
        <p className="work-description">{workData.header.description}</p>
        <div className="bitdegree">
          <img
            src={workData.logos.bitdegree}
            alt={workData.companies[0]}
            className="logo bitdegree-logo"
          />
          {bitdegreeCard()}
        </div>
        <hr className="line-break" />
        <div className="hostinger">
          <img
            src={workData.logos.hostinger}
            alt={workData.companies[1]}
            className="logo hostinger-logo"
          />
          {hostingerCard()}
        </div>
        <hr className="line-break" />
        <div className="wordpress">
          <img
            src={workData.logos.wordpress}
            alt={workData.companies[2]}
            className="logo wordpress-logo"
          />
          {wordpressCard()}
        </div>
      </section>
    </div>
  );
}
