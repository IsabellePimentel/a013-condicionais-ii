//Crie um código que receba um número por prompt e verifique se um número é divisível por 2 ou por 3.
// Faça isso:
//Utilizando ifs aninhados:

const numero = Number(prompt("Digite um número"))
if((numero%2) === 0){
    if((numero%3) === 0){
        console.log("É divisivel por 2 ou por 3.")
    }else{
        console.log("Só é divisivel por 2.")
    }
}else if((numero%3) === 0){
    console.log("Só é divisivel por 3.")
}else{
    console.log("Não é divisivel nem por 2 e nem por 3.")
}
   

// Utilizando um operador lógico para unir duas operações relacionais

if(((numero%2) === 0) || ((numero%3) === 0)){
    console.log("É divisivel por 2 ou por 3.")
}else{
console.log("Não é divisivel nem por 2 e nem por 3.")
}







// {
//     console.log("É divisivel por 2 ou por 3")
// }else{
//     console.log("Não é divisivel nem por 2 e nem por 3.")}