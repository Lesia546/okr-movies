function changeText(){
    document.getElementById("text").innerHTML = "Текст змінено через JS!";
}

function addItem(){
    let li = document.createElement("li");
    li.textContent = "Новий фільм";
    document.querySelector("ul").append(li);
}

function removeItem(){
    let first = document.querySelector("li");
    if(first){
        first.remove();
    }
}