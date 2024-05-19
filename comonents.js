function nav(){
    let a = document.createElement("a");
    a.innerText=("text");
    a.innerHTML("src","#");
    console.log(a);
}
function creatForm(){
   let form= document.createElement("form");
   form.setAttribute("action","home");
    append(form);
    formImput("number","str",0);
    //TODO than exsport the form var to the other function to sind it to 
    function formImput(type,name,value){
        let text= document.createElement("input");
        text.setAttribute("type",type);
        text.setAttribute("name",name);
        text.setAttribute("value",value);
        form.appendChild(text)
    };
}

function append (x){
    main.appendChild(x);
}
function appendInside(x,y){
    x.appendChild(y);
}