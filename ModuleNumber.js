/*

Ejercicio 1

Escribe un script que a partir de un array de ints devuelva un array de strings aplicando
las siguientes reglas:
• Devuelve Fizz si el número es divisible por 3 o si incluye un 3 en el número.
• Devuelve Buzz si el número es divisible por 5 o si incluye un 5 en el número.
• Devuelve FizzBuzz si cumple la condicion 1 y la 2

*/


//SOLUCION UNO

// let arr = [5,3,15,25,35,50,99,191,101,103,105,165,185];

// function devuelveStringArr (arr) {

// //patterns que quiero revisar
// let pattern3 = /[3]/;
// let pattern5 = /[5]/;

// let arrString = arr.map ( n => {

// 	let cond_1 = n%3 == 0 || pattern3.test(n) == true;
// 	let cond_2 = n%5 == 0 || pattern5.test(n) == true;

// 	if (cond_1 && cond_2) 
		
// 	{
// 		return 'FizzBuzz'
// 	}

// 	else if (cond_1)

// 	{
// 		var a = config( cond_1 ,'Fizz' );
// 	} 

// 	else if (cond_2) 
// 	{
// 		return 'Buzz'
// 	}

// 	else 

// 	{
// 		return n
// 	}
// })


// return arrString;

// }

// let a = devuelveStringArr(arr);

// console.log(a);

//SOLUCION 2


//Modulo para validar condiciones definidas previamente
let numberModule = (function(){

	//metodos privados
	//reviso la condicion de divisor
	let _checkDivisorOne = function(number, divisor) {	

		if (number%divisor == 0) {
			return true
		}
		else {
			return false
		}
	}

	let _checkDivisorTwo = function(number, divisor) {	

		if (number%divisor == 0) {
			return true
		}
		else {
			return false
		}
	}
	//reviso un patron determinado pattern
	let _checkPatternOne = function(number) {
		let p = /[3]/;
		if (p.test(number) == true) {
			return true
		}
		else {
			return false
		}
		
	}
	//metodo para revisar si cumple con un determinado pattern
	let _checkPatternTwo = function(number) {
		let p = /[5]/;
		if (p.test(number) == true) {
			return true
		}
		else {
			return false
		}
		
	}
	//recibe una condicion, un numero, y un mensaje, si es false devuelve el mensaje
	let _setMessage = function(condition, n, message) {
			if (condition == true) {
				return message
			}
			else {
				return n
			}
		}

	let _checkAll = function(number, divisor1, divisor2) {
		
		let a = _checkDivisorOne(number,divisor1);
		let b = _checkPatternOne(number);
		
		let c = _checkDivisorTwo(number,divisor2);
		let d = _checkPatternTwo(number);

		if (a || b == true && c || d == true ) {
			return true
		}

		else {
			return false
		}

	}

	return {
	
		checkDivisorOne : _checkDivisorOne,
		checkDivisorTwo : _checkDivisorTwo,
		checkPatternOne : _checkPatternOne,
		checkPatternTwo : _checkPatternTwo,
		checkAll : _checkAll,
		setMessage : _setMessage


		}
		
})()

// ejemplo de implementación

let arr = [3,5,15,35,88,100,103];

let arrString = arr.map ( n => {

	let a = numberModule.checkAll(n,3,5);

	let msj = numberModule.setMessage(a,n,'FizzBuzz');

	return msj
	

})


console.log(arrString);