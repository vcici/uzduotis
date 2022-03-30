class Point{
    constructor(private _pointX:number, private _pointY:number){

    }

    get pointX(){
        return this._pointX;
    }
    get pointY(){
        return this._pointY;
    }
    set pointX(point:number){
        this._pointX = point;
    }
    set pointY(point:number){
        this._pointY = point;
    }

    public distanceFromOrigin(point:Point):number{
        return Math.sqrt(point.pointX**2 + point.pointY**2);
    }
    public translate(dx:number, dy:number):void{
        this._pointX +=dx;
        this._pointY +=dy;
    }
    public toString():string{
        return '[' + this._pointX + ',' + this._pointY + ']';
    }
    public distance(p:Point):number{
        return Math.sqrt((p.pointX - this._pointX)**2 + (p.pointY - this._pointY)**2);
    }
}

const taskas1 = new Point(1, 1);
const taskas2 = new Point(2, 2);

taskas1.translate(1, 1);
console.log(taskas2.toString());
console.log(taskas1.distance(taskas2));

console.log(taskas1);
console.log(taskas2);