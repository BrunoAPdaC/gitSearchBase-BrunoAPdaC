export async function getProfile(nameProfile) {
  let profile = await fetch(`https://api.github.com/users/${nameProfile}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok)
      response.json().then((res) => {
        localStorage.clear(`searchProfile`);
        localStorage.setItem(`searchProfile`, JSON.stringify(res));
        window.location.replace(`../src/pages/profile.html`);
      });
    else {
      window.location.replace(`../src/pages/error.html`);
    }
  });

  return profile;
}

export async function getRepository(link) {
  // let repo = await fetch(`https://api.github.com/users/${user}/repos`, {
  let repo = await fetch(link, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      localStorage.clear(`repos`);
      localStorage.setItem(`repos`, JSON.stringify(response));
      return response;
    });
  return repo;
}
