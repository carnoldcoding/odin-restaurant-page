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
        }
    const remove = function(){
        document.querySelector(".navbar-container").remove();
    }
    return{
        create,
        remove
    }
})();

export default Nav;