// cuadrado
function areaCuadrado(){
    let valor = document.getElementById('valor-cuadrado')
    let lado = valor.value 
    let resultado = document.getElementById('resultado-cuadrado')
    resultado.innerHTML = 'El Area del cuadrado es: \n' + lado * lado;
    return console.log(lado * lado);
}
function perimetroCuadrado(){
    let valor = document.getElementById('valor-cuadrado')
    let lado = valor.value 
    let resultado = document.getElementById('resultado-cuadrado')
    resultado.innerHTML = 'El Perímetro del cuadrado es: \n' + lado * 4;
    return console.log(lado * 4);
}

// triangulo
function perimetroTriangulo(){
    let valor1 = document.getElementById('valor-triangulo1');
    let lado1 = parseInt(valor1.value) ;
    let valor2 = document.getElementById('valor-triangulo2');
    let lado2 = parseInt(valor2.value) ;
    let valor3 = document.getElementById('valor-triangulo3');
    let base = parseInt(valor3.value); 
    let total =  lado1 + lado2 + base;
    let resultado = document.getElementById('resultado-triangulo')
    resultado.innerHTML = 'El Perímetro del triangulo es: \n' + total
}
function areaTriangulo(){
    let valorBase = document.getElementById('valor-triangulo3')
    let base = parseInt(valorBase.value);
    let valorAltura = document.getElementById('valor-triangulo4')
    let altura = parseInt(valorAltura.value);
    let resultado = document.getElementById('resultado-triangulo')
    resultado.innerHTML = 'El Area del triangulo es: \n' + (base * altura) / 2;
}
