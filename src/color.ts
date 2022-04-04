// 스타일과 색상 적용하기

export class ColorMap1 {
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    console.log("color map");
  }

  draw() {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.ctx.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(
          255 - 42.5 * j
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
