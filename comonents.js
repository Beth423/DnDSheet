function nav(){
    let a = document.createElement("a");
    a.innerText=("text");
    a.innerHTML("src","#");
    console.log(a);
}
function creatForm(){
    let sideBar = document.createElement("dive")
    sideBar.setAttribute("id",sideBar)
    
   let form= document.createElement("form");
   let stats=["str","int","con","dex","wiz"]
   form.setAttribute("action","form.php");
    append(form);
    console.log("creat form");
    // formImput("number","str",0);
    //TODO than exsport the form var to the other function to sind it to 
    for(let i=0 ;i<=4;i++){
        // console.log(stats[i])
        let label = document.createElement("lable");
        //testing label in the consale first befor sinding to dom 
        label.setAttribute("class","label");
        label.innerText=(stats[i]);
        // using rado button 
        //? look up whether a function var can be sent back to the calling function
        //todo append all at once on one line 
        let rado= document.createElement("input");
        rado.setAttribute("type","radio");
        rado.setAttribute("name",stats[i]);
        console.log(rado)
        let text= document.createElement("input");
        text.setAttribute("type","number");
        text.setAttribute("name",stats[i]);
        text.setAttribute("placeHolder",0 );
        text.setAttribute("class","numberImput");
        form.appendChild(label);
        form.appendChild(rado);
        form.appendChild(text);
    };
}
// function formImput(type,name,value){
//     let text= document.createElement("input");
//     text.setAttribute("type",type);
//     text.setAttribute("name",name);
//     text.setAttribute("value",value);
//     form.appendChild(text)
//     console.log(form)
// };

function append (x){
    main.appendChild(x);
}
function appendInside(x,y){
    x.appendChild(y);
}
