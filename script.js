function realizarOperacion(num1,num2,operacion){
    let output;
    if(num1=="salir" || num2=="salir" || operacion=="salir"){
        bucle=false;
        output="Adios! saliste del bucle";
    }
    else if(operacion=="suma"){
        output= `El resultado de ${operacion} es: ${parseInt(num1)+parseInt(num2)}`;
    }
    else if(operacion=="resta"){
        output= `El resultado de ${operacion} es: ${parseInt(num1)-parseInt(num2)}`;
    }
    else if(operacion=="multiplicacion"){
        output= `El resultado de ${operacion} es: ${parseInt(num1)*parseInt(num2)}`;
    }
    else if(operacion=="division"){
        if(num2!=0){
            output= `El resultado de ${operacion} es: ${parseInt(num1)/parseInt(num2)}`;
        }else{
            output= "No se puede dividir por 0.";
        }   
    }
    else{
        output= "Operacion ingresada no existe.";
    }
    return output;
}
let bucle=true;

while(bucle==true){
    let numero1= prompt("Ingrese el primer numero").toLocaleLowerCase();
    let numero2= prompt("Ingrese el segundo numero").toLocaleLowerCase();
    let operar= prompt("Ingrese la operacion que desea realizar: suma, resta, multiplicacion o division.").toLocaleLowerCase();
    
    alert(realizarOperacion(numero1,numero2,operar));
    if(bucle==false){
        break
    }

    if(confirm("¿Quiere realizar otra operacion?")){
        bucle=true;
    }else{
        bucle=false;
    }
}