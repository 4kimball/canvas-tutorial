"use strict";
exports.__esModule = true;
var BounceBall_js_1 = require("./BounceBall.js");
var App = /** @class */ (function () {
    function App() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = 1000;
        document.body.appendChild(this.canvas);
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();
        // this.colorMap1 = new ColorMap1(this.ctx!, 50, 50);
        // this.colorMap1.draw();
        // this.colorMap2 = new ColorMap2(this.ctx!, 20);
        // this.colorMap2.draw();
        this.ball = new BounceBall_js_1["default"](this.ctx, this.stageWidth, this.stageHeight, 30, 10, "orange");
        window.requestAnimationFrame(this.animate.bind(this));
    }
    App.prototype.resize = function () {
        var _a;
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.scale(this.pixelRatio, this.pixelRatio);
    };
    App.prototype.animate = function () {
        var _a;
        window.requestAnimationFrame(this.animate.bind(this));
        (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.ball.draw();
    };
    return App;
}());
window.onload = function () {
    new App();
};
