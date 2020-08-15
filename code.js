const inputNodeList = document.querySelectorAll("input");
inputNodeList[1].addEventListener('click',()=>{
    const userInput = inputNodeList[0].value;
    inputNodeList[0].value = ""
    const ul = document.getElementById("ul");
    let li = document.createElement("li");
    li.textContent = userInput;
    li.classList.add("li","completed");
    li.classList.toggle("completed");
    li.addEventListener("click", ()=>{
        li.classList.toggle("completed");
    })
    let delete_button = document.createElement("button");
    delete_button.setAttribute("value", "delete");
    delete_button.setAttribute("style", "height:14px");
    delete_button.addEventListener("click", event =>{
        const target = event.target;
        const parentNode = target.parentNode;
        parentNode.remove();
    })
    li.appendChild(delete_button);
    ul.appendChild(li);
})