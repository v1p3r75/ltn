// JavaScript Document
var cs = null, n = 0;
ltn.ui.home = (jQuery, {
	init: function() {
		$('#ltn_idx2').height($('#ltn_idx2 .slides .slide').height());
		var jssor_slider = new $JssorSlider$('ltn_idx2', {
			$AutoPlay: 1,
			$DragOrientation: 1,
			$ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
            }
		});
		
		var MAX_WIDTH = 980;

		function ScaleSlider() {
			var containerElement = jssor_slider.$Elmt.parentNode;
			var containerWidth = containerElement.clientWidth;

			if (containerWidth) {

				var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

				jssor_slider.$ScaleWidth(expectedWidth);
			}
			else {
				window.setTimeout(ScaleSlider, 30);
			}
		}

		ScaleSlider();

		$(window).bind("load", ScaleSlider);
		$(window).bind("resize", ScaleSlider);
		$(window).bind("orientationchange", ScaleSlider);
	}
});
$(function() { if ($('#ltn_idx2').length) ltn.ui.home.init(); });