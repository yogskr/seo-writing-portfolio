import { heroData, homeData } from "../../data";
import { NavBar } from "../../components/navigation/NavBar";
import RotatingText from "../../components/rotating-text/RotatingText";

export function Home() {
  return (
    <div className="grid grid-cols-10 auto-rows-auto gap-4 md:gap-6 p-4 md:p-8 min-h-svh">
      {/* Hero Section */}
      <header className="col-span-10 md:col-span-5 row-span-5 md:row-span-10 flex flex-col justify-between p-4 md:p-8 bg-pollar-night-nord0 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small">
        <figure className="w-full h-fit rounded-lg col-start-2 flex justify-end">
          <img
            src={heroData.image}
            alt={heroData.title}
            className="w-28 md:w-48 h-fit rounded-lg border-2 border-solid border-pollar-night-nord1"
          />
        </figure>
        <div className="flex flex-col gap-2 md:gap-6">
          <h1 className="text-snow-storm-nord4 text-sm md:text-base font-cascadia-code">
            {heroData.title}
          </h1>
          <div className="font-jetbrains-mono md:flex md:flex-col md:gap-4 mb-4 md:mb-0">
            <p className="text-snow-storm-nord5 font-bold text-lg md:text-2xl">
              {heroData.author}
            </p>
            <p className="text-frost-nord9 md:text-lg">
              {heroData.desc} <RotatingText />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1.5 md:gap-3 bg-aurora-nord12 w-fit px-2 py-1 md:px-4 md:py-2 rounded-md text-pollar-night-nord0 hover:bg-aurora-nord14 transition-colors">
          <i
            className={`${heroData.downloadResume.icon} text-pollar-nord1 md:text-lg`}
          ></i>
          <a
            href={heroData.downloadResume.link}
            target="_blank"
            rel="noopener norefrrer"
            className="text-sm md:text-base font-semibold font-cascadia-code text-pollar-night-nord1"
          >
            {heroData.downloadResume.title}
          </a>
        </div>
      </header>

      {/* Tagline section */}
      <div className="col-span-10 md:col-span-5 row-span-2 md:row-span-6 flex flex-col gap-3 md:justify-between bg-aurora-nord14 p-4 md:p-8 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small">
        <h2 className="text-sm md:text-base text-pollar-night-nord1 font-cascadia-code">
          {homeData.tagline.title}
        </h2>
        <p className="text-lg md:text-xl font-bold tracking-tight text-pollar-night-nord0 font-jetbrains-mono">
          {homeData.tagline.desc}
        </p>
        <p className="hidden md:block font-jetbrains-mono tracking-wide text-lg">
          {homeData.tagline.detail}
        </p>
      </div>

      {/* Niches section */}
      <div className="col-span-6 md:col-span-5 row-span-3 md:row-span-2 flex flex-col gap-4 md:justify-between bg-frost-nord8 p-4 md:p-8 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small">
        <h2 className="text-sm md:text-base text-pollar-night-nord0 font-cascadia-code bg-auro">
          {homeData.niches.title}
        </h2>
        <ul className="flex flex-wrap gap-3">
          {homeData.niches.list.map((niche, index) => (
            <li
              key={index}
              className="text-sm md:text-base text-pollar-night-nord0 font-bold p-2 border-2 border-solid border-pollar-night-nord1 rounded-lg font-jetbrains-mono"
            >
              {niche}
            </li>
          ))}
        </ul>
      </div>

      {/* Experience section */}
      <div className="col-span-4 md:col-span-5 row-span-3 md:row-span-2 flex flex-col gap-8 md:justify-between bg-aurora-nord13 p-4 md:p-8 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small">
        <h2 className="text-sm md:text-base text-pollar-night-nord1 font-cascadia-code">
          {homeData.experience.title}
        </h2>
        <p className="font-bold text-pollar-night-nord0 text-3xl md:text-4xl tracking-wide font-jetbrains-mono">
          {homeData.experience.desc}
        </p>
      </div>
      <NavBar />
    </div>
  );
}
