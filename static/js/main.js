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

$(document).ready(function () {
  $('.HomeHeroPlayButton')
  .click(function(event) {
    event.preventDefault()
    const $iframe = $('.ui.modal iframe')

    $('.ui.modal').modal({
      onShow: function() {
        $iframe.attr('src', $iframe.data('src'))
      },
      onHidden: function() {
        $iframe.attr('src', '')
      }
    })
    $('.ui.modal').modal('show')
  })
/*
   const myVivus = new Vivus('svgPlayButton', {
    type: 'async',
    duration: 100
   }, function() {
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



  $("img[data-src]")
  .unveil(400)
  .on('load', function() {
    this.style.opacity = 1;
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

$(document).ready(function() {
  if (!$('#chartdiv').length) {
    return false
  }

  InView(document.getElementById('chartdiv'), function(isInView, data) {
      if (isInView) {
        loadScript('https://www.amcharts.com/lib/3/amcharts.js')
        .then(function() {
          return loadScript('https://www.amcharts.com/lib/3/pie.js')
        })
        .then(initChart)

        this.destroy()
      }
  })

  function initChart() {
    var chart = AmCharts.makeChart("chartdiv", {
      "type": "pie",
      "startDuration": 0,
       "theme": "light",
      "addClassNames": true,
      "legend":{
        "position":"bottom",
        "autoMargins":true,
        "align": "center"
      },
      "innerRadius": "30%",
      "defs": {
        "filter": [{
          "id": "shadow",
          "width": "200%",
          "height": "200%",
          "feOffset": {
            "result": "offOut",
            "in": "SourceAlpha",
            "dx": 0,
            "dy": 0
          },
          "feGaussianBlur": {
            "result": "blurOut",
            "in": "offOut",
            "stdDeviation": 5
          },
          "feBlend": {
            "in": "SourceGraphic",
            "in2": "blurOut",
            "mode": "normal"
          }
        }]
      },
      "dataProvider": [{
        "title": "Development & IT",
        "value": 28,
        "color": "#4CAF50"
        },
        {
        "title": "adChain Association",
        "value": 24,
        "color": "#64B5F6"
        },
        {
        "title": "Data & Marketing Association",
        "value": 14,
        "color": "#E57373"
        },
        {
        "title": "General Administrative",
        "value": 13,
        "color": "#FF8A65"
        },
        {
        "title": "Sales & Marketing",
        "value": 12,
        "color": "#FFB74D"
        },
        {
        "title": "Legal & Profressional",
        "value": 5,
        "color": "#F06292"
        },
        {
        "title": "Consulting & Subcontractors",
        "value": 4,
        "color": "#BA68C8"
      }],
      "valueField": "value",
      "titleField": "title",
      "colorField": "color",
      "export": {
        "enabled": false
      },
      "balloon": {
        "fillColor": "#FFFFFF",
        "fillAlpha": 1
      },
      "labelText": "[[title]]: [[value]]%",
      "legend": {
        "valueText": "[[value]]%",
      }
    });

    chart.addListener("init", handleInit);

    chart.addListener("rollOverSlice", function(e) {
      handleRollOver(e);
    });

    function handleInit(){
      chart.legend.addListener("rollOverItem", handleRollOver);
    }

    function handleRollOver(e){
      var wedge = e.dataItem.wedge.node;
      wedge.parentNode.appendChild(wedge);
    }
  }
})
