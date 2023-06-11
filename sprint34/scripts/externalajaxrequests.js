function loadGallery() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'photos.json', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      var galleryItems = response;
      var galleryHtml = '';

      galleryItems.forEach(function(item) {
        galleryHtml += '<div class="gallery-item" style="display: inline-block;">';
        
        galleryHtml += '<img src="' + item.url + '" alt="' + item.title + '" width="50" height="50">';
        
        galleryHtml += '</div>';
      });

      var galleryContainer = document.getElementById('yanmenu');
      galleryContainer.innerHTML += galleryHtml;
    }
  };
  xhr.send();
}

document.addEventListener('DOMContentLoaded', loadGallery);
