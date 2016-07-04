function Tile(context, x, y, width, height){
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.canvasContext = context;
	this.fillColor = "#FF0000";
};

Tile.prototype.Draw = function(){
	if(this.canvasContext){
		
		// Draw slight border around each cell
		this.canvasContext.fillStyle='#000';
		this.canvasContext.fillRect(this.x - 0.25, this.y - 0.25, this.width + 0.5, this.height + 0.5);
		
		// Draw cell
		this.canvasContext.fillStyle = this.fillColor;
		this.canvasContext.fillRect(this.x,this.y,this.width,this.height);
	}
};

Tile.prototype.SetFill = function(fill){
	this.fillColor = fill;
}