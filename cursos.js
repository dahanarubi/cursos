document.addEventListener('DOMContentLoaded', cargarCursos);

async function cargarCursos() {
  try {
    const r = await fetch('/api/cursos');
    const cursos = await r.json();

    const contenedor = document.getElementById('contenedorCursos');

    contenedor.innerHTML = cursos.map(curso => `
      <div class="curso-card">
        <div class="curso-duracion">${curso.duracion}</div>
        <h3>${curso.nombre}</h3>
        <div class="curso-detalles">
          <span><strong>Instructor:</strong> ${curso.instructor}</span>
          <span><strong>Nivel:</strong> ${curso.nivel}</span>
        </div>
      </div>
    `).join('');
  } catch (err) {
    console.error(err);
  }
}