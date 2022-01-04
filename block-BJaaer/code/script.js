let form = document.querySelector("form");

let userData = {};

form.addEventListener('submit',(event)=>{
event.preventDefault();

let elements = event.target.elements;

userData.name= elements.name.value;
userData.email= elements.email.value;
userData.choice= elements.choice.value;
userData.movie = elements.movie.value;
userData.books  = elements.books.value;
userData.terms = elements.terms.value;

});
 
 
