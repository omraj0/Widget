const userInput = document.getElementById("user-input");
const listContent = document.getElementById("list-content");

function addTask(){
    if(userInput.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = userInput.value;
        listContent.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span);
    }
    userInput.value = "";
    saveData()
}

listContent.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContent.innerHTML);
}
function showTask(){
    listContent.innerHTML = localStorage.getItem("data");
}
showTask();