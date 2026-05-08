import { workData } from "../../data";
import {
  bitdegreeCard,
  hostingerCard,
  wordpressCard,
} from "../../components/cards/Cards";
import useIsScrolled from "../../hooks/useIsScrolled";

export function Work() {
  const stickyHeader = useIsScrolled();

  return (
    <>
      <div className="bg-snow-storm-nord6 p-4">
        <section
          className={`${stickyHeader ? "fixed left-0 right-0 rounded-none shadow-none" : "sticky shadow-small"} top-0 flex flex-wrap items-center justify-between gap-4 bg-pollar-night-nord0 text-snow-storm-nord5 p-4 rounded-lg z-50`}
        >
          <h2 className="text-lg font-bold font-cascadia-code">
            {workData.header.title}
          </h2>
          <p className="text-sm text-frost-nord7 tracking-tight font-jetbrains-mono">
            {workData.header.description}
          </p>
        </section>
      </div>
      <div className="grid grid-cols-10 auto-rows-auto gap-y-10 p-4">
        <div className="col-span-10 flex flex-col items-center gap-4">
          <figure className="flex items-center justify-center w-full gap-3">
            <img
              src={workData.companies.bitdegree.logo}
              alt={workData.companies.bitdegree.title}
              className="w-28 p-2 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small bg-snow-storm-nord5"
            />
            <figcaption className="lowercase flex items-center justify-center p-2 text-sm font-semibold font-cascadia-code text-pollar-night-nord1 border-2 border-solid border-pollar-night-nord3 w-full h-full rounded-lg shadow-small bg-snow-storm-nord5 text-center ">
              {workData.companies.bitdegree.desc}
            </figcaption>
          </figure>
          {bitdegreeCard()}
        </div>
        <div className="col-span-10 flex flex-col items-center gap-4">
          <figure className="flex items-center w-full gap-3">
            <img
              src={workData.companies.hostinger.logo}
              alt={workData.companies.hostinger.title}
              className="w-28 p-1 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small  bg-snow-storm-nord5"
            />
            <figcaption className="lowercase flex items-center justify-center p-2 text-sm font-semibold font-cascadia-code text-pollar-night-nord1 border-2 border-solid border-pollar-night-nord3 w-full h-full rounded-lg shadow-small  bg-snow-storm-nord5 text-center ">
              {workData.companies.hostinger.desc}
            </figcaption>
          </figure>
          {hostingerCard()}
        </div>
        <div className="col-span-10 flex flex-col items-center gap-4">
          <figure className="flex items-center w-full gap-3">
            <img
              src={workData.companies.wordpress.logo}
              alt={workData.companies.wordpress.title}
              className="w-28 p-1 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small bg-snow-storm-nord5"
            />
            <figcaption className="lowercase flex items-center justify-center p-2 text-sm font-semibold font-cascadia-code text-pollar-night-nord1 border-2 border-solid border-pollar-night-nord3 w-full h-full rounded-lg shadow-small bg-snow-storm-nord5 text-center">
              {workData.companies.wordpress.desc}
            </figcaption>
          </figure>
          {wordpressCard()}
        </div>
      </div>
    </>
  );
}
