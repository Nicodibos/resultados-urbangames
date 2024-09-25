// Cargar datos del archivo JSON
fetch('https://nicodibos.github.io/resultados-urbangames/resultados.json')
  .then(response => response.json())
  .then(data => {
    // Llenar la tabla del Grupo A
    const grupoATable = document.getElementById('tabla-grupo-a');
    const grupoAData = data.grupo_a;
    grupoAData.forEach((equipo, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${equipo.equipo}</td>
        <td>${equipo.pj}</td>
        <td>${equipo.goles_mas}</td>
        <td>${equipo.goles_menos}</td>
        <td>${equipo.dif}</td>
        <td>${equipo.pts}</td>
      `;
      grupoATable.appendChild(row);
    });

    // Llenar la tabla del Grupo B
    const grupoBTable = document.getElementById('tabla-grupo-b');
    const grupoBData = data.grupo_b;
    grupoBData.forEach((equipo, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${equipo.equipo}</td>
        <td>${equipo.pj}</td>
        <td>${equipo.goles_mas}</td>
        <td>${equipo.goles_menos}</td>
        <td>${equipo.dif}</td>
        <td>${equipo.pts}</td>
      `;
      grupoBTable.appendChild(row);
    });
  })
  .catch(error => console.error('Error al cargar los datos:', error));
