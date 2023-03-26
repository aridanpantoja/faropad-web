const listaTeclas = document.querySelectorAll('.tecla');

function tocarSom(elemento) {
    if (elemento && elemento.localName === "audio") {
        elemento.play();
    } else {
        console.log("Elemento inválido")
    }
}

for (let tecla of listaTeclas) {
    let classeTecla = tecla.classList[1];
    let idTecla = `#som_${classeTecla}`;

    tecla.onclick = () => {
        audio = document.querySelector(idTecla);
        tocarSom(audio);
    }

    tecla.onkeydown = (evento) => {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
}