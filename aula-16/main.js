document.addEventListener("DOMContentLoaded", function () {
  const username = "gabjohann";
  const apiUrl = `https://api.github.com/users/${username}`;

  // Requisição à API GitHub
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // imagem
      const profileImage = document.getElementsByClassName("profile-image");
      profileImage.alt = data.name || username;

      // nome
      const nameElement = document.getElementById("name");
      nameElement.textContent = data.name || username;

      // bio
      const bioElement = document.getElementById("bio");
      bioElement.textContent = data.bio || "Sem bio disponível";

      // seguidores
      const followersElement = document.getElementById("followers");
      followersElement.innerHTML = `${data.followers} seguidores`;

      // repos
      const reposElement = document.getElementById("repos");
      reposElement.innerHTML = `${data.public_repos} repositórios`;

      // gists
      const gistsElement = document.getElementById("gists");
      gistsElement.innerHTML = `${data.public_gists} gists`;
    })
    .catch((error) => {
      console.error("Erro ao carregar os dados do GitHub", error);
    });
});
