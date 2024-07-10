import project_1 from '../images/project_1.png';
import project_2 from '../images/project_2.png';
import project_3 from '../images/project_3.png';
import project_4 from '../images/project_4.png';
import project_5 from '../images/project_5.png';
import project_6 from '../images/project_6.png';
import project_7 from '../images/project_7.png';
import project_8 from '../images/project_8.png';
import project_9 from '../images/project_9.png';
import project_10 from '../images/project_10.png';
import project_11 from '../images/project_11.png';
import project_12 from '../images/project_12.png';
import project_13 from '../images/project_13.png';
import project_14 from '../images/project_14.png';

export enum Category {
    ALL,
    HTML_CSS,
    JS,
    REACT
}

export interface IProject {
    image: string;
    title: string;
    linkProject: string;
    linkGitHub: string;
    category: Category;
}

const projects: IProject[] = [
    {
        image: project_1,
        title: 'Work-Out',
        linkProject: 'https://project-gym-m.netlify.app/',
        linkGitHub: 'https://github.com/MihaelaO29/gym',
        category: Category.REACT
    },
    {
        image: project_2,
        title: 'Best-restaurant',
        linkProject: 'https://best-m.netlify.app/',
        linkGitHub: 'https://github.com/MihaelaO29/best',
        category: Category.REACT
    },
    {
        image: project_3,
        title: 'Comfy House',
        linkProject: 'https://comfy-house-m.netlify.app/',
        linkGitHub: 'https://github.com/MihaelaO29/comfy-house',
        category: Category.REACT
    },
    {
        image: project_4,
        title: 'Juice Ad',
        linkProject: 'https://juice-landing-page-m.netlify.app/',
        linkGitHub: 'https://github.com/MihaelaO29/pepsi-landing-page',
        category: Category.JS
    },
    {
        image: project_5,
        title: 'Album Animation',
        linkProject: 'https://album-m.netlify.app/',
        linkGitHub: 'https://github.com/MihaelaO29/animation',
        category: Category.REACT
    },
    {
        image: project_6,
        title: 'Coffe Shop',
        linkProject: 'https://coffe-shop-m.netlify.app/',
        linkGitHub: 'https://github.com/MihaelaO29/coffe-shop',
        category: Category.REACT
    },
    {
        image: project_7,
        title: 'Registration Form',
        linkProject: 'https://create-account-m.netlify.app/',
        linkGitHub: 'https://github.com/MihaelaO29/form-validation',
        category: Category.JS
    },
    {
        image: project_8,
        title: 'Fly Away',
        linkProject: 'https://fly-away-m.netlify.app/',
        linkGitHub: 'https://github.com/MihaelaO29/kiwi',
        category: Category.REACT
    },
    {
        image: project_9,
        title: 'Coffe Ad',
        linkProject: 'https://coffe-m.netlify.app/',
        linkGitHub: 'https://github.com/MihaelaO29/coffe-landing-page',
        category: Category.JS
    },
    {
        image: project_10,
        title: 'Dolce',
        linkProject: 'https://dolce-m.netlify.app/',
        linkGitHub: 'https://github.com/MihaelaO29/cakes-landing-page',
        category: Category.JS
    },
    {
        image: project_11,
        title: 'To Do List',
        linkProject: 'https://list-m.netlify.app/',
        linkGitHub: 'https://github.com/MihaelaO29/to-do-list',
        category: Category.REACT
    },
    {
        image: project_12,
        title: 'Clothes Shop',
        linkProject: 'https://crown-mihaela.netlify.app/',
        linkGitHub: 'https://github.com/MihaelaO29/crwn-clothing',
        category: Category.REACT
    },
    {
        image: project_13,
        title: 'Guess Number',
        linkProject: 'https://guess-my-number-m.netlify.app/',
        linkGitHub: 'https://github.com/MihaelaO29/guess-my-number',
        category: Category.REACT
    },
    {
        image: project_14,
        title: 'Foodify',
        linkProject: 'https://foodify-m.netlify.app/',
        linkGitHub: 'https://github.com/MihaelaO29/foodify',
        category: Category.REACT
    },
    {
        image: project_14,
        title: 'Travel',
        linkProject: 'https://travel-page-m.netlify.app/',
        linkGitHub: 'https://github.com/MihaelaO29/travel-landing-page',
        category: Category.JS
    },

];

export default projects;