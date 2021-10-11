let projects = [];

class Project {
	constructor(title, description, image, link, code) {
		this.title = title;
		this.description = description;
		this.image = image;
		this.link = link;
		this.code = code;
	}
}

const UI = {
	projects: document.querySelector('.projects__container'),
};

function initProjects() {
	projects.push(
		new Project(
			'Digits',
			'A website design replication for a fictional design agency',
			new URL('img/digits.png',import.meta.url),
			'https://mgailius.github.io/Digits/',
			'https://github.com/mgailius/Digits'
		)
	);
	projects.push(
		new Project(
			'Trafalgar',
			'A website design replication for a fictional healthcare institution',
			new URL('img/health.png',import.meta.url),
			'https://mgailius.github.io/Trafalgar/',
			'https://github.com/mgailius/Trafalgar'
		)
	);
	projects.push(
		new Project(
			'Holiday Finder',
			'A website design replication for a fictional travel agency',
			new URL('img/travel.png',import.meta.url),
			'https://mgailius.github.io/Holiday-Finder/',
			'https://github.com/mgailius/Holiday-Finder'
		)
	);
	projects.push(
		new Project(
			'Hangman',
			'Three level difficulty hangman game built with JavaScript',
			new URL('img/hangman.png',import.meta.url),
			'https://mgailius.github.io/Hangman/',
			'https://github.com/mgailius/Hangman'
		)
	);
	projects.push(
		new Project(
			'Žalioji Virtuvė',
			'Website for a vegan/vegetarian restaurant (closed)',
			new URL('img/zalvir.png',import.meta.url),
			'https://mgailius.github.io/zalioji-virtuve/',
			'https://github.com/mgailius/zalioji-virtuve/'
		)
	);
	projects.push(
		new Project(
			'Currency Converter',
			'Euro / Dollar / Pound converter built with JavaScript',
			new URL('img/converter.png',import.meta.url),
			'https://mgailius.github.io/Currency-Converter/',
			'https://github.com/mgailius/Currency-Converter/'
		)
	);
}

function displayProjects() {
	for (let i = 0; i < projects.length; i++) {
		UI.projects.insertAdjacentHTML(
			'beforeend',
			`<div class="projects__container__card">
				<div class="projects__container__card__image">
					<img src="${projects[i].image}" alt="${projects[i].name}">
				</div>
				<div class="projects__container__card__info">
					<h4>${projects[i].title}</h4>
					<p>${projects[i].description}</p>
					<div class="projects__container__card__info__buttons">
						<a target="_blank" href="${projects[i].link}">View Site</a>
						<a target="_blank" href="${projects[i].code}">View Code</a>
					</div>
				</div>
			</div>`
		);
	}
}

initProjects();
displayProjects();