var utils = (function ($) {
	"use strict";

	var $elements = {
		body: $('body'),
		close: $('#overlay, .close'),
		summary: $('.js-summary'),
		summaryList: $('.js-summary-list'),
		headlines: $('.content h2')
	}

	var counts = {
		summaryTop: function () {
			if($elements.summary[0]) {
				return $elements.summary[0].offsetTop;
			}
		}
	}

	var scrollToHeadline = function (target) {
		var y = 0;

		if(target && $(target).length) {
			y = $(target).offset().top;
			$('body').animate({ scrollTop: y }, 500, 'swing')
		}
	}


	var imagePopup = {
		open: function (e) {
			var img = $(this).find('img').attr('src');
			$('.popup.-image').addClass('-show');
			$('.popup.-image img').attr('src', img);
			$elements.close.removeClass('-hide');
			$elements.body.addClass('popup_active');

			// var scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
			// console.log(scrollBarWidth);
			// $elements.body.css({'padding-left': scrollBarWidth+'px'})

			$elements.body.on('keyup', function (e) {
				if (e.keyCode == 27) {
					imagePopup.close();
				}
			});

		},

		close: function (e) {
			$('.popup.-image').removeClass('-show');
			$elements.body.removeClass('popup_active');
			$elements.close.addClass('-hide');
			setTimeout(function () {
				$('.popup.-image img').attr('src', '');
			}, 300);

			$elements.body.off('keyup');
		}
	}

	return {
		$elements: $elements,
		counts: counts,
		imagePopup: imagePopup,
		scrollToHeadline: scrollToHeadline
	}

})(jQuery);

(function ($, utils) {
	"use strict";

	utils.$elements.close.on('click', function () {
		utils.imagePopup.close()
	})

	// Images Popups
	$('.image--default').each(function (i, el) {
		var $el = $(el);
		var alt = $el.attr('alt');

		if (el.width < el.naturalWidth) {
			var popup = $el.wrap('<div class="popup--image"></div>');
			$(popup).after('<span>' + alt + '</span>');
			$(popup).parent().on('click', utils.imagePopup.open);
		}
	});

	// renderMenu
	var headlinesPositions = [];
	var li = '';

	utils.$elements.headlines.each(function (i) {
		li += '<li><a href="#' + this.id + '">' + this.textContent + '</a></li>';
		headlinesPositions.push({"id": this.id, "top": $(this).offset().top})
	});

	utils.$elements.summaryList.html(li);

	// Scroll in menu
	utils.$elements.summaryList.find('a').on('click', function (e) {
		e.preventDefault();
		utils.scrollToHeadline($(this).attr('href'));
	});

	// Stickit
	var summaryTop = utils.counts.summaryTop()

	$(window).scroll(function (e) {
		var scrolled = window.pageYOffset || document.documentElement.scrollTop

		utils.$elements.summary.find('li').removeClass('-active')

		if (scrolled > summaryTop) {
			utils.$elements.summary.addClass('-stickit')
		} else {
			utils.$elements.summary.removeClass('-stickit')
		}

		var i = 0

		while (i < headlinesPositions.length) {

			if (scrolled < headlinesPositions[i].top) {
				if (i == 0) {
					$('[href="#' + headlinesPositions[i].id + '"]').parent().addClass('-active')
				} else {
					$('[href="#' + headlinesPositions[i-1].id + '"]').parent().addClass('-active')
				}
				break
			}

			i++;
		}
	});

})(jQuery, utils);
