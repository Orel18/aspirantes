let array = [1, 2, 3, 4];
let noMayor;
let posicion;
function maxIndex(array) {
    for (i = 0; i <= array.length; i++) {
        if (array[i] > noMayor) {
            noMayor = array[i];
            posicion = i;
            return posicion;

        } else {
            return -1;
        }
    }

}
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1