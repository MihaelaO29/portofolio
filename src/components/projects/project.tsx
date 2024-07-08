import './projects.css';
import project_1 from '../../images/project_1.png';
import project_2 from '../../images/project_2.png';
import project_3 from '../../images/project_3.png';
import project_4 from '../../images/project_4.png';
import project_5 from '../../images/project_5.png';
import project_6 from '../../images/project_6.png';
import project_7 from '../../images/project_7.png';
import project_8 from '../../images/project_8.png';
import project_9 from '../../images/project_9.png';
import project_10 from '../../images/project_10.png';
import project_11 from '../../images/project_11.png';
import project_12 from '../../images/project_12.png';
import project_13 from '../../images/project_13.png';
import project_14 from '../../images/project_14.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';


interface IProject {
	image: string;
	title: string;
	linkProject: string;
	linkGitHub: string;
	category: string;
}

function Projects() {
	const [selectedCategory, setSelectedCategory] = useState<string>('All');
	const projects: IProject[] = [
		{
			image: project_1,
			title: 'Work-Out',
			linkProject: 'https://project-gym-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/gym', 
			category: 'React'
		},
		{
			image: project_2,
			title: 'Best-restaurant',
			linkProject: 'https://best-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/best',
			category: 'React'
		},
		{
			image: project_3,
			title: 'Comfy House',
			linkProject: 'https://comfy-house-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/comfy-house',
			category: 'React'
		},
		{
			image: project_4,
			title: 'Juice Ad',
			linkProject: 'https://juice-landing-page-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/pepsi-landing-page',
			category: 'JS'
		},
		{
			image: project_5,
			title: 'Album Animation',
			linkProject: 'https://album-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/animation',
			category: 'React'
		},
		{
			image: project_6,
			title: 'Coffe Shop',
			linkProject: 'https://coffe-shop-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/coffe-shop',
			category: 'React'
		},
		{
			image: project_7,
			title: 'Registration Form',
			linkProject: 'https://create-account-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/form-validation',
			category: 'JS'
		},
		{
			image: project_8,
			title: 'Fly Away',
			linkProject: 'https://fly-away-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/kiwi',
			category: 'React'
		},
			{
			image: project_9,
			title: 'Coffe Ad',
			linkProject: 'https://coffe-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/coffe-landing-page',
			category: 'JS'
		},
		{
			image: project_10,
			title: 'Dolce',
			linkProject: 'https://dolce-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/cakes-landing-page',
			category: 'JS'
		},
		{
			image: project_11,
			title: 'To Do List',
			linkProject: 'https://list-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/to-do-list',
			category: 'React'
		},
		{
			image: project_12,
			title: 'Clothes Shop',
			linkProject: 'https://crown-mihaela.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/crwn-clothing',
			category: 'React'
		},
		{
			image: project_13,
			title: 'Guess Number',
			linkProject: 'https://guess-my-number-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/guess-my-number',
			category: 'React'
		},
		{
			image: project_14,
			title: 'Foodify',
			linkProject: 'https://foodify-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/foodify',
			category: 'React'
		},
		{
			image: project_14,
			title: 'Travel',
			linkProject: 'https://travel-page-m.netlify.app/',
			linkGitHub: 'https://github.com/MihaelaO29/travel-landing-page',
			category: 'JS'
		},

	];

	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category);
	};

	const filteredProjects = selectedCategory === 'All'
		? projects
		: projects.filter(project => project.category === selectedCategory);

	return (
		<div className='projects_section'>
			<div className='projects'>
				<div className='project_heading'>MY PROJECTS</div>

				<div className='all_projects_category'>
					<div className='projects_category' onClick={() => handleCategoryChange('All')}
				  style={{ backgroundColor: selectedCategory === 'All' ? 'red' : 'black' }}
					>All</div>
					<div className='projects_category' onClick={() => handleCategoryChange('HTML/CSS')}
					  style={{ backgroundColor: selectedCategory === 'HTML/CSS' ? 'red' : 'black' }}
					>HTML/CSS</div>
					<div className='projects_category' onClick={() => handleCategoryChange('JS')}
					 style={{ backgroundColor: selectedCategory === 'JS' ? 'red' : 'black' }}
					>JS</div>
					<div className='projects_category' onClick={() => handleCategoryChange('React')}
					 style={{ backgroundColor: selectedCategory === 'React' ? 'red' : 'black' }}
					>React</div>
				</div>  

				<div className='all_projects'>
					<div className='projects_grid'>
						{filteredProjects.map((project) => (
							<div className="card">
								<div
									className="cover"
									style={{
										backgroundImage: `url(${project.image})`
										}}
								>
									<h1>{project.title}</h1>
	
									<div className="card_back">
										<a href={project.linkProject}>See project</a>
										<a href={project.linkGitHub}><FontAwesomeIcon icon={faGithub} /></a>
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