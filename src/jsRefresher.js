// Question 1

function selectElementsStartingWithE(array) {
  var newArray = [];
  for (i = 0 ; i < array.length; i++){
  	if (array[i].charAt(0) === 'e')
  	{ newArray.push(array[i]) }
  }
  return newArray
};

// Question 2

function selectElementsStartingWithVowel(array) {
var newArray = [];
for (i = 0 ; i < array.length; i++){
	firstLetter = array[i].charAt(0);
	if ('aeiou'.indexOf(firstLetter) > -1)
		{ newArray.push(array[i]) }
}
return newArray
};

// Question 3

function removeNullsFromArray(array) {
	var newArray = []
	for (i = 0 ; i < array.length; i++){
		if (array[i] !== null)
			{ newArray.push(array[i]) }
	}
	return newArray
};

// Question 4

function removeNullsAndFalseFromArray(array) {
	var newArray = []
	for (i = 0 ; i < array.length; i++){
		if (array[i])
			{ newArray.push(array[i]) }
	}
	return newArray
};

// Question 5

function reverseEveryElementInArray(array) {
	var newArray = []
	for (i = 0 ; i < array.length; i++) {
	}
	return newArray
};

// Question 6

function dropFirstThreeElements(array) {
	var newArray = []
	for (i = 0 ; i < array.length; i++) {
		if (i > 2) {
			{ newArray.push(array[i]) }
		}
	}
	return newArray
	// return array
};

// Question 7

function addElementToBeginningOfArray(array, element) {
	var newArray = []
	newArray[0] = element
	for (i = 0 ; i < array.length; i++) {
		{ newArray.push(array[i])}
	}
	return newArray
};

// Question 8

function sortArrayByLastLetterOfEachWord(array) {
	var newArray = []
	for (i = 0 ; i < array.length; i ++) {
		
	}
	return newArray
};

// Question 9

function returnFirstHalfOfString(string) {

};

// Question 10

function makeNumberNegative(number) {

};

// Question 11

function separateArrayIntoEvenAndOddNumbers(array) {

};

// Question 12

function numberOfElementsThatArePalindromes(array) {

};

// Question 13

function shortestWordInArray(array) {

};

// Question 14

function longestWordInArray(array) {

};

// Question 15

function arrayTotal(array) {

};

// Question 16

function doubleArray(array) {

};

// Question 17

function averageOfArray(array) {

};

// Question 18

function removeElementsGreaterThanFive(array) {

};

function isLessThanFive(element) {

};

// Question 19

function convertArrayToObject(array) {

};

// Question 20

function getLettersInArrayOfWords(array) {

};