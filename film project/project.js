const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");


// UI Object

const ui = new UI();

//Storage Object

const storage = new Storage();


//All event download
eventListener();

function eventListener(){
    form.addEventListener("submit",addFilm);
}

function addFilm(e){
     const title = titleElement.value;
     const director = directorElement.value;
     const url = urlElement.value;

     if(title==="" || director==="" || url===""){
         ui.displayMessages("fill in all fields...","danger");

     }else{
         const newFilm = new Film(title,director,url);
         
         ui.addFilmToUI(newFilm);
         storage.addFilmToStorage(newFilm);
         ui.displayMessages("Successfully added","success");
        }

    ui.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}