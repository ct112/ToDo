function createListItems(textField){
    const userInput = textField.value;
    textField.value = "";
    let ul = document.getElementById("ul");
    let li = document.createElement("li");
    li.textContent = userInput;
    li.classList.add("li","completed");
    li.classList.toggle("completed");
    li.addEventListener("click", ()=>{
        li.classList.toggle("completed");
    })
    addDeleteButton(ul,li);
}
function addDeleteButton(ul,li) {
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("value", "delete");
    deleteButton.setAttribute("style", "height:14px");
    li.appendChild(deleteButton);
    ul.appendChild(li);
    deleteButton.addEventListener("click", event => {
        let target = event.target;
        let parentNode = target.parentNode;
        parentNode.remove();
    });
}
function attachEventListener() {
    const inputNodeList = document.querySelectorAll("input");
    inputNodeList[1].addEventListener('click', event => {
        createListItems(inputNodeList[0]);
    })
}
window.onload= init;

function init(){
    attachEventListener();
}















