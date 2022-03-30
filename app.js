"use strict";
class Point {
    constructor(_pointX, _pointY) {
        this._pointX = _pointX;
        this._pointY = _pointY;
    }
    get pointX() {
        return this._pointX;
    }
    get pointY() {
        return this._pointY;
    }
    set pointX(point) {
        this._pointX = point;
    }
    set pointY(point) {
        this._pointY = point;
    }
    distanceFromOrigin(point) {
        return Math.sqrt(point.pointX ** 2 + point.pointY ** 2);
    }
    translate(dx, dy) {
        this._pointX += dx;
        this._pointY += dy;
    }
    toString() {
        return '[' + this._pointX + ',' + this._pointY + ']';
    }
    distance(p) {
        return Math.sqrt((p.pointX - this._pointX) ** 2 + (p.pointY - this._pointY) ** 2);
    }
}
const taskas1 = new Point(1, 1);
const taskas2 = new Point(2, 2);
taskas1.translate(1, 1);
console.log(taskas2.toString());
console.log(taskas1.distance(taskas2));
console.log(taskas1);
console.log(taskas2);
