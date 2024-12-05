export class Vector2 {
	constructor (x = 0, y = 0){
		this.x = x,
		this.y = y
	}
	duplicar(){
		return new  Vector2 (this.x, this.y);
	}
}