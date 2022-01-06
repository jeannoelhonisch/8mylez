import Plugin from 'src/plugin-system/plugin.class';

export default class SearchPlugin extends Plugin {

    init() {
        document.getElementById("searchButton").addEventListener("click",this.onClick.bind(this));
        alert("Search Plugin loaded");
    }

    onClick(){
        const element = document.getElementById("searchBar");
        if(element){
            if (element.style.display === "none") {
                element.style.display = "block";
                element.focus();
            } else {
                element.style.display = "none";
            }
        }
    }
}