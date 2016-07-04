"use strict";

$(window).bind("load", function() {
	
	// ---------------------------------------------------------------------------------
	// Constants
	
	var tileWidth = 20;
	var tileHeight = 20;
	
	// ---------------------------------------------------------------------------------
	// Variables
	
	var tiles = null;
	var bufferHandler = null;
	var simulate = false;
	var simulateRefreshId = null;
	
	// ---------------------------------------------------------------------------------
	// Simulate/Init/Draw functions
	
	var gridWidth = function(){
		return $("#conway-canvas").attr("width") / tileWidth;
	}
	var gridHeight = function(){
		return $("#conway-canvas").attr("height") / tileHeight;
	}
	
	var DrawTiles = function(){
		for(var i = 0; i < gridWidth(); ++i){
			for(var j = 0; j < gridHeight(); ++j){
				
				// if alive, draw tile green. otherwise red.
				if (bufferHandler.GetFront().bufData[i][j]){
					tiles[i][j].SetFill("#008000");
				}
				else{
					tiles[i][j].SetFill("#FF0000");
				}
				tiles[i][j].Draw();
			}
		}
	};
		
	var RecalculateTiles = function(){
		
		var width = gridWidth();
		var height = gridHeight();
		
		// Create tiles array
		tiles = new Array([]);
		tiles = createArray(width, height);
		
		bufferHandler = new BufferHandler(width, height);
	
		for(var i = 0; i < gridWidth(); ++i){
			for(var j = 0; j < gridHeight(); ++j){
				tiles[i][j] = new Tile($("#conway-canvas").get(0).getContext("2d"), i * tileWidth, j * tileHeight, tileWidth, tileHeight);
			}
		}		
	}
	
	var Simulate = function(){
					
		for(var x = 0; x < gridWidth(); ++x){
			for(var y = 0; y < gridHeight(); ++y){
				var neighbours = 0;

				for(var i = -1; i < 2; i++){
					for(var j = -1; j < 2; j++){ // iterate through, finding compass point neighbours

						if (i == -1 && x == 0){  // prevent out of range indexing
							continue;
						}
						else if(j == -1 && y == 0){
							continue;
						}
						else if (i == 1 && x == gridWidth()-1){
							continue;
						}
						else if (j == 1 && y == gridHeight()-1){
							continue;
						}

						if(ValidIndex(x+i, y+j) && bufferHandler.GetBack().bufData[x+i][y+j] && !(i === 0 && j === 0)){
							neighbours++;
						}
					}
				}

				bufferHandler.GetBack().neighbours[x][y] = neighbours; 

				// bufData[][] returns bool; true = alive, false = dead
				if(bufferHandler.GetFront().bufData[x][y] && neighbours < 2){ // loneliness
					bufferHandler.GetBack().bufData[x][y] = false;
				}
				else if(bufferHandler.GetFront().bufData[x][y] && neighbours > 3){ // overcrowding
					bufferHandler.GetBack().bufData[x][y] = false; 
				}
				else if(bufferHandler.GetFront().bufData[x][y] && (neighbours == 2 || neighbours == 3)){ // keep alive
					bufferHandler.GetBack().bufData[x][y] = true;
				}
				else if((!bufferHandler.GetFront().bufData[x][y]) && neighbours == 3){ // reproduce
					bufferHandler.GetBack().bufData[x][y] = true;
				}
			}
		}

		bufferHandler.SwapBuffers();
		bufferHandler.ClearBack();
	}
	
	var ValidIndex = function(x, y){
		if (x < 0 || x >= gridWidth()){
			return false;
		}
		if (y < 0 || y >= gridHeight()){
			return false;
		}
		return true;
	}
	
	var Initialize = function(){
		RecalculateTiles();
		setInterval(DrawTiles, 16);
	};Initialize();
	 
	 
	 // ---------------------------------------------------------------------------------
	 // Event listeners
	 
	 $("#width-select").on("change", function(){
		$("#conway-canvas").attr("width", tileWidth * this.options[this.selectedIndex].text);
		RecalculateTiles();
	});
	$("#height-select").on("change", function(){
		$("#conway-canvas").attr("height", tileWidth * this.options[this.selectedIndex].text);
		RecalculateTiles();
	});
	
	 $("#conway-canvas").click(function(e){
		 
		 if(simulate)
			 return;
		 
		 // Axes are reversed
		var x = Math.floor((e.pageX-$("#conway-canvas").offset().left) / tileWidth);
		var y = Math.floor((e.pageY-$("#conway-canvas").offset().top) / tileHeight);
		
		//tiles[x][y].FlipState();
		bufferHandler.AlternateFront(x, y);
	});
	
	$("#start-simulate").on("click", function(){
		
		if(simulate)
			return;
		
		simulate = true;
		
		// DEBUG: simulate once per button press to prevent it getting out of hand for now
		Simulate();
		//simulateRefreshId = setInterval(Simulate, 16);
	});
	
	$("#stop-simulate").on("click", function(){
		
		if(!simulate)
			return;

		simulate = false;
		clearInterval(simulateRefreshId);
	});
	
});