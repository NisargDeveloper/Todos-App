let input = document.getElementById("input");
let list = document.getElementById("list");
let form = document.getElementById("form");
let clear = document.getElementById("clear");
let para = document.getElementById("paragraph");
let taskCounter = document.getElementsByClassName("taskCounter");
let paraCounter = list.getElementsByClassName("taskCounter");
let counter = 0;
let removeTodo = document.getElementById("deleteTodo");

console.log(para);
console.log(list);
function getList(e) {
  e.preventDefault();
  counter++;
  if(input.value === "") {
    return;
  }else {
    let items = document.createElement("li");
    items.classList.add('items', 'taskCounter'); 
    
    items.id = "items";
    
    items.addEventListener("click", ()=> {
    console.log("The item is", items);
    items.classList.toggle("completed");
    items.classList.toggle("taskCounter");
    para.innerText = "Total" + " "+ paraCounter.length + " " + " pending Tasks are remaining"; 

  })

    items.innerHTML = input.value + `<ion-icon name="trash-outline"></ion-icon>`;
    list.appendChild(items);
    console.log("ParaCounter is", paraCounter.length);
    para.innerText = "Total" + " "+ paraCounter.length + " " + "pending Tasks are remaining"; 
    input.value = "";

    let paragraphCreation = document.createElement("p");
    paragraphCreation.id = "deleteTodo";
    items.appendChild(paragraphCreation); 
    paragraphCreation.addEventListener(("click"), () => {
     items.className = "trashTodo";
    document.querySelector(".trashTodo").remove();
    })
    console.log(paragraphCreation);
  }
}

form.addEventListener("submit" , getList);

clear.addEventListener(("click"), () => {
  for(let i=0; i< counter ; i++){
    let clearItems = document.getElementById("items");
    console.log(clearItems);
    clearItems.remove();
    para.innerText = "Total" + " "+ paraCounter.length + " " + " pending Tasks are remaining";

  }
  })

function deleteItems(e) {
  items.addEventListener(('click'), ()=> {
    console.log(items);
  })
}





