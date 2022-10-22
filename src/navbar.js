import Menu from "./menu"
import About from "./about"

const createElementFromHTML = function(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

const Nav = (function(){
    const create = function(){
        document.querySelector(".header").appendChild(createElementFromHTML(`
            <div class="navbar-container">
            <ul class="nav">
                <li>menu</li>
                <li>about us</li> 
                <li>order</li>
            </ul>
            </div>
            `));

        document.querySelector(".nav > li:nth-child(1)").addEventListener("click", ()=>{
            Menu.create(); 
        })
        document.querySelector(".nav > li:nth-child(2)").addEventListener("click", ()=>{
            About.create(); 
        })
        }
    return{
        create
    }
})();

export default Nav;