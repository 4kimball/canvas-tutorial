"use strict";
exports.__esModule = true;
var color_js_1 = require("./color.js");
var App = /** @class */ (function () {
    function App() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.stageWidth = 0;
        this.stageHeight = 0;
        document.body.appendChild(this.canvas);
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();
        this.colorMap1 = new color_js_1.ColorMap1(this.ctx, 50, 50);
        this.colorMap1.draw();
    }
    App.prototype.resize = function () {
        var _a;
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        (_a = this.ctx) === null || _a === void 0 ? void 0 : _a.scale(this.pixelRatio, this.pixelRatio);
    };
    return App;
}());
window.onload = function () {
    new App();
};
