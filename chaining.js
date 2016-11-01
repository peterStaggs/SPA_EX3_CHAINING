var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
//compare every number in the array, displaying the largest first
integers.sort(function(a, b){return b-a});
console.log(integers); 
//Create a function to pass over to a .filter method in order to get rid of a range of integers
function getRidOf (value) {
	return value < 19;
}
//create a new variable that is integers, filtered, by the function getRidOf
var filteredInt = integers.filter(getRidOf); 
console.log(filteredInt);

function newMath(element) {
		var cool = element * 1.5 -1; 
		
		return cool; 
}


function getSum (total, num) {
			return total + num;
		}

console.log(filteredInt.map(newMath).reduce(getSum));
		



/*Sort the numbers in descending order (10, 9, 8, 7, etc).
Remove any integers greater than 19.
Multiply each remaining number by 1.5 and then subtract 1.
Then output (either in the DOM or the console) the sum of all the resulting numbers.