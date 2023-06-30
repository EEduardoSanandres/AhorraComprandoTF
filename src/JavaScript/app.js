function loadContent(page) {
  const contentDiv = document.getElementById('content');
  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        contentDiv.innerHTML = xhr.responseText;
      } else {
        contentDiv.innerHTML = 'Error al cargar el contenido.';
      }
    }
  };

  xhr.open('GET', 'public/' + page, true);
  xhr.send();
}

// Cargar el contenido de la página de inicio al cargar la aplicación
window.addEventListener('load', function() {
  loadContent('home.html');
});
