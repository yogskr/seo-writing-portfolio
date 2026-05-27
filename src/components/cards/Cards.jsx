import {
  workData,
  bitdegreeArticles,
  hostingerArticles,
  wordpressArticles,
} from "../../data";

function bitdegreeCard() {
  return (
    <section className="flex flex-col gap-4 md:gap-6">
      {bitdegreeArticles.map((article) => (
        <div
          key={article.id}
          className="flex flex-col gap-3 md:gap-5 border-2 border-solid border-pollar-night-nord3 p-4 md:px-8 md:py-6 rounded-lg shadow-small bg-snow-storm-nord5"
        >
          <h3 className="bg-aurora-nord14 rounded-lg px-2 py-1 md:px-3 md:py-2 font-semibold font-cascadia-code text-pollar-night-nord0 md:text-xl">
            {article.title}
          </h3>
          <p className="px-0.5 font-jetbrains-mono md:text-lg">
            {article.description}
          </p>
          <hr className="border-dashed" />
          <button className="lowercase self-end border border-solid border-pollar-night-nord3 bg-aurora-nord13 px-2 py-1 md:px-3 md:py-2 rounded-md md:text-lg">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 md:gap-3 text-pollar-night-nord1 font-semibold font-cascadia-code"
            >
              {workData.readMore.title}
              <i className={workData.readMore.icon}></i>
            </a>
          </button>
        </div>
      ))}
    </section>
  );
}

function hostingerCard() {
  return (
    <section className="flex flex-col gap-4 md:gap-6">
      {hostingerArticles.map((article) => (
        <div
          key={article.id}
          className="flex flex-col gap-3 md:gap-5 border-2 border-solid border-pollar-night-nord3 p-4 md:px-8 md:py-6 rounded-lg shadow-small bg-snow-storm-nord5"
        >
          <h3 className="bg-aurora-nord14 rounded-lg px-2 py-1 md:px-3 md:py-2 font-semibold font-cascadia-code text-pollar-night-nord0 md:text-xl">
            {article.title}
          </h3>
          <p className="px-0.5 font-jetbrains-mono md:text-lg">
            {article.description}
          </p>
          <hr className="border-dashed" />
          <button className="lowercase self-end border border-solid border-pollar-night-nord3 bg-aurora-nord13 px-2 py-1 md:px-3 md:py-2 rounded-md md:text-lg">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 md:gap-3 text-pollar-night-nord1 font-semibold font-cascadia-code"
            >
              {workData.readMore.title}
              <i className={workData.readMore.icon}></i>
            </a>
          </button>
        </div>
      ))}
    </section>
  );
}

function wordpressCard() {
  return (
    <section className="flex flex-col gap-4 md:gap-6">
      {wordpressArticles.map((article) => (
        <div
          key={article.id}
          className="flex flex-col gap-3 md:gap-5 border-2 border-solid border-pollar-night-nord3 p-4 md:px-8 md:py-6 rounded-lg shadow-small bg-snow-storm-nord5"
        >
          <h3 className="bg-aurora-nord14 rounded-lg px-2 py-1 md:px-3 md:py-2 font-semibold font-cascadia-code text-pollar-night-nord0 md:text-xl">
            {article.title}
          </h3>
          <p className="px-0.5 font-jetbrains-mono md:text-lg">
            {article.description}
          </p>
          <hr className="border-dashed" />
          <button className="lowercase self-end border border-solid border-pollar-night-nord3 bg-aurora-nord13 px-2 py-1 md:px-3 md:py-2 rounded-md md:text-lg">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 md:gap-3 text-pollar-night-nord1 font-semibold font-cascadia-code"
            >
              {workData.readMore.title}
              <i className={workData.readMore.icon}></i>
            </a>
          </button>
        </div>
      ))}
    </section>
  );
}

export { bitdegreeCard, hostingerCard, wordpressCard };
