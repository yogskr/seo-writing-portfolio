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
            Read More
            <svg
              className="arrow-button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96zM368 360C368 373.3 378.7 384 392 384C405.3 384 416 373.3 416 360L416 248C416 234.7 405.3 224 392 224L280 224C266.7 224 256 234.7 256 248C256 261.3 266.7 272 280 272L334.1 272L231.1 375C221.7 384.4 221.7 399.6 231.1 408.9C240.5 418.2 255.7 418.3 265 408.9L368 305.9L368 360z" />
            </svg>
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
            Read More
            <svg
              className="arrow-button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96zM368 360C368 373.3 378.7 384 392 384C405.3 384 416 373.3 416 360L416 248C416 234.7 405.3 224 392 224L280 224C266.7 224 256 234.7 256 248C256 261.3 266.7 272 280 272L334.1 272L231.1 375C221.7 384.4 221.7 399.6 231.1 408.9C240.5 418.2 255.7 418.3 265 408.9L368 305.9L368 360z" />
            </svg>
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
            Read More
            <svg
              className="arrow-button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96zM368 360C368 373.3 378.7 384 392 384C405.3 384 416 373.3 416 360L416 248C416 234.7 405.3 224 392 224L280 224C266.7 224 256 234.7 256 248C256 261.3 266.7 272 280 272L334.1 272L231.1 375C221.7 384.4 221.7 399.6 231.1 408.9C240.5 418.2 255.7 418.3 265 408.9L368 305.9L368 360z" />
            </svg>
          </a>
        </div>
      ))}
    </section>
  );
}

export { bitdegreeCard, hostingerCard, wordpressCard };
