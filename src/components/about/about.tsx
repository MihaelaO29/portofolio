import './about.css';
import { motion } from "framer-motion";
import html from '../../images/html.svg';
import css from '../../images/css.svg';
import javascript from '../../images/javascript.svg';
import react from '../../images/react.svg';
import redux from '../../images/redux.svg';
import typescript from '../../images/typescript.svg';
import git from '../../images/git.svg';
import gitHub from '../../images/github.svg';
import gitLab from '../../images/gitlab.svg';
import responsive from '../../images/responsive.svg';
import npm from '../../images/npm.svg';
import framer from '../../images/framer.svg';
import figma from '../../images/figma.svg';


function About() {
  interface ISkills {
    imageUrl: string;
    name: string;
  }

  const skills: ISkills[] = [
    {
      imageUrl: html,
      name: "Html",
    },
    {
      imageUrl: css,
      name: "CSS",
    },
    {
      imageUrl: javascript,
      name: "Javascript",
    },
    {
      imageUrl: react,
      name: "React",
    },
    {
      imageUrl: redux,
      name: "Redux",
    },
    {
      imageUrl: typescript,
      name: "TypeScript",
    },
    {
      imageUrl: git,
      name: "Git",
    },
    {
      imageUrl: gitHub,
      name: "GitHub",
    },
    {
      imageUrl: gitLab,
      name: "GitLab",
    },
    {
      imageUrl: responsive,
      name: "Responsive",
    },
    {
      imageUrl: npm,
      name: "Npm",
    },
    {
      imageUrl: framer,
      name: "Framer",
    },
    {
      imageUrl: figma,
      name: "Figma",
    }
  ];

  return (
    <div className='about_section'>
      <div className='about'>

        <div className='about_content'>
          <div className='about_text'>
            <div className='about_heading'>
              About Me
            </div>
            <div className='text_description'>
              I'm a Front-End Developer from Romania.
              I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.<br />
              I'm passionate about music, technology and basically everything that makes the internet tick.
            </div>
          </div>
        </div>
        <div className='skills_details'>

          <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <img src={skill.imageUrl} alt={skill.name} />
                  <div className="tooltip">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default About;