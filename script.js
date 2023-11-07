var lboxes = document.querySelectorAll(".box")
var loader = document.querySelector(".loader")
setTimeout(()=>{
    lboxes[0].style.height = "0px"
},12800);
setTimeout(()=>{
    lboxes[1].style.height = "0px"
},14000);
setTimeout(()=>{
    lboxes[3].style.height = "0px"
},14500);
setTimeout(()=>{
    lboxes[4].style.height = "0px"
},12500);
setTimeout(()=>{
    lboxes[2].style.height = "20px";
    lboxes[2].style.width = "20px";
    lboxes[2].style.animation = "none"    
},15000);

setTimeout(()=>{
    lboxes[2].style.height = "2px";
    lboxes[2].style.width = "20px";
       
},15500);
setTimeout(()=>{
    lboxes[2].style.height = "2px";
    lboxes[2].style.width = "300px";
       
},16000);
setTimeout(()=>{
    lboxes[2].style.transform = `rotateZ(180deg)`;       
},16500);
setTimeout(()=>{
    lboxes[2].style.width = "100vw";       
    lboxes[2].style.background = `black`;       
},17000);
setTimeout(()=>{
    lboxes[2].style.height = "90vh";             
},17500);
setTimeout(()=>{
    window.location.href = 'welcome.html'             
},18000);