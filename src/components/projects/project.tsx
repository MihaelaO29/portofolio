import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import projects, { Category } from '../../utils/project-utils';

function Projects() {
	const [selectedCategory, setSelectedCategory] = useState<Category>(Category.ALL);

	const handleCategoryChange = (category: Category) => {
		setSelectedCategory(category);
	};

	const filteredProjects = selectedCategory === Category.ALL
		? projects
		: projects.filter(project => project.category === selectedCategory);

	return (
		<div className='projects_section'>
			<div className='projects'>
				<div className='project_container'>
					<div className='project_heading'>MY PROJECTS</div>
					<div className='projects_details'>
					</div>
					<div className='all_projects_category'>
						<div className='projects_category' onClick={() => handleCategoryChange(Category.ALL)}
							style={{ backgroundColor: selectedCategory === Category.ALL ? '#262626e6' : 'rgb(26 26 26 / 0%)', }}
						>All</div>
						<div className='projects_category' onClick={() => handleCategoryChange(Category.HTML_CSS)}
							style={{ backgroundColor: selectedCategory === Category.HTML_CSS ? '#262626e6' : 'rgb(26 26 26 / 0%)' }}
						>HTML/CSS</div>
						<div className='projects_category' onClick={() => handleCategoryChange(Category.JS)}
							style={{ backgroundColor: selectedCategory === Category.JS ? '#262626e6' : 'rgb(26 26 26 / 0%)' }}
						>JS</div>
						<div className='projects_category' onClick={() => handleCategoryChange(Category.REACT)}
							style={{ backgroundColor: selectedCategory === Category.REACT ? '#262626e6' : 'rgb(26 26 26 / 0%)' }}
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
										{/* <h1>{project.title}</h1> */}

										<div className="card_back">
											<a href={project.linkProject} target="_blank">See project</a>
											<a href={project.linkGitHub}><FontAwesomeIcon icon={faGithub} /></a>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects;