
 


var userInput = process.argv[2].split(':')
const endDate = new Date();

// As a note, all times/dates are in milliseconds
var block1 = { 
	start: endDate.setHours( userInput[0], userInput[1], 0 ), 
	end: endDate.setHours( userInput[0], userInput[1], 0 ) +  ( 5 * 3600 * 1000 ) 
}
var block2 = {
	start: block1.end + ( 2 * 3600 * 1000 ),
	end: block1.end + ( 5 * 3600 * 1000 )
}
var block3 = {
	start: block2.end + ( 0.75 * 3600 * 1000 ),
	end: block2.end + ( 5 * 3600 * 1000 )
}

var stack = [];

setInterval( () => {
	var date = new Date();
	var currentTime = date.getTime();
	
	
	let b1_time_left = block1.end - currentTime;
	let b2_time_left = Math.min( block2.end - currentTime, block2.end - block2.start );
	let b3_time_left = Math.min( block3.end - currentTime, block3.end - block3.start );
	
	
	let b1_effective_time_left = Math.max( 0, b1_time_left);
	let b2_effective_time_left =  b1_effective_time_left + b2_time_left;
	let b3_effective_time_left =  b2_effective_time_left + b3_time_left;
	
	
	let b1_periods_left =  ( (b1_effective_time_left* 4)  / ( 1000 * 3600 ) ).toFixed(2);
	let b2_periods_left =  ( (b2_effective_time_left* 4)  / ( 1000 * 3600 ) ).toFixed(2);
	let b3_periods_left =  ( (b3_effective_time_left* 4)  / ( 1000 * 3600 ) ).toFixed(2);
	
	
	// console.log( b1_effective_time_left );
	console.log( b1_periods_left, b2_periods_left, b3_periods_left ); 
}, 1000 );



/*

shows periods left in the current effective time block,
	
shows periods left in the current effective time block + the next,
	
shows periods left in the current effective time block + the next and the last, and the end time of the last effective time block,

*/