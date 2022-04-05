"use strict";
exports.__esModule = true;
var BounceBall = /** @class */ (function () {
    function BounceBall(ctx, stageWidth, stageHeight, radius, speed, color) {
        this.radius = radius;
        this.dy = speed;
        this.dx = speed;
        this.color = color;
        this.ctx = ctx;
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        var diameter = this.radius * 2;
        this.x = diameter + (Math.random() * this.stageWidth - diameter);
        this.y = diameter + (Math.random() * this.stageHeight - diameter);
    }
    BounceBall.prototype.draw = function () {
        this.x += this.dx;
        this.y += this.dy;
        this.checkBoundary();
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fill();
    };
    BounceBall.prototype.checkBoundary = function () {
        var minX = this.radius;
        var maxX = this.stageWidth - this.radius;
        var minY = this.radius;
        var maxY = this.stageHeight - this.radius;
        if (this.x <= minX || this.x >= maxX) {
            this.dx *= -1;
            this.x += this.dx;
        }
        if (this.y <= minY || this.y >= maxY) {
            this.dy *= -1;
            this.y += this.dy;
        }
    };
    return BounceBall;
}());
exports["default"] = BounceBall;
