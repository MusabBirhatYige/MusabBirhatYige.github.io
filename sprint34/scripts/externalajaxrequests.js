function loadGallery() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'photos.json', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      var galleryItems = response;
      var galleryHtml = '';
      galleryHtml+='<p>HERE IS THE UNITED COLORS OF MUSABSOFT</p>'

      galleryItems.forEach(function(item) {
        galleryHtml += '<div class="item" style="display: inline-block; width=5px height=5px">';
        galleryHtml += '<img src="' + item.url + ' "style="width: 5px; height: 5px;">';
        galleryHtml += '</div>';
      });

      var galleryContainer = document.getElementById('yanmenu');
      galleryContainer.innerHTML += galleryHtml;
    }
  };
  xhr.send();
}

document.addEventListener('DOMContentLoaded', loadGallery);
