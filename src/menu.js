const createElementFromHTML = function(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

const Menu = (function(){
    const create = function(){
        document.querySelector(".content").appendChild(createElementFromHTML(`
        <div class="menu-container">
        <div class="menu-wrapper">
            <div class="profile-pic"></div>
            <h1>Trattoria Trussardi</h1>
            <ul class="menu-items">
                <div class="menu-headers">
                    <div class="menu-icon"></div>
                    <h1>Appetizers</h1>
                </div>
                <li>
                    <div class="item-name"><p>The Cure to Cancer</p></div>
                    <div class="dots"></div>
                    <div class="price">$25.00</div>
                    <div class="description">Tired of having cancer? No more.</div>
                </li>

                <li>
                    <div class="item-name"><p>Paralysis No More</p></div>
                    <div class="dots"></div>
                    <div class="price">$15.00</div>
                    <div class="description">Why don't you, get up and walk for me.</div>
                </li>

                <li>
                    <div class="item-name"><p>Eyesight</p></div>
                    <div class="dots"></div>
                    <div class="price">$15.00</div>
                    <div class="description">Do you wanna see bro? I got you.</div>
                </li>
            </ul>
        </div>
    </div>
        `));
    }
    const remove = function(){
        document.querySelector(".menu-container").remove();
    }
    return {
        create, 
        remove
    }
})();

export default Menu;