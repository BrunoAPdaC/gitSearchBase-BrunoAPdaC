import { renderProfile } from "./render.js";
import { getProfile, getRepository } from "./requests.js";

export async function searchProfile() {
  let input = document.querySelector(".nomeUser");
  let button = document.querySelector(".irPerfil");
  button.addEventListener("click", async () => {
    let profile = await getProfile(input.value);
  });
}

export function newProfile() {
  let input = document.querySelector(".nomeUser");
  let button = document.querySelector(".irPerfil");
  button.addEventListener("click", () => {
    renderProfile(input.value);
  });
}

async function show() {
  let profile = JSON.parse(localStorage.getItem("searchProfile"));
  let x = await getRepository(profile.repos_url);
  console.log(profile.repos_url);
  console.log(x);
  renderProfile(profile, x);
}
show();

function showRepository() {
  let repos = JSON.parse(localStorage.getItem("searchProfile"));
  newProfile(repos);
}
showRepository();
