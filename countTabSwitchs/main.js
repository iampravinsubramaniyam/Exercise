

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        initApp();
    }
})


const initApp = () =>{
    var cnt = 0;
    window.addEventListener("blur",()=>{
        ++cnt;
        const count = document.querySelector(".tabSwitch");
        count.textContent = `Tab Switched Count : ${cnt}`;
    })
}