const elementoChute = document.getElementById('chute');
const botao = document.getElementById('buttonMic');


window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition()

recognition.lang = 'pt-Br'
botao.addEventListener('click', () => {
  recognition.start();
});


recognition.addEventListener('result', onSpeak)

function onSpeak(evento) {
    chute = evento.results[0][0].transcript;
    exibeChute(chute);
    verificacao(chute);
}

function exibeChute(chute) {
    elementoChute.innerHTML =`
    <div class="mensagem_ecundaria">você disse:</div>
    <span id="box" class="box">${chute}</span>`
}

recognition.addEventListener('end', () => recognition.start())

recognition.onresult = (evento) => {
  const numerosPorExtenso = {
      "zero": 0,
      "um": 1,
      "dois": 2,
      "três": 3,
      "quatro": 4,
      "cinco": 5,
      "seis": 6,
      "sete": 7,
      "oito": 8,
      "nove": 9
  };

  let chute = evento.results[0][0].transcript.toLowerCase().replaceAll(" ", "");
  console.log("in: ", chute);
  for (let [nome, numero] of Object.entries(numerosPorExtenso)) {
      if (chute.includes(nome)) {
          chute = chute.replace(nome, numero);
          break;
      }
  }
  if (chute.startsWith("menos")) {
      chute = chute.replace(/menos/g, "-", chute);
  }
  console.log("out: ", chute);

  exibeChute(chute);
  verificacao(chute);
};
