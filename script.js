const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


inputBox.addEventListener('keydown', function (event){
  if(event.key === 'Enter'){
  if(inputBox.value.trim() !== ""){
    let li = document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML ="\u00d7";
    li.appendChild(span);
  }
  else{
    alert("Oops! can't create an empty task")
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
  'linear-gradient(to right, #ad5389, #3c1053)',
  'linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9)', 
  'linear-gradient(to right, #cc2b5e, #753a88)', 
  'linear-gradient(to right, #da22ff, #9733ee)', 
  'linear-gradient(to right, #e55d87, #5fc3e4)',
  'linear-gradient(to right, #1d2b64, #f8cdda)',
  'linear-gradient(to right, #dc2424, #4a569d)',
  'linear-gradient(to right, #c04848, #480048)',
  'linear-gradient(to right, #f0c27b, #4b1248)',
  'linear-gradient(to right, #556270, #ff6b6b)',
  'linear-gradient(to right, #ff0084, #33001b)',
  'linear-gradient(to right, #7b4397, #dc2430)',
  'linear-gradient(to right, #1d4350, #a43931)',
  'linear-gradient(to right, #3a6186, #89253e)',
  'linear-gradient(to right, #23074d, #cc5333)',
  'linear-gradient(to right, #c94b4b, #4b134f)',
  'linear-gradient(to right, #333333, #dd1818)',
  'linear-gradient(to right, #ad5389, #3c1053)',
  'linear-gradient(to right, #da4453, #89216b)',
  'linear-gradient(to right, #c31432, #240b36)',
];

function applyRandomGradient() {
  const randomIndex = Math.floor(Math.random() * gradients.length);
  document.body.style.background = gradients[randomIndex];
}
applyRandomGradient();
