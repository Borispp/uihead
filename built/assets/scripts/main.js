'use strict';

$('.select2').select2({
	minimumResultsForSearch: -1
});

var $substrateImages = $('.substrate-images');
var images = $substrateImages.data('images').split(',');
var imagesLength = images.length;
var substrateLiLength = $substrateImages.find('li').length;

$substrateImages.find('li').each(function (i, el) {
	var randomNumber = Math.floor(Math.random() * imagesLength);
	console.log(randomNumber);

	$(el).css({
		'background-image': 'url(' + images[randomNumber] + ')'
	});
});

setInterval(function () {
	var randomNumber = Math.floor(Math.random() * imagesLength);
	var randomLi = Math.floor(Math.random() * substrateLiLength);

	$substrateImages.find('li').eq(randomLi).css({
		'background-image': 'url(' + images[randomNumber] + ')'
	});
}, 2000);

var utils = function ($) {}(jQuery);

(function ($, utils) {})(jQuery, utils);