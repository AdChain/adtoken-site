;(function() {
  'use strict';

  $(document).ready(function () {
    // Tabs
    $('.ui.tabular .item').tab()

    // Accordion
    $('.ui.accordion').accordion()

    // Timeline Animation layer triggers
    $(window).scroll(function() {
        var hT = $('.scrollMore').offset().top,
            hH = $('.scrollMore').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH+250)){
            $('.timeline-layer1').addClass('start');
            $('.timeline-layer2').addClass('start2');
            $('.timeline-layer3').addClass('start3');
            $('.timeline-layer5').addClass('start5');
            setTimeout(function() {
                $('.timeline-layer4').addClass('show');
            }, 4000);
            setTimeout(function() {
                $('.timeline_stages').addClass('show');
            }, 5000);
        }
    });

    // lazy loading
    $("img[data-src]")
    .unveil(400)
    .on('load', function() {
      this.style.opacity = 1;
    });

    // Fade in content
    [].slice.call(document.querySelectorAll('.Section.fadeIn'))
    .forEach(function(el) {
      InView(el, function(isInView, data) {
        if (isInView) {
          el.classList.add('animate')
          this.destroy()
        }
      })
    })

  })

  $(document).ready(function() {
    if (!$('#affix').length) return false

  var topRange = 100  // measure from the top of the viewport to X pixels down
  var edgeMargin = 50   // margin above the top or margin from the end of the page
  var animationTime = 1200
  var contentTop = []
   // Stop animated scroll if the user does something
   $('html,body').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function(e) {
   if ( e.which > 0 || e.type == 'mousedown' || e.type == 'mousewheel' ){
    $('html,body').stop();
   }
  })

   // Set up content an array of locations
   $('#affix').find('a').each(function(){
    contentTop.push( $( $(this).attr('href') ).offset().top );
   })

    var minTop = contentTop[0] - 200

   // Animate menu scroll to content
    $('#affix').find('a').click(function(){
     var sel = this,
        newTop = Math.min( contentTop[ $('#affix a').index( $(this) ) ], $(document).height() - $(window).height() ); // get content top or top position if at the document bottom
     $('html,body').stop().animate({ 'scrollTop' : newTop }, animationTime, function(){
      window.location.hash = $(sel).attr('href');
     });
     return false;
   })

   // adjust side menu
   $(window).scroll(scrollFn)

  function scrollFn(){
    var winTop = $(window).scrollTop()
    var bodyHt = $(document).height()
    var vpHt = $(window).height() + edgeMargin  // viewport height + margin
     if (winTop >= minTop) {
      if (!$('#affix').is(':visible')) {
        $('#affix').fadeIn(400)
      }
     } else {
      if ($('#affix').is(':visible')) {
        $('#affix').fadeOut(200)
      }
     }
    $.each( contentTop, function(i,loc){
     if ( ( loc > winTop - edgeMargin && ( loc < winTop + topRange || ( winTop + vpHt ) >= bodyHt ) ) ){
      $('#affix li')
       .removeClass('selected')
       .eq(i).addClass('selected');
     }
    })
   }

   scrollFn()
  })


  function loadScript(url) {
    return new Promise(function(resolve, reject) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;

        script.onload = function() {
          resolve()
        };

        head.appendChild(script);
    })
  }
})();
