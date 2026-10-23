// Daret — simulateur. Ton code commence ici.
// Le HTML (index.html) est déjà intégré : lis-le, repère les id et les data-*, puis fais-le vivre.
const form = document.querySelector("#daret-form");
const nom = document.getElementById("nom-cercle");
const nomerror = document.getElementById("nom-cercle-erreur");
const cotisation = document.getElementById("cotisation");
const cotisationEreur = document.getElementById("cotisation-erreur");
const date = document.querySelector("#date-debut");
const dateError = document.querySelector("#date-debut-erreur");
const nameRegex = /^[\p{L}0-9 -]+$/u;

nom.addEventListener("input", () => {
  nom.value = nom.value.trim();
  if (nom.value.length < 3 && nom.value.length > 0) {
    nomerror.classList.remove("hidden");
    nomerror.textContent = "Le nom doit contenir au moins 3 caractères.";
  } else if (nom.value.length > 40) {
    nomerror.classList.remove("hidden");
    nomerror.textContent = "wa gotlk zbt la dkhl";
  } else if (!nameRegex.test(nom.value)) {
    nomerror.classList.remove("hidden");
    nomerror.textContent = "wah";
  } else {
    nomerror.classList.add("hidden");
    nomerror.textContent = "";
  }
});

cotisation.addEventListener("input", () => {
  if (cotisation.value < 100) {
    cotisationEreur.classList.remove("hidden");
    cotisationEreur.textContent = "entier 100-50 000";
  } else if (Number.isInteger(cotisation.value)) {
    cotisationEreur.classList.remove("hidden");
    cotisationEreur.textContent = "La cotisation doit être un nombre entier.";
  } else if (cotisation.value > 50000) {
    cotisationEreur.classList.remove("hidden");
    cotisationEreur.textContent = "entier 100-50 000";
  } else {
    cotisationEreur.classList.add("hidden");
  }
});

date.addEventListener("input", () => {
  let today = new Date().toISOString().split("T")[0];
  today = today.split("-");
  const year = today[0];
  const month = today[1];
  const day = today[2];
  let userDate = date.value.split("-");
  const userYear = userDate[0];
  const userMonth = userDate[1];
  const userDay = userDate[2];
  if (userYear < year) {
    dateError.classList.remove("hidden");
    dateError.textContent = " aujourd'hui ou plus tard";
  } else {
    dateError.classList.add("hidden");
  }
});
