import { resumeData } from "../../data";
import "./Resume.css";

export function Resume() {
  return (
    <div className="resume-container">
      <section className="resume-header">
        <h2 className="resume-title">{resumeData.header.title}</h2>
      </section>
      {/* ===== About Me ===== */}
      <section className="resume-content">
        <hr className="line-break" />
        <div className="about">
          <h3 className="about-title">{resumeData.about.title}</h3>
          <p className="about-desc">{resumeData.about.description}</p>
          <div className="skill-container">
            <ul></ul>
          </div>
        </div>
        {/* ===== Tech Stack ===== */}
        <hr className="line-break" />
        <div className="tech-stack">
          <h3 className="tech-stack-title">{resumeData.techStack.title}</h3>
          <div className="tech-stack-container">
            {resumeData.techStack.list.map((list) => (
              <div key={list.id} className="tech-list">
                <i className={list.icon}></i>
                <p className="list-text">{list.tech}</p>
              </div>
            ))}
          </div>
        </div>
        {/* ===== Work Experience ===== */}
        <hr className="line-break" />
        <div className="experience">
          <h3 className="experience-title">{resumeData.work.title}</h3>
          {resumeData.work.jobs.map((job) => (
            <div key={job.id} className="job-container">
              <div className="jobrole-container">
                <p className="role">{job.role}</p>
                <div className="detail">
                  <p className="company">{job.company}</p>
                  <div className="spacer"></div>
                  <p className="duration">{job.duration}</p>
                </div>
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
      </section>
    </div>
  );
}
