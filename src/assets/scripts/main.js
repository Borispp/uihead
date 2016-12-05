$('.select2').select2({
	minimumResultsForSearch: -1
});

var $substrateImages = $('.substrate-images');
var images = $substrateImages.data('images').split(',')
var imagesLength = images.length
var substrateLiLength = $substrateImages.find('li').length

$substrateImages.find('li').each(function (i, el) {
	var randomNumber = Math.floor(Math.random() * imagesLength)
	console.log(randomNumber);

	$(el).css({
		'background-image': 'url(' + images[randomNumber] + ')'
	})
});

setInterval(function () {
	var randomNumber = Math.floor(Math.random() * imagesLength)
	var randomLi = Math.floor(Math.random() * substrateLiLength)

	$substrateImages.find('li').eq(randomLi).css({
		'background-image': 'url(' + images[randomNumber] + ')'
	})

}, 2000)



var utils = (function ($) {
	"use strict";

	// var $elements = {
	// 	body: $('body'),
	// 	close: $('#overlay, .close')
	// }
	//
	// var scrollToHeadline = function (target) {
	// 	var y = 0;
	//
	// 	if(target && $(target).length) {
	// 		y = $(target).offset().top;
	// 		$('body').animate({ scrollTop: y }, 500, 'swing')
	// 	}
	// }
	//
	// return {
	// 	$elements: $elements,
	// 	scrollToHeadline: scrollToHeadline
	// }

})(jQuery);

(function ($, utils) {
	"use strict";

	// utils.$elements.close.on('click', function () {
	// 	utils.imagePopup.close()
	// });

	// Scroll in menu
	// utils.$elements.summaryList.find('a').on('click', function (e) {
	// 	e.preventDefault();
	// 	utils.scrollToHeadline($(this).attr('href'));
	// });

})(jQuery, utils);
