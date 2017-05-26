(function() {
  // Responsive Video
  function responsiveVideo(selector) {
    // Get videos
    var videos = document.querySelectorAll(selector);

    // Loop through videos
    for (var i = 0; i < videos.length; i++) {
      var video = videos[i];

      // Get aspect ratio
      var videoRatio = (video.height / video.width) * 100;

      // Stretch video
      video.style.position = 'absolute';
      video.style.top = 0;
      video.style.left = 0;
      video.setAttribute('width','100%');
      video.setAttribute('height','100%');

      // Add a wrapper to contain video
      var wrapper = document.createElement('div');
      wrapper.className = 'video-wrap';
      wrapper.style.width = '100%';
      wrapper.style.position = 'relative';
      wrapper.style.paddingTop = videoRatio + '%';

      // Add it to the DOM
      var parentNode = video.parentNode;
      parentNode.insertBefore(wrapper, video);
      wrapper.appendChild(video);
    }
  }

  // Initialize. Make sure it's after DOMContentLoaded.
  responsiveVideo('.video');
/*
  document.querySelector('.videoPoster')
  .addEventListener('click', function() {
    this.style.display = 'none';

    var iframe = document.querySelector('iframe.video');
    iframe.src = iframe.dataset.src;
  });
  */
})();

$(document).ready(() => {
  $('.HomeHeroPlayButton')
  .click(event => {
    event.preventDefault()
    const $iframe = $('.ui.modal iframe')

    $('.ui.modal').modal({
      onShow: () => {
        $iframe.attr('src', $iframe.data('src'))
      },
      onHidden: () => {
        $iframe.attr('src', '')
      }
    })
    $('.ui.modal').modal('show')
  })
/*
   const myVivus = new Vivus('svgPlayButton', {
    type: 'async',
    duration: 100
   }, () => {
    $('#svgPlayButton').addClass('fill')
   })
   */
    $('#svgPlayButton').addClass('fill')


  // Tabs
  $('.ui.tabular .item').tab()

  // Accordion
  $('.ui.accordion').accordion()

  // countdown
  ;(function() {
    if (!$('.clocks').length) {
      return
    }

    var opts = {
      endDate: "06/26/2017 15:00:00", // UTC
      lineWidth: 5,
      radius: 60,
      secondsStrokeStyle: "#0071BC",
      minutesStrokeStyle: "#0071BC",
      hoursStrokeStyle: "#0071BC",
      daysStrokeStyle: "#0071BC",
      secondsCanvasSelector: "#seconds-canvas",
      minutesCanvasSelector: "#minutes-canvas",
      hoursCanvasSelector: "#hours-canvas",
      daysCanvasSelector: "#days-canvas",
      secondsCountSelector: "#seconds-count",
      minutesCountSelector: "#minutes-count",
      hoursCountSelector: "#hours-count",
      daysCountSelector: "#days-count"
    }

    var clock  = new Clock(opts)
  })()
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



