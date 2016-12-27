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
var $blogItems = $('.blog-items').masonry({
	itemSelector: '.blog-item'
});

if ($blogItems.length) {
	$blogItems.imagesLoaded().progress(function () {
		$blogItems.masonry('layout');
	});
}

// ==============================================
// Elements
// ==============================================
var $elements = {
	page: $('html, body'),
	body: $('body'),
	overlay: $('#overlay'),
	footerMain: $('.footer-main'),
	show: $('[data-show]'),
	showPopup: $('[data-showPopup]'),
	close: $('[data-close]'),
	closePopup: $('[data-closePopup]'),
	tab: $('[data-tab]'),
	header: $('.header-main'),
	mobileLinks: $('.mobile-menu-links a'),
	presentationButtons: $('.presentation-buttons')
};

// ==============================================
// Open Menu
// ==============================================

var showMenu = function () {
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
			setTimeout(function () {
				$($(this).data('show')).addClass('-shown');

				$elements.mobileLinks.each(function (i, el) {
					setTimeout(function () {
						$($elements.mobileLinks.get(i)).addClass('-show');
					}.bind(this), 50 * (i + 1));
				});
			}.bind(this), 400);
		},

		hide: function hide(e) {
			$($(this).data('close')).removeClass('-shown');
			var linksLength = $elements.mobileLinks.length;

			$elements.mobileLinks.each(function (i, el) {
				setTimeout(function () {
					$($elements.mobileLinks.get(i)).removeClass('-show');
				}.bind(this), 50 * i);
			});

			setTimeout(function () {
				$($(this).data('close')).addClass('-hide');
				$elements.body.removeClass('-popup-active');
			}.bind(this), linksLength * 70);
		}
	};

	return methods.bindUIActions();
}();

// ==============================================
// Open Popups
// ==============================================

var showElement = function () {
	var methods = {
		bindUIActions: function bindUIActions() {
			var _this = this;
			$elements.showPopup.on('click', function (e) {
				e.preventDefault();
				_this.show.call(this, e);
			});
			$elements.closePopup.on('click', function (e) {
				e.preventDefault();
				_this.hide.call(this, e);
			});
		},

		show: function show(e) {
			console.log($(this).data('showpopup'));
			$($(this).data('showpopup')).removeClass('-hide');
			$elements.overlay.removeClass('-hide');
			$elements.body.addClass('-popup-active');
		},

		hide: function hide(e) {
			$($(this).data('closepopup')).addClass('-hide');
			$elements.overlay.addClass('-hide');
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
// Ui Items random
// ==============================================

var uiItems = function () {
	var methods = {
		$elements: {
			uiItems: $('.ui-items'),
			uiList: $('.ui-list'),
			uiItem: $('.ui-item.-hide'),
			uiItemActive: $('.ui-item.-active')
		},

		init: function init() {
			this.variables = {
				uiItemWidth: this.$elements.uiItem.outerWidth(),
				uiItemCount: this.$elements.uiItem.length,
				uiItemActiveCount: this.$elements.uiItemActive.length,
				i: this.$elements.uiItemActive.length + 1,
				iActive: 0,
				changeSpeed: 3000
			};

			this.$elements.uiItems.on('mouseover', function (e) {
				this.onOver();
			}.bind(this)).on('mouseout', function (e) {
				this.changeItem();
			}.bind(this));

			this.setWidth();
			this.setActive();
			this.changeItem();
		},

		setWidth: function setWidth() {
			this.$elements.uiList.css({ 'width': this.variables.uiItemWidth * this.variables.uiItemCount });
		},

		setActive: function setActive() {
			for (var i = 0; i < this.variables.uiItemActiveCount; i++) {
				this.appendItem(this.$elements.uiItemActive[i], this.$elements.uiItem[i]);
			}
		},

		appendItem: function appendItem(li, item) {
			item = $(item).find('.ui-content').clone();
			$(li).append(item[0]);
			item.fadeIn('slow');
		},

		changeItem: function changeItem() {
			this.interval = setInterval(function () {

				$(this.$elements.uiItemActive[this.variables.iActive]).find('.ui-content').fadeOut('slow', function () {
					$(this).remove();
				});
				// $(this.$elements.uiItemActive[iActive]).find('.ui-content').remove()
				this.appendItem(this.$elements.uiItemActive[this.variables.iActive], this.$elements.uiItem[this.variables.i]);

				this.variables.i++;
				this.variables.iActive++;

				if (this.variables.i > this.variables.uiItemCount - 1) {
					this.variables.i = 0;
				}
				if (this.variables.iActive > this.variables.uiItemActiveCount - 1) {
					this.variables.iActive = 0;
				}
			}.bind(this), this.variables.changeSpeed);
		},

		onOver: function onOver() {
			clearInterval(this.interval);
		}
	};

	if (!methods.$elements.uiItems.length) {
		return;
	}

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

console.log($elements.footerMain.offset());

var presentationButtonsStickit = function presentationButtonsStickit() {
	if (document.documentElement.clientHeight - $elements.footerMain.offset().top + window.pageYOffset > 100) {
		$elements.presentationButtons.addClass('-hide');
	} else {
		$elements.presentationButtons.removeClass('-hide');
	}
};

var timer;
$(window).scroll(function () {
	if (timer) {
		window.clearTimeout(timer);
	}
	timer = window.setTimeout(function () {
		headerStickit();
	}, 50);

	presentationButtonsStickit();
});

headerStickit();

// ==============================================
// Countdown
// ==============================================

(function () {
	var methods = {
		init: function init() {
			this.end = new Date($('[data-end]').data('end')); // In GMT
			this.$els = {
				days: $('.days'),
				hours: $('.hours'),
				minutes: $('.minutes'),
				seconds: $('.seconds'),
				timer: $('.timer')
			};

			this.$els.timer.addClass('-active');

			this.showRemaining();
			this.timer = this.start();
		},

		showRemaining: function showRemaining() {
			var _second = 1000;
			var _minute = _second * 60;
			var _hour = _minute * 60;
			var _day = _hour * 24;
			var timer;

			var now = new Date();
			var distance = this.end - now;
			if (distance < 0) {
				clearInterval(this.timer);
				this.$els.timer.addClass('-finish');
				return;
			}
			var days = Math.floor(distance / _day);
			var hours = Math.floor(distance % _day / _hour);
			var minutes = Math.floor(distance % _hour / _minute);
			var seconds = Math.floor(distance % _minute / _second);

			this.$els.days.html(days);
			this.$els.hours.html(hours);
			this.$els.minutes.html(minutes);
			this.$els.seconds.html(seconds);
		},

		start: function start() {
			return setInterval(this.showRemaining.bind(this), 1000);
		}
	};

	methods.init();
})();

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