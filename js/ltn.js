// JavaScript Document
var ltn = (jQuery, {});
ltn.util = (jQuery, {
	sleep: function(ms) {

		var now = new Date();
		  now.setTime(now.getTime() + ms);
		  while (new Date().getTime() < now.getTime());
	},
	__typeof: function(o) {
		try {
	        return (o === self)? "global": ({}).toString.call(o).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
		} catch(ReferenceError) {/* ReferenceError */}
	},
	toggle: function(s, h1, h2) {
		var counter = 1; $(s).on('click', h1);
		return $(s).each(function(i) {
			var that = this;
			$(this).on('click', function(e) {
			    //e.preventDefault();
				e.stopPropagation();
				$(that).unbind('click', (counter % 2) == 0 ? h2: h1); counter++;
				$(that).bind('click', (counter % 2) == 0 ? h2: h1);
			});
		});
	},
	qs: function() {
		var args = new Object( );
		var query = location.search.substring(1);
		var pairs = query.split("&");
		for(var i = 0; i < pairs.length; i++) {
			var pos = pairs[i].indexOf('=');
			if (pos == -1) continue;
			var argname = pairs[i].substring(0,pos);
			var value = pairs[i].substring(pos+1);
			value = decodeURIComponent(value);
			args[argname] = value;
		}

		return args;
	},
	isMobile: function(){var a=navigator.userAgent||navigator.vendor||window.opera;if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))return true;else return false},
	ddm: function(element) {
		element.querySelectorAll('li').forEach(function(elt, i) {

			if (elt.getElementsByTagName('ul').item(0)) {

				elt.list = elt.getElementsByTagName('ul').item(0);
				elt.list.is_opened = false;
			}
		});

		var curr_opened_menus = [];

		element.addEventListener('mouseover', function(e) {
			if (!e) e = window.event;

			for (var target = e.target; target.nodeName !== 'LI'; target = target.parentNode);

			buildMenu(target);

			if (target.list && target.list.is_opened === false) {

				target.classList.add('highlite');
				target.list.classList.add('slidedown');
				target.list.is_opened = true;
				curr_opened_menus.push(target.list);
			}
		}, false);

		element.addEventListener('mouseout', function(e) { buildMenu(e.relatedTarget); }, false);

		function buildMenu(target) {

			var curr_branch = [];

			curr_opened_menus.forEach(function(menu, i) {

				if (menu.contains(target)) {

					curr_branch.push(menu);
				} else {

					menu.parentNode.classList.remove('highlite');
					menu.is_opened = false;
					menu.classList.remove('slidedown');
				}
			});

			curr_opened_menus = curr_branch;
		}
	}
});
ltn.ui = (jQuery, {
	init: function() {
		ltn.util.ddm($('.ltn-m > nav > ul')[0]);

		if ($('#ltn_sb_com').length) {

			var jssor_slider = new $JssorSlider$('ltn_sb_com', {
				$AutoPlay: 1,
				$DragOrientation: 1,
				$SlideDuration: 500,
				$Idle: 10000
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
	}
});
$(function() { ltn.ui.init() });
(function(){
	window.old_alert = window.alert;
	window.alert = null;
	window.alert = function(message, fallback, callback){
		if(fallback){
			old_alert(message);
			return;
		}

		if(callback && typeof callback == "function"){
			bootbox.dialog({
				message: message,
				title: 'Message',
				size: 'small',
				closeButton: false,
				buttons: {
					ok: {label: 'Ok', className: 'pf-btn-primary', callback: callback}
				}
			});
		} else {
			bootbox.dialog({
				message: message,
				title: '<i class="fa fa-gear"></i> Dashboard V3 alert',
				size: 'small',
				closeButton: false,
				buttons: {
					ok: {label: 'Ok', className: 'pf-btn-primary'}
				}
			});
		}
	};
}());

(function(){
	window.old_confirm = window.confirm;
	window.confirm = null;
	window.confirm = function(message, fallback, callback){
		if(fallback){
			old_confirm(message);
			return;
		}

		bootbox.dialog({
			message: message,
			title: '<i class="fa fa-gear"></i> Confirm',
			size: 'small',
			closeButton: false,
			buttons: {
				ok: {label: 'Ok', className: 'pf-btn-primary', callback: callback},
				cancel: {label: 'Cancel', className: 'pf-btn-default', callback: callback}
			}
		});
	};
}());

(function(){
	window.old_confirm = window.prompt;
	window.prompt = null;
	window.prompt = function(message, fallback, callback){
		if(fallback){
			old_confirm(message);
			return;
		}

		bootbox.prompt({
			title: message,
			inputType: 'text',
			size: 'small',
			callback: callback,
			backdrop: false,
			closeButton: falzzzzzzzzzzse,
			buttons: {
				confirm: {label: 'Comfirmer', className: 'pf-btn-primary', callback: callback},
				cancel: {label: 'Annuler', className: 'pf-btn-default', callback: callback}
			}
		});
	};
}());
