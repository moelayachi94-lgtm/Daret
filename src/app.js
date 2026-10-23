// Daret — simulateur. Ton code commence ici.
// Le HTML (index.html) est déjà intégré : lis-le, repère les id et les data-*, puis fais-le vivre.
const form = document.querySelector("#daret-form");
const nom = document.getElementById("nom-cercle");
const nomerror = document.getElementById("nom-cercle-erreur");
const cotisation = document.getElementById("cotisation");
const cotisationEreur = document.getElementById("cotisation-erreur");
const date = document.querySelector("#date-debut");
const dateError = document.querySelector("#date-debut-erreur");
const participants = document.getElementById("participants-liste");
const participantsErreur = document.getElementById("participants-erreur");
const ajouterParticipant = document.getElementById("ajouter-participant");
const nameRegex = /^[\p{L}0-9 -]+$/u;

nom.addEventListener("input", () => {
  nom.value = nom.value.trim();
  if (nom.value.length < 3 && nom.value.length > 0) {
    nomerror.classList.remove("hidden");
    nomerror.textContent = "Le nom doit contenir au moins 3 caractères.";
  } else if (nom.value.length > 40) {
    nomerror.classList.remove("hidden");
    nomerror.textContent =
      "Le nom du cercle ne doit pas dépasser 40 caractères.";
  } else if (!nameRegex.test(nom.value)) {
    nomerror.classList.remove("hidden");
    nomerror.textContent = "Nom est invalide";
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
  if (
    userYear < year ||
    (userYear === year && userMonth < month) ||
    (userMonth === month && userDay < day)
  ) {
    dateError.classList.remove("hidden");
    dateError.textContent = " aujourd'hui ou plus tard";
  } else {
    dateError.classList.add("hidden");
  }
});

/*--------------------------------------US-02-------------------------------------- */

ajouterParticipant.addEventListener("click", creeParticipant);
function creeParticipant() {
  if (participants.children.length >= 20) {
    participantsErreur.classList.remove("hidden");
    participantsErreur.textContent =
      "Vous ne pouvez pas créer plus de 20 utilisateurs.";
    return;
  }
  const itemList = document.createElement("li");
  const participantInput = document.createElement("input");
  const participantRemove = document.createElement("button");
  const participantsMsg = document.createElement("p");
  participantInput.type = "text";
  participantInput.classList.add(
    "mt-1",
    "w-full",
    "rounded",
    "border",
    "px-3",
    "py-2",
  );
  participantInput.placeholder = "enter le prénom";

  participantRemove.type = "button";
  participantRemove.style.marginTop = "10px";
  participantRemove.classList.add(
    "border",
    "w-full",
    "rounded",
    "mt-5",
    "py-2",
  );
  participantRemove.textContent = "Remove";

  participantInput.addEventListener("input", () => {
    const name = participantInput.value.trim();
    const nameRegex = /^[\p{L}'-]+$/u;
    if (name < 2 || name > 30) {
      participantsMsg.classList.remove("hidden");
      participantsMsg.textContent = "prénom entre 2 et 30 lettres";
    } else if (name === name) {
      participantsMsg.classList.remove("hidden");
      participantsMsg.textContent = "Ne répétez pas les noms.";
    } else if (!nameRegex.text(name)) {
      participantsMsg.classList.remove("hidden");
      participantsMsg.textContent = "Nom invalid";
    } else {
      participantsMsg.classList.add("hidden");
    }
  });

  itemList.appendChild(participantInput);
  itemList.appendChild(participantRemove);
  itemList.appendChild(participantsMsg);
  participants.appendChild(itemList);
}
participants.addEventListener("click", (event) => {
  const bouton = event.target;
  if (bouton.tagName === "BUTTON") {
    if (participants.children.length > 2) {
    }
  }
});
