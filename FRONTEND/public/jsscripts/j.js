setTimeout(function() {
    const delayedText = document.querySelector('.text');
    delayedText.classList.add('appear');
  }, 1500); // 1000 milliseconds = 1 second
  

  setTimeout(function() {
    const delayedText = document.querySelector('.nav h5');
    delayedText.classList.add('appear');
  }, 1000); // 1000 milliseconds = 1 second


  setTimeout(function() {
    const delayedText = document.querySelector('.nav img');
    delayedText.classList.add('appear');
  }, 1000);

var main=document.querySelector(".main");
var c = document.querySelector("#cursor");

main.addEventListener("mousemove", function(event) {
    c.style.left = event.x + "px";
    c.style.top = event.y + "px";
});
var sc=document.querySelector(".secondsection");
var c=document.querySelector("#cursor");

sc.addEventListener("mousemove",function(dets){
    c.style.left=dets.x+"px";
    c.style.top=dets.y+"px";
})

var contact=document.querySelector(".contact");
var c=document.querySelector("#cursor");

contact.addEventListener("mousemove",function(dets){
    c.style.left=dets.x+"px";
    c.style.top=dets.y+"px";
})
var sales=document.querySelector(".sales");
var c=document.querySelector("#cursor");

sales.addEventListener("mousemove",function(dets){
    c.style.left=dets.x+"px";
    c.style.top=dets.y+"px";
})




