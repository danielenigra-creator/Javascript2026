import type { Atleta, Filtro } from "./types";
import { carica, salva } from "./storage";
import { renderAtleti } from "./render";

// Lo stato vive SOLO in questo file.
// Dagli altri file si modifica esclusivamente con le funzioni esportate.
let atleti: Atleta[] = carica();
let filtroCorrente: Filtro = "tutti";

export function aggiungiAtleta(
  nome: string,
  disciplina: string,
  foto: string,
): void {
  // TODO: crea un nuovo Atleta (id univoco, inSquadra: false),
  // aggiungilo all'array e salva.

  atleti.push({
    id: Date.now(), // id univoco basato sul timestamp
    nome: nome,
    disciplina: disciplina,
    foto: foto,
    inSquadra: false,
  });
  salva(atleti);
}

export function eliminaAtleta(id: number): void {
  // TODO: rimuovi l'atleta con quell'id e salva.
  atleti = atleti.filter((atleta) => atleta.id !== id);
  salva(atleti);
  renderAtleti();
}

export function impostaInSquadra(id: number, inSquadra: boolean): void {
  // TODO: trova l'atleta, aggiorna inSquadra e salva.
}

export function impostaFiltro(filtro: Filtro): void {
  // TODO: aggiorna filtroCorrente.
}

export function getAtletiVisibili(): Atleta[] {
  // TODO: restituisci solo gli atleti che rispettano filtroCorrente.
  return [];
}
