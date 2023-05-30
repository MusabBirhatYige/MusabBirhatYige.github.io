
$(document).ready(function() {
	$("#slider").bxSlider({
		auto: true,
		minSlides: 1,
		maxSlides: 1,
		slideWidth: 250,
		slideMargin: 10,
		randomStart: true,
		moveSlides: 1,
		pause: 3000,
		pager: true,
		pagerCustom: '#pager',
		pagerType: 'custom',
		pagerFormat: '{{current}}/{{total}}',
		onSliderLoad: function(currentIndex) {
			var totalSlides = this.getSlideCount();
			$('#pager').text((currentIndex + 1) + '/' + totalSlides);
		},
		onSlideAfter: function($slideElement, oldIndex, newIndex) {
			var totalSlides = this.getSlideCount();
			$('#pager').text((newIndex + 1) + '/' + totalSlides);
		}
	});
});
