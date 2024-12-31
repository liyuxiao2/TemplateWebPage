import "./index.css";

import {homepage, menupage, contactpage} from  "./index.js";

const content = document.getElementById("content");

const nav = document.getElementById("pages");

homepage(content);

nav.addEventListener("click", (e) => {
    const target = e.target.id;

    switch (target){
        case "home":
            content.textContent = "";
            homepage(content);
            break;
        case "menu":
            content.textContent = "";
            menupage(content);
            break;
        case "contact":
            content.textContent = "";
            contactpage(content);
            break;
    }
})