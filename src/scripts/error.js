function voltar() {
  let botao = document.querySelector(".new");
  botao.addEventListener("click", () => {
    window.location.replace(`/`);
  });
}
voltar();
