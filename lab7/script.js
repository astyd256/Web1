var input = document.getElementById("input");
var selected = false; 
document.getElementById("square_btn").onclick = function(){
    for (var i = 0; i < document.getElementById("input").value; i++){
        
        var newshape = document.createElement("div");
        newshape.style.backgroundColor = "red";

        var size = Math.floor(Math.random()*200);
        var x = Math.floor(Math.random()*500);
        var y = Math.floor(Math.random()*200 + 70);

        newshape.style.width = size + "px";
        newshape.style.height = size + "px";
        newshape.style.border = "solid 1px black";
        newshape.style.opacity = 0.9;
        newshape.style.position = "fixed";
        newshape.style.top = size + y + "px";
        newshape.style.left = size + x + "px";
        newshape.style.bottom = 0 + "px";
        newshape.className = "shape";
        newshape.id = "square"

        document.body.appendChild(newshape);
    }
}
document.getElementById("triangle_btn").onclick = function(){
    for (var i = 0; i < document.getElementById("input").value; i++){

        var newshape = document.createElement("div");

        var size = Math.floor(Math.random()*200);
        var x = Math.floor(Math.random()*500);
        var y = Math.floor(Math.random()*50 + 70);

        newshape.style.opacity = 0.9;
        newshape.style.position = "fixed";
        newshape.style.top = size + y + "px";
        newshape.style.left = size + x + "px";
        newshape.style.border = size.toString() + "px transparent solid"; 
        newshape.style.borderBottom = size.toString() + "px solid blue";
        newshape.className = "shape";
        newshape.id = "triangle";
        
        document.body.appendChild(newshape);
    }
}
document.getElementById("circle_btn").onclick = function(){
    for (var i = 0; i < document.getElementById("input").value; i++){
        
        var newshape = document.createElement("div");
        newshape.style.backgroundColor = "green";

        var size = Math.floor(Math.random()*200);
        var x = Math.floor(Math.random()*500);
        var y = Math.floor(Math.random()*200 + 70);

        newshape.style.width = size + "px";
        newshape.style.height = size + "px";
        newshape.style.border = "solid 1px black";
        newshape.style.opacity = 0.9;
        newshape.style.position = "fixed";
        newshape.style.top = size + y + "px";
        newshape.style.left = size + x + "px";
        newshape.style.bottom = 0 + "px";
        newshape.style.borderRadius = "50%";
        newshape.className = "shape";
        newshape.id = "circle";

        document.body.appendChild(newshape);
    }
}

window.onclick = function(event) {
    if (event.target.id == "triangle") 
        event.target.style.borderBottomColor = "yellow";
    else if (event.target.className == "shape") {
        event.target.style.backgroundColor = "yellow";    
    }

    if (event.target.className == "shape" && selected != event.target) {
        if (selected.id == "triangle"){
            selected.style.borderBottomColor = "blue";
            selected = event.target;
        }    
        else if (selected.id == "square"){
            selected.style.backgroundColor = "red";
            selected = event.target;
        }
        else if  (selected.id == "circle"){
            selected.style.backgroundColor = "green";
            selected = event.target;
        }
        else if (!selected) selected = event.target;
    }
        
}

window.ondblclick = function(event){
    if (event.target == selected) {
        event.target.remove();
    }   
}