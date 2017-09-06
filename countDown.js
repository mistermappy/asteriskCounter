var color = require('colors') ;
var i = 11
function counter() {
	setTimeout( ()=> {
		 
		if (i > 0) {
			console.log(" * ".green.repeat(i));
			counter();
			}
			i--;
		

	}, 1000) ;
	}



module.exports = counter;