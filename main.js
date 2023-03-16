import './style.css'
import p5 from 'p5'
import * as barres from './js/rectangles.js'
// import * as balle from './js/balle'
let barreHeight = window.innerHeight/5;
let barreWidth = 10;
let barreX = 20;
let barreY = window.innerHeight/2-barreHeight/2;
// let bouleRadius = 5;
// let xDirectionBalle = 1
// let yDirectionBalle = 2
// let vitesseBalle = 2

const player1 = new barres.Barres("user1", barreWidth,barreHeight,barreX,barreY,7);
const player2 = new barres.Barres("user2", barreWidth,barreHeight,window.innerWidth-barreX,barreY,7);
// const boule = new balle.Balle("user1", window.innerWidth/2-bouleRadius/2,window.innerHeight/2-bouleRadius/2,bouleRadius, xDirectionBalle,yDirectionBalle, vitesseBalle);


function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  console.log("work");
  // boule.setup(1)
}

function draw(){
  background(225);
  player1.draw();
  player2.draw();
  // boule.update();
  // boule.draw();
}

window.draw = draw;
window.setup = setup;
