import type { Atleta } from "./types";

// TODO: scegli una chiave per il localStorage (es. "atleti")
const CHIAVE = "atleti";

export function salva(atleti: Atleta[]): void {
  // TODO: salva l'array in localStorage (ricorda JSON.stringify)
  localStorage.setItem(CHIAVE, JSON.stringify(atleti));
}
/*
Funzione "carica" che restituisce 
l'array "Atleta" 
*/
export function carica(): Atleta[] {
  // TODO: leggi da localStorage e restituisci l'array.
  // Se non c'e' nulla di salvato, restituisci un array vuoto.
  const dati = localStorage.getItem(CHIAVE);

  //trasforma la stringa in un array di oggetti Atleta
  if (dati) {
    return JSON.parse(dati);
  }
  return [];
}
