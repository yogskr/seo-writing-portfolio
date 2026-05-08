import { heroData, homeData } from "../../data";
import { NavBar } from "../../components/navigation/NavBar";
import RotatingText from "../../components/rotating-text/RotatingText";

export function Home() {
  return (
    <div className="grid grid-cols-10 auto-rows-auto gap-4 p-4 h-screen">
      <header className="col-span-10 row-span-5 flex flex-col justify-between p-4 bg-pollar-night-nord0 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small">
        <figure className="w-full h-fit rounded-lg col-start-2 flex justify-end">
          <img
            src={heroData.image}
            alt={heroData.title}
            className="w-32 h-fit rounded-lg border-2 border-solid border-pollar-night-nord1"
          />
        </figure>
        <div className="flex flex-col gap-2 col-span-2">
          <h1 className="text-snow-storm-nord4 text-sm font-cascadia-code">
            {heroData.title}
          </h1>
          <div className="font-jetbrains-mono">
            <p className="text-snow-storm-nord5 font-bold text-lg">
              {heroData.author}
            </p>
            <p className="text-frost-nord9">
              {heroData.desc} <RotatingText />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-aurora-nord12 w-fit px-2 py-1 rounded-md text-pollar-night-nord0 hover:bg-aurora-nord14 transition-colors">
          <i
            className={`${heroData.downloadResume.icon} text-pollar-nord1`}
          ></i>
          <a
            href={heroData.downloadResume.link}
            target="_blank"
            rel="noopener norefrrer"
            className="text-sm font-semibold font-cascadia-code text-pollar-night-nord1"
          >
            {heroData.downloadResume.title}
          </a>
        </div>
      </header>
      <div className="col-span-10 row-span-2 flex flex-col gap-3 bg-aurora-nord14 p-4 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small">
        <h2 className="text-sm text-pollar-night-nord1 font-cascadia-code">
          {homeData.tagline.title}
        </h2>
        <p className="text text-lg font-bold tracking-tight text-pollar-night-nord0 font-jetbrains-mono">
          {homeData.tagline.desc}
        </p>
      </div>
      <div className="col-span-6 row-span-3 flex flex-col gap-4 bg-frost-nord8 p-4 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small">
        <h2 className="text-sm text-pollar-night-nord0 font-cascadia-code bg-auro">
          {homeData.niches.title}
        </h2>
        <ul className="flex flex-wrap gap-3">
          {homeData.niches.list.map((niche, index) => (
            <li
              key={index}
              className="text-sm text-pollar-night-nord0 font-bold p-2 border-2 border-solid border-pollar-night-nord1 rounded-lg font-jetbrains-mono"
            >
              {niche}
            </li>
          ))}
        </ul>
      </div>
      <div
        id="experience-cotnainer"
        className="col-span-4 row-span-3 flex flex-col gap-8 bg-aurora-nord13 p-4 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small"
      >
        <h2 className="text-sm text-pollar-night-nord1 font-cascadia-code">
          {homeData.experience.title}
        </h2>
        <p className="font-bold text-pollar-night-nord0 text-3xl tracking-wide font-jetbrains-mono">
          {homeData.experience.desc}
        </p>
      </div>
      <NavBar />
    </div>
  );
}
