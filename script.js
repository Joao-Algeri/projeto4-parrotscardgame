function pedeCarta() {
  let numeroDeCartas = null;
  //numeroDeCartas = prompt("Quantas cartas?");
  while (
    numeroDeCartas < 4 ||
    numeroDeCartas % 2 !== 0 ||
    numeroDeCartas > 14
  ) {
    numeroDeCartas = prompt("Quantas cartas?");
  }
}
pedeCarta();
let arrayCartas = [
  `<div class="card impar explodyparrot" onclick="virarCarta(this)">
    <div class="front"><img src="/imagens/front.jpeg" /></div>
    <div class="back"><img src="/imagens/explodyparrot.gif" />
    </div>
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
];

arrayCartas = arrayCartas.splice(0, 4);
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
console.log(cardPool);
// function virarCarta(card) {
//   let cardAnterior = document.querySelector(".card.impar.virado");
//   console.log(cardAnterior);
//   console.log(card);
//   if (cardAnterior !== null) {
//     card.classList.add("virado");
//     if (cardAnterior.classList == card.classList) {
//       cardAnterior.classList.remove("impar");
//       card.classList.remove("impar");
//       cardAnterior.classList.add("par");
//       card.classList.add("par");
//       console.log(cardAnterior.classList);
//     } else {
//       cardAnterior.classList.remove("virado");
//       card.classList.remove("virado");
//     }
//   } else {
//     card.classList.add("virado");
//   }
// }

// `<div class="card impar explodyparrot" onclick="virarCarta(this)">
//     <div class="front"><img src="/imagens/front.jpeg" /></div>
//     <div class="back"><img src="/imagens/explodyparrot.gif" />
//     </div>
//   </div>`,
//   `<div class="card impar explodyparrot" onclick="virarCarta(this)">
//         <div class="front"><img src="/imagens/front.jpeg" /></div>
//         <div class="back"><img src="/imagens/explodyparrot.gif" /></div>
//       </div>`,
//   `<div class="card impar bobrossparrot" onclick="virarCarta(this)">
//         <div class="front"><img src="/imagens/front.jpeg" /></div>
//         <div class="back"><img src="/imagens/bobrossparrot.gif" /></div>
//       </div>`,
//   `<div class="card impar bobrossparrot" onclick="virarCarta(this)">
//         <div class="front"><img src="/imagens/front.jpeg" /></div>
//         <div class="back"><img src="/imagens/bobrossparrot.gif" /></div>
//       </div>`,
//   `<div class="card impar fiestaparrot" onclick="virarCarta(this)">
//         <div class="front"><img src="/imagens/front.jpeg" /></div>
//         <div class="back"><img src="/imagens/fiestaparrot.gif" /></div>
//       </div>`,
//   `<div class="card impar fiestaparrot" onclick="virarCarta(this)">
//         <div class="front"><img src="/imagens/front.jpeg" /></div>
//         <div class="back"><img src="/imagens/fiestaparrot.gif" /></div>
//       </div>`,
