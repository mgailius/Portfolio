let i=[];class t{constructor(i,t,e,n){this.title=i,this.subtitle=t,this.image=e,this.link=n}}const e={projects:document.querySelector(".projects__container")};i.push(new t("Holiday Finder","Design Replication","img/travel.png","https://mgailius.github.io/Holiday-Finder/")),i.push(new t("Digits","Design Replication","img/digits.png","https://mgailius.github.io/Digits/")),i.push(new t("Žalioji Virtuvė","My first project","img/zalvir.png","https://mgailius.github.io/zalioji-virtuve/")),i.push(new t("Currency Converter","My project","img/converter.png","https://mgailius.github.io/Currency-Converter/")),function(){for(let t=0;t<i.length;t++)e.projects.insertAdjacentHTML("beforeend",`<div class="projects__container__project">\n                <img src="${i[t].image}" alt="${i[t].title}">\n                <div class="projects__container__project__info">\n                    <h4>${i[t].title}</h4>\n                    <p class="gradient-text">${i[t].subtitle}</p>\n                    <a target="_blank" href="${i[t].link}"></a>\n                </div>\n            </div>`)}();
//# sourceMappingURL=index.9388e862.js.map