function t(t,e,i,n){Object.defineProperty(t,e,{get:i,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=e.parcelRequire2041;null==r&&((r=function(t){if(t in i)return i[t].exports;if(t in n){var e=n[t];delete n[t];var r={id:t,exports:{}};return i[t]=r,e.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},e.parcelRequire2041=r),r.register("fasuv",(function(e,i){var n,r;t(e.exports,"resolve",(function(){return r}),(function(t){return r=t})),t(e.exports,"register",(function(){return n}),(function(t){return n=t}));var o={};n=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)o[e[i]]=t[e[i]]},r=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r("fasuv").register(JSON.parse('{"j9WU2":"index.c957f1ba.js","kvwEt":"digits.01780af2.png","ajm6u":"health.6b5405b3.png","ehxXF":"travel.6684a923.png","gsfdC":"hangman.3cfbae74.png","1xOZt":"zalvir.58ebf3ca.png","je3On":"converter.7b9a42c6.png"}'));const o={projects:document.querySelector(".projects__container"),mobilenav:document.querySelector(".mobilenav"),nav:document.querySelector(".nav"),navlink:document.querySelectorAll(".navlink")},a=()=>{o.nav.classList.toggle("mobile"),o.mobilenav.classList.toggle("close")};o.mobilenav.addEventListener("click",a);for(const t of o.navlink)t.addEventListener("click",a);let s=[];class l{constructor(t,e,i,n,r){this.title=t,this.description=e,this.image=i,this.link=n,this.code=r}}r.register("gHdzi",(function(t,e){t.exports=new URL(r("fasuv").resolve("kvwEt"),import.meta.url).toString()})),r.register("aMPVY",(function(t,e){t.exports=new URL(r("fasuv").resolve("ajm6u"),import.meta.url).toString()})),r.register("bgoEa",(function(t,e){t.exports=new URL(r("fasuv").resolve("ehxXF"),import.meta.url).toString()})),r.register("SFrYP",(function(t,e){t.exports=new URL(r("fasuv").resolve("gsfdC"),import.meta.url).toString()})),r.register("8GoGo",(function(t,e){t.exports=new URL(r("fasuv").resolve("1xOZt"),import.meta.url).toString()})),r.register("3nCW2",(function(t,e){t.exports=new URL(r("fasuv").resolve("je3On"),import.meta.url).toString()})),function(){s.push(new l("Digits","A website design replication for a fictional design agency",new URL(r("gHdzi")),"https://mgailius.github.io/Digits/","https://github.com/mgailius/Digits")),s.push(new l("Trafalgar","A website design replication for a fictional healthcare institution",new URL(r("aMPVY")),"https://mgailius.github.io/Trafalgar/","https://github.com/mgailius/Trafalgar")),s.push(new l("Holiday Finder","A website design replication for a fictional travel agency",new URL(r("bgoEa")),"https://mgailius.github.io/Holiday-Finder/","https://github.com/mgailius/Holiday-Finder")),s.push(new l("Hangman","Three level difficulty hangman game built with JavaScript",new URL(r("SFrYP")),"https://mgailius.github.io/Hangman/","https://github.com/mgailius/Hangman")),s.push(new l("Žalioji Virtuvė","Website for a vegan/vegetarian restaurant (closed)",new URL(r("8GoGo")),"https://mgailius.github.io/zalioji-virtuve/","https://github.com/mgailius/zalioji-virtuve/")),s.push(new l("Currency Converter","Euro / Dollar / Pound converter built with JavaScript",new URL(r("3nCW2")),"https://mgailius.github.io/Currency-Converter/","https://github.com/mgailius/Currency-Converter/"));for(let t=0;t<s.length;t++)o.projects.insertAdjacentHTML("beforeend",`<div class="projects__container__card">\n\t\t\t\t<div class="projects__container__card__image">\n\t\t\t\t\t<img src="${s[t].image}" alt="${s[t].name}">\n\t\t\t\t</div>\n\t\t\t\t<div class="projects__container__card__info">\n\t\t\t\t\t<h4>${s[t].title}</h4>\n\t\t\t\t\t<p>${s[t].description}</p>\n\t\t\t\t\t<div class="projects__container__card__info__buttons">\n\t\t\t\t\t\t<a target="_blank" href="${s[t].link}">View Site</a>\n\t\t\t\t\t\t<a target="_blank" href="${s[t].code}">View Code</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>`)}();
//# sourceMappingURL=index.c957f1ba.js.map