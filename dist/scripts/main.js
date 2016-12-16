;(function(){
	"use strict";

	var array = [1, 2, 3, 4];

	function map(fn, array) {
		return fn(array);
	}

	function square(array) {
		var newArray = [];
		for( var x = 0; x < array.length; x++ ) {
			newArray[x] = array[x] * array[x];
		}
		return newArray;
	}

	console.log(array);
	console.log(map(square, array));
			
})();