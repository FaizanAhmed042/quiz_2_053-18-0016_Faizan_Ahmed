let array = [1,2,3,4,5]
function average(array) {
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
    }
	return sum / array.length
}
console.log(average)