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
  Encabezado.textContent = 'Cafes';
}

{// TituloUno
  const header = document.getElementById('TituloUno');
  const TituloUno = document.createElement('h1');
  TituloUno.classList.add('TituloUno-title');
  header.appendChild(TituloUno);
  TituloUno.textContent = 'Honkai Star Rail';
}

{// Parrafos
  const parrafo = document.getElementById('miParrafo');
  parrafo.textContent = 'Personajes';

  const parrafos = document.getElementById('segundoParrafo');
  parrafos.textContent = 'Holiwis';
}

{// Define a function to run all the code at once
  Encabezado();
  TituloUno();
  Parrafos();
}