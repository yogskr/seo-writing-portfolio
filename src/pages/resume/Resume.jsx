import { resumeData } from "../../data";
import "./Resume.css";

export function Resume() {
  return (
    <>
      <section className="resume-header">
        <h2>{resumeData.header.title}</h2>
      </section>
      <section className="resume-content">
        <hr className="line-break" />
        <div className="about">
          <h3>{resumeData.about.title}</h3>
          <p className="about-desc">{resumeData.about.description}</p>
        </div>
        <hr className="line-break" />
        <div className="experience">
          <h3>{resumeData.work.title}</h3>
          {resumeData.work.jobs.map((job) => (
            <div key={job.id} className="job-container">
              <p className="role">{job.role}</p>
              <div className="detail">
                <p className="company">{job.company}</p>
                <div className="spacer"></div>
                <p className="duration">{job.duration}</p>
              </div>
              <ul className="jobdesc">
                {job.description.map((desc, index) => (
                  <li className="jobdesc-list" key={index}>
                    <p>{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="line-break" />
        <div className="tec-stack"></div>
      </section>
    </>
  );
}
