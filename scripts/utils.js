function CreateArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = CreateArray.apply(this, args);
    }

    return arr;
}

function CopyArray(arr){
	if(!arr)
		return;
	
	var newArray = [];
	for (var i = 0; i < arr.length; i++)
		newArray[i] = arr[i].slice();
	
	return newArray;
}