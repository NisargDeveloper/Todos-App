let input = document.getElementById("input");
let list = document.getElementById("list");
let form = document.getElementById("form");

console.log(list);
function getList(e) {
  e.preventDefault();
  let items = document.createElement("li");
  items.classList = "items";
  items.addEventListener("click", ()=> {
    items.classList.toggle("completed");
  })
  items.innerText = input.value;
  list.appendChild(items);
  input.value = "";  
}

form.addEventListener("submit" , getList);


