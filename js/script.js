const ruleta = document.querySelector("#ruleta");

ruleta.addEventListener("click", girar);
let giros = 0;

function girar() {
  let rand = Math.random() * 7200;
  calcular(rand);
  giros++;
}

function emocion(emociones) {
  document.querySelector(".elije").innerHTML = "Tu emoción es: " + emociones;
}

function calcular(rand) {
  let valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0])) * 360;
  ruleta.style.transform = "rotate(" + rand + "deg)";

  setTimeout(() => {
    switch (true) {
      case valor > 0 && valor <= 45:
        emocion("RABIA");
        break;
      case valor > 45 && valor <= 90:
        emocion("TRISTEZA");
        break;
      case valor > 90 && valor <= 135:
        emocion("CALMA");
        break;
      case valor > 135 && valor <= 180:
        emocion("ALEGRIA");
        break;
      case valor > 180 && valor <= 225:
        emocion("MIEDO");
        break;
      case valor > 225 && valor <= 270:
        emocion("AMOR");
        break;
      case valor > 270 && valor <= 315:
        emocion("INDIFERENCIA");
        break;
      case valor > 315 && valor <= 360:
        emocion("SORPRESA");
        break;
    }
  }, 5000);
  function emocion(emociones) {
    const consejos = {
      RABIA: "Respira profundamente, cuenta hasta 10 y trata de identificar qué te hizo enojar.",
      TRISTEZA: "Habla con alguien de confianza sobre tus sentimientos y no te aisles.",
      CALMA: "Aprovecha este momento para meditar o disfrutar de algo que te gusta.",
      ALEGRIA: "Comparte tu felicidad con los demás y disfruta del momento.",
      MIEDO: "Recuerda que está bien tener miedo, pero intenta enfrentarlo poco a poco.",
      AMOR: "Expresa tu amor con gestos simples, como un abrazo o unas palabras bonitas.",
      INDIFERENCIA: "Reflexiona si algo está bloqueando tus emociones y busca reconectar contigo mismo.",
      SORPRESA: "Aprovecha la emoción para explorar algo nuevo o inusual en tu día."
    };
  
    const imagenes = {
      RABIA: "image/rabia.png",
      TRISTEZA: "image/tristeza.png",
      CALMA: "image/calma.png",
      ALEGRIA: "image/alegria.png",
      MIEDO: "image/miedo.png",
      AMOR: "image/amor.png",
      INDIFERENCIA: "image/indiferencia.png",
      SORPRESA: "image/sorpresa.png"
    };
  
    document.querySelector(".elije").innerHTML = `
      Tu emoción es: <b>${emociones}</b><br>
      Consejo: ${consejos[emociones]}
    `;
  
    // Cambiar imagen de emoción
    const imagenElemento = document.getElementById("imagen-consejo");
    imagenElemento.src = imagenes[emociones];
    imagenElemento.alt = emociones;
    imagenElemento.style.display = "block";
  }
  
}
