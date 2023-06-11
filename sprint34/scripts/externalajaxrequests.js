function loadGallery() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'sprint34\scripts\photos.json', true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var galleryItems = response;
        var galleryHtml = '';

        galleryItems.forEach(function (item) {
          galleryHtml += '<div class="gallery-item">';
          galleryHtml += '<h3>' + item.title + '</h3>';
          galleryHtml += '<img src="' + item.url + '" alt="' + item.title + '">';
          galleryHtml += '<p>' + item.description + '</p>';
          galleryHtml += '</div>';
        });

        var galleryContainer = document.getElementById('yanmenu');
        galleryContainer.innerHTML += galleryHtml;
      }
    };
    xhr.send();
  }

  document.addEventListener('DOMContentLoaded', loadGallery);

