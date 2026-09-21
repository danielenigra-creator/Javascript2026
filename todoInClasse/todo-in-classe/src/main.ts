import "./style.css";

interface Todo {
  id: number;
  testo: string;
  completata: boolean;
}

//conterrà tutti i todo
let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

//filtro di partenza
type Filtro = "tutte" | "attive" | "completate";

//type Filtro = "tutte" | "attive" | "completate";

let filtroCorrente: Filtro = "tutte";

const input = document.querySelector<HTMLInputElement>("#todo-input")!;
const list = document.querySelector<HTMLUListElement>("#todo-list")!;
const addBtn = document.querySelector<HTMLButtonElement>("#add-btn")!;

//Controlla che gli elementi HTML esistano
if (!input || !list || !addBtn) {
  throw new Error("Elementi HTML mancanti");
}

//funzione per salvare i todo nel localStorage
function salva() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

//Aggiunge l'evento al click del bottone per aggiungere un nuovo todo
//Abbiamo usato una arrowFunction
addBtn.addEventListener("click", () => {
  const testo = input.value.trim();

  //controlliamo se l'input è vuoto allora ritono e basta
  if (testo === "") return;

  //dichiariamo una costante con chiave e valore
  const nuova: Todo = {
    id: Date.now(),
    testo,
    completata: false,
  };

  todos.push(nuova);
  input.value = "";

  //mette il dato sul localStorage
  salva();

  //Aggiorna la mia interfaccia
  renderTodos();
});

//Aggiunge evento sia che facciamo click sul mouse oppure invio su tastiera
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

//funzione che rirenderizza la lista di cosa da fare
//ogni volta che aggiungo modifico o cancello
function renderTodos() {
  list.innerHTML = "";

  //per ogni elemento controlla la t completata e se è attiva o completata e la mostra in base al filtro corrente
  const daMostrare = todos.filter((t) => {
    if (filtroCorrente === "attive") return !t.completata;
    if (filtroCorrente === "completate") return t.completata;
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

      renderTodos();
    });

    const span = document.createElement("span");
    span.textContent = todo.testo;

    if (todo.completata) {
      span.style.textDecoration = "line-through";
      span.style.opacity = "0.6";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Elimina";

    deleteBtn.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);

      salva();
      renderTodos();
    });

    li.append(checkbox, span, deleteBtn);
    list.appendChild(li);
  }
}

//Render iniziale della lista
renderTodos();
document.querySelector("#filter-all")!.addEventListener("click", () => {
  filtroCorrente = "tutte";
  renderTodos();
});

document.querySelector("#filter-active")!.addEventListener("click", () => {
  filtroCorrente = "attive";
  renderTodos();
});

document.querySelector("#filter-done")!.addEventListener("click", () => {
  filtroCorrente = "completate";
  renderTodos();
});

function carica() {
  const salvati = localStorage.getItem("todos");
  if (salvati) {
    todos = JSON.parse(salvati) as Todo[];
  }
}

carica();
renderTodos();
