/* Operadores  
operadores Aritmeticos

*/

alert("Operadores De comparacion (==, !=,===,!==,<,>,>=,<=)")

let num1 = Number(prompt("ingrese un numero para comparar"))
let num2 = Number(prompt("ingrese otro numero para comparar"))

alert(`¿los dos numeros son iguales (==)? \n\t\t ${num1 == num2} \n¿los numeros son diferentes (!=)? \n\t\t ${num1 != num2}\n
    ¿Los numeros son iguales y son del mismo tipo de dato (===)? \n\t\t  ${num1 === num2} \n¿las variables son del mismo tipo pero no son iguales? \n\t\t ${num1 !== num2}\n
    ¿El numero ${num1} es menor que ${num2} (<)?\n\t\t ${num1<num2}\n¿El numero ${num1} es mayor que ${num2} (>)?\n\t\t ${num1>num2}\n
    ¿El numero ${num1} es mayor o igual que ${num2} (>=)?\n\t\t ${num1 >= num2}\n ¿El numero ${num1} es menor o igual que ${num2} (<=)?\n\t\t ${num1<=num2}`)
