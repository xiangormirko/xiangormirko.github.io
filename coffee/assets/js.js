$(function () {

  // if JavaScript is available, remove the no-js class
  $('html').removeClass('no-js')

  // setup vars
  var page = $('#page'),
      appNav = $('#app_nav'),
      navBTNs = $('.js--toggle-nav'),
      menuBTN = $('#appNavToggle'),
      navInners = $('#app_nav a');


  // allow for the nav to pop out if a user has focused on a nav item
  // but the nav is not currently set to active on the site
  navInners.on('focus', function () {
    if ( !page.attr('data-nav-state') ) {
      page.attr('data-nav-temp-state', 'true');
    }
  });


  // hide the sidebar if focus is removed from a nav element
  navInners.on('blur', function () {
    page.removeAttr('data-nav-temp-state');
  });

  // function to show navigation via
  // specific nav-buttons
  navBTNs.on('click', function () {
    if ( page.attr('data-nav-open' ) ) {
      page.removeAttr('data-nav-open');
      $(this).attr('href', '#');
    }
    else {
      page.attr('data-nav-open', 'true');
      $(this).attr('href', '#app_nav')
    }
  });

});



// State function to toggle attributes
// 'skip link fix'
;(function() {

  'use strict';

  window.addEventListener("hashchange", function(event) {

    var element = document.getElementById(location.hash.substring(1));

    if (element) {

      if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
          element.tabIndex = -1;
      }

      element.focus();
    }

  }, false);

})();
