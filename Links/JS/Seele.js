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
  Encabezado.textContent = 'Seele';
}

{// TituloUno
  const header = document.getElementById('Habilidades');
  const Habilidades = document.createElement('h1');
  Habilidades.classList.add('Habilidades-title');
  header.appendChild(Habilidades);
  Habilidades.textContent = 'Habilidades';
}

{// Parrafos
  window.onload = function() {
    const habilidad1 = document.getElementById('primeraHabilidad');
    habilidad1.textContent = '1. Inflige un 130% del ATQ de Seele como Daño Cuántico a un enemigo.';
  
    const habilidad2 = document.getElementById('segundaHabilidad');
    habilidad2.textContent = '2. Seele aumenta su VEL en un 25% durante 2 turnos e inflige un 275% de su ATQ como Daño Cuántico a un enemigo.';
  }
}

{// Define a function to run all the code at once
  Encabezado();
  TituloUno();
  Parrafos();
}
