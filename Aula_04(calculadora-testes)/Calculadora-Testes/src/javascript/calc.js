function calcular(primeiroNumero,segundoNumero){
var s1, s2, s3, operacao

operacao = document.querySelector('#operacao').value;
s1 = parseFloat(document.querySelector('#primeiroNumero').value);    
s2 = parseFloat(document.querySelector('#segundoNumero').value);

if (s1 == "" || s2 == ""){
    alert("Algum dos campos estão vazios!!!")
}else {
    if (operacao == "soma"){
        s3 = parseFloat(s1)+parseFloat(s2);
    } else if (operacao == "multiplicacao"){
        s3 = parseFloat(s1)*parseFloat(s2);
    } else if (operacao == "divisao"){
        s3 = parseFloat(s1)/parseFloat(s2);
    }else{
        s3 = parseFloat(s1)-parseFloat(s2);
    }  
}

document.getElementById("resultado").innerHTML = s3;

const elementoResultado = document.getElementById("resultado");

if (s3 >= 0){
    elementoResultado.style.color = "green";
} else {
    elementoResultado.style.color = "red";
}






}