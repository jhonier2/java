imagenesDado = [
  "dado1.png",
  "dado2.png",
  "dado3.png",
  "dado4.png",
  "dado5.png",
  "dado6.png",
];

dadoImg = document.getElementById('dado-img');

function lanzarDado() {
  resultado = Math.floor(Math.random() * 6) + 1;
  dadoImg.src = imagenesDado[resultado-1];
  document.getElementById('dado').innerText = `Has sacado un ${resultado}!`;
  historial = document.getElementById('resultados');
  li = document.createElement('li');
  li.innerText = `Resultado: ${resultado}`;
  historial.appendChild(li);
}

botonLanzar = document.getElementById('lanzar');
botonLanzar.addEventListener('click', lanzarDado);

botonHistorial = document.getElementById('historial');
botonHistorial.addEventListener('click', () => {
  historial = document.getElementById('resultados');
  historial.style.display = historial.style.display === 'none' ? 'block' : 'none';
});
