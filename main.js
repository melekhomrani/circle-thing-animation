let svgCircle = document.getElementById("svgcircle");
let step1 = document.getElementById("step-1");
let step2 = document.getElementById("step-2");
let step3 = document.getElementById("step-3");
let step4 = document.getElementById("step-4");
let step5 = document.getElementById("step-5");
let main = document.getElementById("main");
let userbox = document.getElementById("userbox");

main.style.backgroundImage =
  "url(https://images7.alphacoders.com/475/thumb-1920-475264.jpg)";

step1.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "1004";
  main.style.backgroundImage =
    "url(https://i.pinimg.com/originals/40/45/df/4045df65d93fe6b4d19d274e8c4cc433.png)";
  userbox.style.top = "-350px";
});

step2.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "753";
  main.style.backgroundImage =
    "url(https://images6.alphacoders.com/385/thumb-1920-385616.jpg)";
  userbox.style.top = "-800px";
});

step3.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "502";
  main.style.backgroundImage =
    "url(https://images2.alphacoders.com/107/thumb-1920-1074600.jpg)";
  userbox.style.top = "-1250px";
});

step4.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "251";
  main.style.backgroundImage =
    "url(https://fictionhorizon.com/wp-content/uploads/2021/05/valar-morghulis-1.jpg)";
  userbox.style.top = "-1700px";
});

step5.addEventListener("click", () => {
  svgCircle.style.strokeDashoffset = "0";
  main.style.backgroundImage =
    "url(https://images7.alphacoders.com/475/thumb-1920-475264.jpg)";
  userbox.style.top = "100px";
});
