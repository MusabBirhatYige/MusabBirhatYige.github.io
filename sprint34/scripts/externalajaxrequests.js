function loadGallery() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'photos.json', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      var galleryItems = response;
      var galleryHtml = '';
      galleryHtml+='HERE IS THE UNITED COLORS OF MUSABSOFT'

      galleryItems.forEach(function(item) {
        galleryHtml += '<div class="gallery-item" style="display: inline-block;">';
        galleryHtml += '<img src="' + item.url + '" alt="' + item.title + '" style="width: 5px; height: 5px;">';
        galleryHtml += '</div>';
      });

      var galleryContainer = document.getElementById('yanmenu');
      galleryContainer.innerHTML += galleryHtml;
    }
  };
  xhr.send();
}

document.addEventListener('DOMContentLoaded', loadGallery);
