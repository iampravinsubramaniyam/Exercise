

document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        initApp();
    }
})

const initApp = async()=>{
    const btn = document.querySelector("#btn");

    btn.addEventListener("click",(event)=>{
        getJoke();
    })

    const div = document.createElement("div");
    const main = document.querySelector("main");
    div.style.height = "100px";
    div.style.minWidth = "300px";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.textAlign = "justify-content";
    div.style.letterSpacing = "1px";
    main.append(div);
}
var index = -1;

const toggleColor = (num)=>{
    ++index;
    if(index >= num){
        index = index%num;
    }

    return index;
}

const printJoke = ({joke}) => {
    const body = document.querySelector("body");
    const colors = ["lightpink","lightskyblue","lightseagreen","lightsalmon","lightcoral","lightgreen"];
    const div = document.querySelector("main div");
    div.textContent = joke;    
    body.style.backgroundColor = colors[toggleColor(colors.length)];
}

const getJoke = async()=>{
    const joke = await fetch("https://icanhazdadjoke.com/",{
    method: "GET",
    headers:{
        Accept: "application/json"
    }
    })
    const jokeData = await joke.json();
    return printJoke(jokeData);
}


