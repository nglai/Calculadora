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