import { resumeData } from "../../data";
import useIsScrolled from "../../hooks/useIsScrolled";

export function Resume() {
  const stickyHeader = useIsScrolled();

  return (
    <>
      <div className="bg-snow-storm-nord6 p-4 md:p-8 md:pb-4">
        <section
          className={`${stickyHeader ? "fixed left-0 right-0 rounded-none shadow-none" : "sticky shadow-small"} top-0 flex flex-wrap items-center justify-between gap-4 bg-pollar-night-nord0 text-snow-storm-nord5 p-4 md:px-8 rounded-lg z-50`}
        >
          <h2 className="text-lg md:text-2xl font-bold font-cascadia-code">
            {resumeData.header.title}
          </h2>
          <p className="text-sm md:text-base text-frost-nord7 tracking-tight md:tracking-normal font-jetbrains-mono">
            {resumeData.header.description}
          </p>
        </section>
      </div>
      <div className="grid grid-cols-12 auto-rows-auto gap-4 md:gap-6 p-4 md:p-8 md:pt-4">
        {/* About Me */}
        <div className="col-span-12 flex flex-col gap-4 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small p-4 md:px-8 md:py-6 bg-aurora-nord14 h-fit">
          <h3 className="text-sm md:text-base font-cascadia-code lowercase text-pollar-night-nord1">
            {resumeData.about.title}
          </h3>
          <p className="font-jetbrains-mono text-pollar-night-nord0 font-medium leading-6 md:leading-relaxed md:text-lg">
            {resumeData.about.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="col-span-7 flex flex-col gap-4 md:gap-6 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small p-4 md:px-8 md:py-6 h-full bg-frost-nord8">
          <h3 className="text-sm lowercase font-cascadia-code text-pollar-night-nord0">
            {resumeData.techStack.title}
          </h3>
          <div className="flex flex-wrap items-center justify-start gap-6 h-full">
            {resumeData.techStack.list.map((list) => (
              <div key={list.id} className="flex items-center justify-center">
                <i
                  className={`text-[1.3rem] md:text-3xl text-pollar-night-nord0 ${list.icon}`}
                ></i>
                <p className="hidden">{list.tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Label */}
        <div className="col-span-5 flex flex-col gap-4 md:gap-6 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small p-4 md:px-8 md:py-6 h-full bg-aurora-nord13">
          <h3 className="text-sm md:text-base font-cascadia-code text-pollar-night-nord1">
            {resumeData.experience.title}
          </h3>
          <p className="text-3xl md:text-4xl font-jetbrains-mono font-semibold text-pollar-night-nord0 tracking-tighter h-full">
            {resumeData.experience.description}
          </p>
        </div>

        {/* Work Experience */}
        <div className="col-span-12 flex flex-col gap-4 md:gap-6 p-4 md:px-8 md:py-6 border-2 border-solid border-pollar-night-nord3 rounded-lg shadow-small">
          <h3 className="lowercase text-sm md:text-base font-cascadia-code">
            {resumeData.work.title}
          </h3>
          {resumeData.work.jobs.map((job) => (
            <div
              key={job.id}
              className="bg-snow-storm-nord5 p-4 rounded-lg flex flex-col gap-4 md:gap-6"
            >
              <div className="flex flex-col gap-4 md:gap-6">
                <p className="bg-aurora-nord12 px-2 py-1 md:px-3 md:py-2 rounded-md font-cascadia-code md:text-xl">
                  {job.role}
                </p>
                <div className="flex items-center gap-2 md:gap-4 font-cascadia-code">
                  <p className="text-sm md:text-base bg-frost-nord8 px-2 py-1 md:px-3 md:py-2 w-fit rounded-md text-pollar-night-nord0">
                    {job.company}
                  </p>
                  <p className="text-sm md:text-base bg-aurora-nord14 w-fit rounded-md text-pollar-night-nord0 px-2 py-1 md:px-3 md:py-2">
                    {job.duration}
                  </p>
                </div>
              </div>
              <ul className="font-jetbrains-mono px-6 text-pollar-night-nord0 md:text-lg">
                {job.description.map((desc, index) => (
                  <li
                    className="list-[square] list-outside md:leading-relaxed"
                    key={index}
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
