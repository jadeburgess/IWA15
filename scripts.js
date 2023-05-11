// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const [firstName, firstArray] = data.lists[0] //extracts values from line 5, assigns them to 2 variables firstName and firstArray
const [secondName, secondArray] = data.lists[1] //extracts values from line 6, assigns them to 2 varables secondName and secondArray
const [thirdName, thirdArray] = data.lists[2] //extracts values from line 7, assigns them to 2 variables thirdName and secondArray

const result = []

const extractBiggest = () => {
    if (firstArray[firstArray.length - 1] > secondArray[secondArray.length - 1]){ //&& firstArray[firstArray.length - 1] > thirdArray[thirdArray.length - 1]) { // using conditional logic to compare last elements of arrays
        //firstArray[firstArray.length - 1] , secondArray[secondArray.length - 1], thirdArray[thirdArray.length - 1] - accessing last elements of firstArray, secondArray, thirdArray
        //condition = true if last element of firstArray > than last element of secondArray and last element of thirdArray
        return firstArray.pop() //pop() method removes last element from an array and returns that element 
    }

    else if (secondArray[secondArray.length - 1] > thirdArray[thirdArray.length - 1]){ //&& secondArray[secondArray.length - 1] > thirdArray[thirdArray.length -1]) {
        return secondArray.pop()
    }
	return thirdArray.pop()
}




/*const extractBiggest = () => {
	if (first[-1] > second[-1]) {
		return first
	}

	if (third[-1] < 1) {
		return second
	}
	
	return third
}
*/
// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)