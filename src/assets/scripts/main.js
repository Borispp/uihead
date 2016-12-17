// ==============================================
// Init common plugins
// ==============================================

$('.select2').select2({
	minimumResultsForSearch: -1
});

if (Clipboard) {
	var clipboard = new Clipboard('[data-clipboard-text]');
	clipboard
		.on('success', function (e) {
			$.growl.notice({ title: "Copied!", message: e.text });
		})
		.on('error', function (e) {
			$.growl.error({ message: 'Something went wrong' });
		});
}

// ==============================================
// Elements
// ==============================================
var $elements = {
	body: $('body'),
	show: $('[data-show]'),
	close: $('[data-close]'),
	tab: $('[data-tab]')
}

// ==============================================
// Open popups or menu
// ==============================================

var showElement = {

	bindUIActions: function () {
		var _this = this;
		$elements.show.on('click', function (e) {
			e.preventDefault()
			_this.show.call(this, e)
		});
		$elements.close.on('click', function (e) {
			e.preventDefault()
			_this.hide.call(this, e)
		})
	},

	show: function(e) {
		$($(this).data('show')).removeClass('-hide')
		$elements.body.addClass('-popup-active')
	},

	hide: function (e) {
		$($(this).data('close')).addClass('-hide')
		$elements.body.removeClass('-popup-active')
	}
};

showElement.bindUIActions()

// ==============================================
// Change Tab
// ==============================================

var changeTab = {

	bindUIActions: function () {
		var _this = this;
		$elements.tab.on('click', function (e) {
			e.preventDefault()
			_this.show.call(this, e)
		});
	},

	show: function(e) {
		var tabGroup = $(this).data('tab-group');
		var tab = $(this).data('tab');

		$('[data-tab-group="' + tabGroup + '"]').removeClass('-active');
		$('[data-tab="' + tab + '"]').addClass('-active');
		$(tabGroup).addClass('-hide');
		$(tab).removeClass('-hide');
	}
};

changeTab.bindUIActions()

// ==============================================
// Subscription images
// ==============================================

var substrateImages = {
	init: function () {
		this.$substrateImages = $('.substrate-images');
		this.images = this.$substrateImages.data('images').split(',');
		this.imagesLength = this.images.length
		this.substrateLiLength = this.$substrateImages.find('li').length

		this.fillImages()
		this.changeImage()
	},

	fillImages: function () {
		var _this = this;

		this.$substrateImages.find('li').each(function (i, el) {
			var randomNumber = Math.floor(Math.random() * _this.imagesLength);

			$(el).css({
				'background-image': 'url(' + _this.images[randomNumber] + ')'
			})
		});
	},

	changeImage: function () {
		var _this = this;

		setInterval(function () {
			var randomNumber = Math.floor(Math.random() * _this.imagesLength)
			var randomLi = Math.floor(Math.random() * _this.substrateLiLength)

			_this.$substrateImages.find('li').eq(randomLi).css({
				'background-image': 'url(' + _this.images[randomNumber] + ')'
			})

		}, 2000);
	}
}

if ($('.substrate-images').length) {
	substrateImages.init()
}

// ==============================================
// Emoji random
// ==============================================

var emojiRand = {
	emoji: ['emoji-kiss', 'emoji-laugh', 'emoji-wink', 'emoji-kiss2', 'emoji-laugh2', 'emoji-laugh3'],

	init: function () {
		$('.site-logo .emoji').addClass(this.emoji[Math.floor(Math.random() * 6)])
	}
}

emojiRand.init()

// ==============================================
// Stickit header
// ==============================================
$(window).scroll(function () {
	if (window.pageYOffset > 50) {
		$('.header-main').addClass('-stickit');
	} else {
		$('.header-main').removeClass('-stickit');
	}
});

// ==============================================
// ScrollToPage
// ==============================================
var $page = $('html,body');
var scrollToPage = (target) => {
	var y = 0;
	if (target && $(target).length) {
		y = $(target).offset().top;
	}
	$page.animate({ scrollTop: y-60 }, 'slow', 'swing')
	return
}

$('.scrollto').on('click', function (e) {
	e.preventDefault()
	scrollToPage($(this).attr('href'));
});
