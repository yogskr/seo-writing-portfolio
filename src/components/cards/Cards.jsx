import "./Cards.css";
import {
  workData,
  bitdegreeArticles,
  hostingerArticles,
  wordpressArticles,
} from "../../data";

function bitdegreeCard() {
  return (
    <section className="cards">
      {bitdegreeArticles.map((article) => (
        <div key={article.id} className="card bitdegree-articles">
          <h3 className="card-title">{article.title}</h3>
          <p className="card-text">{article.description}</p>
          <div className="line-break-container">
            <hr className="card-line-break" />
          </div>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="read-article"
          >
            {workData.readMore.title}
            <img
              className="arrow-button"
              src={workData.readMore.icon}
              alt="Square arrow right up"
            />
          </a>
        </div>
      ))}
    </section>
  );
}

function hostingerCard() {
  return (
    <section className="cards">
      {hostingerArticles.map((article) => (
        <div key={article.id} className="card hostinger-articles">
          <h3 className="card-title">{article.title}</h3>
          <p className="card-text">{article.description}</p>
          <div className="line-break-container">
            <hr className="card-line-break" />
          </div>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="read-article"
          >
            {workData.readMore.title}
            <img
              className="arrow-button"
              src={workData.readMore.icon}
              alt="Square arrow right up"
            />
          </a>
        </div>
      ))}
    </section>
  );
}

function wordpressCard() {
  return (
    <section className="cards">
      {wordpressArticles.map((article) => (
        <div key={article.id} className="card wordpress-articles">
          <h3 className="card-title">{article.title}</h3>
          <p className="card-text">{article.description}</p>
          <div className="line-break-container">
            <hr className="card-line-break" />
          </div>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="read-article"
          >
            {workData.readMore.title}
            <img
              className="arrow-button"
              src={workData.readMore.icon}
              alt="Square arrow right up"
            />
          </a>
        </div>
      ))}
    </section>
  );
}

export { bitdegreeCard, hostingerCard, wordpressCard };
