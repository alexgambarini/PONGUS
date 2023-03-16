import p5 from "p5";
import { Balle } from "./balle.js";

let barreHeight = window.innerHeight / 10;
let barreWidth = 10;
let barreX = 20;
let barreY = window.innerHeight / 2 - barreHeight / 2;
let bouleRadius = 7;
let xDirectionBalle = 1;
let yDirectionBalle = 2;
let vitesseBalle = 2;

const boule = new Balle(
  "user1",
  window.innerWidth / 2 - bouleRadius / 2,
  window.innerHeight / 2 - bouleRadius / 2,
  bouleRadius,
  p5.prototype.random([-1, 1]), // aléatoire entre -1 et 1
  p5.prototype.random([-1, 1]), // aléatoire entre -1 et 1
  vitesseBalle
);
export class Barres {
  constructor(user, width, height, x, y, velocite) {
    this.user = user;
    this.width = width;
    this.height = height;
    this.xBarres = x;
    this.yBarres = y;
    this.velocityOfBarres = velocite;
  }
  draw() {
    boule.update();
    boule.draw();

    if (
      //Collision avec les barres
      boule.xMouv + boule.radius > this.xBarres &&
      boule.xMouv - boule.radius < this.xBarres + this.width &&
      boule.yMouv + boule.radius > this.yBarres &&
      boule.yMouv - boule.radius < this.yBarres + this.height
    ) {
      boule.xVelocity *= -1;
    }
    //Collision avec les murs
    if (boule.xMouv + boule.radius > window.innerWidth) {
      // boule.xVelocity *= -1;
      boule.xMouv = window.innerWidth / 2 - boule.radius / 2;
      boule.yMouv = window.innerHeight / 2 - boule.radius / 2;
      console.log("out a droite");
    }
    if (boule.xMouv - boule.radius < 0) {
      // boule.xVelocity *= -1;
      boule.xMouv = window.innerWidth / 2 - boule.radius / 2;
      boule.yMouv = window.innerHeight / 2 - boule.radius / 2;
      console.log("out a gauche");
    }

    if (this.user == "user1") {
      if (keyIsDown(87)) {
        if (this.yBarres <= 0) {
          this.yBarres = 0;
        } else {
          this.yBarres -= this.velocityOfBarres;
        }
      }
      if (keyIsDown(83)) {
        if (this.yBarres > window.innerHeight - this.height) {
          this.yBarres = window.innerHeight - this.height;
        } else {
          this.yBarres += this.velocityOfBarres;
        }
      }

      fill(200);
      noStroke();
      // strokeWeight(2)
      rect(this.xBarres, this.yBarres, this.width, this.height);
    }
    if (this.user == "user2") {
      if (keyIsDown(38)) {
        if (this.yBarres <= 0) {
          this.yBarres = 0;
        } else {
          this.yBarres -= this.velocityOfBarres;
        }
      }
      if (keyIsDown(40)) {
        if (this.yBarres > window.innerHeight - this.height) {
          this.yBarres = window.innerHeight - this.height;
        } else {
          this.yBarres += this.velocityOfBarres;
        }
      }

      fill(200);
      noStroke();
      rect(this.xBarres, this.yBarres, this.width, this.height);
      // console.log(this.yBarres)

      return this.yBarres;
    }
  }
}
