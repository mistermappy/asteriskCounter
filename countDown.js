var color = require('colors') ;
var i = 11 ;
function counter() {
	setTimeout(function() {
		i-- 
		if(i > 0) {
			console.log(" * ".green.repeat(i))
		}
		counter();
	}, 500) ;
}

module.exports = counter;