let inp=document.querySelector("input");
let add=document.querySelector("#add");
let ulist=document.querySelector("#ulist");

 
add.addEventListener("click", function(){

    let item=document.createElement("li");
    let del=document.createElement("button"); 
    del.innerText= "delete";
    item.innerText=inp.value;
    ulist.appendChild(item);
    inp.value="";
    item.appendChild(del);
    item.classList.add("listClass");
    // item.innerHTML=padding 10px;


});
ulist.addEventListener("click",function(event){ //using event delegation
    if(event.target.nodeName==="BUTTON"){
        event.target.parentElement.remove();
    }

})
