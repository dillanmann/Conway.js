$(window).bind("load", function() {
	
	var tileWidth = 20;
	var tileHeight = 20;
	
	var gridWidth = function(){
		return $("#conway-canvas").attr("width") / tileWidth;
	}
	var gridHeight = function(){
		return $("#conway-canvas").attr("height") / tileHeight;
	}
	
	var DrawTiles = function(){
		for(var i = 0; i < gridHeight(); ++i){
			for(var j = 0; j < gridWidth(); ++j){
				tiles[i][j].Draw();
			}
		}
	};
	
	var tiles = null;
	
	var RecalculateTiles = function(){
		
		// Create tiles array
		tiles = new Array([]);
		tiles = createArray(gridHeight(), gridWidth());
	
		for(var i = 0; i < gridHeight(); ++i){
			for(var j = 0; j < gridWidth(); ++j){
				tiles[i][j] = new Tile($("#conway-canvas").get(0).getContext("2d"), j * tileWidth, i * tileHeight, tileWidth, tileHeight);
			}
		}		
	};RecalculateTiles();
	
	 setInterval(DrawTiles, 16);
	 
	 $("#width-select").on("change", function(){
		$("#conway-canvas").attr("width", tileWidth * this.options[this.selectedIndex].text);
		RecalculateTiles();
	});
	$("#height-select").on("change", function(){
		$("#conway-canvas").attr("height", tileWidth * this.options[this.selectedIndex].text);
		RecalculateTiles();
	});
	
	 $("#conway-canvas").click(function(e){
		 
		 // Axes are reversed
		var y = Math.floor((e.pageX-$("#conway-canvas").offset().left) / tileWidth);
		var x = Math.floor((e.pageY-$("#conway-canvas").offset().top) / tileHeight);
		
		tiles[x][y].FlipState();
	});
	
});