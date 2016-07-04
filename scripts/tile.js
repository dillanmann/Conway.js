function Tile(context, x, y, width, height){
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.canvasContext = context;
	this.state = "dead";
	this.fillColor = "#FF0000";
};

Tile.prototype.Draw = function(){
	if(this.canvasContext){
		this.canvasContext.fillStyle = this.fillColor;
		this.canvasContext.fillRect(this.x,this.y,this.width,this.height);
	}
};

Tile.prototype.FlipState = function(){
	if(this.state == "dead"){
		this.state = "alive";
	}
	else{
		this.state = "dead";
	}
}

Tile.prototype.SetFill = function(fill){
	this.fillColor = fill;
}

Tile.prototype.SetState = function(state){
	this.state = state;
}

Tile.prototype.State = function(){
	return this.state;
}