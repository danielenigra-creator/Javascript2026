import type { Atleta } from "./types";
import { eliminaAtleta, getAtletiVisibili, impostaInSquadra } from "./state";
import { salva } from "./storage";

const container = document.querySelector<HTMLDivElement>("#atleti-list")!;

function creaCard(atleta: Atleta): HTMLElement {
  // TODO: crea un <div class="card"> che contiene:
  //   - <img> con src = atleta.foto e alt = atleta.nome
  //   - <h3> con il nome
  //   - <p> con la disciplina
  //   - una checkbox "In squadra" (al change -> impostaInSquadra + renderAtleti)
  //   - un pulsante "Elimina" (al click -> eliminaAtleta + renderAtleti)
  // Se l'atleta e' in squadra, aggiungi la classe "in-squadra" alla card.
  const card = document.createElement("div");
  card.className = "card";
  return card;
}

/*
export function renderAtleti(): void {
  // TODO: svuota il container e aggiungi una card per ogni atleta visibile.
 list.innerHTML = "";

  //per ogni elemento controlla la t completata e se è attiva o completata e la mostra in base al filtro corrente
  const daMostrare = atleti.filter((a) => {
    if (filtroCorrente === "attive") return !a.completata;
    if (filtroCorrente === "completate") return a.completata;
    return true;
  });

  for (const todo of daMostrare) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completata;

    checkbox.addEventListener("change", () => {
      todo.completata = checkbox.checked;

      //mette il dato sul localStorage
      salva();

      renderAtleti();
    });
  }
}
*/