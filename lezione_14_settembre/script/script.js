const button = document.getElementById("temaBtn");


let tema = localStorage.getItem("tema");

if (tema === "scuro") {
  document.body.classList.add("scuro");
} else {
  document.body.classList.add("chiaro");
}


button.addEventListener("click", () => {
  if (document.body.classList.contains("chiaro")) {
    document.body.classList.remove("chiaro");
    document.body.classList.add("scuro");
    localStorage.setItem("tema", "scuro");
  } else {
    document.body.classList.remove("scuro");
    document.body.classList.add("chiaro");
    localStorage.setItem("tema", "chiaro");
  }
});
