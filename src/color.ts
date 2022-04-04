// 스타일과 색상 적용하기

export class ColorMap1 {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
  }

  draw() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.ctx.fillStyle = `rgb(${Math.floor(255 - 32.5 * i)}, ${Math.floor(
          255 - 32.5 * j
        )}, 0)`;
        this.ctx.fillRect(
          i * this.width,
          j * this.height,
          this.width,
          this.height
        );
      }
    }
  }
}

export class ColorMap2 {
  ctx: CanvasRenderingContext2D;
  radius: number;
  constructor(ctx: CanvasRenderingContext2D, radius: number) {
    this.ctx = ctx;
    this.radius = radius;
  }

  draw() {
    console.log("color map");
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        this.ctx.strokeStyle = `rgb(0, ${Math.floor(
          255 - 32.5 * i
        )}, ${Math.floor(255 - 32.5 * j)})`;

        this.ctx.beginPath();
        this.ctx.arc(25 + j * 50, 25 + i * 50, this.radius, 0, Math.PI * 2);
        this.ctx.stroke();
      }
    }
  }
}
