$(document).ready(function(){

  /*
   * Skip links
   *
   * More information: http://blog.bignerdranch.com/4455-web-accessibility-skip-navigation-links/
   */

  // bind a click event to the 'skip' link
  $(".skip-links a").click(function(){

    // strip the leading hash and declare
    // the content we're skipping to
    var skipTo="#"+this.href.split('#')[1];

    // Setting 'tabindex' to -1 takes an element out of normal
    // tab flow but allows it to be focused via javascript
    $(skipTo).attr('tabindex', -1).on('blur focusout', function () {

      // when focus leaves this element,
      // remove the tabindex attribute
      $(this).removeAttr('tabindex');

    }).focus(); // focus on the content container
  });

  /*
   * Fixed height columns
   *
   * Used on the homepage for comparing signup actions
   */

  $('.signup-action').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });


  $('.how-illustration .step').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });

  /*
   * Slick
   *
   * Testimonials carousel
   */


  $('.testimonials-carousel').slick({
    dots: false,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 300,
    duration: 10000,
    autoplay: true,
    // adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          }
        }
      ]
  });

});