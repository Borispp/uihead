'use strict';

// ==============================================
// Init common plugins
// ==============================================

$('.select2').select2({
	minimumResultsForSearch: -1
});

// ==============================================
// Elements
// ==============================================
var $elements = {
	body: $('body'),
	show: $('[data-show]'),
	close: $('[data-close]')
};

// ==============================================
// Open popups or menu
// ==============================================

var showElement = {

	bindUIActions: function bindUIActions() {
		var _this = this;
		$elements.show.on('click', function (e) {
			_this.show.call(this, e);
		});
		$elements.close.on('click', function (e) {
			_this.hide.call(this, e);
		});
	},

	show: function show(e) {
		e.preventDefault();
		$($(this).data('show')).removeClass('-hide');
		$elements.body.addClass('-popup-active');
	},

	hide: function hide(e) {
		e.preventDefault();
		$($(this).data('close')).addClass('-hide');
		$elements.body.removeClass('-popup-active');
	}
};

showElement.bindUIActions();

// ==============================================
// Subscription images
// ==============================================

var $substrateImages = $('.substrate-images');
var images = $substrateImages.data('images').split(',');
var imagesLength = images.length;
var substrateLiLength = $substrateImages.find('li').length;

$substrateImages.find('li').each(function (i, el) {
	var randomNumber = Math.floor(Math.random() * imagesLength);

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

var emoji = ['emoji-kiss', 'emoji-laugh', 'emoji-wink', 'emoji-kiss2', 'emoji-laugh2', 'emoji-laugh3'];
$('.site-logo .emoji').addClass(emoji[Math.floor(Math.random() * 6)]);