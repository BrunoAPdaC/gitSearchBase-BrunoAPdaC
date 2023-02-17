export function renderProfile(user, repos) {
  let main = document.querySelector("main");
  let containerProfile = document.createElement("div");
  let span = document.createElement("span");
  let img = document.createElement("img");
  let name = document.createElement("h1");
  let buttonTrade = document.createElement("button");
  let containerRepository = document.createElement("div");
  containerRepository.classList.add("containerRepository");

  containerProfile.classList.add("containerProfile");
  img.classList.add("imgProfile");
  img.src = user.avatar_url;

  name.innerText = user.login;
  span.appendChild(img);
  span.appendChild(name);
  buttonTrade.classList.add("tradeUser");
  buttonTrade.innerHTML = "Trocar de usuário";
  buttonTrade.addEventListener("click", () => {
    window.location.replace(`/`);
  });
  containerProfile.appendChild(span);
  containerProfile.appendChild(buttonTrade);

  repos.forEach((elemento) => {
    let repository = document.createElement("div");
    repository.classList.add("repository");
    let title = document.createElement("h2");
    let description = document.createElement("p");
    let buttonRepository = document.createElement("button");
    title.innerText = elemento.name;
    description.innerText = elemento.description;
    buttonRepository.innerText = "Repositório";
    buttonRepository.addEventListener("click", () => {
      window.location.replace(elemento.html_url);
    });
    repository.appendChild(title);
    repository.appendChild(description);
    repository.appendChild(buttonRepository);
    containerRepository.appendChild(repository);
  });

  main.appendChild(containerProfile);
  main.appendChild(containerRepository);
}
