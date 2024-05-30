// Funció que s'executa quan es fa submit del formulari
function actualitzarSalari() {
  // Recollim les dades del formulari
  const nom = document.getElementById("nom").value;
  const edat = parseInt(document.getElementById("edat").value);
  const salariActual = parseFloat(document.getElementById("salari").value);

  // Calcularem el nou salari segons les condicions
  let salariNou;
  if (salariActual > 2000) {
    salariNou = salariActual;
  } else if (salariActual >= 1000 && salariActual <= 2000) {
    if (edat >= 45) {
      salariNou = salariActual * 1.03;
    } else {
      salariNou = salariActual * 1.05;
    }
  } else if (salariActual < 1000) {
    if (edat < 30) {
      salariNou = 1100;
    } else if (edat >= 30 && edat <= 45) {
      salariNou = salariActual * 1.12;
    } else {
      salariNou = salariActual * 1.15 ;
    }
  }


  // Mostrem el resultat
  document.getElementById("resultat").innerHTML = `El nou salari de ${nom} és de ${salariNou.toFixed(2)} €`;


// Afegim l'addEventListener
document.getElementById("formulari").addEventListener("submit", function(event) {
  event.preventDefault();
  actualitzarSalari();
});
}