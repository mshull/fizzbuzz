/*

	Assignment 0
	CSCI E-32

	September 8, 2015

	Michael Shull
	mshull@g.harvard.edu

	This code provides a function which accepts a number 
	and loops until that number is reached while collecting 
	an array of strings determined by each iteration of 
	the number loop. If the iteration is a multiple of both 
	5 and 3 the string 'FizzBuzz' is added to the array. If 
	the iteration is just a multiple of 3 then the string 
	'Fizz' is added to the array. If the iteration is just 
	a multiple of 5 then the string 'Buzz' is added to the 
	array. If the iteration is not a multiple of 3 or 5 then 
	just the iteration numerical value is added to the array. 
	When the loop is complete the final array is returned.

	The bottom portion of this code uses jQuery to determin 
	when the document is done loading and then runs code that 
	calls the fizzbuzz function and passes it the number 30. The 
	returned array is then looped through to create an HTML string 
	which is used to replace the content within the only paragraph 
	tag in the body on the index.html page.

*/

function fizzbuzz(amount) {
	var arr = [];
	for (var i=1; i<=amount; i++) {
		if (i % 5 == 0 && i % 3 == 0) {
			arr.push('FizzBuzz');
		} else if (i % 3 == 0) {
			arr.push('Fizz');
		} else if (i % 5 == 0) {
			arr.push('Buzz');
		} else {
			arr.push(i);
		}
	}
	return arr;
}

// Shorthand for document.ready
// Wait for document to finish loading

$(function() {

	// get array and create placeholder string variable
	var arr = fizzbuzz(30);
	var str = '';

	// loop through string array
	for (var i=0; i<arr.length; i++) {
		// write to console for fun
		console.log(arr[i]);
		// append to string variable
		str += '<li>' + arr[i] + '</li>';
	}

	// replace paragraph content in index.html
	$('p.lead').html('<ol>'+str+'</ol>');

});