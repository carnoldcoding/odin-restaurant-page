const createElementFromHTML = function(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

const About = (function(){
    const create = function(){
        const content = document.querySelector(".content");
        content.textContent = "";
        content.appendChild(createElementFromHTML(`
        <div class="about-container">
            <h1>About Us</h1>
            <p>The Trattoria Trussardi prides itself in exquisite dishes custom tailored to the customer.</p>
            <p>It is a guarantee that you will not leave this restaurant in the same condition which you arrived.</p>
            <p>Below is our address, in order to search through our menu click the "menu" tab above.</p>
            <div class="address">
            <br/>
                <p>Trattoria Trussardi</p>
                <p>34 Orion St.</p>
                <p>Morioh</p>
                <p>United States</p>
            </div>
        </div>
        `))
    }
    return {
        create
    }
})();

export default About;