PDMS.prototype.Prettyform={Textbox:function(e){var s=$('<span class="pf-element-wrp pf-textbox-wrp"></span>'),a=$('<span class="placeholder"></span>'),n=$(e).attr("placeholder");s.insertBefore(e).append(e,a),$(e).on("focus",function(t){s.addClass("focus"),a.text(n),$(e).attr("placeholder","")}).on("blur",function(t){s.removeClass("focus"),a.text(""),$(e).attr("placeholder",n)})},Combobox:function(a,n){var t=$('<span class="pf-element-wrp pf-combobox-wrp"></span>'),e=$('<ul class="pf-combobox-prettycombo"></ul>'),i=$('<li class="pf-combobox-selected"></li>'),o=$('<span class="pf-combobox-value"></span>'),l=$('<ul class="pf-combobox-optionlist"></ul>');if($(a).addClass("pf-hide"),t.append(e.append(i.append(o,l))).insertBefore(a).append(a),i[0].style.cssText=a.style.cssText,e.css({width:$(a).outerWidth()}),a.disabled&&i.addClass("pf-combobox-disabled"),$(a).find("option").each(function(t){var e={},s=$(this).data();s.style&&(e.style=s.style),this.selected&&(e.selected=1),function(t,e){t.selected&&o.html($(t).text());item=$('<li class="pf-combobox-option">'+$(t).html()+"</li>"),item.data("value",t.value),e.style&&(item[0].style.cssText=e.style);l.append(item)}(this,e)}),!a.disabled){(new PDMS).util.toggle(i[0],function(t){t.preventDefault(),t.stopPropagation(),l.show()},function(t){t.preventDefault(),t.stopPropagation(),l.hide()});var c=null;i.find(".pf-combobox-option").each(function(t){$(this).on("click",function(t){c=c||this,$(c).removeClass("pf-combobox-selected-option"),c=this,$(this).addClass("pf-combobox-selected-option");var e=$(this).data().value,s=$(this).text();o.text(s),$(a).val(e),$(a).trigger("change").trigger("click"),i.trigger("click"),$(this).parents(".pf-combobox-prettycombo").toggleClass("focus"),n&&n(e,this)}),$(document).on("click",function(t){"block"==l.css("display")&&i.trigger("click")})})}},SelectButton:function(a,n){var t=$('<span class="pf-element-wrp pf-selectbutton-wrp"></span>'),e=$('<ul class="pf-selectbutton"></ul>'),s=$('<li class="pf-selectbutton-selected"></li>'),i=$('<span class="pf-selectbutton-value"></span>'),o=$('<ul class="pf-selectbutton-optionlist"></ul>'),l=$('<i class="fa fa-caret-right pf-selectbutton-icon"></i>');if($(a.className.split(" ")).each(function(t,e){i.addClass(e)}),$(a).addClass("pf-hide"),t.append(e.append(s.append(i,l,o))).insertBefore(a).append(a),s[0].style.cssText=a.style.cssText,e.css({width:$(a).outerWidth()}),a.disabled&&s.addClass("pf-selectbutton-disabled"),$($(a).data("options").split(",")).each(function(t,e){var s;s=e,item=$('<li class="pf-selectbutton-option">'+s+"</li>"),item.data("value",s),o.append(item)}),i.html($(a).data("options").split(",")[0].trim()),a.dataset.value=$(a).data("options").split(",")[0].trim(),i.html($(a).data("options").split(",")[0]),!a.disabled){(new PDMS).util.toggle(l[0],function(t){t.preventDefault(),t.stopPropagation(),o.show()},function(t){t.preventDefault(),t.stopPropagation(),o.hide()}),i.on("click",function(t){$(a).trigger("click")});var c=null;s.find(".pf-selectbutton-option").each(function(t){$(this).on("click",function(t){c=c||this,$(c).removeClass("pf-selectbutton-selected-option"),c=this,$(this).addClass("pf-selectbutton-selected-option");var e=$(this).data().value,s=$(this).text();i.text(s),a.dataset.value=e.trim(),l.trigger("click"),n&&n(e.trim())}),$(document).on("click",function(t){"block"===o.css("display")&&l.trigger("click")})})}},switchButton:function(e,s){if("INPUT"==e.nodeName||"checkbox"==e.type.toLowerCase()){var t=$('<span class="prettyform-switchbutton-wrp"></span>'),a=$("<label></label>");t.append(a).insertBefore(e).append(e),$(e).css({display:"none"}),a.addClass(function(){return e.checked?"switch-on":""}).on("click",function(t){$(this).hasClass("switch-on")?($(e).removeAttr("checked"),$(this).removeClass("switch-on"),s&&s(e,!1)):($(e).attr({checked:!0}),$(this).addClass("switch-on"),s&&s(e,!0))})}},checkBox:function(e,s){var t=$('<span class="pf-checkbox-wrp"></span>'),a=$("<label></label>");t.insertBefore(e).append(e,a),$(e).css({display:"none"}),a.addClass(function(){return e.checked?"check-on":""}).on("click",function(t){$(this).hasClass("check-on")?($(e).removeAttr("checked"),$(this).removeClass("check-on"),s&&s(e,!1)):($(e).attr({checked:!0}),$(this).addClass("check-on"),s&&s(e,!0))})},spin:function(e){if("INPUT"==e.nodeName||"number"==e.type.toLowerCase()){var t=$('<span class="prettyform-spin-wrp"></span>'),s=$("<button>-</button>"),a=$("<button>+</button>"),n=$('<input type="text" size="'+e.size+'">');t.append(s,n,a).insertBefore(e).append(e),$(e).addClass("pf-hide"),e.max?e.max=parseInt(e.max):e.max=0,e.min?e.min=parseInt(e.min):e.min=0,e.value||(e.value=e.min),n.val(parseInt(e.value)),s.on("click",function(t){t.preventDefault(),value=n.val(),value<=e.min||(e.value=parseInt(value)-1,n.val(e.value))}),a.on("click",function(t){t.preventDefault(),value=n.val(),value!=e.max&&(e.value=parseInt(value)+1,n.val(e.value))}),n.on("input",function(t){parseInt(this.value)<=parseInt(e.max)&&parseInt(this.value)>=parseInt(e.min)&&(e.value=this.value),this.value=e.value})}},searchBox:function(e){var t=$('<span class="pf-search-box-wrp"></span>'),s=$('<input class="pf-search-box-submit" type="submit" name="submit" value=""/>').css({display:"none"}),a=$('<i class="fa fa-search pf-search-box-len"></i>'),n=$('<i class="fa fa-times-circle pf-search-box-cancel"></i>');t.insertBefore(e).append(e,s,n,a);var i=-(a.width()+$(e).outerWidth()-n.width()-parseInt($(e).css("padding-left"))/3-parseInt($(e).css("padding-right"))/2),o=-n.width()-parseInt($(e).css("padding-right"))/2,l=parseInt($(e).css("font-size")),c=$(e).css("color"),p=$(e).css("font-weight");a.on("click",function(t){t.preventDefault(),s.trigger("click")}).css({marginLeft:i,fontSize:l,color:c,fontWeight:p,cursor:"pointer"}),n.on("click",function(t){t.preventDefault(),t.stopPropagation(),$(e).focus().val(""),$(this).css({visibility:"hidden"})}).css({marginLeft:o,visibility:"hidden",fontSize:l,color:c,fontWeight:p,cursor:"default"}),$(e).on("input",function(t){t.preventDefault(),t.stopPropagation(),""!=this.value&&n.css({visibility:"visible"})})},radio:function(t,n,i){var e=t.name;if(!e.length)throw new Error("Can not prettyfy a radio with empty name.");if(t.type&&"radio"!=t.type.toLowerCase())throw new TypeError("The element to prettyfy must be of type radio.");var s=[];$("input[name="+e+"]").each(function(t){"radio"==this.type.toLowerCase()&&s.push(this)});var o=null;$.each(s,function(t,e){var s=jQuery('<span class="pf-radio-wrp"></span>'),a=$("<label></label>");s.insertBefore(e).append(a,e),$(e).css({display:"none"}),$(a).on("click",function(t){t.preventDefault(),(o=o||this).className="",$(o.nextElementSibling).trigger("click"),n&&n(o.nextElementSibling),(o=this).className="check-on",$(o.nextElementSibling).trigger("click"),i&&i(o.nextElementSibling)}),e.checked&&$(a).trigger("click")})}};