/*

Ejercicio 1

Escribe un script que a partir de un array de ints devuelva un array de strings aplicando
las siguientes reglas:
• Devuelve Fizz si el número es divisible por 3 o si incluye un 3 en el número.
• Devuelve Buzz si el número es divisible por 5 o si incluye un 5 en el número.
• Devuelve FizzBuzz si cumple la condicion 1 y la 2

*/

//rangos al azar

// && n = /[3]/g
let arr = [5,3,15,25,35,50];


function devuelveStringArr (arr) {

//patterns que quiero revisar
let pattern3 = /[3]/;
let pattern5 = /[5]/;

let arrString = arr.map ( n => {

	let cond_1 = n%3 == 0 || pattern3.test(n) == true;
	let cond_2 = n%5 == 0 || pattern5.test(n) == true;

	if (cond_1 && cond_2) 
		
	{
		return 'FizzBuzz'
	}

	else if (cond_1)

	{
		return 'Fizz'
	} 

	else if (cond_2) 
	{
		return 'Buzz'
	}

	else 

	{
		return n
	}
})


return console.log(arrString);

}

let a = devuelveStringArr(arr);
