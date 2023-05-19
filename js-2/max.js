let array = [1, 2, 3, 4];
function max(array) {
    let maximo = 0;
    for (let i = 0; i <= array.length; i++) {
        if (array[i] > maximo) {
            return maximo = array[i]
        } else {
            return undefined
        }
    }

}
console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined