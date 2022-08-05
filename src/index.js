document.addEventListener("DOMContentLoaded", () => {
  // your code here
 const form = document.querySelector("form");
 form.addEventListener("submit", (e) =>{
   e.preventDefault()
   let task = e.target["new-task-description"].value;
   handletodos(task);
   form.reset;
 })

});


function handletodos(element){

  const li = document.createElement("li");
  li.textContent = `${element} `;
  let btn = document.createElement("button");
  btn.textContent = "x";
  li.appendChild(btn);
  btn.addEventListener("click", (e)=> deleteButton(e))
  document.querySelector("#tasks").appendChild(li)

}

function deleteButton(event){
  event.target.parentNode.remove()
}
