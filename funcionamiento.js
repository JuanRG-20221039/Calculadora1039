
document.addEventListener("DOMContentLoaded", () => {
    iniciarPantalla();
});

const iniciarPantalla = () => {
    pantalla.value = '0';
    pantalla2.value = '';
    a = 0;
    b = 0;
    op = 0;
};

var pantalla=document.getElementById('pantalla');
var pantalla2=document.getElementById('pantalla2');
let a,b,total,op=0;

const imprimir = numero =>{
    var valorAct = pantalla.value;

    if (valorAct === '0') {
        pantalla.value = numero;
    } else {
        if (!(/^0[0-9]+$/.test(valorAct + numero))) {
            var valorNuevo = valorAct + numero;
            pantalla.value = valorNuevo;
        }
    }
}

const imprimir2 = numero =>{
    var valorAct = pantalla.value;

    if (valorAct === '0') {
        pantalla.value = numero;
    } else {
        if (!(/^0[0-9]+$/.test(valorAct + numero))) {
            var valorNuevo = valorAct + numero + numero;
            pantalla.value = valorNuevo;
        }
    }
}

const agregarPunto = () => {
    var valorAct = pantalla.value;
    if (valorAct.indexOf('.') === -1) {
        var valorNuevo = valorAct + '.';
        pantalla.value = valorNuevo;
    }
}

const borrar = () =>{
    pantalla.value='0';
    pantalla2.value='';
    a=0;
    b=0;
    op=' ';
}

const borrarCaracter = () => {
    var valorAct = pantalla.value;

    if (valorAct.length == 1) {
        pantalla.value = 0;
    }

    if (valorAct.length > 1) {
        var nuevoValor = valorAct.slice(0, -1);
        pantalla.value = nuevoValor;
    }
}


const operacion = (icon,valor) =>{

    if(op!=0){
        pantalla2.value= a + " " + icon + " ";
        pantalla.value=' ';
        op=valor;
        return;
    }

    a=parseFloat(pantalla.value);

    if(isNaN(a))a=0;

    pantalla2.value= a + " " + icon + " ";
    pantalla.value=' ';
    op=valor;
}

const res = () =>{

    b=parseFloat(pantalla.value);

    if(isNaN(b))b=0;

    switch(op){
        case 1:
            var operacion = pantalla2.value;
            pantalla2.value= operacion + b + " =";
            total = a+b;
            pantalla.value= total;
            op=0;
        break;

        case 2:
            var operacion = pantalla2.value;
            pantalla2.value= operacion + b;
            total = a-b;
            pantalla.value= total;
            op=0;
        break;

        case 3:
            var operacion = pantalla2.value;
            pantalla2.value= operacion + b;
            total = a*b;
            pantalla.value= total;
            op=0;
        break;

        case 4:
            if(b<1){
                borrar();
                alert("No se puede dividir entre 0");
                return;
            }
            var operacion = pantalla2.value;
            pantalla2.value= operacion + b;
            total = a/b;
            pantalla.value= total;
            op=0;
        break;

        case 5:
            var operacion = pantalla2.value;
            pantalla2.value= operacion + b;
            total = Math.pow(a,b);
            pantalla.value= total;
            op=0;
        break;
    }

}