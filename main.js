let main = document.getElementById("main");
main.addEventListener('load',onload());
let page ="home";

function onload(){
    console.log("here on load");
    creatForm();
}
//todo  switch case based on the page varrun functions acordingly