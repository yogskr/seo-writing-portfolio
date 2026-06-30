import { heroData, homeData } from "../../data";
import { NavBar } from "../../components/navigation/NavBar";
import RotatingText from "../../components/rotating-text/RotatingText";
import { NavBarDesktop } from "../../components/navigation/NavBarDesktop";

export function Home() {
  return (
    <div className="grid grid-cols-10 auto-rows-auto min-h-svh gap-4 md:gap-6 p-4 md:p-8 lg:px-26 lg:py-16">
      <NavBarDesktop />

      {/* Hero Section */}
      <header className="col-span-10 md:col-span-5 row-span-5 md:row-span-10 lg:row-span-8 flex flex-col justify-between lg:justify-evenly p-4 md:p-8 lg:p-10 bg-pollar-night-nord0 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small">
        <figure className="w-full h-fit rounded-lg col-start-2 flex justify-end">
          <img
            src={heroData.image}
            alt={heroData.title}
            className="w-28 md:w-48 lg:w-52 h-fit rounded-lg border-2 border-solid border-pollar-night-nord1"
          />
        </figure>
        <div className="flex flex-col gap-2 md:gap-6 lg:gap-8">
          <h1 className="text-snow-storm-nord4 text-sm md:text-base lg:text-lg font-cascadia-code">
            {heroData.title}
          </h1>
          <div className="font-jetbrains-mono md:flex md:flex-col md:gap-4 lg:gap-6 mb-4 md:mb-0">
            <p className="text-snow-storm-nord5 font-bold text-lg md:text-2xl lg:text-3xl">
              {heroData.author}
            </p>
            <p className="text-frost-nord9 md:text-lg lg:text-xl">
              {heroData.desc} <RotatingText />
            </p>
          </div>
        </div>
        <button className="flex items-center justify-center gap-1.5 md:gap-3 lg:gap-5 bg-aurora-nord12 w-fit px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-4 rounded-md text-pollar-night-nord0 hover:bg-aurora-nord14 transition-colors">
          <i
            className={`${heroData.downloadResume.icon} text-pollar-nord1 md:text-lg lg:text-xl`}
          ></i>
          <a
            href={heroData.downloadResume.link}
            target="_blank"
            rel="noopener norefrrer"
            className="text-sm md:text-base lg:text-lg font-semibold font-cascadia-code text-pollar-night-nord1"
          >
            {heroData.downloadResume.title}
          </a>
        </button>
      </header>

      {/* Tagline section */}
      <div className="col-span-10 md:col-span-5 row-span-2 md:row-span-6 lg:row-span-4 flex flex-col gap-3 md:justify-between bg-aurora-nord14 p-4 md:p-8 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small">
        <h2 className="text-sm md:text-base lg:text-xl text-pollar-night-nord1 font-cascadia-code">
          {homeData.tagline.title}
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight lg:tracking-normal text-pollar-night-nord0 font-jetbrains-mono">
          {homeData.tagline.desc}
        </p>
        <p className="hidden md:block font-jetbrains-mono tracking-wide text-lg lg:text-xl">
          {homeData.tagline.detail}
        </p>
      </div>

      {/* Niches section */}
      <div className="col-span-6 md:col-span-5 lg:col-span-5 row-span-3 md:row-span-2 lg:row-span-2 flex flex-col gap-4 md:justify-between bg-frost-nord8 p-4 md:p-8 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small">
        <h2 className="text-sm md:text-base lg:text-lg text-pollar-night-nord0 font-cascadia-code">
          {homeData.niches.title}
        </h2>
        <ul className="flex flex-wrap gap-3 lg:gap-6">
          {homeData.niches.list.map((niche, index) => (
            <li
              key={index}
              className="text-sm md:text-base lg:text-lg text-pollar-night-nord0 font-bold p-2 border-2 border-solid border-pollar-night-nord1 rounded-lg font-jetbrains-mono"
            >
              {niche}
            </li>
          ))}
        </ul>
      </div>

      {/* Experience section */}
      <div className="col-span-4 md:col-span-5 lg:col-span-5 row-span-3 md:row-span-2 lg:row-span-2 flex flex-col gap-8 md:justify-between bg-aurora-nord13 p-4 md:p-8 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small">
        <h2 className="text-sm md:text-base lg:text-lg text-pollar-night-nord1 font-cascadia-code">
          {homeData.experience.title}
        </h2>
        <p className="font-bold text-pollar-night-nord0 text-3xl md:text-4xl lg:text-5xl tracking-wide font-jetbrains-mono">
          {homeData.experience.desc}
        </p>
      </div>
      <NavBar />
    </div>
  );
}
