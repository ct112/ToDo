const inputNodeList = document.querySelectorAll("input");
inputNodeList[1].addEventListener('click',()=>{
    const userInput = inputNodeList[0].value;
    inputNodeList[0].value = "";
    const ul = document.getElementById("ul");
    let li = document.createElement("li");
    li.textContent = userInput;
    li.classList.add("li","completed");
    li.classList.toggle("completed");
    li.addEventListener("click", ()=>{
        li.classList.toggle("completed");
    })
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("value", "delete");
    deleteButton.setAttribute("style", "height:14px");
    deleteButton.addEventListener("click", event =>{
        const target = event.target;
        const parentNode = target.parentNode;
        parentNode.remove();
    })
    li.appendChild(deleteButton);
    ul.appendChild(li);
})