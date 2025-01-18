const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


inputBox.addEventListener('keydown', function (event){
  if(event.key === 'Enter'){
  if(inputBox == ""){
    alert("Oops! can't create a empty task")
  }
  else{
    let li = document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML ="\u00d7";
    li.appendChild(span);
  }
  inputBox.value="";
  saveData();
}
});

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

const gradients = [
  'linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9)',
  'linear-gradient(to right, #ff7e5f, #feb47b)', 
  'linear-gradient(to right, #6a11cb, #2575fc)', 
  'linear-gradient(to right, #ff9a8b, #ff6a00, #d77dff)', 
  'linear-gradient(to right, #00c6ff, #0072ff)', 
];

function applyRandomGradient() {
  const randomIndex = Math.floor(Math.random() * gradients.length);
  document.body.style.background = gradients[randomIndex];
}

applyRandomGradient();
