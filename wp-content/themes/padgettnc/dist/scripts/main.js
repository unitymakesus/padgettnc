/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/wp-content/themes/padgettnc/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// https://github.com/tristen/hoverintent
!function(e,t){if(true){ !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); }else if("undefined"!=typeof exports){ t(module); }else{var n={exports:{}};t(n),e.hoverintent=n.exports}}(this,function(e){"use strict";var t=Object.assign||function(e){
var arguments$1 = arguments;
for(var t=1;t<arguments.length;t++){var n=arguments$1[t];for(var i in n){ Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]) }}return e};e.exports=function(e,n,i){function o(e,t){return p&&(p=clearTimeout(p)),d=0,i.call(e,t)}function r(e){c=e.clientX,m=e.clientY}function u(e,t){if(p&&(p=clearTimeout(p)),Math.abs(a-c)+Math.abs(f-m)<h.sensitivity){ return d=1,n.call(e,t); }a=c,f=m,p=setTimeout(function(){u(e,t)},h.interval)}function s(t){return p&&(p=clearTimeout(p)),e.removeEventListener("mousemove",r,!1),1!==d&&(a=t.clientX,f=t.clientY,e.addEventListener("mousemove",r,!1),p=setTimeout(function(){u(e,t)},h.interval)),this}function v(t){return p&&(p=clearTimeout(p)),e.removeEventListener("mousemove",r,!1),1===d&&(p=setTimeout(function(){o(e,t)},h.timeout)),this}var c,m,a,f,l={},d=0,p=0,h={sensitivity:7,interval:100,timeout:0};return l.options=function(e){return h=t({},h,e),l},l.remove=function(){e&&(e.removeEventListener("mouseover",s,!1),e.removeEventListener("mouseout",v,!1))},e&&(e.addEventListener("mouseover",s,!1),e.addEventListener("mouseout",v,!1)),l}});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(14);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modaal__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modaal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_modaal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autoload_hoverintent_min_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autoload_hoverintent_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__autoload_hoverintent_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autoload_jquery_sticky_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autoload_jquery_sticky_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__autoload_jquery_sticky_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_Router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_home__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_about__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_archive__ = __webpack_require__(11);
// import external dependencies

// import 'materialize-css';


// Import everything from autoload
 

// import local dependencies






var WebFont = __webpack_require__(13);

WebFont.load({
 google: {
   families: ['Hind:400,500,600,700', 'Roboto:300, 300i, 400i,700,700i'],
 },
});

/** Populate Router instance with DOM routes */
var routes = new __WEBPACK_IMPORTED_MODULE_4__util_Router__["a" /* default */]({
  common: __WEBPACK_IMPORTED_MODULE_5__routes_common__["a" /* default */],
  home: __WEBPACK_IMPORTED_MODULE_6__routes_home__["a" /* default */],
  aboutUs: __WEBPACK_IMPORTED_MODULE_7__routes_about__["a" /* default */],
  archive: __WEBPACK_IMPORTED_MODULE_8__routes_archive__["a" /* default */],
});

// Load Events
jQuery(document).ready(function () { return routes.loadEvents(); });

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
	Modaal - accessible modals - v0.4.3
	by Humaan, for all humans.
	http://humaan.com
 */
/**
	Modaal jQuery Plugin : Accessible Modals

	==== General Options ===
	type (string) 					: ajax, inline, image, iframe, confirm. Defaults to 'inline'
	content_source (stribg)			: Accepts a string value for your target element, such as '#my-content'. This allows for when trigger element is
										an `<a href="#">` link. Not to be confused with the already existing `source` event.
	animation (string) 				: Fade, expand, down, up. Defaults to 'fade'
	after_callback_delay (integer)	: Specify a delay value for the after open callbacks. This is necessary because with the bundled animations
										have a set duration in the bundled CSS. Specify a delay of the same amount as the animation duration in so
										more accurately fire the after open/close callbacks. Defaults 350, does not apply if animation is 'none',
										after open callbacks are dispatched immediately

	is_locked (boolean)				: Set this to true to disable closing the modal via keypress or clicking the background. Beware that if
										type != 'confirm' there will be no interface to dismiss the modal if is_locked = true, you'd have to
										programmatically arrange to dismiss the modal. Confirm modals are always locked regardless of this option
										Defaults to false

	hide_close (boolean)			: Set this to true to hide the close modal button. Key press and overlay click will still close the modal.
										This method is best used when you want to put a custom close button inside the modal container space.

	background (string)				: Background overlay style. Defaults to '#000'
	overlay_opacity (float) 		: Background overlay transparency. Defaults to 0.8
	overlay_close (boolean)			: Set this to false if you want to disable click to close on overlay background.

	accessible_title (string)		: Accessible title. Default 'Dialog Window'
	start_open (boolean)			: Set this to true to launch the Modaal window immediately on page open
	fullscreen (boolean)			: Set this to true to make the modaal fill the entire screen, false will default to own width/height attributes.
	custom_class (string)			: Fill in this string with a custom class that will be applied to the outer most modal wrapper.

	width (integer)					: Desired width of the modal. Required for iframe type. Defaults to undefined //TODO
	height (integer)				: Desired height of the modal. Required for iframe type. Defaults to undefined //TODO

	background_scroll (boolean)		: Set this to true to enable the page to scroll behind the open modal.

    should_open (boolean|function)  : Boolean or closure that returns a boolean to determine whether to open the modal or not.

	close_text						: String for close button text. Available for localisation and alternative languages to be used.
	close_aria_label				: String for close button aria-label attribute (value that screen readers will read out). Available for localisation and alternative languages to be used.

	=== Events ===
	before_open (function) 			: Callback function executed before modal is opened
	after_open (function)			: Callback function executed after modal is opened
	before_close (function)			: Callback function executed before modal is closed
	after_close (function)			: Callback function executed after modal is closed
	source (function(element, src))	: Callback function executed on the default source, it is intended to transform the
										source (href in an AJAX modal or iframe). The function passes in the triggering element
										as well as the default source depending of the modal type. The default output of the
										function is an untransformed default source.


	=== Confirm Options & Events ===
	confirm_button_text (string)	: Text on the confirm button. Defaults to 'Confirm'
	confirm_cancel_button_text (string) : Text on the confirm modal cancel button. Defaults to 'Cancel'
	confirm_title (string)			: Title for confirm modal. Default 'Confirm Title'
	confirm_content (string)		: HTML content for confirm message
	confirm_callback (function)		: Callback function for when the confirm button is pressed as opposed to cancel
	confirm_cancel_callback (function) : Callback function for when the cancel button is pressed


	=== Gallery Options & Events ===
	gallery_active_class (string)	: Active class applied to the currently active image or image slide in a gallery 'gallery_active_item'
	outer_controls (boolean)		: Set to true to put the next/prev controls outside the Modaal wrapper, at the edges of the browser window.
	before_image_change (function)	: Callback function executed before the image slide changes in a gallery modal. Default function( current_item, incoming_item )
	after_image_change (function)	: Callback function executed after the image slide changes in a gallery modal. Default function ( current_item )


	=== AJAX Options & Events ===
	loading_content (string)		: HTML content for loading message. Default 'Loading &hellip;'
	loading_class (string)			: Class name to be applied while content is loaded via AJAX. Default 'is_loading'
	ajax_error_class (string)		: Class name to be applied when content has failed to load. Default is 'modaal-error'
	ajax_success (function)		 	: Callback for when AJAX content is loaded in


	=== SOCIAL CONTENT ===
	instagram_id (string)			: Unique photo ID for an Instagram photo.

*/
( function( $ ) {

	var modaal_loading_spinner = '<div class="modaal-loading-spinner"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>'
	
	var Modaal = {
		init : function(options, elem) {
			var self = this;

			self.dom = $('body');

			self.$elem = $(elem);
			self.options = $.extend({}, $.fn.modaal.options, self.$elem.data(), options);
			self.xhr = null;

			// set up the scope
			self.scope = {
				is_open: false,
				id: 'modaal_' + ( new Date().getTime() ) + ( Math.random().toString(16).substring(2) ),
				source: self.options.content_source ? self.options.content_source : self.$elem.attr('href')
			};

			// add scope attribute to trigger element
			self.$elem.attr('data-modaal-scope', self.scope.id);

			// private options
			self.private_options = {
				active_class: 'is_active'
			};

			self.lastFocus = null;
			
			// if is_locked
			if ( self.options.is_locked || self.options.type == 'confirm' || self.options.hide_close ) {
				self.scope.close_btn = '';
			} else {
				self.scope.close_btn = '<button type="button" class="modaal-close" id="modaal-close" aria-label="' + self.options.close_aria_label + '"><span>' + self.options.close_text + '</span></button>';
			}

			// reset animation_speed
			if (self.options.animation === 'none' ){
				self.options.animation_speed = 0;
				self.options.after_callback_delay = 0;
			}

			// On click to open modal
			$(elem).on('click.Modaal', function(e) {
				e.preventDefault();
				self.create_modaal(self, e);
			});

			// Define next/prev buttons
			if (self.options.outer_controls === true) {
				var mod_class = 'outer';
			} else {
				var mod_class = 'inner';
			}
			self.scope.prev_btn = '<button type="button" class="modaal-gallery-control modaal-gallery-prev modaal-gallery-prev-' + mod_class + '" id="modaal-gallery-prev" aria-label="Previous image (use left arrow to change)"><span>Previous Image</span></button>';
			self.scope.next_btn = '<button type="button" class="modaal-gallery-control modaal-gallery-next modaal-gallery-next-' + mod_class + '" id="modaal-gallery-next" aria-label="Next image (use right arrow to change)"><span>Next Image</span></button>';

			// Check for start_open
			if (self.options.start_open === true ){
				self.create_modaal( self );
			}
		},

		// Initial create to determine which content type it requires
		// ----------------------------------------------------------------
		create_modaal : function(self, e) {
			var self = this;
			var source;

			// Save last active state before modal
			self.lastFocus = self.$elem;

			if ( self.options.should_open === false || ( typeof self.options.should_open === 'function' && self.options.should_open() === false ) ) {
				return;
			}

			// CB: before_open
			self.options.before_open.call(self, e);

			switch (self.options.type) {
				case 'inline':
					self.create_basic();
					break;

				case 'ajax':
					source = self.options.source( self.$elem, self.scope.source );
					self.fetch_ajax( source );
					break;

				case 'confirm':
					self.options.is_locked = true;
					self.create_confirm();
					break;

				case 'image':
					self.create_image();
					break;

				case 'iframe':
					source = self.options.source( self.$elem, self.scope.source );
					self.create_iframe( source );
					break;

				case 'video':
					self.create_video(self.scope.source);
					break;

				case 'instagram':
					self.create_instagram();
					break;
			}

			// call events to be watched (click, tab, keyup, keydown etc.)
			self.watch_events();
		},

		// Watching Modal
		// ----------------------------------------------------------------
		watch_events : function() {
			var self = this;

			self.dom.off('click.Modaal keyup.Modaal keydown.Modaal');

			// Body keydown
			self.dom.on('keydown.Modaal', function(e) {
				var key = e.keyCode;
				var target = e.target;

				// look for tab change and reset focus to modal window
				// done in keydown so the check fires repeatedly when you hold the tab key down
				if (key == 9 && self.scope.is_open) {
					if (!$.contains(document.getElementById(self.scope.id), target) ) {
						$('#' + self.scope.id).find('*[tabindex="0"]').focus();
					}
				}
			});

			// Body keyup
			self.dom.on('keyup.Modaal', function(e) {
				var key = e.keyCode;
				var target = e.target;

				if ( (e.shiftKey && e.keyCode == 9) && self.scope.is_open) {
					// Watch for shift + tab key press. if open shift focus to close button.
					if (!$.contains(document.getElementById(self.scope.id), target) ) {
						$('#' + self.scope.id).find('.modaal-close').focus();
					}
				}

				if ( !self.options.is_locked ){
					// On escape key press close modal
					if (key == 27 && self.scope.is_open ) {
						if ( $(document.activeElement).is('input:not(:checkbox):not(:radio)') ) {
							return false;
						}

						self.modaal_close();
						return;
					}
				}

				// is gallery open and images length is > 1
				if ( self.options.type == 'image' ) {
					// arrow left for back
					if (key == 37 && self.scope.is_open && (!$('#' + self.scope.id + ' .modaal-gallery-prev').hasClass('is_hidden')) ) {
						self.gallery_update('prev');
					}
					// arrow right for next
					if (key == 39 && self.scope.is_open && (!$('#' + self.scope.id + ' .modaal-gallery-next').hasClass('is_hidden')) ) {
						self.gallery_update('next');
					}
					return;
				}
			});

			// Body click/touch
			self.dom.on('click.Modaal', function(e) {
				var trigger = $(e.target);

				// General Controls: If it's not locked allow greedy close
				if ( !self.options.is_locked ){
					if ( (self.options.overlay_close && trigger.is('.modaal-inner-wrapper')) || trigger.is('.modaal-close') || trigger.closest('.modaal-close').length ) {
						self.modaal_close();
						return;
					}
				}

				//Confirm Controls
				if ( trigger.is('.modaal-confirm-btn' ) ){
					// if 'OK' button is clicked, run confirm_callback()
					if ( trigger.is('.modaal-ok') ) {
						self.options.confirm_callback.call(self, self.lastFocus);
					}

					if ( trigger.is('.modaal-cancel') ) {
						self.options.confirm_cancel_callback.call(self, self.lastFocus);
					}
					self.modaal_close();
					return;
				}

				// Gallery Controls
				if ( trigger.is( '.modaal-gallery-control' ) ){
					// it not active, don't do nuthin!
					if ( trigger.hasClass('is_hidden') ) {
						return;
					}

					// trigger previous
					if ( trigger.is('.modaal-gallery-prev') ) {
						self.gallery_update('prev');
					}
					// trigger next
					if ( trigger.is('.modaal-gallery-next') ) {
						self.gallery_update('next');
					}
					return;
				}
			});
		},

		// Append markup into DOM
		build_modal : function(content) {
			var self = this;

			// if is instagram
			var igClass = '';
			if ( self.options.type == 'instagram' ) {
				igClass = ' modaal-instagram';
			}

			var wrap_class = (self.options.type == 'video') ? 'modaal-video-wrap' : 'modaal-content';

			/*
				modaal-start_none : fully hidden via display:none;
				modaal-start_fade : hidden via opacity:0
				modaal-start_slidedown : ...

			*/
			var animation_class;
			switch ( self.options.animation ) {
				case 'fade' :
					animation_class = ' modaal-start_fade';
					break;
				case 'slide-down' :
					animation_class = ' modaal-start_slidedown';
					break;
				default :
					animation_class = ' modaal-start_none'
			}

			// fullscreen check
			var fullscreen_class = '';
			if ( self.options.fullscreen ) {
				fullscreen_class = ' modaal-fullscreen';
			}

			// custom class check
			if ( self.options.custom_class !== '' || typeof(self.options.custom_class) !== 'undefined' ) {
				self.options.custom_class = ' ' + self.options.custom_class;
			}

			// if width and heights exists and is typeof number
			var dimensionsStyle = '';
			if ( self.options.width && self.options.height && typeof self.options.width == 'number' && typeof self.options.height == 'number' ) {
				// if width and height exist, and they are both numbers
				dimensionsStyle = ' style="max-width:' + self.options.width + 'px;height:' + self.options.height + 'px;overflow:auto;"';
			} else if ( self.options.width && typeof self.options.width == 'number' ) {
				// if only width
				dimensionsStyle = ' style="max-width:' + self.options.width + 'px;"';
			} else if ( self.options.height && typeof self.options.height == 'number' ) {
				// if only height
				dimensionsStyle = ' style="height:' + self.options.height + 'px;overflow:auto;"';
			}

			// Reset dimensions style (width and height) for certain types
			if ( self.options.type == 'image' || self.options.type == 'video' || self.options.type == 'instagram' || self.options.fullscreen ) {
				dimensionsStyle = '';
			}

			// if is touch
			// this is a bug fix for iOS to allow regular click events on div elements.
			var touchTrigger = '';
			if ( self.is_touch() ) {
				touchTrigger = ' style="cursor:pointer;"'
			}

			var build_markup = '<div class="modaal-wrapper modaal-' + self.options.type + animation_class + igClass + fullscreen_class + self.options.custom_class + '" id="' + self.scope.id + '"><div class="modaal-outer-wrapper"><div class="modaal-inner-wrapper"' + touchTrigger + '>';

					// hide if video
					if (self.options.type != 'video') {
						build_markup += '<div class="modaal-container"' + dimensionsStyle + '>';
					}

					// add the guts of the content
					build_markup +=	'<div class="' + wrap_class + ' modaal-focus" aria-hidden="false" aria-label="' + self.options.accessible_title + ' - ' + self.options.close_aria_label + '" role="dialog">';

							// If it's inline type, we want to clone content instead of dropping it straight in
							if (self.options.type == 'inline') {
								build_markup += '<div class="modaal-content-container" role="document"></div>';
							} else {
								// Drop in the content if it's not inline
								build_markup +=	content;
							}

					// close wrap_class
					build_markup += '</div>' + self.scope.close_btn;

					// hide if video
					if (self.options.type != 'video') {
						build_markup += '</div>';
					}

			// close off modaal-inner-wrapper
			build_markup +=	'</div>';
			
			// If type is image AND outer_controls is true: add gallery next and previous controls.
			if (self.options.type == 'image' && self.options.outer_controls === true) {
				build_markup += self.scope.prev_btn + self.scope.next_btn;
			}

			// close off modaal-wrapper
			build_markup +=	'</div></div>';

			// append ajax modal markup to dom
			if ($('#' + self.scope.id + '_overlay').length < 1) {
				self.dom.append(build_markup);
			}

			// if inline, clone content into space
			if (self.options.type == 'inline') {
				content.appendTo('#' + self.scope.id + ' .modaal-content-container');
			}

			// Trigger overlay show (which triggers modal show)
			self.modaal_overlay('show');
		},

		// Create Basic Inline Modal
		// ----------------------------------------------------------------
		create_basic : function() {
			var self = this;
			var target = $(self.scope.source);
			var content = '';

			if (target.length) {
				content = target.contents().detach();
				target.empty();
			} else {
				content = 'Content could not be loaded. Please check the source and try again.';
			}

			// now push content into markup
			self.build_modal(content);
		},

		// Create Instagram Modal
		// ----------------------------------------------------------------
		create_instagram : function() {
			var self = this;
			var id = self.options.instagram_id;
			var content = '';

			var error_msg = 'Instagram photo couldn\'t be loaded, please check the embed code and try again.';

			self.build_modal('<div class="modaal-content-container' + ( self.options.loading_class != '' ? ' ' + self.options.loading_class : '' ) + '">' + self.options.loading_content + '</div>' );

			// ID exists, is not empty null or undefined.
			if ( id != '' && id !== null && id !== undefined ) {
				// set up oembed url
				var ig_url = 'https://api.instagram.com/oembed?url=http://instagr.am/p/' + id + '/';

				$.ajax({
					url: ig_url,
					dataType: "jsonp",
					cache: false,
					success: function (data) {
						
						// Create temp dom element from which we'll clone into the modaal instance. This is required to bypass the unusual small thumb issue instagram oembed was serving up
						self.dom.append('<div id="temp-ig" style="width:0;height:0;overflow:hidden;">' + data.html + '</div>');
						
						// Check if it has loaded once before.
						// This is to stop the Embeds.process from throwing and error the first time it's being loaded.
						// private_options are individual to a modaal_scope so will not work across multiple scopes when checking if true, only that one item.
						if ( self.dom.attr('data-igloaded') ) {
							window.instgrm.Embeds.process();
						} else {
							// first time it's loaded, let's set a new private option to use next time it's opened.
							self.dom.attr('data-igloaded', 'true');
						}

						// now set location for new content
						// timeout is required as well to bypass the unusual small thumb issue instagram oembed was serving up
						var target = '#' + self.scope.id + ' .modaal-content-container';
						if ( $(target).length > 0) {
							setTimeout(function() {
								$('#temp-ig').contents().clone().appendTo( target );
								$('#temp-ig').remove();
							}, 1000);
						}
						
					},
					error: function() {
						content = error_msg;

						// now set location for new content
						var target = $('#' + self.scope.id + ' .modaal-content-container');
						if ( target.length > 0) {
							target.removeClass( self.options.loading_class ).addClass( self.options.ajax_error_class );
							target.html(content);
						}
					}
				});

			} else {
				content = error_msg;
			}

			return false;
		},

		// Fetch Ajax Data
		// ----------------------------------------------------------------
		fetch_ajax : function(url) {
			var self = this;
			var content = '';

			// If no accessible title, set it to 'Dialog Window'
			if ( self.options.accessible_title == null ) {
				self.options.accessible_title = 'Dialog Window'
			}

			if ( self.xhr !== null ){
				self.xhr.abort();
				self.xhr = null;
			}

			self.build_modal('<div class="modaal-content-container' + ( self.options.loading_class != '' ? ' ' + self.options.loading_class : '' ) + '">' + self.options.loading_content + '</div>' );

			self.xhr = $.ajax(url, {
				success: function(data) {
					// content fetch is successful so push it into markup
					var target = $('#' + self.scope.id).find('.modaal-content-container');
					if ( target.length > 0){
						target.removeClass( self.options.loading_class );
						target.html( data );

						self.options.ajax_success.call(self, target);
					}
				},
				error: function( xhr ) {
					// There were some errors so return an error message
					if ( xhr.statusText == 'abort' ){
						return;
					}

					var target = $('#' + self.scope.id + ' .modaal-content-container');
					if ( target.length > 0){
						target.removeClass( self.options.loading_class ).addClass( self.options.ajax_error_class );
						target.html( 'Content could not be loaded. Please check the source and try again.' );
					}
				}
			});
		},

		// Create Confirm Modal
		// ----------------------------------------------------------------
		create_confirm : function() {
			var self = this;
			var content;

			content = '<div class="modaal-content-container">' +
					'<h1 id="modaal-title">' + self.options.confirm_title + '</h1>' +
					'<div class="modaal-confirm-content">' + self.options.confirm_content + '</div>' +
						'<div class="modaal-confirm-wrap">' +
							'<button type="button" class="modaal-confirm-btn modaal-ok" aria-label="Confirm">' + self.options.confirm_button_text + '</button>' +
							'<button type="button" class="modaal-confirm-btn modaal-cancel" aria-label="Cancel">' + self.options.confirm_cancel_button_text + '</button>' +
						'</div>' +
					'</div>' +
				'</div>';

			// now push content into markup
			self.build_modal(content);
		},

		// Create Image/Gallery Modal
		// ----------------------------------------------------------------
		create_image : function() {
			var self = this;
			var content;

			var modaal_image_markup = '';
			var gallery_total;
			
			// If has group attribute
			if ( self.$elem.is('[data-group]') || self.$elem.is('[rel]') ) {

				// find gallery groups
				var use_group = self.$elem.is('[data-group]');
				var gallery_group = use_group ? self.$elem.attr('data-group') : self.$elem.attr('rel');
				var gallery_group_items = use_group ? $('[data-group="' + gallery_group + '"]') : $('[rel="' + gallery_group + '"]');

				// remove any previous active attribute to any in the group
				gallery_group_items.removeAttr('data-gallery-active', 'is_active');
				// add active attribute to the item clicked
				self.$elem.attr('data-gallery-active', 'is_active');

				// how many in the grouping are there (-1 to connect with each function starting with 0)
				gallery_total = gallery_group_items.length - 1;

				// prepare array for gallery data
				var gallery = [];

				// start preparing markup
				modaal_image_markup = '<div class="modaal-gallery-item-wrap">';

				// loop each grouping item and push it into our gallery array
				gallery_group_items.each(function(i, item) {
					// setup default content
					var img_src = '';
					var img_alt = '';
					var img_description = '';
					var img_active = false;
					var img_src_error = false;

					var data_modaal_desc = item.getAttribute('data-modaal-desc');
					var data_item_active = item.getAttribute('data-gallery-active');

					// if item has inline custom source, use that instead of href. Fall back to href if available.
					if ( $(item).attr('data-modaal-content-source') ) {
						img_src = $(item).attr('data-modaal-content-source');
					} else if ( $(item).attr('href') ) {
						img_src = $(item).attr('href');
					} else if ( $(item).attr('src') ) {
						img_src = $(item).attr('src');
					} else {
						img_src = 'trigger requires href or data-modaal-content-source attribute';
						img_src_error = true;
					}

					// Does it have a modaal description
					if ( data_modaal_desc != '' && data_modaal_desc !== null && data_modaal_desc !== undefined ) {
						img_alt = data_modaal_desc;
						img_description = '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image ' + (i+1) + ' - </span>' + data_modaal_desc + '</div>'
					} else {
						img_description = '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image ' + (i+1) + '</span></div>';
					}

					// is it the active item
					if ( data_item_active ) {
						img_active = true
					}

					// set new object for values we want
					var gallery_item = {
						'url': img_src,
						'alt': img_alt,
						'rawdesc': data_modaal_desc,
						'desc': img_description,
						'active': img_active,
						'src_error': img_src_error
					};

					// push object into gallery array
					gallery.push( gallery_item );
				});

				// now loop through all items in the gallery and build up the markup
				for (var i = 0; i < gallery.length; i++) {
					// Set default active class, then check if array item active is true and update string for class
					var is_active = '';
					var aria_label = gallery[i].rawdesc ? 'Image: ' + gallery[i].rawdesc : 'Image ' + i + ' no description';

					if ( gallery[i].active ) {
						is_active = ' ' + self.private_options.active_class;
					}

					// if gallery item has source error, output message rather than undefined image
					var image_output = gallery[i].src_error ? gallery[i].url : '<img src="' + gallery[i].url + '" alt=" " style="width:100%">';

					// for each item build up the markup
					modaal_image_markup += '<div class="modaal-gallery-item gallery-item-' + i + is_active + '" aria-label="' + aria_label + '">' +
						image_output + gallery[i].desc +
					'</div>';
				}

				// Close off the markup for the gallery
				modaal_image_markup += '</div>';

				// Add next and previous buttons if outside
				if (self.options.outer_controls != true) {
					modaal_image_markup += self.scope.prev_btn + self.scope.next_btn;
				}
			} else {
				// This is only a single gallery item so let's grab the necessary values

				// define the source, check if content_source option exists, and use that or fall back to href.
				var this_img_src;
				var img_src_error = false;
				if ( self.$elem.attr('data-modaal-content-source') ) {
					this_img_src = self.$elem.attr('data-modaal-content-source');
				} else if ( self.$elem.attr('href') ) {
					this_img_src = self.$elem.attr('href');
				} else if ( self.$elem.attr('src') ) {
					this_img_src = self.$elem.attr('src');
				} else {
					this_img_src = 'trigger requires href or data-modaal-content-source attribute';
					img_src_error = true;
				}

				var this_img_alt_txt = '';
				var this_img_alt = '';
				var aria_label = '';

				if ( self.$elem.attr('data-modaal-desc') ) {
					aria_label = self.$elem.attr('data-modaal-desc');
					this_img_alt_txt = self.$elem.attr('data-modaal-desc');
					this_img_alt = '<div class="modaal-gallery-label"><span class="modaal-accessible-hide">Image - </span>' + this_img_alt_txt + '</div>';
				} else {
					aria_label = "Image with no description";
				}

				// if image item has source error, output message rather than undefined image
				var image_output = img_src_error ? this_img_src : '<img src="' + this_img_src + '" alt=" " style="width:100%">';

				// build up the html
				modaal_image_markup = '<div class="modaal-gallery-item is_active" aria-label="' + aria_label + '">' +
					image_output + this_img_alt +
				'</div>';
			}

			// Update content variable
			content = modaal_image_markup;

			// now push content into markup
			self.build_modal(content);

			// setup next & prev buttons
			if ( $('.modaal-gallery-item.is_active').is('.gallery-item-0') ) {
				$('.modaal-gallery-prev').hide();
			}
			if ( $('.modaal-gallery-item.is_active').is('.gallery-item-' + gallery_total) ) {
				$('.modaal-gallery-next').hide();
			}
		},

		// Gallery Change Image
		// ----------------------------------------------------------------
		gallery_update : function(direction) {
			var self = this;
			var this_gallery = $('#' + self.scope.id);
			var this_gallery_item = this_gallery.find('.modaal-gallery-item');
			var this_gallery_total = this_gallery_item.length - 1;

			// if single item, don't proceed
			if ( this_gallery_total == 0 ) {
				return false;
			}

			var prev_btn = this_gallery.find('.modaal-gallery-prev'),
				next_btn = this_gallery.find('.modaal-gallery-next');

			var duration = 250;

			var new_img_w = 0,
				new_img_h = 0;

			// CB: Before image change
			var current_item = this_gallery.find( '.modaal-gallery-item.' + self.private_options.active_class ),
				incoming_item = ( direction == 'next' ? current_item.next( '.modaal-gallery-item' ) : current_item.prev( '.modaal-gallery-item' ) );
			self.options.before_image_change.call(self, current_item, incoming_item);

			// stop change if at start of end
			if ( direction == 'prev' && this_gallery.find('.gallery-item-0').hasClass('is_active') ) {
				return false;
			} else if ( direction == 'next' && this_gallery.find('.gallery-item-' + this_gallery_total).hasClass('is_active') ) {
				return false;
			}


			// lock dimensions
			current_item.stop().animate({
				opacity: 0
			}, duration, function(){
				// Move to appropriate image
				incoming_item.addClass('is_next').css({
					'position': 'absolute',
					'display': 'block',
					'opacity': 0
				});

				// Collect doc width
				var doc_width = $(document).width();
				var width_threshold = doc_width > 1140 ? 280 : 50;

				// start toggle to 'is_next'
				new_img_w = this_gallery.find('.modaal-gallery-item.is_next').width();
				new_img_h = this_gallery.find('.modaal-gallery-item.is_next').height();

				var new_natural_w = this_gallery.find('.modaal-gallery-item.is_next img').prop('naturalWidth');
				var new_natural_h = this_gallery.find('.modaal-gallery-item.is_next img').prop('naturalHeight');

				// if new image is wider than doc width
				if ( new_natural_w > (doc_width - width_threshold) ) {
					// set new width just below doc width
					new_img_w = doc_width - width_threshold;

					// Set temp widths so we can calulate the correct height;
					this_gallery.find('.modaal-gallery-item.is_next').css({ 'width': new_img_w });
					this_gallery.find('.modaal-gallery-item.is_next img').css({ 'width': new_img_w });

					// Set new height variable
					new_img_h = this_gallery.find('.modaal-gallery-item.is_next').find('img').height();
				} else {
					// new img is not wider than screen, so let's set the new dimensions
					new_img_w = new_natural_w;
					new_img_h = new_natural_h;
				}

				// resize gallery region
				this_gallery.find('.modaal-gallery-item-wrap').stop().animate({
					'width': new_img_w,
					'height': new_img_h
				}, duration, function() {
					// hide old active image
					current_item.removeClass(self.private_options.active_class + ' ' + self.options.gallery_active_class).removeAttr('style');
					current_item.find('img').removeAttr('style');

					// show new image
					incoming_item.addClass(self.private_options.active_class + ' ' + self.options.gallery_active_class).removeClass('is_next').css('position','');

					// animate in new image (now has the normal is_active class
					incoming_item.stop().animate({
						opacity: 1
					}, duration, function(){
						$(this).removeAttr('style').css({
							'width': '100%'
						});
						$(this).find('img').css('width', '100%');

						// remove dimension lock
						this_gallery.find('.modaal-gallery-item-wrap').removeAttr('style');

						// CB: After image change
						self.options.after_image_change.call( self, incoming_item );
					});

					// Focus on the new gallery item
					this_gallery.find('.modaal-gallery-item').removeAttr('tabindex');
					this_gallery.find('.modaal-gallery-item.' + self.private_options.active_class + '').attr('tabindex', '0').focus();

					// hide/show next/prev
					if ( this_gallery.find('.modaal-gallery-item.' + self.private_options.active_class).is('.gallery-item-0') ) {
						prev_btn.stop().animate({
							opacity: 0
						}, 150, function(){
							$(this).hide();
						});
					} else {
						prev_btn.stop().css({
							'display': 'block',
							'opacity': prev_btn.css('opacity')
						}).animate({
							opacity: 1
						}, 150);
					}
					if ( this_gallery.find('.modaal-gallery-item.' + self.private_options.active_class).is('.gallery-item-' + this_gallery_total) ) {
						next_btn.stop().animate({
							opacity: 0
						}, 150, function(){
							$(this).hide();
						});
					} else {
						next_btn.stop().css({
							'display': 'block',
							'opacity': prev_btn.css('opacity')
						}).animate({
							opacity: 1
						}, 150);
					}
				});
			});
		},

		// Create Video Modal
		// ----------------------------------------------------------------
		create_video : function(url) {
			var self = this;
			var content;

			// video markup
			content = '<iframe src="' + url + '" class="modaal-video-frame" frameborder="0" allowfullscreen></iframe>';

			// now push content into markup
			self.build_modal('<div class="modaal-video-container">' + content + '</div>');
		},

		// Create iFrame Modal
		// ----------------------------------------------------------------
		create_iframe : function(url) {
			var self = this;
			var content;

			if ( self.options.width !== null || self.options.width !== undefined || self.options.height !== null || self.options.height !== undefined ) {
				// video markup
				content = '<iframe src="' + url + '" class="modaal-iframe-elem" frameborder="0" allowfullscreen></iframe>';
			} else {
				content = '<div class="modaal-content-container">Please specify a width and height for your iframe</div>';
			}

			// now push content into markup
			self.build_modal(content);
		},

		// Open Modaal
		// ----------------------------------------------------------------
		modaal_open : function() {
			var self = this;
			var modal_wrapper = $( '#' + self.scope.id );
			var animation_type = self.options.animation;

			if (animation_type === 'none' ){
				modal_wrapper.removeClass('modaal-start_none');
				self.options.after_open.call(self, modal_wrapper);
			}

			// Open with fade
			if (animation_type === 'fade') {
				modal_wrapper.removeClass('modaal-start_fade');
			}

			// Open with slide down
			if (animation_type === 'slide-down') {
				modal_wrapper.removeClass('modaal-start_slide_down');
			}

			var focusTarget = modal_wrapper;

			// Switch focusTarget tabindex (switch from other modal if exists)
			$('.modaal-wrapper *[tabindex=0]').removeAttr('tabindex');

			if ( self.options.type == 'image' ) {
				focusTarget = $('#' + self.scope.id).find('.modaal-gallery-item.' + self.private_options.active_class);

			} else if ( modal_wrapper.find('.modaal-iframe-elem').length ) {
				focusTarget = modal_wrapper.find('.modaal-iframe-elem');

			} else if ( modal_wrapper.find('.modaal-video-wrap').length ) {
				focusTarget = modal_wrapper.find('.modaal-video-wrap');

			} else {
				focusTarget = modal_wrapper.find('.modaal-focus');

			}

			// now set the focus
			focusTarget.attr('tabindex', '0').focus();

			// Run after_open
			if (animation_type !== 'none') {
				// CB: after_open
				setTimeout(function() {
					self.options.after_open.call(self, modal_wrapper)
				}, self.options.after_callback_delay);
			}
		},

		// Close Modal
		// ----------------------------------------------------------------
		modaal_close : function() {
			var self = this;
			var modal_wrapper = $( '#' + self.scope.id );

			// CB: before_close
			self.options.before_close.call(self, modal_wrapper);

			if (self.xhr !== null){
				self.xhr.abort();
				self.xhr = null;
			}

			// Now we close the modal
			if (self.options.animation === 'none' ){
				modal_wrapper.addClass('modaal-start_none');
			}

			// Close with fade
			if (self.options.animation === 'fade') {
				modal_wrapper.addClass('modaal-start_fade');
			}

			// Close with slide up (using initial slide down)
			if (self.options.animation === 'slide-down') {
				modal_wrapper.addClass('modaal-start_slide_down');
			}

			// CB: after_close and remove
			setTimeout(function() {
				// clone inline content back to origin place
				if (self.options.type == 'inline') {
					$('#' + self.scope.id + ' .modaal-content-container').contents().detach().appendTo( self.scope.source )
				}
				// remove markup from dom
				modal_wrapper.remove();
				// CB: after_close
				self.options.after_close.call(self);
				// scope is now closed
				self.scope.is_open = false;

			}, self.options.after_callback_delay);

			// Call overlay hide
			self.modaal_overlay('hide');

			// Roll back to last focus state before modal open. If was closed programmatically, this might not be set
			if (self.lastFocus != null) {
				self.lastFocus.focus();
			}
		},

		// Overlay control (accepts action for show or hide)
		// ----------------------------------------------------------------
		modaal_overlay : function(action) {
			var self = this;

			if (action == 'show') {
				// Modal is open so update scope
				self.scope.is_open = true;

				// set body to overflow hidden if background_scroll is false
				if (! self.options.background_scroll) {
					self.dom.addClass('modaal-noscroll');
				}

				// append modaal overlay
				if ($('#' + self.scope.id + '_overlay').length < 1) {
					self.dom.append('<div class="modaal-overlay" id="' + self.scope.id + '_overlay"></div>');
				}

				// now show
				$('#' + self.scope.id + '_overlay').css('background', self.options.background).stop().animate({
					opacity: self.options.overlay_opacity
				}, self.options.animation_speed, function(){
					// now open the modal
					self.modaal_open();
				});

			} else if (action == 'hide') {

				// now hide the overlay
				$('#' + self.scope.id + '_overlay').stop().animate({
					opacity: 0
				}, self.options.animation_speed, function(){
					// remove overlay from dom
					$(this).remove();

					// remove body overflow lock
					self.dom.removeClass('modaal-noscroll');
				});
			}
		},

		// Check if is touch
		// ----------------------------------------------------------------
		is_touch : function() {
			return 'ontouchstart' in window || navigator.maxTouchPoints;
		}
	};

	// Define default object to store
	var modaal_existing_selectors = [];

	// Declare the modaal jQuery method
	// ------------------------------------------------------------
	$.fn.modaal = function(options) {
		return this.each(function (i) {
			var existing_modaal = $(this).data('modaal');

			if ( existing_modaal ){
				// Checking for string value, used for methods
				if (typeof(options) == 'string'){
					switch (options) {
						case 'open':
 							// create the modal
 							existing_modaal.create_modaal(existing_modaal);
							break;
						case 'close':
							existing_modaal.modaal_close();
							break;
					}
				}
			} else {
				// Not a string, so let's setup the modal ready to use
				var modaal = Object.create(Modaal);
				modaal.init(options, this);
				$.data(this, "modaal", modaal);

				// push this select into existing selectors array which is referenced during modaal_dom_observer
				modaal_existing_selectors.push({
					'element': $(this).attr('class'),
					'options': options
				});
			}
		});
	};

	// Default options
	// ------------------------------------------------------------
	$.fn.modaal.options = {

		//General
		type: 'inline',
		content_source: null,
		animation: 'fade',
		animation_speed: 300,
		after_callback_delay: 350,
		is_locked: false,
		hide_close: false,
		background: '#000',
		overlay_opacity: '0.8',
		overlay_close: true,
		accessible_title: 'Dialog Window',
		start_open: false,
		fullscreen: false,
		custom_class: '',
		background_scroll: false,
		should_open: true,
		close_text: 'Close',
		close_aria_label: 'Close (Press escape to close)',
		width: null,
		height: null,

		//Events
		before_open: function(){},
		after_open: function(){},
		before_close: function(){},
		after_close: function(){},
		source: function( element, src ){
			return src;
		},

		//Confirm Modal
		confirm_button_text: 'Confirm', // text on confirm button
		confirm_cancel_button_text: 'Cancel',
		confirm_title: 'Confirm Title', // title for confirm modal
		confirm_content: '<p>This is the default confirm dialog content. Replace me through the options</p>', // html for confirm message
		confirm_callback: function() {},
		confirm_cancel_callback: function() {},


		//Gallery Modal
		gallery_active_class: 'gallery_active_item',
		outer_controls:	false,
		before_image_change: function( current_item, incoming_item ) {},
		after_image_change: function( current_item ) {},

		//Ajax Modal
		loading_content: modaal_loading_spinner,
		loading_class: 'is_loading',
		ajax_error_class: 'modaal-error',
		ajax_success: function(){},

		//Instagram
		instagram_id: null
	};

	// Check and Set Inline Options
	// ------------------------------------------------------------
	function modaal_inline_options(self) {

		// new empty options
		var options = {};
		var inline_options = false;

		// option: type
		if ( self.attr('data-modaal-type') ) {
			inline_options = true;
			options.type = self.attr('data-modaal-type');
		}

		// option: type
		if ( self.attr('data-modaal-content-source') ) {
			inline_options = true;
			options.content_source = self.attr('data-modaal-content-source');
		}

		// option: animation
		if ( self.attr('data-modaal-animation') ) {
			inline_options = true;
			options.animation = self.attr('data-modaal-animation');
		}

		// option: animation_speed
		if ( self.attr('data-modaal-animation-speed') ) {
			inline_options = true;
			options.animation_speed = self.attr('data-modaal-animation-speed');
		}

		// option: after_callback_delay
		if ( self.attr('data-modaal-after-callback-delay') ) {
			inline_options = true;
			options.after_callback_delay = self.attr('data-modaal-after-callback-delay');
		}

		// option: is_locked
		if ( self.attr('data-modaal-is-locked') ) {
			inline_options = true;
			options.is_locked = (self.attr('data-modaal-is-locked') === 'true' ? true : false);
		}

		// option: hide_close
		if ( self.attr('data-modaal-hide-close') ) {
			inline_options = true;
			options.hide_close = (self.attr('data-modaal-hide-close') === 'true' ? true : false);
		}

		// option: background
		if ( self.attr('data-modaal-background') ) {
			inline_options = true;
			options.background = self.attr('data-modaal-background');
		}

		// option: overlay_opacity
		if ( self.attr('data-modaal-overlay-opacity') ) {
			inline_options = true;
			options.overlay_opacity = self.attr('data-modaal-overlay-opacity');
		}

		// option: overlay_close
		if ( self.attr('data-modaal-overlay-close') ) {
			inline_options = true;
			options.overlay_close = (self.attr('data-modaal-overlay-close') === 'false' ? false : true);
		}

		// option: accessible_title
		if ( self.attr('data-modaal-accessible-title') ) {
			inline_options = true;
			options.accessible_title = self.attr('data-modaal-accessible-title');
		}

		// option: start_open
		if ( self.attr('data-modaal-start-open') ) {
			inline_options = true;
			options.start_open = (self.attr('data-modaal-start-open') === 'true' ? true : false);
		}

		// option: fullscreen
		if ( self.attr('data-modaal-fullscreen') ) {
			inline_options = true;
			options.fullscreen = (self.attr('data-modaal-fullscreen') === 'true' ? true : false);
		}

		// option: custom_class
		if ( self.attr('data-modaal-custom-class') ) {
			inline_options = true;
			options.custom_class = self.attr('data-modaal-custom-class');
		}

		// option: close_text
		if ( self.attr('data-modaal-close-text') ) {
			inline_options = true;
			options.close_text = self.attr('data-modaal-close-text');
		}

		// option: close_aria_label
		if ( self.attr('data-modaal-close-aria-label') ) {
			inline_options = true;
			options.close_aria_label = self.attr('data-modaal-close-aria-label');
		}

		// option: background_scroll
		if ( self.attr('data-modaal-background-scroll') ) {
			inline_options = true;
			options.background_scroll = (self.attr('data-modaal-background-scroll') === 'true' ? true : false);
		}

		// option: width
		if ( self.attr('data-modaal-width') ) {
			inline_options = true;
			options.width = parseInt( self.attr('data-modaal-width') );
		}

		// option: height
		if ( self.attr('data-modaal-height') ) {
			inline_options = true;
			options.height = parseInt( self.attr('data-modaal-height') );
		}

		// option: confirm_button_text
		if ( self.attr('data-modaal-confirm-button-text') ) {
			inline_options = true;
			options.confirm_button_text = self.attr('data-modaal-confirm-button-text');
		}

		// option: confirm_cancel_button_text
		if ( self.attr('data-modaal-confirm-cancel-button-text') ) {
			inline_options = true;
			options.confirm_cancel_button_text = self.attr('data-modaal-confirm-cancel-button-text');
		}

		// option: confirm_title
		if ( self.attr('data-modaal-confirm-title') ) {
			inline_options = true;
			options.confirm_title = self.attr('data-modaal-confirm-title');
		}

		// option: confirm_content
		if ( self.attr('data-modaal-confirm-content') ) {
			inline_options = true;
			options.confirm_content = self.attr('data-modaal-confirm-content');
		}

		// option: gallery_active_class
		if ( self.attr('data-modaal-gallery-active-class') ) {
			inline_options = true;
			options.gallery_active_class = self.attr('data-modaal-gallery-active-class');
		}

		// option: loading_content
		if ( self.attr('data-modaal-loading-content') ) {
			inline_options = true;
			options.loading_content = self.attr('data-modaal-loading-content');
		}

		// option: loading_class
		if ( self.attr('data-modaal-loading-class') ) {
			inline_options = true;
			options.loading_class = self.attr('data-modaal-loading-class');
		}

		// option: ajax_error_class
		if ( self.attr('data-modaal-ajax-error-class') ) {
			inline_options = true;
			options.ajax_error_class = self.attr('data-modaal-ajax-error-class');
		}

		// option: start_open
		if ( self.attr('data-modaal-instagram-id') ) {
			inline_options = true;
			options.instagram_id = self.attr('data-modaal-instagram-id');
		}

		// now set it up for the trigger, but only if inline_options is true
		if ( inline_options ) {
			self.modaal(options);
		}
	};

	// On body load (or now, if already loaded), init any modaals defined inline
	// Ensure this is done after $.fn.modaal and default options are declared
	// ----------------------------------------------------------------
	$(function(){

		var single_modaal = $('.modaal');

		// Check for existing modaal elements
		if ( single_modaal.length ) {
			single_modaal.each(function() {
				var self = $(this);
				modaal_inline_options(self);
			});
		}

		// Obvserve DOM mutations for newly added triggers
		var modaal_dom_observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				if (mutation.addedNodes && mutation.addedNodes.length > 0) {
					// element added to DOM
					var findElement = [].some.call(mutation.addedNodes, function(el) {
						var elm = $(el);
						if ( elm.is('a') || elm.is('button') ) {
							
							if ( elm.hasClass('modaal') ) {
								// is inline Modaal, initialise options
								modaal_inline_options(elm);
							} else {
								// is not inline modaal. Check for existing selector
								modaal_existing_selectors.forEach(function(modaalSelector) {
									if ( modaalSelector.element == elm.attr('class') ) {
										$(elm).modaal( modaalSelector.options );
										return false;
									}
								});
							}

						}
					});
				}
			});
		});
		var observer_config = {
			subtree: true,
			attributes: true,
			childList: true,
			characterData: true
		};

		// pass in the target node, as well as the observer options
		setTimeout(function() {
			modaal_dom_observer.observe(document.body, observer_config);
		}, 500);

	});

} ( jQuery, window, document ) );
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false,
      zIndex: 'inherit'
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        //update height in case of dynamic content
        s.stickyWrapper.css('height', s.stickyElement.outerHeight());

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'z-index': ''
              });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger('sticky-end', [s]);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop !== newTop) {
            var newWidth;
            if (s.getWidthFrom) {
                padding =  s.stickyElement.innerWidth() - s.stickyElement.width();
                newWidth = $(s.getWidthFrom).width() - padding || null;
            } else if (s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if (newWidth == null) {
                newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop)
              .css('z-index', s.zIndex);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger('sticky-start', [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger('sticky-update', [s]);
            }

            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger('sticky-bottom-reached', [s]);
            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
            }

            s.currentTop = newTop;
          }

          // Check if sticky has reached end of container and stop sticking
          var stickyWrapperContainer = s.stickyWrapper.parent();
          var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

          if( unstick ) {
            s.stickyElement
              .css('position', 'absolute')
              .css('top', '')
              .css('bottom', 0)
              .css('z-index', '');
          } else {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop)
              .css('bottom', '')
              .css('z-index', s.zIndex);
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i];
        var newWidth = null;
        if (s.getWidthFrom) {
            if (s.responsiveWidth) {
                newWidth = $(s.getWidthFrom).width();
            }
        } else if(s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
        }
        if (newWidth != null) {
            s.stickyElement.css('width', newWidth);
        }
      }
    },
    methods = {
      init: function(options) {
        return this.each(function() {
          var o = $.extend({}, defaults, options);
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(function() {
            if ($(this).parent("#" + wrapperId).length == 0) {
                    return wrapper;
            }
});

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") === "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop    = null;

          sticked.push(o);

          methods.setWrapperHeight(this);
          methods.setupChangeListeners(this);
        });
      },

      setWrapperHeight: function(stickyElement) {
        var element = $(stickyElement);
        var stickyWrapper = element.parent();
        if (stickyWrapper) {
          stickyWrapper.css('height', element.outerHeight());
        }
      },

      setupChangeListeners: function(stickyElement) {
        if (window.MutationObserver) {
          var mutationObserver = new window.MutationObserver(function(mutations) {
            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
              methods.setWrapperHeight(stickyElement);
            }
          });
          mutationObserver.observe(stickyElement, {subtree: true, childList: true});
        } else {
          if (window.addEventListener) {
            stickyElement.addEventListener('DOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
            stickyElement.addEventListener('DOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
          } else if (window.attachEvent) {
            stickyElement.attachEvent('onDOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            });
            stickyElement.attachEvent('onDOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            });
          }
        }
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while (i-- > 0) {
            if (sticked[i].stickyElement.get(0) === that) {
                splice.call(sticked,i,1);
                removeIdx = i;
            }
          }
          if(removeIdx !== -1) {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'float': '',
                'z-index': ''
              })
            ;
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
}));


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camelCase__ = __webpack_require__(7);


/**
 * DOM-based Routing
 *
 * Based on {@link http://goo.gl/EUTi53|Markup-based Unobtrusive Comprehensive DOM-ready Execution} by Paul Irish
 *
 * The routing fires all common scripts, followed by the page specific scripts.
 * Add additional events for more control over timing e.g. a finalize event
 */
var Router = function Router(routes) {
  this.routes = routes;
};

/**
 * Fire Router events
 * @param {string} route DOM-based route derived from body classes (`<body class="...">`)
 * @param {string} [event] Events on the route. By default, `init` and `finalize` events are called.
 * @param {string} [arg] Any custom argument to be passed to the event.
 */
Router.prototype.fire = function fire (route, event, arg) {
    if ( event === void 0 ) event = 'init';

  var fire = route !== '' && this.routes[route] && typeof this.routes[route][event] === 'function';
  if (fire) {
    this.routes[route][event](arg);
  }
};

/**
 * Automatically load and fire Router events
 *
 * Events are fired in the following order:
 ** common init
 ** page-specific init
 ** page-specific finalize
 ** common finalize
 */
Router.prototype.loadEvents = function loadEvents () {
    var this$1 = this;

  // Fire common init JS
  this.fire('common');

  // Fire page-specific init JS, and then finalize JS
  document.body.className
    .toLowerCase()
    .replace(/-/g, '_')
    .split(/\s+/)
    .map(__WEBPACK_IMPORTED_MODULE_0__camelCase__["a" /* default */])
    .forEach(function (className) {
      this$1.fire(className);
      this$1.fire(className, 'finalize');
    });

  // Fire common finalize JS
  this.fire('common', 'finalize');
};

/* harmony default export */ __webpack_exports__["a"] = (Router);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * the most terrible camelizer on the internet, guaranteed!
 * @param {string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 * @return {string} String converted to camel-case, e.g., camelCaseIsHard
 */
/* harmony default export */ __webpack_exports__["a"] = (function (str) { return ("" + (str.charAt(0).toLowerCase()) + (str.replace(/[\W_]/g, '|').split('|')
  .map(function (part) { return ("" + (part.charAt(0).toUpperCase()) + (part.slice(1))); })
  .join('')
  .slice(1))); });;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    $('.staff-card-container').click(function(){
      $(this).find('.staff-card').toggleClass('flipped');
    })

    $(".nav-primary").sticky({topSpacing:0});

    $('.menu-main-menu-container .menu-item').each(function() {
      if ($(this).hasClass('current-page-ancestor')) {
        $(this).children('a').attr('aria-current', 'true');
      }
      if ($(this).hasClass('current-menu-item')) {
        $(this).children('a').attr('aria-current', 'page');
      }
    });
  },
  finalize: function finalize() {
    var mDown = window.matchMedia( "(max-width: 992px)" );

    // Show mobile nav
    function showMobileNav() {
      $('.navbar-menu').css('display', 'block');
      $('body').addClass('mobilenav-active');
      $('#menu-trigger + label i').attr('aria-label', 'Hide navigation menu');

      // Enable focus of nav items using tabindex
      $('.navbar-menu').each(function() {
        var el = $(this);
        $('a', el).attr('tabindex', '0');
      });
    }

    // Hide mobile nav
    function hideMobileNav() {
      $('.navbar-menu').css('display', 'none');
      $('body').removeClass('mobilenav-active');
      $('#menu-trigger + label i').attr('aria-label', 'Show navigation menu');

      // Disable focus of nav items using tabindex
      $('.navbar-menu').each(function() {
        var el = $(this);
        $('a', el).attr('tabindex', '-1');
      });
    }

    // Toggle mobile nav
    $('#menu-trigger').on('change focusout', function() {
      if ($(this).prop('checked')) {
        showMobileNav();
      } else {
        hideMobileNav();
      }
    });

    // Only show mobile nav if an element inside is receiving focus
    $('.navbar-menu').each(function () {
      var el = $(this);

      $('a', el).on('focus', function() {
        $(this).parents('li').addClass('hover');
      }).on('focusout', function() {
        $(this).parents('li').removeClass('hover');

        if (mDown.matches) {
          setTimeout(function () {
            if ($(':focus').closest('#menu-primary-menu').length == 0) {
              $('#menu-trigger').prop('checked', false);
              hideMobileNav();
            }
          }, 200);
        }
      });
    });

    // Initialzie Modaal
    $('.modaal').modaal({
      before_open: function() {
        $(event.path[0]).addClass('keep-open');
      },
      before_close: function() {
        $('.modaal .hover-pic').removeClass('keep-open');
      },
    });
  },
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autoload_hoverintent_min__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autoload_hoverintent_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__autoload_hoverintent_min__);


/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    // JavaScript to be fired on the home page
  },
  finalize: function finalize() {
    $('.diamond-service').each(function() {
      __WEBPACK_IMPORTED_MODULE_0__autoload_hoverintent_min___default()(
        $(this)[0],
        function() {
          // Handler in
          var side = $(this).attr('data-side');
          $(this).removeClass('not-active').addClass('active');
          $('.diamond-service').not(this).addClass('not-active').removeClass('active');
          $('.diamond-cube').attr('data-show', side);
          $('.diamond-cube-default').removeClass('show');
        },
        function() {
          // Handler out
        }
      );
    });

    $('.our-services').on('mouseleave', function() {
      $('.diamond-service').removeClass('not-active').removeClass('active');
      $('.diamond-cube').removeAttr('data-show');
      $('.diamond-cube-default').addClass('show');
    });
  },
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    // JavaScript to be fired on the about us page
  },
});


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_macy_dist_macy_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_macy_dist_macy_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_macy_dist_macy_js__);


/* harmony default export */ __webpack_exports__["a"] = ({
  init: function init() {
    __WEBPACK_IMPORTED_MODULE_0_macy_dist_macy_js___default()({
      container: '.grid',
      trueOrder: true,
      columns: 2,
      margin: {
        x: 20,
        y: 30,
      },
      breakAt: {
        767: 1,
      },
    });
  },
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):t.Macy=n()}(this,function(){"use strict";function t(t,n){var e=void 0;return function(){e&&clearTimeout(e),e=setTimeout(t,n)}}function n(t,n){for(var e=t.length,o=e,r=[];e--;)r.push(n(t[o-e-1]));return r}function e(t,n){A(t,n,arguments.length>2&&void 0!==arguments[2]&&arguments[2])}function o(t){for(var n=t.options,e=t.responsiveOptions,o=t.keys,r=t.docWidth,i=void 0,s=0;s<o.length;s++){var a=parseInt(o[s],10);r>=a&&(i=n.breakAt[a],O(i,e))}return e}function r(t){for(var n=t.options,e=t.responsiveOptions,o=t.keys,r=t.docWidth,i=void 0,s=o.length-1;s>=0;s--){var a=parseInt(o[s],10);r<=a&&(i=n.breakAt[a],O(i,e))}return e}function i(t){var n=window.innerWidth,e={columns:t.columns};L(t.margin)?e.margin={x:t.margin.x,y:t.margin.y}:e.margin={x:t.margin,y:t.margin};var i=Object.keys(t.breakAt);return t.mobileFirst?o({options:t,responsiveOptions:e,keys:i,docWidth:n}):r({options:t,responsiveOptions:e,keys:i,docWidth:n})}function s(t){return i(t).columns}function a(t){return i(t).margin}function c(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=s(t),o=a(t).x,r=100/e;return n?1===e?"100%":(o=(e-1)*o/e,"calc("+r+"% - "+o+"px)"):r}function u(t,n){var e=s(t.options),o=0,r=void 0,i=void 0;return 1===++n?0:(i=a(t.options).x,r=(i-(e-1)*i/e)*(n-1),o+=c(t.options,!1)*(n-1),"calc("+o+"% + "+r+"px)")}function l(t){var n=0,e=t.container;m(t.rows,function(t){n=t>n?t:n}),e.style.height=n+"px"}function p(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=s(t.options),i=a(t.options).y;C(t,r,e),m(n,function(n){var e=0,r=parseInt(n.offsetHeight,10);isNaN(r)||(t.rows.forEach(function(n,o){n<t.rows[e]&&(e=o)}),n.style.position="absolute",n.style.top=t.rows[e]+"px",n.style.left=""+t.cols[e],t.rows[e]+=isNaN(r)?0:r+i,o&&(n.dataset.macyComplete=1))}),o&&(t.tmpRows=null),l(t)}function h(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=s(t.options),i=a(t.options).y;C(t,r,e),m(n,function(n){t.lastcol===r&&(t.lastcol=0);var e=M(n,"height");e=parseInt(n.offsetHeight,10),isNaN(e)||(n.style.position="absolute",n.style.top=t.rows[t.lastcol]+"px",n.style.left=""+t.cols[t.lastcol],t.rows[t.lastcol]+=isNaN(e)?0:e+i,t.lastcol+=1,o&&(n.dataset.macyComplete=1))}),o&&(t.tmpRows=null),l(t)}var f=function t(n,e){if(!(this instanceof t))return new t(n,e);if(n=n.replace(/^\s*/,"").replace(/\s*$/,""),e)return this.byCss(n,e);for(var o in this.selectors)if(e=o.split("/"),new RegExp(e[1],e[2]).test(n))return this.selectors[o](n);return this.byCss(n)};f.prototype.byCss=function(t,n){return(n||document).querySelectorAll(t)},f.prototype.selectors={},f.prototype.selectors[/^\.[\w\-]+$/]=function(t){return document.getElementsByClassName(t.substring(1))},f.prototype.selectors[/^\w+$/]=function(t){return document.getElementsByTagName(t)},f.prototype.selectors[/^\#[\w\-]+$/]=function(t){return document.getElementById(t.substring(1))};var m=function(t,n){for(var e=t.length,o=e;e--;)n(t[o-e-1])},v=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.running=!1,this.events=[],this.add(t)};v.prototype.run=function(){if(!this.running&&this.events.length>0){var t=this.events.shift();this.running=!0,t(),this.running=!1,this.run()}},v.prototype.add=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!!n&&(Array.isArray(n)?m(n,function(n){return t.add(n)}):(this.events.push(n),void this.run()))},v.prototype.clear=function(){this.events=[]};var d=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.instance=t,this.data=n,this},g=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.events={},this.instance=t};g.prototype.on=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!(!t||!n)&&(Array.isArray(this.events[t])||(this.events[t]=[]),this.events[t].push(n))},g.prototype.emit=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t||!Array.isArray(this.events[t]))return!1;var e=new d(this.instance,n);m(this.events[t],function(t){return t(e)})};var y=function(t){return!("naturalHeight"in t&&t.naturalHeight+t.naturalWidth===0)||t.width+t.height!==0},E=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new Promise(function(t,e){if(n.complete)return y(n)?t(n):e(n);n.addEventListener("load",function(){return y(n)?t(n):e(n)}),n.addEventListener("error",function(){return e(n)})}).then(function(n){e&&t.emit(t.constants.EVENT_IMAGE_LOAD,{img:n})}).catch(function(n){return t.emit(t.constants.EVENT_IMAGE_ERROR,{img:n})})},w=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n(e,function(n){return E(t,n,o)})},A=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Promise.all(w(t,n,e)).then(function(){t.emit(t.constants.EVENT_IMAGE_COMPLETE)})},I=function(n){return t(function(){n.emit(n.constants.EVENT_RESIZE),n.queue.add(function(){return n.recalculate(!0,!0)})},100)},N=function(t){if(t.container=f(t.options.container),t.container instanceof f||!t.container)return!!t.options.debug&&console.error("Error: Container not found");delete t.options.container,t.container.length&&(t.container=t.container[0]),t.container.style.position="relative"},T=function(t){t.queue=new v,t.events=new g(t),t.rows=[],t.resizer=I(t)},_=function(t){var n=f("img",t.container);window.addEventListener("resize",t.resizer),t.on(t.constants.EVENT_IMAGE_LOAD,function(){return t.recalculate(!1,!1)}),t.on(t.constants.EVENT_IMAGE_COMPLETE,function(){return t.recalculate(!0,!0)}),t.options.useOwnImageLoader||e(t,n,!t.options.waitForImages),t.emit(t.constants.EVENT_INITIALIZED)},b=function(t){N(t),T(t),_(t)},L=function(t){return t===Object(t)&&"[object Array]"!==Object.prototype.toString.call(t)},O=function(t,n){L(t)||(n.columns=t),L(t)&&t.columns&&(n.columns=t.columns),L(t)&&t.margin&&!L(t.margin)&&(n.margin={x:t.margin,y:t.margin}),L(t)&&t.margin&&L(t.margin)&&t.margin.x&&(n.margin.x=t.margin.x),L(t)&&t.margin&&L(t.margin)&&t.margin.y&&(n.margin.y=t.margin.y)},M=function(t,n){return window.getComputedStyle(t,null).getPropertyValue(n)},C=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(t.lastcol||(t.lastcol=0),t.rows.length<1&&(e=!0),e){t.rows=[],t.cols=[],t.lastcol=0;for(var o=n-1;o>=0;o--)t.rows[o]=0,t.cols[o]=u(t,o)}else if(t.tmpRows){t.rows=[];for(var o=n-1;o>=0;o--)t.rows[o]=t.tmpRows[o]}else{t.tmpRows=[];for(var o=n-1;o>=0;o--)t.tmpRows[o]=t.rows[o]}},V=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=n?t.container.children:f(':scope > *:not([data-macy-complete="1"])',t.container),r=c(t.options);return m(o,function(t){n&&(t.dataset.macyComplete=0),t.style.width=r}),t.options.trueOrder?(h(t,o,n,e),t.emit(t.constants.EVENT_RECALCULATED)):(p(t,o,n,e),t.emit(t.constants.EVENT_RECALCULATED))},R=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},x={columns:4,margin:2,trueOrder:!1,waitForImages:!1,useImageLoader:!0,breakAt:{},useOwnImageLoader:!1,onInit:!1};!function(){try{document.createElement("a").querySelector(":scope *")}catch(t){!function(){function t(t){return function(e){if(e&&n.test(e)){var o=this.getAttribute("id");o||(this.id="q"+Math.floor(9e6*Math.random())+1e6),arguments[0]=e.replace(n,"#"+this.id);var r=t.apply(this,arguments);return null===o?this.removeAttribute("id"):o||(this.id=o),r}return t.apply(this,arguments)}}var n=/:scope\b/gi,e=t(Element.prototype.querySelector);Element.prototype.querySelector=function(t){return e.apply(this,arguments)};var o=t(Element.prototype.querySelectorAll);Element.prototype.querySelectorAll=function(t){return o.apply(this,arguments)}}()}}();var q=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;if(!(this instanceof t))return new t(n);this.options={},R(this.options,x,n),b(this)};return q.init=function(t){return console.warn("Depreciated: Macy.init will be removed in v3.0.0 opt to use Macy directly like so Macy({ /*options here*/ }) "),new q(t)},q.prototype.recalculateOnImageLoad=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e(this,f("img",this.container),!t)},q.prototype.runOnImageLoad=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=f("img",this.container);return this.on(this.constants.EVENT_IMAGE_COMPLETE,t),n&&this.on(this.constants.EVENT_IMAGE_LOAD,t),e(this,o,n)},q.prototype.recalculate=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e&&this.queue.clear(),this.queue.add(function(){return V(t,n,e)})},q.prototype.remove=function(){window.removeEventListener("resize",this.resizer),m(this.container.children,function(t){t.removeAttribute("data-macy-complete"),t.removeAttribute("style")}),this.container.removeAttribute("style")},q.prototype.reInit=function(){this.recalculate(!0,!0),this.emit(this.constants.EVENT_INITIALIZED),window.addEventListener("resize",this.resizer),this.container.style.position="relative"},q.prototype.on=function(t,n){this.events.on(t,n)},q.prototype.emit=function(t,n){this.events.emit(t,n)},q.constants={EVENT_INITIALIZED:"macy.initialized",EVENT_RECALCULATED:"macy.recalculated",EVENT_IMAGE_LOAD:"macy.image.load",EVENT_IMAGE_ERROR:"macy.image.error",EVENT_IMAGE_COMPLETE:"macy.images.complete",EVENT_RESIZE:"macy.resize"},q.prototype.constants=q.constants,q});


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map