"use strict";

function Buffer(bufferWidth, bufferHeight){

	// Size of buffers
	this.bufferWidth = bufferWidth;
	this.bufferHeight = bufferHeight;

	// Underlying storage containers
	this.bufData = createArray(bufferWidth, bufferHeight);
	this.neighbours = createArray(bufferWidth, bufferHeight);
	
	// Set to safe values after initialization
	for (var i = 0; i < this.bufferWidth; ++i){
		for (var j = 0; j < this.bufferHeight; ++j){
			this.bufData[i][j] = false;
			this.neighbours[i][j] = 0;
		}
	}
};

function BufferHandler(bufferWidth, bufferHeight){

	// Size of buffers
	this.bufferWidth = bufferWidth
	this.bufferHeight = bufferHeight;

	// Internal storage buffers
	this.pFront = new Buffer(bufferWidth,bufferHeight);
	this.pBack = new Buffer(bufferWidth,bufferHeight);

	for (var i = 0; i < this.bufferWidth; i++){
		for (var j = 0; j < this.bufferHeight; j++){
			this.pBack.bufData[i][j] = false;
			this.pFront.bufData[i][j] = false;
		}
	}	
};

// Switch grid position between true/false
BufferHandler.prototype.AlternateFront = function(x, y){
	this.pFront.bufData[x][y] = !this.pFront.bufData[x][y];
}

// Return const pointer to front; read only
BufferHandler.prototype.GetFront = function() { 
	return this.pFront; 
}

// Give writeable back buffer to write changes to
BufferHandler.prototype.GetBack = function(){ 
	return this.pBack; 
}

// Swap buffer contents between each other
BufferHandler.prototype.SwapBuffers = function(){
	
	// Store 1 buffer in a temporary object
	// And swap the others around
	var temp = CopyArray(this.pFront.bufData);
	this.pFront.bufData = CopyArray(this.pBack.bufData);
	this.pBack.bufData = CopyArray(temp);
}

// Clears back buffer to all false
BufferHandler.prototype.ClearBack = function(){
	
	// Set back buffer to all false values
	for (var i = 0; i < this.bufferWidth; i++){
		for (var j = 0; j < this.bufferHeight; j++){
			this.pBack.bufData[i][j] = false;
		}
	}
}
