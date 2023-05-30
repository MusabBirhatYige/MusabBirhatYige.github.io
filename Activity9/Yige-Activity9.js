$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});

	// set up event handlers for links
	$("#image_list a").click(function(evt) {
		evt.preventDefault();

		var imageURL = $(this).attr("href");
		var caption = $(this).attr("title");

		// Fade out the caption and image
		$("#caption, #image").fadeOut(1000, function() {
			// Set new image source and caption
			$("#image").attr("src", imageURL);
			$("#caption").text(caption);

			// Fade in the caption and image
			$("#caption, #image").fadeIn(1000);
		}).fadeIn(0); // Add initial fade-in to avoid displaying the new content before fading out
	});

	// move focus to first thumbnail
	$("li:first-child a").focus();
});
