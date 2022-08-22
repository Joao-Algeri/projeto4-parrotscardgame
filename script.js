let numeroDeCartas = null;
let contadorDeJogadas = null;
let contadorDePares = 0;
function carregarPagina() {
  function pedeCarta() {
    while (
      numeroDeCartas < 4 ||
      numeroDeCartas % 2 !== 0 ||
      numeroDeCartas > 14
    ) {
      numeroDeCartas = prompt("Quantas cartas?");
    }
    return numeroDeCartas;
  }

  pedeCarta();

  let arrayCartas = [
    `<div class="card impar explodyparrot" onclick="virarCarta(this)">
<div class="front"><img src="/imagens/front.jpeg" /></div>
<div class="back"><img src="/imagens/explodyparrot.gif" /></div>
</div>`,
    `<div class="card impar explodyparrot" onclick="virarCarta(this)">
<div class="front"><img src="/imagens/front.jpeg" /></div>
<div class="back"><img src="/imagens/explodyparrot.gif" /></div>
</div>`,
    `<div class="card impar bobrossparrot" onclick="virarCarta(this)">
<div class="front"><img src="/imagens/front.jpeg" /></div>
<div class="back"><img src="/imagens/bobrossparrot.gif" /></div>
</div>`,
    `<div class="card impar bobrossparrot" onclick="virarCarta(this)">
<div class="front"><img src="/imagens/front.jpeg" /></div>
<div class="back"><img src="/imagens/bobrossparrot.gif" /></div>
</div>`,
    `<div class="card impar fiestaparrot" onclick="virarCarta(this)">
<div class="front"><img src="/imagens/front.jpeg" /></div>
<div class="back"><img src="/imagens/fiestaparrot.gif" /></div>
</div>`,
    `<div class="card impar fiestaparrot" onclick="virarCarta(this)">
<div class="front"><img src="/imagens/front.jpeg" /></div>
<div class="back"><img src="/imagens/fiestaparrot.gif" /></div>
</div>`,
    `<div class="card impar metalparrot" onclick="virarCarta(this)">
<div class="front"><img src="/imagens/front.jpeg" /></div>
<div class="back"><img src="/imagens/metalparrot.gif" /></div>
</div>`,
    `<div class="card impar metalparrot" onclick="virarCarta(this)">
<div class="front"><img src="/imagens/front.jpeg" /></div>
<div class="back"><img src="/imagens/metalparrot.gif" /></div>
</div>`,
    `<div class="card impar revertitparrot" onclick="virarCarta(this)">
<div class="front"><img src="/imagens/front.jpeg" /></div>
<div class="back"><img src="/imagens/revertitparrot.gif" /></div>
</div>`,
    `<div class="card impar revertitparrot" onclick="virarCarta(this)">
<div class="front"><img src="/imagens/front.jpeg" /></div>
<div class="back"><img src="/imagens/revertitparrot.gif" /></div>
</div>`,
    `<div class="card impar tripletsparrot" onclick="virarCarta(this)">
<div class="front"><img src="/imagens/front.jpeg" /></div>
<div class="back"><img src="/imagens/tripletsparrot.gif" /></div>
</div>`,
    `<div class="card impar tripletsparrot" onclick="virarCarta(this)">
<div class="front"><img src="/imagens/front.jpeg" /></div>
<div class="back"><img src="/imagens/tripletsparrot.gif" /></div>
</div>`,
    `<div class="card impar unicornparrot" onclick="virarCarta(this)">
<div class="front"><img src="/imagens/front.jpeg" /></div>
<div class="back"><img src="/imagens/unicornparrot.gif" /></div>
</div>`,
    `<div class="card impar unicornparrot" onclick="virarCarta(this)">
<div class="front"><img src="/imagens/front.jpeg" /></div>
<div class="back"><img src="/imagens/unicornparrot.gif" /></div>
</div>`,
  ];

  arrayCartas = arrayCartas.splice(0, numeroDeCartas);
  let tamanhoArray = arrayCartas.length;

  arrayCartas.sort(embaralha);

  function embaralha() {
    return Math.random() - 0.5;
  }
  const cardPool = document.querySelector(".card-pool");
  cardPool.innerHTML = arrayCartas;
  while (tamanhoArray > 0) {
    cardPool.innerHTML = cardPool.innerHTML.replace(",", "");
    tamanhoArray = tamanhoArray - 1;
  }
}
carregarPagina();
function virarCarta(card) {
  let cardAnterior = document.querySelector(".card.impar.virado");

  if (card.classList.contains("virado") === true) {
    return;
  }
  if (cardAnterior !== null) {
    viraSegundoCard(card, cardAnterior);
  } else {
    card.classList.add("virado");
    contadorDeJogadas++;
  }
}
function viraSegundoCard(cardAtual, cardAnterior) {
  cardAtual.classList.add("virado");
  contadorDeJogadas++;
  if (cardAnterior.innerHTML === cardAtual.innerHTML) {
    contadorDePares += 2;
    cardAnterior.classList.remove("impar");
    cardAtual.classList.remove("impar");
    cardAnterior.classList.add("par");
    cardAtual.classList.add("par");
    setTimeout(fimDoJogo, 200);
  } else {
    setTimeout(viradaErrada, 1000, cardAnterior, cardAtual);
  }
}
function viradaErrada(cardAnterior, cardAtual) {
  cardAnterior.classList.remove("virado");
  cardAtual.classList.remove("virado");
}
function fimDoJogo() {
  if (contadorDePares == numeroDeCartas) {
    alert("Você ganhou em " + contadorDeJogadas + " jogadas!");
  }
}
