//Acessibilidade
tamanho = 16;
    function diminuir() {
        tamanho --;
        document.body.style.fontSize = tamanho +"px";
    }
    function aumentar() {
        tamanho ++;
        document.body.style.fontSize = tamanho +"px";
    }

//Dark Model
var controlador = 0;
    function mudacor () {
        if (controlador == 0) {
            document.getElementById("cab").style.cssText = `
            background-color: #333333;
            color: white;
            `
            document.getElementById("s1").style.cssText = `
            background-color: #666666;
            color: white;
            `
            document.getElementById("s2").style.cssText = `
            background-color: #4C1130;
            color: white;
            `
            document.getElementById("s3").style.cssText = `
            background-color: #20124D;
            color: white;
            `
            document.getElementById("pe").style.cssText = `
            background-color: black;
            color: white;
            `
            controlador = 1;
        }
        else if (controlador == 1) {
            document.getElementById("cab").style.cssText = `
            background-color: #E06666;
            `
            document.getElementById("s1").style.cssText = `
            background-color: white;
            color: black;
            `
            document.getElementById("s2").style.cssText = `
            background-color: #D5A6BD;
            color: back;
            `
            document.getElementById("s3").style.cssText = `
            background-color: #8E7CC3;
            color: back;
            `
            document.getElementById("pe").style.cssText = `
            background-color: #EA9999;
            color: back;
            `
            controlador = 0;
        }
    }

//FORMULARIO DE CONVERSÕES
realPara = () => {
    valordolar = 5.06;
    valoreuro = 6.00;
    valor = parseFloat(document.getElementById('real').value);
    if (document.getElementById('moeda').value=='dolar'){
        document.getElementById('resultR').innerHTML = (valor/valordolar).toFixed(2);
    }
    if (document.getElementById('moeda').value=='euro') {
        document.getElementById('resultR').innerHTML = (valor/valoreuro).toFixed(2);
    }
}

celciusPara = () => {
    valor2 = parseFloat(document.getElementById('celcius').value);
    if(document.getElementById('temp').value=='fahrenheit') {
        document.getElementById('resultT').innerHTML = ((valor2*1.8)+32).toFixed(2);
    }
    if(document.getElementById('temp').value=='kelvin') {
        document.getElementById('resultT').innerHTML = (valor2 + 273.15).toFixed(2);
    }
}

//CALCULADORA

soma = ()  => {
    a = parseFloat(document.getElementById('valora').value);
    b = parseFloat(document.getElementById('valorb').value);
    document.getElementById('resultado').innerHTML = a+b;
}

subtracao = ()  => {
    a = parseFloat(document.getElementById('valora').value);
    b = parseFloat(document.getElementById('valorb').value);
    document.getElementById('resultado').innerHTML = a-b;
}

multiplicacao = ()  => {
    a = parseFloat(document.getElementById('valora').value);
    b = parseFloat(document.getElementById('valorb').value);
    document.getElementById('resultado').innerHTML = a*b;
}

divisao = ()  => {
    a = parseFloat(document.getElementById('valora').value);
    b = parseFloat(document.getElementById('valorb').value);
    document.getElementById('resultado').innerHTML = a/b;
}

porcentagem = ()  => {
    a = parseFloat(document.getElementById('valora').value);
    b = parseFloat(document.getElementById('valorb').value);
    document.getElementById('resultado').innerHTML = (a*b)/100;
}

aelevado2 = ()  => {
    a = parseFloat(document.getElementById('valora').value);
    document.getElementById('resultado').innerHTML = a*a;
}

belevado2 = ()  => {
    b = parseFloat(document.getElementById('valorb').value);
    document.getElementById('resultado').innerHTML = b*b;
}

aelevadob = ()  => {
    a = parseFloat(document.getElementById('valora').value);
    b = parseFloat(document.getElementById('valorb').value);
    document.getElementById('resultado').innerHTML = Math.pow(a, b);
}