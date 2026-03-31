import "./Cards.css";
import {
  bitdegreeArticles,
  hostingerArticles,
  wordpressArticles,
} from "../../data";

function bitdegreeCard() {
  return (
    <section className="cards">
      {bitdegreeArticles.map((article) => (
        <div key={article.id} className="card bitdegree-articles">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Read More
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
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Read More
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
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Read More
          </a>
        </div>
      ))}
    </section>
  );
}

export { bitdegreeCard, hostingerCard, wordpressCard };
