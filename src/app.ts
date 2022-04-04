import { ColorMap1, ColorMap2 } from "./color.js";

class App {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;
  pixelRatio: number;
  stageWidth: number;
  stageHeight: number;
  //   colorMap1: ColorMap1;
  colorMap2: ColorMap2;
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.stageWidth = 0;
    this.stageHeight = 0;

    document.body.appendChild(this.canvas);

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    // this.colorMap1 = new ColorMap1(this.ctx!, 50, 50);
    // this.colorMap1.draw();

    this.colorMap2 = new ColorMap2(this.ctx!, 20);
    this.colorMap2.draw();
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;

    this.ctx?.scale(this.pixelRatio, this.pixelRatio);
  }
}

window.onload = () => {
  new App();
};
