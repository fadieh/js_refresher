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
		reverse = array[i].split("").reverse().join("");
		array[i] = reverse
		{ newArray.push(array[i])}
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
	newArray = []
	newArray[0] = element
	for (i = 0 ; i < array.length ; i++) {
		{ newArray.push(array[i])}
	}
	return newArray
};

// Question 8

function sortArrayByLastLetterOfEachWord(array) {

};

// Question 9

function returnFirstHalfOfString(string) {

}
// Question 10

function makeNumberNegative(number) {
	if (number > 0) {
		number = number - number * 2
	}
	return number
};

// Question 11

function separateArrayIntoEvenAndOddNumbers(array) {

};

// Question 12

function numberOfElementsThatArePalindromes(array) {
	newArray = []
	for (i = 0 ; i < array.length ; i++) {
		reverse = array[i].split("").reverse().join("");
		if (array[i] == reverse) {
			newArray.push(array[i])
		}
	}
	return newArray.length
};

// Question 13

function shortestWordInArray(array) {
	// newArray = []
	// shortestWord = ""
	// wordNum = 0
	// for (i = 0 ; i < array.length ; i++) {
	// 	if (array[i].length > wordNum) {
	// 		wordNum = array[i].length
	// 	}
	// }
	// for (i = 0 ; i < array.length ; i++) {
	// 	if (array[i].length < wordNum) {
	// 		shortestWord = array[i]
	// 	}
	// }
	// return shortestWord
};

// Question 14

function longestWordInArray(array) {
	wordNum = 0
	longestWord = ""
	for (i = 0 ; i < array.length ; i++) {
		if (array[i].length > wordNum) {
			wordNum = array[i].length
			longestWord = array[i]
		}
	}
	return longestWord
};

// Question 15

function arrayTotal(array) {
	total = 0
	for (i = 0 ; i < array.length ; i++) {
		{ total += array[i] }
	}
	return total
};

// Question 16

function doubleArray(array) {
	newArray = []
	for (i = 0 ; i < array.length; i++) {
		doubleIndex = i + array.length
		{ newArray[i] = array[i] }
		{ newArray[doubleIndex] = array[i] }
	}
	return newArray
};

// Question 17

function averageOfArray(array) {
	total = 0
	average = 0
	for (i = 0 ; i < array.length ; i++) {
		{ total += array[i] }
		{ average = array.length }
	}
	return Math.round(total / average * 10) / 10;
};

// Question 18

function removeElementsGreaterThanFive(array) {
	newArray = []
	for (i = 0 ; i < array.length ; i++) {
		if (array[i] < 6) {
			{ newArray.push(array[i]) }
		}
	}
	return newArray
};

// Question 19

function convertArrayToObject(array) {
	object = {}
	for (i = 0 ; i < array.length ; i++) {
		object[i] = array[i]
	}
	return object
};

// Question 20

function getLettersInArrayOfWords(array) {

};

// Question 21

function swapKeysAndValuesInObject(object) {
	newObject = {}
	for (key in object) {
		newObject[object[key]] = parseInt(key)
	}
	return newObject
};

// Question 22

function addKeysAndValues(object) {

};

// Question 23

function removeCapitalLettersFromString(string) {

}

// Question 24

function everyPossiblePairing(array) {

}

// Question 25

function roundUpNumber(number) {

}

// Question 26

function roundDownNumber(number) { 
	num = Math.floor(number)
	return num
}

// Question 27

function formatDateNicely(date) {

}

// Question 28

function getDomainNameFromEmailAddress(email) {

}

// Question 29

function titleizeString(string) {

}

// Question 30

function checkStringForSpecialCharacters(string) {

}

// Question 31

function getUpperLimitOfRange(range) {

}

// Question 32

function squareRootOf(number) {
	sqRt = Math.sqrt(number)
	return sqRt
}

// Question 33

function callMethodFromString(string) {

}

// Question 34

function isA2015BankHoliday(date) {

}

// Question 35

function convertToRomanNumerals(number) {

}