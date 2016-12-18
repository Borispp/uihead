'use strict';

// ==============================================
// Init common plugins
// ==============================================

// Select2
$('.select2').select2({
	minimumResultsForSearch: -1
});

// Copy clipboard
if (Clipboard) {
	var clipboard = new Clipboard('[data-clipboard-text]');
	clipboard.on('success', function (e) {
		$.growl.notice({ title: "Copied!", message: e.text });
	}).on('error', function (e) {
		$.growl.error({ message: 'Something went wrong' });
	});
}

// Massonry
$('.blog-items').masonry({
	itemSelector: '.blog-item'
});

// ==============================================
// Elements
// ==============================================
var $elements = {
	page: $('html, body'),
	body: $('body'),
	show: $('[data-show]'),
	close: $('[data-close]'),
	tab: $('[data-tab]'),
	header: $('.header-main')
};

// ==============================================
// Open popups or menu
// ==============================================

var showElement = function () {
	var methods = {
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

	return methods.bindUIActions();
}();

// ==============================================
// Change Tab
// ==============================================

var changeTab = function () {

	var methods = {
		bindUIActions: function bindUIActions() {
			var _this = this;
			$elements.tab.on('click', function (e) {
				e.preventDefault();
				_this.show.call(this, e);
			});
		},

		show: function show(e) {
			var tabGroup = $(this).data('tab-group');
			var tab = $(this).data('tab');

			$('[data-tab-group="' + tabGroup + '"]').removeClass('-active');
			$('[data-tab="' + tab + '"]').addClass('-active');
			$(tabGroup).addClass('-hide');
			$(tab).removeClass('-hide');
		}
	};

	return methods.bindUIActions();
}();

// ==============================================
// Subscription images
// ==============================================

var substrateImages = function () {
	var methods = {
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
		return methods.init();
	}
}();

// ==============================================
// Emoji random
// ==============================================

var emojiRand = function () {
	var methods = {
		emoji: ['emoji-kiss', 'emoji-laugh', 'emoji-wink', 'emoji-kiss2', 'emoji-laugh2', 'emoji-laugh3'],

		init: function init() {
			$('.site-logo .emoji').addClass(this.emoji[Math.floor(Math.random() * 6)]);
		}
	};

	return methods.init();
}();

// ==============================================
// Stickit header
// ==============================================
var headerStickit = function headerStickit() {
	$elements.header.addClass('-show');

	if (window.pageYOffset > 70) {
		$elements.header.addClass('-stickit');
	} else {
		$elements.header.removeClass('-stickit');
	}
};

var timer;
$(window).scroll(function () {
	if (timer) {
		window.clearTimeout(timer);
	}
	timer = window.setTimeout(function () {
		headerStickit();
		console.log('Fire');
	}, 50);
});

headerStickit();

// ==============================================
// ScrollToPage
// ==============================================

var scrollToPage = function scrollToPage(target) {
	var y = 0;
	if (target && $(target).length) {
		y = $(target).offset().top;
	}
	$elements.page.animate({ scrollTop: y - 60 }, 'slow', 'swing');
	return;
};

$('.scrollto').on('click', function (e) {
	e.preventDefault();
	scrollToPage($(this).attr('href'));
});