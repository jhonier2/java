function lanzarDado() {
    if (animacion) return;
    animacion = setInterval(() => {
      dadoElem.textContent = dado[Math.floor(Math.random() * 6)];
    }, 100);
    setTimeout(() => {
      clearInterval(animacion);
      const resultado = Math.floor(Math.random() * 6) + 1;
      resultados.push(resultado);
      resultadosElem.innerHTML = resultados.map(r => `<li>${r}</li>`).join("");
      dadoElem.textContent = "";
      dadoImg.src = `dado${resultado}.png`;
      animacion = null;
    }, 1000);
  }
  