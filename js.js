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
            background-color: black;
            color: white;
            `
            document.getElementById("s1").style.cssText = `
            background-color: gray;
            color: white;
            `
            document.getElementById("s2").style.cssText = `
            background-color: rgb(58, 8, 8);
            color: white;
            `
            document.getElementById("s3").style.cssText = `
            background-color: rgb(21, 9, 102);
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
            background-color: salmon;
            `
            document.getElementById("s1").style.cssText = `
            background-color: white;
            color: black;
            `
            document.getElementById("s2").style.cssText = `
            background-color: rgb(209, 170, 209);
            color: back;
            `
            document.getElementById("s3").style.cssText = `
            background-color: rgb(143, 121, 204);
            color: back;
            `
            document.getElementById("pe").style.cssText = `
            background-color: pink;
            color: back;
            `
            controlador = 0;
        }
    }