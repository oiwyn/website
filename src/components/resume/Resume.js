import './Resume.scss';
import {resumeContent} from './resumeData';
import ResumePDF from './Resume.pdf';
import PageTitle from '../PageTitle';

const TITLE = "Resume by";

export default function Resume() {
    return(
        <div className="resume">
            <PageTitle title={TITLE}/>
            <div className="container">
                <section className="page">
                    <div className="work-experience">
                        <h1>Resume</h1>
                        {resumeContent.jobHistory.map((job, key) => {
                            return(
                                <article key={key}>
                                    <h2>
                                        {job.company}
                                        <span>
                                            {job.position}
                                        </span>
                                    </h2>
                                    <span>{job.year}</span>
                                    <p>{job.desc}</p>
                            </article>
                            )
                        })}
                    </div>
                    <div className="education-skills">
                        <article>
                            <h2 className="-first">Education</h2>
                            {resumeContent.education.map((edu, key) => {
                                return(
                                <div key={key}>
                                    <h3>{edu.uni}</h3>
                                    <span>{edu.year}</span>
                                    <p>{edu.desc}</p>
                                </div>
                                )
                            })}
                        </article>
                        <article>
                            <h2>Design</h2>
                            <ul>
                                {resumeContent.skillList.design.map((dsg) => {
                                    return(
                                        <li key={dsg}>{dsg}</li>
                                    )
                                })}
                            </ul>
                        </article>
                        <article>
                            <h2>Development</h2>
                            <ul>
                                {resumeContent.skillList.dev.map((dev) => {
                                    return(
                                        <li key={dev}>{dev}</li>
                                    )
                                })}
                            </ul>
                        </article>
                        <article>
                            <h2>Tools</h2>
                            <ul>
                                {resumeContent.skillList.tool.map((tool) => {
                                    return(
                                        <li key={tool}>{tool}</li>
                                    )
                                })}
                            </ul>
                        </article>
                    </div>
                </section>
            </div>
            <section className="links-container alt">
                <div className="links-area">
                    <a href="https://www.linkedin.com/in/owynn/">
                        <h1>LinkedIn</h1>
                    </a>
                    <a href={ResumePDF} target="_blank" rel="noreferrer">
                        <h1>Download</h1>
                    </a>
                </div>
            </section>
        </div>
    )
}