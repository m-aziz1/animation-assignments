//Sunrise Drawing

//Setup canvas & graphics context
let cnv = document.getElementById("sunrise-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//HTML ELements
let cloudImg = document.getElementById("cloud-img");
let resetBtn = document.getElementById("rst-btn");

//Event Listeners
resetBtn.addEventListener("click", reset);

//Global Variables
let xLeft = 125;
let xRight = 165;
let ySun = 300;
let sunRadius = 20;
let sunGreen = 0;

requestAnimationFrame(animate);

function animate() {
  //Sky
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 400, 300);

  //Cloud Left
  xLeft--;
  ctx.drawImage(cloudImg, xLeft, 100);
  //Cloud Right
  xRight++;
  ctx.drawImage(cloudImg, xRight, 80);

  //Sun
  if (sunGreen <= 255) {
    ySun -= 0.8;
    sunRadius += 0.16;
    sunGreen++;
  }
  ctx.fillStyle = "rgb(255," + sunGreen + ",0)";
  ctx.beginPath();
  ctx.arc(200, ySun, sunRadius, 0, 2 * Math.PI);
  ctx.fill();

  //Ground
  ctx.fillStyle = "green";
  ctx.fillRect(0, 300, 400, 100);

  requestAnimationFrame(animate);
}

function reset() {
  xLeft = 125;
  xRight = 165;
  ySun = 300;
  sunRadius = 20;
  sunGreen = 0;
}