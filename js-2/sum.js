let array = [1, 2, 3, 4]

function sum(array) {
    let resultado = 0;
     array.forEach(num =>{
         resultado += num;
     });
    return resultado;   
}
console.log(sum(array));