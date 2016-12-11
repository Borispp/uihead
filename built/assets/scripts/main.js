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
			e.preventDefault();
			_this.show.call(this, e);
		});
		$elements.close.on('click', function (e) {
			e.preventDefault();
			_this.hide.call(this, e);
		});
	},

	show: function show(e) {
		$($(this).data('show')).removeClass('-hide');
		$elements.body.addClass('-popup-active');
	},

	hide: function hide(e) {
		$($(this).data('close')).addClass('-hide');
		$elements.body.removeClass('-popup-active');
	}
};

showElement.bindUIActions();

// ==============================================
// Subscription images
// ==============================================

var substrateImages = {
	init: function init() {
		this.$substrateImages = $('.substrate-images');
		this.images = this.$substrateImages.data('images').split(',');
		this.imagesLength = this.images.length;
		this.substrateLiLength = this.$substrateImages.find('li').length;

		this.fillImages();
		this.changeImage();
	},

	fillImages: function fillImages() {
		var _this = this;

		this.$substrateImages.find('li').each(function (i, el) {
			var randomNumber = Math.floor(Math.random() * _this.imagesLength);

			$(el).css({
				'background-image': 'url(' + _this.images[randomNumber] + ')'
			});
		});
	},

	changeImage: function changeImage() {
		var _this = this;

		setInterval(function () {
			var randomNumber = Math.floor(Math.random() * _this.imagesLength);
			var randomLi = Math.floor(Math.random() * _this.substrateLiLength);

			_this.$substrateImages.find('li').eq(randomLi).css({
				'background-image': 'url(' + _this.images[randomNumber] + ')'
			});
		}, 2000);
	}
};

if ($('.substrate-images').length) {
	substrateImages.init();
}

// ==============================================
// Emoji random
// ==============================================

var emojiRand = {
	emoji: ['emoji-kiss', 'emoji-laugh', 'emoji-wink', 'emoji-kiss2', 'emoji-laugh2', 'emoji-laugh3'],

	init: function init() {
		$('.site-logo .emoji').addClass(this.emoji[Math.floor(Math.random() * 6)]);
	}
};

emojiRand.init();

// ==============================================
// Stickit header
// ==============================================
$(window).scroll(function () {
	console.log(window.pageYOffset);
	if (window.pageYOffset > 50) {
		$('.header-main').addClass('-stickit');
	} else {
		$('.header-main').removeClass('-stickit');
	}
});