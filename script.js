let projects = [];

class Project {
	constructor(title, subtitle, image, link) {
		this.title = title;
		this.subtitle = subtitle;
		this.image = image;
		this.link = link;
	}
}

const UI = {
	projects: document.querySelector('.projects__container'),
};

function initProjects() {
	projects.push(
		new Project(
			'Holiday Finder',
			'Design Replication',
			'img/projects/travel.png',
			'https://mgailius.github.io/Holiday-Finder/'
		)
	);
	projects.push(
		new Project(
			'Digits',
			'Design Replication',
			'img/projects/digits.png',
			'https://mgailius.github.io/Digits/'
		)
	);
	projects.push(
		new Project(
			'Žalioji Virtuvė',
			'My first project',
			'img/projects/zalvir.png',
			'https://mgailius.github.io/zalioji-virtuve/'
		)
	);
	projects.push(
		new Project(
			'Currency Converter',
			'My project',
			'img/projects/converter.png',
			'https://mgailius.github.io/Currency-Converter/'
		)
	);
}

function displayProjects() {
	for (let i = 0; i < projects.length; i++) {
		UI.projects.insertAdjacentHTML(
			'beforeend',
			`<div class="projects__container__project">
                <img src="${projects[i].image}" alt="${projects[i].title}">
                <div class="projects__container__project__overlay">
                    <h3>${projects[i].title}</h3>
                    <p class="gradient-text">${projects[i].subtitle}</p>
                    <a target="_blank" href="${projects[i].link}"></a>
                </div>
            </div>`
		);
	}
}

initProjects();
displayProjects();
