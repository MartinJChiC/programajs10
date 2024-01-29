// Función para agregar un nombre al localStorage y actualizar la lista en pantalla
function agregarNombre() {
  var nombreInput = document.getElementById('nombre');
  var nombre = nombreInput.value;

  // Obtener la lista actual de nombres desde el localStorage
  var listaNombres = JSON.parse(localStorage.getItem('nombres')) || [];

  // Agregar el nuevo nombre a la lista
  listaNombres.push(nombre);

  // Guardar la lista actualizada en el localStorage
  localStorage.setItem('nombres', JSON.stringify(listaNombres));

  // Limpiar el input
  nombreInput.value = '';

  // Actualizar la lista en pantalla
  mostrarNombres();
}

// Función para mostrar la lista de nombres en la pantalla
function mostrarNombres() {
  var listaNombres = JSON.parse(localStorage.getItem('nombres')) || [];
  var listaElemento = document.getElementById('listaNombres');

  // Limpiar la lista actual
  listaElemento.innerHTML = '';

  // Agregar cada nombre como un elemento de lista
  listaNombres.forEach(function(nombre) {
      var li = document.createElement('li');
      li.textContent = nombre;
      listaElemento.appendChild(li);
  });
}

// Mostrar la lista al cargar la página
mostrarNombres();