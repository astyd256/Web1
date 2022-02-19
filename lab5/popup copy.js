var btn = document.getElementsByClassName("button"); 

btn1.onclick = function(){
    popup1.style.display = "flex";    
}
btn2.onclick = function(){
    popup2.style.display = "flex";    
}
btn3.onclick = function(){
    popup3.style.display = "flex";    
}
window.onclick = function(event) {
    if (event.target == popup1) {
        popup1.style.display = "none";
    }
    else if (event.target == popup2) {
        popup2.style.display = "none";
    }
    else if (event.target == popup3) {
        popup3.style.display = "none";
    }
}