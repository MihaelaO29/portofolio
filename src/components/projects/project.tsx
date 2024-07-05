import './projects.css';
import project_1 from '../../images/project_1.png';
import project_2 from '../../images/project_2.png';
import project_3 from '../../images/project_3.png';
import project_4 from '../../images/project_4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


interface IProject {
	image: string;
	title: string;
	description: string;
	linkProject: string;
	linkGitHub: string;
}

function Projects() {

	const projects: IProject[] = [
		{
			image: project_1,
			title: 'Project 1',
			description: 'Work-Out',
			linkProject: 'https://project-gym-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/gym'
		},
		{
			image: project_2,
			title: 'Project 2',
			description: 'Best-restaurant',
			linkProject: 'https://best-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/best'
		},
		{
			image: project_3,
			title: 'Project 3',
			description: 'Comfy House',
			linkProject: 'https://comfy-house-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/comfy-house'
		},
	];


	return (
		<div className='projects_section'>
			<div className='projects'>
				<div className='project_heading'>MY PROJECTS</div>

				<div className='all_projects_category'>
					<div className='p_category'>All</div>
					<div className='p_category'>HTML/CSS</div>
					<div className='p_category'>JS</div>
					<div className='p_category'>React</div>
				</div>


				{/* <div className='all_projects'>
					<div className='projects_grid'>
						{projects.map((project) => (
							<div className='project_card'>
								<img src={project.image} alt={project.title} className='project_image' />
							</div>
						))}

					</div>

				</div> */}

				<div className='all_projects'>
					<div className='projects_grid'>
						{projects.map((project) => (
							<div className="card">
								<div
									className="cover"
									style={{
										backgroundImage: `url(${project.image})`
										}}
								>
									<h1>Project</h1>
	
									<div className="card_back">
										<a href={project.link}>See project</a>
										<a href="#"><FontAwesomeIcon icon={faGithub} /></a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

		</div>
	)
}

export default Projects;