{// Update the document title
  document.title = 'Blog Honkai Star Rail';
}

{// Set the background color
document.body.style.backgroundColor = 'gray';
}

{// Encabezado
  const header = document.getElementById('Encabezado');
  const Encabezado = document.createElement('h1');
  Encabezado.classList.add('Encabezado-title');
  header.appendChild(Encabezado);
  Encabezado.textContent = 'Star Dust Blog';
}

{// TituloUno
  const header = document.getElementById('TituloUno');
  const TituloUno = document.createElement('h1');
  TituloUno.classList.add('TituloUno-title');
  header.appendChild(TituloUno);
  TituloUno.textContent = 'Honkai Star Rail';
}

{// Parrafos
  window.onload = function() {
    const parrafo = document.getElementById('miParrafo');
    parrafo.textContent = 'Personajes';
  
    const parrafos = document.getElementById('segundoParrafo');
    parrafos.textContent = 'Holiwis';

    const header = document.getElementById('Personajes');
    const personajes = document.createElement('h1');
    personajes.classList.add('Personajes-title');
    header.appendChild(personajes);
    personajes.textContent = 'Personajes';
  }
}

{// Define a function to run all the code at once
  Encabezado();
  TituloUno();
  Parrafos();
}
