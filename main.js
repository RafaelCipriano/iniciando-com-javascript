//Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
console.log("Hello World!");

//Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
function sum(num1, num2) {
    return num1 + num2
}

//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
function isNumber(number) {
    if(typeof number == "number")
        return "É um número!"
    else
        return "Não é um número!"
}

//Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
function isString(string) {
    if(typeof string === "string") 
        return "É uma string!"
    else
        return "Não é uma string!"
}

//Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
function isBoolean(boolean) {
    if(typeof boolean === "boolean")
        return "É um booleano!"
    else
        return "Não é um booleano!"
}

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
function subtraction(num1, num2) {
    return num1 - num2
}

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
function multiplication(num1, num2) {
    return num1 * num2
}

//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
function division(num1, num2) {
    return num1 / num2
}

//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
function isEven(number) {
    if(number % 2 === 0)
        return "É um número par."
    else
        return "Não é um número par."
}

//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
function isOdd(number) {
    if(number % 2 !== 0) 
        return "É um número ímpar."
    else
        return "Não é um número ímpar."
}