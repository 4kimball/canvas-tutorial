"use strict";
// 스타일과 색상 적용하기
exports.__esModule = true;
exports.ColorMap2 = exports.ColorMap1 = void 0;
var ColorMap1 = /** @class */ (function () {
    function ColorMap1(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
    }
    ColorMap1.prototype.draw = function () {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                this.ctx.fillStyle = "rgb(".concat(Math.floor(255 - 32.5 * i), ", ").concat(Math.floor(255 - 32.5 * j), ", 0)");
                this.ctx.fillRect(i * this.width, j * this.height, this.width, this.height);
            }
        }
    };
    return ColorMap1;
}());
exports.ColorMap1 = ColorMap1;
var ColorMap2 = /** @class */ (function () {
    function ColorMap2(ctx, radius) {
        this.ctx = ctx;
        this.radius = radius;
    }
    ColorMap2.prototype.draw = function () {
        console.log("color map");
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                this.ctx.strokeStyle = "rgb(0, ".concat(Math.floor(255 - 32.5 * i), ", ").concat(Math.floor(255 - 32.5 * j), ")");
                this.ctx.beginPath();
                this.ctx.arc(25 + j * 50, 25 + i * 50, this.radius, 0, Math.PI * 2);
                this.ctx.stroke();
            }
        }
    };
    return ColorMap2;
}());
exports.ColorMap2 = ColorMap2;
