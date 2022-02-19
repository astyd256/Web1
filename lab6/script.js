var btn1 = document.getElementById("btn1"); 
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var cat_container = document.getElementsByClassName("cat_img_container");
var dog_container = document.getElementsByClassName("dog_img_container");
var cat = document.getElementById("cat");
var dog = document.getElementById("dog");

btn1.onclick = function(){
    cat_container[0].style.width = "94%";
    dog_container[0].style.marginLeft = "94%";
    cat.style.visibility = "visible";
    dog.style.visibility = "hidden";
    cat.style.width = "70%";
}
btn2.onclick = function(){
    cat_container[0].style.width = "50%";
    dog_container[0].style.marginLeft = "50%";
    cat.style.width = "93%";
    dog.style.width = "93%";
    cat.style.visibility = "visible";
    dog.style.visibility = "visible";
}
btn3.onclick = function(){
    cat_container[0].style.width = "6%";
    dog_container[0].style.marginLeft = "6%";
    cat.style.visibility = "hidden";
    dog.style.visibility = "visible";
    dog.style.width = "70%";
}
