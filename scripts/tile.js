function Tile(context, x, y, width, height){
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.canvasContext = context;
	this.state = "dead";
	
	this.Draw();
	this.FlipState();
};

Tile.prototype.Draw = function(){
	if(this.canvasContext){
		if(this.state === "dead"){
			this.canvasContext.fillStyle="#008000";
		}
		else{
			this.canvasContext.fillStyle="#FF0000";
		}
		this.canvasContext.fillRect(this.x,this.y,this.width,this.height);
	}
};

Tile.prototype.FlipState = function(){
	if(this.state === "dead"){
		this.state = "alive";
	}
	else{
		this.state = "dead";
	}
}