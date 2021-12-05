"use strict";

const modal = document.querySelector(".modal");
const bgDark = document.getElementById("darktheme");
const copyBtn = document.getElementById("copyBtn");

function modalFunc(){
    modal.classList.toggle("show");
    setTimeout(function(){
        bgDark.classList.toggle("active");
    },200);
}
function closeModal(){
    modal.classList.toggle("show");
    setTimeout(function(){
        bgDark.classList.toggle("active");
    },150);
}
function copyLink(){
    copyBtn.innerText = "copied";
    setTimeout(function(){
        copyBtn.innerText = "copy";
    } , 2500);
}