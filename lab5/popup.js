var btn = document.getElementsByClassName("button"); 

window.onclick = function(event) {
    if (event.target.classList.contains("popup")) event.target.style.display = "none";
}

function openpopup(news_nmb) {
    document.getElementById( "popup" + news_nmb).style.display = "flex";
}