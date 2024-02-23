let salida= "";
let str = "";

function encriptar() {
    salida = "";
    str = document.querySelector('#textoent').value;
    let largo=str.length;

    if  (largo==0) {
        swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "DEBES INGRESAR ALGUN TEXTO PARA ENCRIPTAR!"
        });
        return
    }

    document.getElementById("textosal").removeAttribute("hidden");
    document.getElementById("copia").removeAttribute("hidden");
    
    for (let i = 0; i < largo; i++) {

        let cambio = "";

        sale=str[i];

        if (sale == "a") {
            cambio = "ai";
            salida = salida+cambio;
        } else if (sale =="e"){
            cambio ="enter";
            salida = salida+cambio;
        } else if (sale =="i"){
            cambio ="imes";
            salida = salida+cambio;
        } else if (sale == "o"){
            cambio = "ober";
            salida = salida+cambio;
        } else if (sale == "u"){
            cambio = "ufat";
            salida = salida+cambio;
        }else {
            salida = salida+sale;
        }
    }
    document.getElementById('textosal').value = salida;
return;
}

function desencriptar() {
    
    salida = "";
    str = document.querySelector('#textoent').value;
    let largo=str.length;

    if  (largo==0) {
        swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "DEBES PONER UN TEXTO PARA SER DESENCRIPTADO!"
        });
        return
    }

    document.getElementById("textosal").removeAttribute("hidden");
    document.getElementById("copia").removeAttribute("hidden");

    for (let i = 0; i < largo; i++) {

        let cambio = "";

        sale=str[i];

        if (sale == "a") {

            i++;
            sale=sale + str[i];

            if (sale=="ai"){
                sale="a";
                salida=salida+sale;
            }
            salida=salida+cambio;

        }else if (sale == "e"){
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];

            if (sale=="enter"){
                sale="e";
                salida=salida+sale;
            }
            salida=salida+cambio;

        }else if (sale == "i"){
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];

            if (sale=="imes"){
                sale="i";
                salida=salida+sale;
            }
            salida=salida+cambio;

        }else if (sale == "o"){
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];

            if (sale=="ober"){
                sale="o";

                salida=salida+sale;
            }
            salida=salida+cambio;

        }else if (sale == "u"){
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];
            i++;
            sale=sale + str[i];

            if (sale=="ufat"){
                sale="u";
                salida=salida+sale;
            }
            salida=salida+cambio;

        }else{
            salida=salida+sale;
        }
    }
    document.getElementById('textosal').value = salida;
    return;
}

function portapapeles() {
    var content = document.getElementById('textosal');
    content.select();
    document.execCommand('copy');
    swal.fire({
        title: "Bien hecho!",
        text: "Texto Copiado!",
        icon: "success"
    });
    document.getElementById("textosal").value ="";
    document.getElementById("textoent").value="";
    textosal.setAttribute("hidden", "");
    copia.setAttribute("hidden", "");
}