class BounceBall {
  ctx: CanvasRenderingContext2D;
  stageWidth: number;
  stageHeight: number;
  radius: number;
  dx: number;
  dy: number;
  color: string;
  x: number;
  y: number;
  constructor(
    ctx: CanvasRenderingContext2D,
    stageWidth: number,
    stageHeight: number,
    radius: number,
    speed: number,
    color: string
  ) {
    this.radius = radius;
    this.dy = speed;
    this.dx = speed;
    this.color = color;
    this.ctx = ctx;
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    const diameter = this.radius * 2;

    this.x = diameter + (Math.random() * this.stageWidth - diameter);
    this.y = diameter + (Math.random() * this.stageHeight - diameter);
  }

  draw() {
    this.x += this.dx;
    this.y += this.dy;

    this.checkBoundary();

    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
  }

  checkBoundary() {
    const minX = this.radius;
    const maxX = this.stageWidth - this.radius;
    const minY = this.radius;
    const maxY = this.stageHeight - this.radius;

    if (this.x <= minX || this.x >= maxX) {
      this.dx *= -1;
      this.x += this.dx;
    }

    if (this.y <= minY || this.y >= maxY) {
      this.dy *= -1;
      this.y += this.dy;
    }
  }
}

export default BounceBall;
