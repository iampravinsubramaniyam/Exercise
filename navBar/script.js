
document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        initApp();
    }
});

const initApp = ()=>{
    const showBar = document.querySelector(".showBar");
    
    showBar.addEventListener("click",()=>{
        const hideMenu = document.querySelector(".showBarArea");
        const nav = document.querySelector(".navBar");
        if(nav.style.left === "-100vh"){
            nav.style.left = "0vh";
            hideMenu.style.boxShadow = "1px 2px 5px lightgray";
        }else{
            nav.style.left = "-100vh";
            hideMenu.style.boxShadow = "1px 2px 5px white";
        }
    })
}