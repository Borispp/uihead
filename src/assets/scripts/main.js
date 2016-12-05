$('.select2').select2({
	minimumResultsForSearch: -1
});

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
