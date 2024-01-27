document.querySelector(".head").onclick = function(){
    document.querySelector(".head").style.display = "none";
}
document.querySelector(".btn-toggle").onclick = function(){
    let myDiv = document.querySelector(".bar-toggle");
    myDiv.style.display = "flex"
}
document.querySelector(".btn-close").onclick = function(){
    let closeBtn = document.querySelector(".bar-toggle");
    closeBtn.style.display = "none";
}