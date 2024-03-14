{// Update the document title
document.title = 'Seele Guía y Detalles | Honkai: Star Rail | StarDust Blog';
}

// Garantiza que todos los elementos HTML se carguen antes de ejecutar el código JavaScript
window.onload = function() {

 {// Encabezado
  const encabezadoHeader = document.getElementById('Encabezado');
  const Encabezado = document.createElement('h1');
  Encabezado.classList.add('Seele-title');
  encabezadoHeader.appendChild(Encabezado);
  Encabezado.textContent = 'Seele';
 }

 {// TituloUno Habilidades
  const habilidadesHeader = document.getElementById('Habilidades');
  const Habilidades = document.createElement('h1');
  habilidadesHeader.appendChild(Habilidades);
  Habilidades.textContent = 'Habilidades';
 }

 {// Primera habilidad
   const habilidad1Nombre= document.getElementById('primeraHabilidadNombre');
   habilidad1Nombre.classList.add('indent');
   habilidad1Nombre.classList.add('Habilidad1Nombre-title');
   habilidad1Nombre.textContent = '1. Trancazo Nvl 7';
  

   const habilidad1Características= document.getElementById('primeraHabilidadCaracterísticas');
   habilidad1Características.classList.add('indent');
   habilidad1Características.classList.add('Habilidad1Características-title');
   habilidad1Características.textContent = 'ATQ individual | Recarga de energía 20 | Ruptura 30';

   const habilidad1 = document.getElementById('primeraHabilidad');
   habilidad1.classList.add('indent');
   habilidad1.textContent = 'Inflige un 110% del ATQ de Seele como Daño Cuántico a un enemigo.';
 }
 
 {// Segunda habilidad
   const habilidad2Nombre= document.getElementById('segundaHabilidadNombre');
   habilidad2Nombre.classList.add('indent');
   habilidad2Nombre.classList.add('Habilidad2Nombre-title');
   habilidad2Nombre.textContent = '2. Hoja envainada Nvl 12';

   const habilidad2Características= document.getElementById('segundaHabilidadCaracterísticas');
   habilidad2Características.classList.add('indent');
   habilidad2Características.classList.add('Habilidad2Características-title');
   habilidad2Características.textContent = 'ATQ individual | Recarga de energía 30 | Ruptura 60';

   const habilidad2 = document.getElementById('segundaHabilidad');
   habilidad2.classList.add('indent'); 
   habilidad2.textContent = 'Seele aumenta su VEL en un 25% durante 2 turnos e inflige un 242% de su ATQ como Daño Cuántico a un enemigo.';
  }

 {// Tercera habilidad
  const habilidad3Nombre= document.getElementById('terceraHabilidadNombre');
  habilidad3Nombre.classList.add('indent');
  habilidad3Nombre.classList.add('Habilidad3Nombre-title');
  habilidad3Nombre.textContent = '3. Mariposa desbocada Nvl 12';

  const habilidad3Características= document.getElementById('terceraHabilidadCaracterísticas');
  habilidad3Características.classList.add('indent');
  habilidad3Características.classList.add('Habilidad3Características-title');
  habilidad3Características.textContent = 'ATQ individual | Coste de energía 120 / Recarga 5 | Ruptura 90';

  const habilidad3 = document.getElementById('terceraHabilidad');
  habilidad3.classList.add('indent');
  habilidad3.textContent = 'Seele entra en un estado potenciado e inflige un 459% de su ATQ como Daño Cuántico a un enemigo.';
 }

 {// Talento
  const talentoNombre = document.getElementById('talentoNombre');
  talentoNombre.classList.add('indent')
  talentoNombre.classList.add('TalentoNombre-title');
  talentoNombre.textContent = 'Talento';

  const talentoCaracterísticas= document.getElementById('talentoCaracterísticas');
  talentoCaracterísticas.classList.add('indent');
  talentoCaracterísticas.classList.add('TalentoCaracterísticas-title');  
  talentoCaracterísticas.textContent = 'Potenciación';

  const talento = document.getElementById('Talento');
  talento.classList.add('indent');
  talento.innerHTML = `Al eliminar a un objetivo enemigo usando su ATQ básico, habilidad básica o habilidad definitiva, obtiene inmediatamente<br> un turno adicional y entra en un estado potenciado. Este estado hace que el daño de los ataques de Seele aumente en un 88% <br> durante 1 turno. <br> Los enemigos eliminados durante el turno adicional obtenido con su talento Reaparición no activarán el talento otra vez.`;

 }
}
