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

      <div className='about_content'>
        <div className='about_text'>
          <div className='about_heading'>
            About Me
          </div>
          <div className='text_description'>
            Hi, I'm Mihaela! I'm a passionate Frontend Developer with a dedication to crafting visually
            stunning and user-friendly web experiences. My journey in web development began with a simple
            curiosity about how websites work, and has since evolved into a deep commitment to building intuitive,
            responsive interfaces that delight users.
            I have a serious passion for UI effects, animations, and creating dynamic user experiences that not
            only look great but also feel intuitive. My goal is to blend aesthetic design with seamless functionality,
            ensuring every project I work on is both beautiful and easy to use.<br/>
            Thank you for visiting my portfolio! I look forward to the opportunity to collaborate and create something
            amazing together.
            <br />
          </div>
        </div>
      </div>


      <div className='skills_details'>
        <div className="skills_container">
          <h1>Skills</h1>
          <div className="skills_grid">
            {skills.map((skill, index) => (
              <motion.div
                className="skill_item"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.2 } }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <img src={skill.imageUrl} alt={skill.name} />
                <div className="tooltip">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default About;