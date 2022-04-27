const input = document.getElementById('input1');
const initial = document.getElementById('letra');

const texTarea = document.getElementById('texTarea');
const llegar = document.getElementById('imp');
const btn = document.getElementById('btn')

btn.addEventListener('click', imprimir);

function imprimir(event) {
    if (event.type == "click") {
        console.log(event);
        llegar.textContent = texTarea.value;
    }
}



input.addEventListener('keypress',captureEvent);

function captureEvent(event) {
    if (event.keyCode == 13) {
        console.log(event);
        initial.textContent = event.target.value.charAt(0).toUpperCase();
    }
}

function contador() {
    let total = 200;
        let respuesta = document.getElementById('txtParraf');
        let cantidad = texTarea.value.length;
        document.getElementById('txtParraf').textContent = `caracteres escritos (${cantidad}) caracteres que te quedan ` + (total - cantidad);
        
        if (cantidad > 150) {
            respuesta.style.color = "red";
        }
        else{
            respuesta.style.color = "white"
            respuesta.style.fontSize = "20px"
        }
    
}