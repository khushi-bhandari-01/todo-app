let h3=document.querySelector("h3");
let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";

    let delbtn=document.createElement("button");
    delbtn.classList.add("delete");
    delbtn.innerText="Delete";
    item.appendChild(delbtn);
})
ul.addEventListener("click",()=>{
    if(event.target.nodeName=="BUTTON"){
        let par = event.target.parentElement;
        // console.log(par);
        par.remove();
        console.log("deleted");

    }
})