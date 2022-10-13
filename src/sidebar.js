const sidebar = function(){
    const sidebarOpener = document.querySelector(".nav-open");
    const sidebarCloser = document.querySelector(".nav-close");
    const sidebar = document.querySelector(".sidebar");
    sidebarOpener.addEventListener("click", ()=>{
        sidebar.classList.toggle("hidden");
    })
    sidebarCloser.addEventListener("click", ()=>{
        sidebar.classList.toggle("hidden");
    })
}

export default sidebar;