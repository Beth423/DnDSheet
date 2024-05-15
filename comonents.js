function nav(){
    let a = document.createElement("a");
    a.innerText=("text");
    // a.innerHTML("src","#");
    console.log(a);
    creatForm();
}
function creatForm(){
    console.log("add form");
   let form= document.createElement("form");
    formText("number","int","int");
    append(form);

}
function formText(name){
    let text= document.createElement("imput");
    text.setAttribute("value",name)
    
};
function append (x){
    main.appendChild(x);
}
function appendInside(x,y){
    x.appendChild(y);
}