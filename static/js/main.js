;(function() {
  'use strict';
  if (window.Clipboard) {
    var clipboard = new Clipboard('.CopyToClipboard')

    clipboard.on('success', function(event) {
      var target = event.trigger
      target.textContent = 'Copied!'

      setTimeout(function() {
        target.textContent = 'Copy'
        target.disabled = false
      }, 3e3)
    })

    $('.CopyToClipboard').on('click', function(event) {
      event.preventDefault()
    })
  }

  $(document).ready(function () {
    // Tabs
    $('.ui.tabular .item').tab()

    // Accordion
    $('.ui.accordion').accordion()

    // Timeline Animation layer triggers
    $(window).scroll(function() {
        var hT = $('.TimeLine').offset().top,
            hH = $('.TimeLine').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
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

    // countdown
    ;(function() {
      if (!$('.clocks').length) {
        return
      }

      var opts = {
        endDate: "06/26/2017 16:00:00", // UTC
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

  $(document).ready(function() {
    if (!$('#chartdiv').length) {
      return false
    }

    // lazy load breakdown chart
    InView(document.getElementById('chartdiv'), function(isInView, data) {
        if (isInView) {
          loadScript('https://www.amcharts.com/lib/3/amcharts.js')
          .then(function() {
            return loadScript('https://www.amcharts.com/lib/3/pie.js')
          })
          .then(function() {
            initChart()
          })

          this.destroy()
        }
    });

    function initChart() {
      var chart = AmCharts.makeChart("chartdiv", {
        "type": "pie",
        "startDuration": 0,
        "theme": "light",
        "addClassNames": true,
        "legend":{
          "position": "bottom",
          "autoMargins": true,
          "align": "center",
          "spacing": 50,
          "equalWidths": true,
          "valueText": "[[value]]%",
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
          "title": "Industry Trade Organizations",
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
          "title": "Legal & Professional",
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
        "labelText": "[[title]]: [[value]]%"
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


  // Remaining blocks
  if ($('.RemainingBlocks').length) {
    updateRemainingBlocks()
    setInterval(updateRemainingBlocks, 15e3)
  }

  function updateRemainingBlocks() {
    return getRemainingBlocks()
    .then(function(remainingblocks) {
      $('.RemainingBlocks').html(remainingblocks.toLocaleString())
    })
  }

  function getRemainingBlocks() {
    return new Promise(function(resolve, reject) {
      $.get('https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=YourAPIKey')
      .done(function(response) {
        var startBlock = 3933451
        var currentBlock = parseInt(response.result, 16)
        var remainingblocks = startBlock - currentBlock;
        resolve(remainingblocks)
      })
    })
  }
})();
