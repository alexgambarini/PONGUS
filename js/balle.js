import p5 from "p5";
// import p5 from "p5";

export class Balle {
  constructor(user, x, y, radius, xDirection, yDirection, vitesse) {
    this.user = user;
    this.xMouv = x;
    this.yMouv = y;
    this.radius = radius;
    this.xVelocity = xDirection * vitesse;
    this.yVelocity = yDirection * vitesse;
    this.p5 = new p5();
  }

  setup(startDirection) {
    this.xMouv = this.xStart;
    this.yMouv = this.yStart;
  }

  draw() {
    fill(150);
    ellipse(this.xMouv, this.yMouv, this.radius * 2);
  }

  update() {
    this.xMouv += this.xVelocity;
    this.yMouv += this.yVelocity;
 
    if (
      this.yMouv - this.radius < 0 ||
      this.yMouv + this.radius > this.p5.windowHeight
    ) {
      this.yVelocity *= -1;
    }

    if (
      this.xMouv - this.radius < 0 ||
      this.xMouv + this.radius > this.p5.windowWidth
    ) {
      this.xVelocity *= -1;
    }
  }
}
