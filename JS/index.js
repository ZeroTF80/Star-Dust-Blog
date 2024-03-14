{// Update the document title
  document.title = 'Blog Honkai Star Rail';
}

// Garantiza que todos los elementos HTML se carguen antes de ejecutar el código JavaScript
window.onload = function() {

 {// Encabezado
  const header = document.getElementById('Encabezado');
  const Encabezado = document.createElement('h1');
  Encabezado.classList.add('Encabezado-title');
  header.appendChild(Encabezado);
  Encabezado.textContent = 'Star Dust Blog';
 }

 {// TituloUno HsR
  const header = document.getElementById('TituloUno');
  const TituloUno = document.createElement('h1');
  TituloUno.classList.add('TituloUno-title');
  header.appendChild(TituloUno);
  TituloUno.textContent = 'Honkai Star Rail';
 }

 {// Categorías HsR
  const damageDealer = document.getElementById('Damage Dealer');
  damageDealer.textContent = 'Damage Dealer';
  
  const specialist = document.getElementById('Specialist');
  specialist.textContent = 'Specialist';

  const amplifier = document.getElementById('Amplifier');
  amplifier.textContent = 'Amplifier';

  const sustain = document.getElementById('Sustain');
  sustain.textContent = 'Sustain';
 }
 {// TituloDos Personajes HsR
 const header = document.getElementById('Personajes');
 const personajes = document.createElement('h1');
 personajes.classList.add('Personajes-title');
 header.appendChild(personajes);
 personajes.textContent = 'Personajes';
 }
}
