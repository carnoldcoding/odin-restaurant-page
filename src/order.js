const createElementFromHTML = function(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

const Order = (function(){
    const create = function(){
        const content = document.querySelector(".content");
        content.textContent = "";
        content.appendChild(createElementFromHTML(`
        <div class="order-container">
            <h1>Order</h1> 
        </div>
        `))
    }
    return {
        create
    }
})();

export default Order;