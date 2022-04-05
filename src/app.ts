import { ColorMap1, ColorMap2 } from "./color.js";
import BounceBall from "./BounceBall.js";
class App {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;
  pixelRatio: number;
  stageWidth: number;
  stageHeight: number;
  //   colorMap1: ColorMap1;
  // colorMap2: ColorMap2;
  ball: BounceBall;
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageWidth * this.pixelRatio;

    document.body.appendChild(this.canvas);

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    // this.colorMap1 = new ColorMap1(this.ctx!, 50, 50);
    // this.colorMap1.draw();

    // this.colorMap2 = new ColorMap2(this.ctx!, 20);
    // this.colorMap2.draw();

    this.ball = new BounceBall(
      this.ctx!,
      this.stageWidth,
      this.stageHeight,
      30,
      10,
      "orange"
    );

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;

    this.ctx?.scale(this.pixelRatio, this.pixelRatio);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx?.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.ball.draw();
  }
}

window.onload = () => {
  new App();
};
