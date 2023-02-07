// récupération de l'api
let figures = [];
let elementsFilter = [];
let all = [];
let objects = [];
let appartements = [];
let restaurants = [];

function pageload(){
  
fetch('http://localhost:5678/api/works')

  .then(response => response.json())
  .then(data => {
// génération des projets via l'api
    for (let i = 0; i < data.length; i++) {

        let figure = document.createElement("figure");
        let img = document.createElement("img"); 
        let figcaption = document.createElement("figcaption");
        let gallery = document.querySelector(".gallery");

        figure.setAttribute("category-", data[i].categoryId);
        img.setAttribute("src", data[i].imageUrl);
        img.setAttribute("crossorigin", "anonymous");
        figcaption.innerHTML = data[i].title;

        figures.push(figure);

        gallery.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(figcaption);


    }
})
.catch(error => console.error(error));


fetch('http://localhost:5678/api/categories')
  .then(response => response.json())
  .then(data => {
    const filtres = document.querySelector('.filtres');
    for (let i = 0; i < data.length; i++) {
      const category = data[i];
      const button = document.createElement('button');
      button.id = 'category-' + (i + 1);
      button.classList.add = ('elements-filter')
      button.innerText = category.name;
      filtres.appendChild(button);
    }
  });


// Variable Filtres
elementsFilter =  document.querySelectorAll(".elements-filter");
all = document.querySelector(".all");
objects = document.querySelector(".objects-button");
appartements = document.querySelector(".appartements-button");
restaurants = document.querySelector(".restaurants-button");

//Filtre

for (let element of elementsFilter) {
  element.addEventListener("click", function(){
    console.log(figures)
    for ( let e of elementsFilter) {
      e.classList.remove("active");
    }
    this.classList.add("active");
    for (let figure of figures) {
      if (
        figure.getAttribute("data-category-id") === this.getAttribute("data-category-id")
      ){
        console.log('même catégory')
        console.log(figure.getAttribute('data-category-id'))
        console.log(this.getAttribute('data-category-id'))
        figure.style.display = "block";} 
      else if (this === all){
        figure.style.display = "block";} 
      else {figure.style.display = "none";}}
  })
}
}
document.addEventListener('DOMContentLoaded', pageload, false);