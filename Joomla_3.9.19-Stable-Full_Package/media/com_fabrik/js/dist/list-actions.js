/*! Fabrik */

define(["jquery","fab/tipsBootStrapMock"],function(t,a){return new Class({Implements:[Options],options:{selector:"ul.fabrik_action, .btn-group.fabrik_action",method:"floating",floatPos:"bottom"},initialize:function(t,e){this.setOptions(e),this.list=t,this.actions=[],this.setUpSubMenus(),Fabrik.addEvent("fabrik.list.update",function(t,e){this.observe()}.bind(this)),this.observe()},observe:function(){"floating"===this.options.method?this.setUpFloating():this.setUpDefault()},setUpSubMenus:function(){this.list.form&&(this.actions=this.list.form.getElements(this.options.selector),this.actions.each(function(t){if(t.getElement("ul")){var e=t.getElement("ul"),i=new Element("div").adopt(e.clone()),n=e.getPrevious();n.getElement(".fabrikTip")&&(n=n.getElement(".fabrikTip"));var s=Fabrik.tips?Fabrik.tips.options:{},o=Object.merge(Object.clone(s),{showOn:"click",hideOn:"click",position:"bottom",content:i});new a(n,o);e.dispose()}}))},setUpDefault:function(){this.actions=this.list.form.getElements(this.options.selector),this.actions.each(function(e){if(!e.getParent().hasClass("fabrik_buttons")){e.fade(.6);var t=e.getParent(".fabrik_row")?e.getParent(".fabrik_row"):e.getParent(".fabrik___heading");t&&t.addEvents({mouseenter:function(t){e.fade(.99)},mouseleave:function(t){e.fade(.6)}})}})},setUpFloating:function(){var s,o=!1;this.list.form.getElements(this.options.selector).each(function(n){if(n.getParent(".fabrik_row")&&(s=n.getParent(".fabrik_row").getElement("input[type=checkbox]"))){o=!0;var t=function(t,e){var i=n.getParent();return i.store("activeRow",n.getParent(".fabrik_row")),i}.bind(this.list),e={position:this.options.floatPos,showOn:"change",hideOn:"click",content:t,heading:"Edit: ",hideFn:function(t){return!t.target.checked},showFn:function(t,e){return Fabrik.activeRow=n.getParent().retrieve("activeRow"),e.store("list",this.list),t.target.checked}.bind(this.list)},i=Fabrik.tips?Object.merge(Object.clone(Fabrik.tips.options),e):e;new a(s,i)}}.bind(this)),this.list.form.getElements(".fabrik_select input[type=checkbox]").addEvent("click",function(t){Fabrik.activeRow=t.target.getParent(".fabrik_row")});var t=this.list.form.getElement("input[name=checkAll]");"null"!==typeOf(t)&&t.store("listid",this.list.id);var e=function(t){var e=t.getParent(".fabrik___heading");return"null"!==typeOf(e)?e.getElement(this.options.selector):""}.bind(this),i=Fabrik.tips?Object.clone(Fabrik.tips.options):{},n=Object.merge(i,{position:this.options.floatPos,html:!0,showOn:"click",hideOn:"click",content:e,heading:"Edit all: ",hideFn:function(t){return!t.target.checked},showFn:function(t,e){return e.retrieve("tip").click.store("list",this.list),t.target.checked}.bind(this.list)});new a(t,n);if(this.list.form.getElements(".fabrik_actions")&&o&&this.list.form.getElements(".fabrik_actions").hide(),this.list.form.getElements(".fabrik_calculation")){var r=this.list.form.getElements(".fabrik_calculation").getLast();"null"!==typeOf(r)&&r.hide()}}})});