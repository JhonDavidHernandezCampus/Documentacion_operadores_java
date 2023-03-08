/* Operadores  
Operadores aritméticos

Un operador aritmético toma valores numéricos (ya sean literales o variables) como sus operandos y
devuelve un solo valor numérico.

*/

alert("Operadores aritméticos (Residuo (%),Incremento (++),Decremento (--) y otros conocidos como suma ,resta multiplicacion y divicion")



let num1 = Number(prompt("ingrese un numero para hacer la operacion "))
let num2 = Number(prompt("ingrese otro numero para hacer la operacion :"))


alert(`El residuo del numero ${num1} es : ${num1%num2}\nIncremento (++) ${num1++} \n Decremento (--): ${num1--}
    \nOperadores (+-*/):\n suma=${num1+num2}\n resta=${num1 - num2}\n multiplicacion=${num1*num2}\n divicion=${num1/num2} `);

/* 
alert(`¿los dos numeros son iguales (==)? \n\t\t ${num1 == num2} \n¿los numeros son diferentes (!=)? \n\t\t ${num1 != num2}\n
    ¿Los numeros son iguales y son del mismo tipo de dato (===)? \n\t\t  ${num1 === num2} \n¿las variables son del mismo tipo pero no son iguales? \n\t\t ${num1 !== num2}\n
    ¿El numero ${num1} es menor que ${num2} (<)?\n\t\t ${num1<num2}\n¿El numero ${num1} es mayor que ${num2} (>)?\n\t\t ${num1>num2}\n
    ¿El numero ${num1} es mayor o igual que ${num2} (>=)?\n\t\t ${num1 >= num2}\n ¿El numero ${num1} es menor o igual que ${num2} (<=)?\n\t\t ${num1<=num2}`); */

