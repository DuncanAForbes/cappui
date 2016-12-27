jQuery(document).ready(function(e){function s(){var s=e(window).scrollTop();d.length>0?a(s):n(s),l=s,r=!1}function n(e){l-e>u?i.removeClass("is-hidden"):e-l>u&&e>f&&i.addClass("is-hidden")}function a(e){var s=d.offset().top-o.height()-i.height();l>=e?s>e?(i.removeClass("is-hidden"),o.removeClass("fixed slide-up"),d.removeClass("secondary-nav-fixed")):l-e>u&&(i.removeClass("is-hidden"),o.removeClass("slide-up").addClass("fixed"),d.addClass("secondary-nav-fixed")):e>s+f?(i.addClass("is-hidden"),o.addClass("fixed slide-up"),d.addClass("secondary-nav-fixed")):e>s&&(i.removeClass("is-hidden"),o.addClass("fixed").removeClass("slide-up"),d.addClass("secondary-nav-fixed"))}var i=e(".navigation-head"),o=e(".cd-secondary-nav"),d=e(".sub-nav-hero"),t=i.height(),r=!1,l=0,u=10,f=150;i.on("click",".nav-trigger",function(e){e.preventDefault(),i.toggleClass("nav-open")}),e(window).on("scroll",function(){r||(r=!0,window.requestAnimationFrame?requestAnimationFrame(s):setTimeout(s,250))}),e(window).on("resize",function(){t=i.height()})}),$(function(){$("#404").typeIt({speed:50,autoStart:!1}).tiType("<span>Oops 404:</span> ").tiPause(1e3).tiType(" The page you are looking for can not be found. Choose an option below or signup to our weekly digest.")});


(function() {
 
 var DRIFT_CHAT_SELECTOR = '.letspeak'


 function ready(fn) {
 if (document.readyState != 'loading') {
 fn();
 } else if (document.addEventListener) {
 document.addEventListener('DOMContentLoaded', fn);
 } else {
 document.attachEvent('onreadystatechange', function() {
 if (document.readyState != 'loading')
 fn();
 });
 }
 }
 
 function forEachElement(selector, fn) {
 var elements = document.querySelectorAll(selector);
 for (var i = 0; i < elements.length; i++)
 fn(elements[i], i);
 }
 function openSidebar(driftApi, event) {
 event.preventDefault();
 driftApi.sidebar.open();
 return false;
 }
 ready(function() {
 drift.on('ready', function(api) {
 var handleClick = openSidebar.bind(this, api)
 forEachElement(DRIFT_CHAT_SELECTOR, function(el) {
 el.addEventListener('click', handleClick);
 });
 });
 });
})();
