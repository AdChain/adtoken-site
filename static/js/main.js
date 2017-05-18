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


  // countdown
  ;(function() {
    if (!$('.clocks').length) {
      return
    }

    var opts = {
      endDate: "06/18/2017 8:00:00",
      lineWidth: 5,
      radius: 60,
      secondsStrokeStyle: "#634994",
      minutesStrokeStyle: "#634994",
      hoursStrokeStyle: "#634994",
      daysStrokeStyle: "#634994",
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
