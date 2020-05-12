window.onload = function () {
  $(".loading").fadeOut(1000);
  add();
}
function add() {
  var a1 = $(".header04"),
    a2 = $(".header03"),
    a3 = $(".header02"),
    a4 = $(".header01"),
    a5 = $(".tit"),
    a6 = $(".navbar"),
    a7 = $(".nav-download"),
    a8 = $(".nav-icon"),
    a9 = $(".logo"),
    a10 = $(".layer:eq(0)"),
    a11 = $(".video-btn");
  setTimeout(function () { a10.addClass('fadeIn') }, 250);
  setTimeout(function () { a6.addClass('bounceInRight') }, 500);
  setTimeout(function () { a8.addClass('bounceInLeft') }, 500);
  setTimeout(function () { a9.addClass('bounceInDown') }, 800);
  setTimeout(function () { a11.addClass('bounceInDown') }, 800);
  setTimeout(function () { a1.addClass('fadeInUp-header') }, 1300);
  setTimeout(function () { a2.addClass('fadeInUp-header') }, 1600);
  setTimeout(function () { a3.addClass('fadeInUp-header') }, 1900);
  setTimeout(function () { a4.addClass('fadeInDown') }, 2200);
  setTimeout(function () { a5.addClass('fadeInUp-header') }, 2500);
  setTimeout(function () { a7.addClass('bounceInUp') }, 2800);
}
$(document).ready(function () {

  $('.fancy-menu').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });

  // var options = { videoId: 'twZbNoO-kew', start: 3 };
  // $('#bg-video').tubular(options);

  var ctx0 = $(".radar:eq(0)"),
    radar = new Chart(ctx0, {
      type: "radar", // 圖表類型
      data: {
        labels: ["爆發", "速度", "攻擊", "操作難度", "攻擊範圍"], // 標題
        datasets: [{
          data: [2.5, 3, 1.5, 3, 3.5], // 資料
          backgroundColor: "rgba(0, 228, 255, 0.5)",
          borderWidth: 3, // 外框寬度
          pointBackgroundColor: "rgba(0, 228, 255, 1)",
        }]
      },
      options: {
        legend: {
          display: false
        },
        scale: {
          ticks: {
            display: false,
            max: 4,
            min: 0,
            stepSize: 1,
          },
          gridLines: {
            color: "rgba(255, 255, 255, 0.4)"
          },
          angleLines: {
            color: "rgba(255, 255, 255, 0.4)"
          },
          pointLabels: {
            fontSize: 14,
            fontColor: '#c3c3c3',
            fontFamily: 'Noto Sans TC'
          }
        }
      }
    });
  var ctx1 = $(".radar:eq(1)"),
    radar = new Chart(ctx1, {
      type: "radar", // 圖表類型
      data: {
        labels: ["爆發", "速度", "攻擊", "操作難度", "攻擊範圍"], // 標題
        datasets: [{
          data: [2.2, 2.8, 3.5, 1.5, 4], // 資料
          backgroundColor: "rgba(0, 228, 255, 0.5)",
          borderWidth: 3, // 外框寬度
          pointBackgroundColor: "rgba(0, 228, 255, 1)",
        }]
      },
      options: {
        legend: {
          display: false
        },
        scale: {
          ticks: {
            display: false,
            max: 4,
            min: 0,
            stepSize: 1,
          },
          gridLines: {
            color: "rgba(255, 255, 255, 0.4)"
          },
          angleLines: {
            color: "rgba(255, 255, 255, 0.4)"
          },
          pointLabels: {
            fontSize: 14,
            fontColor: '#c3c3c3',
            fontFamily: 'Noto Sans TC'
          }
        }
      }
    });
  var ctx2 = $(".radar:eq(2)"),
    radar = new Chart(ctx2, {
      type: "radar", // 圖表類型
      data: {
        labels: ["爆發", "速度", "攻擊", "操作難度", "攻擊範圍"], // 標題
        datasets: [{
          data: [3, 1.5, 3.8, 3, 4], // 資料
          backgroundColor: "rgba(0, 228, 255, 0.5)",
          borderWidth: 3, // 外框寬度
          pointBackgroundColor: "rgba(0, 228, 255, 1)",
        }]
      },
      options: {
        legend: {
          display: false
        },
        scale: {
          ticks: {
            display: false,
            max: 4,
            min: 0,
            stepSize: 1,
          },
          gridLines: {
            color: "rgba(255, 255, 255, 0.4)"
          },
          angleLines: {
            color: "rgba(255, 255, 255, 0.4)"
          },
          pointLabels: {
            fontSize: 14,
            fontColor: '#c3c3c3',
            fontFamily: 'Noto Sans TC'
          }
        }
      }
    });
  var ctx3 = $(".radar:eq(3)"),
    radar = new Chart(ctx3, {
      type: "radar", // 圖表類型
      data: {
        labels: ["爆發", "速度", "攻擊", "操作難度", "攻擊範圍"], // 標題
        datasets: [{
          data: [2, 4, 3, 4, 1], // 資料
          backgroundColor: "rgba(0, 228, 255, 0.5)",
          borderWidth: 3, // 外框寬度
          pointBackgroundColor: "rgba(0, 228, 255, 1)",
        }]
      },
      options: {
        legend: {
          display: false
        },
        scale: {
          ticks: {
            display: false,
            max: 4,
            min: 0,
            stepSize: 1,
          },
          gridLines: {
            color: "rgba(255, 255, 255, 0.4)"
          },
          angleLines: {
            color: "rgba(255, 255, 255, 0.4)"
          },
          pointLabels: {
            fontSize: 14,
            fontColor: '#c3c3c3',
            fontFamily: 'Noto Sans TC'
          }
        }
      }
    });

  var le = $('.radar').length;
  console.log(le);

  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene, {
    relativeInput: true
  });

  var fbIframe = $('.fb').find('iframe');
  var fb_w = $('.fb').width();
  fbIframe.attr('width', fb_w);
  $(window).resize(function () {
    var fbIframe = $('.fb').find('iframe');
    var fb_w = $('.fb').width();
    fbIframe.attr('width', fb_w);
    console.log(fb_w);
  });
  $('.navbar-nav a').on('click', function () {
    $('.collapse').collapse('hide');
    $('.fancy-menu').removeClass('active');
  });

  $('#fullpage').fullpage({
    //options here
    id: 'fullpage',
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '.navbar-nav',
    // autoScrolling: true,
    // scrollHorizontally: true,
    responsiveWidth: 1140,
    responsiveHeight: 800,
    // afterResponsive: function (isResponsive) {
    // },
    afterLoad: function (anchorLink, index) {
      if (index.index == 1) {
        $('.section2').find('.news').toggleClass('fadeInLeft fadeOutUp');
        $('.section2').find('.sns').toggleClass('fadeInRight fadeOutUp');
      }
      if (index.index == 2) {
        $('.section3').find('.nav-tit').toggleClass('fadeInDown fadeOutUp');
        $('.section3').find('.tab-content:eq(0)').toggleClass('fadeInUp fadeOutUp');
      }
      if (index.index == 3 || index.index == 4) {
        $('.section4').find('.tit-text').toggleClass('fadeInDown fadeOutUp');
        $('.section4').find('.carousel-main').toggleClass('fadeInLeft fadeOutUp');
        $('.section4').find('.carousel-nav').toggleClass('fadeInRight fadeOutUp');
      }
    },
    onLeave: function (index, direction) {
      if (index.index == 1) {
        $('.section2').find('.news').toggleClass('fadeInLeft fadeOutUp');
        $('.section2').find('.sns').toggleClass('fadeInRight fadeOutUp');
      }
      if (index.index == 2) {
        $('.section3').find('.nav-tit').toggleClass('fadeInDown fadeOutUp');
        $('.section3').find('.tab-content:eq(0)').toggleClass('fadeInUp fadeOutUp');
      }
      if (index.index == 3 || index.index == 4) {
        $('.section4').find('.tit-text').toggleClass('fadeInDown fadeOutUp');
        $('.section4').find('.carousel-main').toggleClass('fadeInLeft fadeOutUp');
        $('.section4').find('.carousel-nav').toggleClass('fadeInRight fadeOutUp');
      }
    }
  });

  /*AUDIOS*/
  $('.btn-audio').on('click', function (e) {
    e.preventDefault();
    var myAudio = $(this).next();
    myAudio[0].play();
  });

  var audios = $('.character__text').find('audio');
  // 暂停函数
  function pauseAll() {
    var self = this;
    [].forEach.call(audios, function (i) {
      // 将audios中其他的audio全部暂停
      i !== self && i.pause();
      i.currentTime = 0;
    })
  }
  // 给play事件绑定暂停函数
  [].forEach.call(audios, function (i) {
    i.addEventListener("play", pauseAll.bind(i));
  });

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.character__text').addClass('fadeInDown');
    $('.character__pic').addClass('fadeInRight');
    pauseAll();
  });

  /**
   * BS4 modal 影片
   */
  // Gets the video src from the data-src on each button
  var $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);

  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })
  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src', $videoSrc);
  })

  // var w = 350;
  // var _w = $(window).width();
  // $(function () {
  //   if (_w <= 480) {
  //     var ifrs = document.getElementsByTagName('iframe');
  //     for (var i = 0; i < ifrs.length; i++) {
  //       var ifr = ifrs[i];
  //       var a = ifr.src;
  //       if (a.indexOf('https://www.facebook.com/') == -1) continue;
  //       var b = a.indexOf('& width=');
  //       var c = a.substring(0, b + 7);
  //       var d = c + w;
  //       ifr.src = d;
  //       ifr.width = w;
  //     }
  //   }
  // });

  // $('.carousel').flickity({
  //   // options
  //   // cellAlign: 'left',
  //   // contain: true
  //   imagesLoaded: true
  //   // prevNextButtons: false,
  //   // pageDots: false
  // });


  //scroll
  // $(window).scroll(function () {
  //   var scrollTop = $(window).scrollTop(),
  //     p01Top = $('.bg1').offset().top,
  //     p02Top = $('.bg2').offset().top,
  //     p03Top = $('.bg3').offset().top,
  //     p04Top = $('.bg4').offset().top,
  //     p05Top = $('.bg5').offset().top;

  //   if (scrollTop >= p01Top && scrollTop <= p02Top) {
  //     $('.navbar-nav li a').removeClass('active');
  //     $('.navbar-nav li:eq(0) a').addClass('active');
  //   } else if (scrollTop >= p02Top && scrollTop <= p03Top) {
  //     $('.navbar-nav li a').removeClass('active');
  //     $('.navbar-nav li:eq(1) a').addClass('active');
  //   } else if (scrollTop >= p03Top && scrollTop <= p04Top) {
  //     $('.navbar-nav li a').removeClass('active');
  //     $('.navbar-nav li:eq(2) a').addClass('active');
  //   } else if (scrollTop >= p04Top && scrollTop <= p05Top) {
  //     $('.navbar-nav li a').removeClass('active');
  //     $('.navbar-nav li:eq(3) a').addClass('active');
  //   } else if (scrollTop >= p05Top) {
  //     $('.navbar-nav li a').removeClass('active');
  //     $('.navbar-nav li:eq(4) a').addClass('active');
  //   }
  // })
  // $(window).scroll(function () {
  //   var scrollTop = $(window).scrollTop();
  //   if (scrollTop > 20) {
  //     $('.navbar').addClass('fixed');
  //   } else {
  //     $('.navbar').removeClass('fixed');
  //   }

  // })

  // var num_a = $('.navbar-nav li.nav-scroll').length //計算有幾個a
  // for (i = 0; i <= num_a; i++) {
  //   $('.navbar-nav li.nav-scroll:eq(' + i + ')').click({ id: i }, function (e) {
  //     e.preventDefault();
  //     page = e.data.id + 1;
  //     $('html,body').animate({ 'scrollTop': $('.bg' + page).offset().top }, 800);
  //     $('.collapse').removeClass('show');
  //     $('.fancy-menu').removeClass('active');
  //   })
  // }

  /*TAB*/
  // $('.js-tab').find('.js-tabs li:eq(0)').addClass('current');
  // $('.js-tabs li').on('click', function (g) {
  //   var tab = $(this).closest('.js-tab')
  //     , index = $(this).closest('li').index();

  //   tab.find('.js-tabs > li').removeClass('current');
  //   $(this).closest('li').addClass('current');

  //   tab.find('.js-tab-content,.js-tab-content2').find('.js-tabs-item').not('.js-tabs-item:eq(' + index + ')').hide().fadeOut();
  //   tab.find('.js-tab-content,.js-tab-content2').find('.js-tabs-item:eq(' + index + ')').fadeIn();

  //   g.preventDefault();
  // });


})

