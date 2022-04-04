"use strict";
// 스타일과 색상 적용하기
exports.__esModule = true;
exports.ColorMap1 = void 0;
var ColorMap1 = /** @class */ (function () {
    function ColorMap1(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        console.log("color map");
    }
    ColorMap1.prototype.draw = function () {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                this.ctx.fillStyle = "rgb(".concat(Math.floor(255 - 42.5 * i), ", ").concat(Math.floor(255 - 42.5 * j), ", 0)");
                this.ctx.fillRect(i * this.width, j * this.height, this.width, this.height);
            }
        }
    };
    return ColorMap1;
}());
exports.ColorMap1 = ColorMap1;
