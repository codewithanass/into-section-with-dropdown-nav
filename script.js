const nav = document.getElementById("nav-toggle");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const dropBtn = document.getElementById("dropBtn");
const dropNav = document.getElementById("dropNav");
const dropBtn1 = document.getElementById("dropBtn1");
const dropNav1 = document.getElementById("dropNav1");
const mobDropBtn = document.getElementById("mobDropBtn");
const mobDropNav = document.getElementById("mobDropNav");
const mobDropBtn1 = document.getElementById("mobDropBtn1");
const mobDropNav1 = document.getElementById("mobDropNav1");
const icon = document.getElementById("icon");

openBtn.addEventListener('click', ()=>{
    nav.classList.toggle("hidden");
});

closeBtn.addEventListener('click', ()=>{
    nav.classList.toggle("hidden");
})

dropBtn.addEventListener('click', ()=>{
    dropNav.classList.toggle("show");
})

dropBtn1.addEventListener('click', ()=>{
    dropNav1.classList.toggle("show");
})

mobDropBtn.addEventListener('click', ()=>{
    mobDropNav.classList.toggle("show");
})

mobDropBtn1.addEventListener('click', ()=>{
    mobDropNav1.classList.toggle("show");
})



