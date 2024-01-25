<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Start of  Zendesk Widget script -->
<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=a93ef8d6-8a88-420b-9ff9-955801aba3d5"> </script>
<!-- End of  Zendesk Widget script -->
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">

  <title>Logo Web Pro</title>

  <!-- Fav Icon -->
  <link rel="icon" type="image/x-icon" href="assets/imgs/logo.png">


  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="../../../css2?family=Kanit:wght@300;400;500;600;700&display=swap" rel="stylesheet">


  <style>
    #video-container {
    position: relative;
    width: 800px;
    height: 450px;
  }
  
  #my-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  #particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  </style>



  <!-- All CSS files -->
  <link rel="stylesheet" href="assets/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/all.min.css">
  <link rel="stylesheet" href="assets/css/swiper-bundle.min.css">
  <link rel="stylesheet" href="assets/css/progressbar.css">
  <link rel="stylesheet" href="assets/css/meanmenu.min.css">
  <link rel="stylesheet" href="assets/css/master.css">
  <link rel="stylesheet" href="style.css">
  <script src="https://cdn.jsdelivr.net/npm/@google/model-viewer@1.1.0/dist/model-viewer.min.js"></script>
</head>


<body>
  <!-- Cursor Animation -->
  <div class="cursor1"></div>
  <div class="cursor2"></div>


  <!-- Preloader -->
  <!-- <div class="preloader">
    <div class="loading">
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
      <div class="bar bar3"></div>
      <div class="bar bar4"></div>
      <div class="bar bar5"></div>
      <div class="bar bar6"></div>
      <div class="bar bar7"></div>
      <div class="bar bar8"></div>
    </div>
  </div> -->



  <!-- Switcher Area Start -->
  <div class="switcher__area">

    <div class="switcher__items">
      <div class="switcher__item">
        <div class="switch__title-wrap">
          <h2 class="switcher__title">Cursor</h2>
        </div>
        <div class="switcher__btn">
          <select name="cursor-style" id="cursor_style">
            <option value="1">default</option>
            <option selected="" value="2">animated</option>
          </select>
        </div>
      </div>

      <div class="switcher__item">
        <div class="switch__title-wrap">
          <h2 class="switcher__title">mode</h2>
        </div>
        <div class="switcher__btn mode-type wc-col-2">
          <button class="active" data-mode="light">light</button>
          <button data-mode="dark">dark</button>
        </div>
      </div>

      <div class="switcher__item">
        <div class="switch__title-wrap">
          <h2 class="switcher__title">Language Support</h2>
        </div>
        <div class="switcher__btn lang_dir wc-col-2">
          <button class="active" data-mode="ltr">LTR</button>
          <button data-mode="rtl">RTL</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Switcher Area End -->



  <!-- Scroll Smoother -->
  <div class="has-smooth" id="has_smooth"></div>


  <!-- Go Top Button -->
  <button id="scroll_top" class="scroll-top"><i class="fa-solid fa-arrow-up"></i></button>


  <!-- Header area start -->
  <header class="header__area-2">
    <div class="header__inner-2">
      <!-- <div class="header__logo-2">
        <a href="index.html"><img src="assets/imgs/logo.png" alt="Site Logo" class="logod"></a>
      </div> -->
      <!-- <img src="assets/imgs/whit.png" alt="" class="imgstp"> -->
      <div class="header__nav-2">
        <ul class="main-menu menu-anim">
          <li class="has-megamenu"><a href="{{route("graphic_design")}}">Logo Design</a></li>
          <li class="has-megamenu"><a href="{{route("design")}}">Website Design</a></li>
          <li class="has-megamenu"><a href="{{route("services")}}">Services</a></li>
          <a href="{{route("index")}}"><img src="assets/imgs/logo.png" alt="Site Logo" class="logoadjust"></a>
          <li class="has-megamenu"><a href="{{route("portfolio")}}">Portfolio</a></li>
          <li class="has-megamenu"><a href="{{route("about")}}">About Us</a></li>
          <li class="has-megamenu"><a href="{{route("contact")}}">Contact</a></li>
        </ul>
      </div>
      <div class="header__nav-icon-2">
        <button class="menu-icon-2" id="open_offcanvas"><img src="assets/imgs/icon/menu-white.png" alt="Menubar Icon"></button>
      </div>
    </div>
  </header>
  <!-- Header area end -->


  <!-- Offcanvas area start -->
  <div class="offcanvas__area">
    <div class="offcanvas__body">
      <div class="offcanvas__left">
        <div class="offcanvas__logo">
          <a href="{{route("index")}}"><img src="assets/imgs/logo.png" alt="Offcanvas Logo" class="logod"></a>
        </div>
        <div class="offcanvas__social">
          <h3 class="social-title">Follow Us</h3>
          <ul>
            <li><a href="#">Dribbble</a></li>
            <li><a href="#">Behance</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
        <div class="offcanvas__links">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">contact</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">blog</a></li>
          </ul>
        </div>
      </div>
      <div class="offcanvas__mid">
        <div class="offcanvas__menu-wrapper">
          <nav class="offcanvas__menu">
            <ul class="menu-anim">
              <li><a>Logo Design</a></li>
              <li><a>Website Design</a></li>
              <li><a>Branding</a></li>
              <li><a>Mobile Apps</a></li>
              <li><a>Portfolio</a></li>
              <li><a>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="offcanvas__right">
        <div class="offcanvas__search">
          <form action="#">
            <input type="text" name="search" placeholder="Search keyword">
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
        <div class="offcanvas__contact">
          <h3>Get in touch</h3>
          <ul>
            <li><a href="#">123 456 789</a></li>
            <li><a href="#">info@webpro.com</a></li>
            <li>230 Street , CA, USA.</li>
          </ul>
        </div>
        <img src="assets/imgs/shape/11.png" alt="shape" class="shape-1">
        <img src="assets/imgs/shape/12.png" alt="shape" class="shape-2">
      </div>
      <div class="offcanvas__close">
        <button type="button" id="close_offcanvas"><i class="fa-solid fa-xmark"></i></button>
      </div>
    </div>
  </div>
  <!-- Offcanvas area end -->


  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main>

        <!-- Hero area start -->
        <section class="hero__area-2">
          <video autoplay loop muted class="bgv">
            <source src="assets/imgs/back2.mp4" type="video/mp4">
            <source src="assets/imgs/back2.mp4" type="video/webm">
          </video>
          <div id="particles-js"></div>
          <div class="hero__inner-2">            
            <div class="sec-title-wrapper">
              <h2 class="sec-title-3 bg-shape bkcl">Unique<br>Logo</h2>
              <h2 class="sec-title-3 bkcl">Elite<br>Website</h2>
            </div>
            <div class="hero__text-2 bkcl">
              <p class="bkcl2">Stand out with a unique logo and experience an amazing website. Get noticed today!</p>
              <div class="hero__button btn_wrapper">
                <a href="#" class="wc-btn-pink btn-hover btn-item bkcl"><span></span>
                  Explore <br>our services <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div class="hero2-shape">
            <img src="assets/imgs/shape/two.png" alt="BG Shape">
          </div>
        </section>
        <!-- Hero area end -->

        <section class="service__area service-v2 pt-110 pb-150">
          <div class="container">
            <div class="row">
              <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <div class="sec-title-wrapper wrap">
                  <h2 class="sec-sub-title title-anim" style="perspective: 400px;"><div style="display: block; text-align: start; position: relative; translate: none; rotate: none; scale: none; transform-origin: 263px 10.7969px; transform: translate3d(0px, 0px, 0px); opacity: 1;">service</div></h2>
                  <h3 class="sec-title title-anim" style="perspective: 400px;"><div style="display: block; text-align: start; position: relative; translate: none; rotate: none; scale: none; transform-origin: 263px 30px; transform: translate3d(0px, 0px, 0px); opacity: 1;">Solution we </div><div style="display: block; text-align: start; position: relative; translate: none; rotate: none; scale: none; transform-origin: 263px 30px; transform: translate3d(0px, 0px, 0px); opacity: 1;">provide</div></h3>
                </div>
              </div>
              <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div class="service__top-text text-anim">
                  <p style="perspective: 400px;"><div style="display: block; text-align: start; position: relative; translate: none; rotate: none; scale: none; transform-origin: 251.805px 14px; transform: translate3d(0px, 0px, 0px); opacity: 1;">With every single one of our clients we bring forth a deep </div><div style="display: block; text-align: start; position: relative; translate: none; rotate: none; scale: none; transform-origin: 251.805px 14px; transform: translate3d(0px, 0px, 0px); opacity: 1;">passion for <span>creative problem solving innovations</span>  forward </div><div style="display: block; text-align: start; position: relative; translate: none; rotate: none; scale: none; transform-origin: 251.805px 14px; transform: translate3d(0px, 0px, 0px); opacity: 1;">thinking brands boundaries</div></p>
                </div>
              </div>
            </div>

            <div class="service__list-wrapper">
              <div class="row">
                <div class="col-xxl-4 col-xl-4 col-lg-0 col-md-0">
                  <div class="service__img-wrapper">
                    <img src="assets/imgs/service/1/1.jpeg" alt="Service Image" class="service__img img-1">
                    <img src="assets/imgs/service/1/2.png" alt="Service Image" class="service__img img-2">
                    <img src="assets/imgs/service/1/3.png" alt="Service Image" class="service__img img-3">
                    <img src="assets/imgs/service/1/4.png" alt="Service Image" class="service__img img-4 active">

                    <span class="shape-box-1"></span>
                    <span class="shape-box-2"></span>
                    <span class="shape-box-3"></span>
                    <span class="shape-box-4 current"></span>
                  </div>
                </div>
                <div class="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
                  <div class="service__list">
                    <a href="#" class="">
                      <div class="service__item animation_home1_service" data-service="1">
                        <div class="service__number"><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">01</span></div>
                        <div class="service__title-wrapper">
                          <h4 class="service__title" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">Web &amp; Mobile App
                            Development</h4>
                        </div>
                        <div class="service__text">
                          <p style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">We create, products, brands, apps &amp; websites for the companies all around the world class
                            digital
                            products</p>
                        </div>
                        <div class="service__link">
                          <p style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"><i class="fa-solid fa-arrow-right"></i></p>
                        </div>
                      </div>
                    </a>

                    <a href="#" class="">
                      <div class="service__item  animation_home1_service" data-service="2">
                        <div class="service__number"><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">02</span></div>
                        <div class="service__title-wrapper">
                          <h4 class="service__title" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">Graphic <br>Design</h4>
                        </div>
                        <div class="service__text">
                          <p style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">We create, products, brands, apps &amp; websites for the companies all around the world class
                            digital
                            products</p>
                        </div>
                        <div class="service__link">
                          <p style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"><i class="fa-solid fa-arrow-right"></i></p>
                        </div>
                      </div>
                    </a>

                    <a href="#" class="">
                      <div class="service__item  animation_home1_service" data-service="3">
                        <div class="service__number"><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">03</span></div>
                        <div class="service__title-wrapper">
                          <h4 class="service__title" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">Digital <br>Maketing</h4>
                        </div>
                        <div class="service__text">
                          <p style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">We create, products, brands, apps &amp; websites for the companies all around the world class
                            digital
                            products</p>
                        </div>
                        <div class="service__link">
                          <p style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"><i class="fa-solid fa-arrow-right"></i></p>
                        </div>
                      </div>
                    </a>

                    <a href="#" class="active">
                      <div class="service__item  animation_home1_service" data-service="4">
                        <div class="service__number"><span style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">04</span></div>
                        <div class="service__title-wrapper">
                          <h4 class="service__title" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">Branding and Strategy</h4>
                        </div>
                        <div class="service__text">
                          <p style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">We create, products, brands, apps &amp; websites for the companies all around the world class
                            digital
                            products</p>
                        </div>
                        <div class="service__link">
                          <p style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"><i class="fa-solid fa-arrow-right"></i></p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       <!-- Service area start -->
       <div >
       <!-- <div class="contini">
        <div class="panel active"
            style="background-image: url('assets/imgs/gr.jpg')">            
            <div class="text-anim text-center">
              <h3 class="ppi">Stunning visuals that capture attention and inspire creativity. Experience it!</p>
            </div>
        </div>

        <div class="panel"
            style="background-image: url('assets/imgs/wd.jpg')">
            <div class="text-anim text-center">
              <h3 class="ppi">Beautiful websites that captivate, engage, and leave a lasting impression.</h3>
            </div>
        </div>

        <div class="panel"
            style="background-image: url('assets/imgs/ma.jpg')">
            <div class="text-anim text-center">
              <h3 class="ppi">Sleek mobile apps that deliver seamless experiences and drive engagement.</h3>
            </div>
        </div>

        <div class="panel"
            style="background-image: url('assets/imgs/smm.jpg')">
            <div class="text-anim text-center">
              <h3 class="ppi">Boost your brand with effective social media strategies that drive results.</h3>
            </div>
        </div>

        <div class="panel"
            style="background-image: url('assets/imgs/seo.jpg')">
            <div class="text-anim text-center">
              <h3 class="ppi">Enhance your online presence and rank higher with expert SEO.</h3>
            </div>
        </div>
    </div> -->
  </div>
      <!-- Service area end -->


        <!-- Roll area start -->
        <section class="roll__area-2">
          <div class="swiper roll__slider">
            <div class="swiper-wrapper roll__wrapper">
              <div class="swiper-slide roll__slide">
                <h2>Logo Design</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>Branding</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>UI/UX</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>Web Development</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>App Development</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>SEO</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>Logo Design</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>Branding</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>Web UI/UX</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>Web Development</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>App Development</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>SEO</h2>
              </div>
            </div>
          </div>
        </section>
        <!-- Roll area end -->


        <!-- Roll area start -->
        <section class="roll__area-3">
          <div dir="rtl" class="swiper roll__slider">
            <div class="swiper-wrapper roll__wrapper">
              <div class="swiper-slide roll__slide">
                <h2>Logo Design</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>Branding</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>Web UI/UX</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>Web Development</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>App Development</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>SEO</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>Logo Design</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>Branding</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>Web UI/UX</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>Web Development</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>App Development</h2>
              </div>
              <div class="swiper-slide roll__slide">
                <h2>SEO</h2>
              </div>
            </div>
          </div>
        </section>
        <!-- Roll area end -->

        
        <!-- Second Portfolio area start -->


        <section class="blog__area-2 blog__animation">
          <div class="container g-0 pt-150 pb-110">
            <div class="row">
              <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div class="sec-title-wrapper">
                  <h2 class="sec-title title-anim">Our Portfolio</h2>
                </div>
              </div>
              <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <div class="sec-text text-anim">
                  <p>Discover our extraordinary portfolio, showcasing exceptional designs that captivate and inspire.</p>
                </div>
              </div>
              <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2">
                <div class="sec-btn btn_wrapper">
                  <a href="#" class="wc-btn-pink btn-hover btn-item whitt"><span></span> View <br>More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
        
            <div class="row">

              <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <article class="blog__item-2">
                  <div class="blog__img-wrapper">
                    <a href="#">
                      <div class="img-box">
                        <img class="image-box__item" src="assets/imgs/log3.png" alt="Blog Thumbnail">
                        <img class="image-box__item" src="assets/imgs/log3.png" alt="Blog Thumbnail">
                      </div>
                    </a>
                  </div>
                  <h5 class="txtmrgn"><a href="#" class="blog__title-2">Logo Design</a></h5>
                </article>
              </div>
        
              <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <article class="blog__item-2">
                  <div class="blog__img-wrapper">
                    <a href="#">
                      <div class="img-box">
                        <img class="image-box__item" src="assets/imgs/logo1.png" alt="Blog Thumbnail">
                        <img class="image-box__item" src="assets/imgs/logo1.png" alt="Blog Thumbnail">
                      </div>
                    </a>
                  </div>
                  <h5 class="txtmrgn"><a href="#" class="blog__title-2">Logo Design</a></h5>
                </article>
              </div>
        
              <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <article class="blog__item-2">
                  <div class="blog__img-wrapper">
                    <a href="#">
                      <div class="img-box">
                        <img class="image-box__item" src="assets/imgs/logo2.png" alt="Blog Thumbnail">
                        <img class="image-box__item" src="assets/imgs/logo2.png" alt="Blog Thumbnail">
                      </div>
                    </a>
                  </div>
                  <h5 class="txtmrgn"><a href="#" class="blog__title-2">Logo Design</a></h5>
                </article>
              </div>   

              <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <article class="blog__item-2">
                  <div class="blog__img-wrapper">
                    <a href="#">
                      <div class="img-box">
                        <img class="image-box__item" src="assets/imgs/logo3.png" alt="Blog Thumbnail">
                        <img class="image-box__item" src="assets/imgs/logo3.png" alt="Blog Thumbnail">
                      </div>
                    </a>
                  </div>
                  <h5 class="txtmrgn"><a href="#" class="blog__title-2">Logo Design</a></h5>
                </article>
              </div> 

              <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <article class="blog__item-2">
                  <div class="blog__img-wrapper">
                    <a href="#">
                      <div class="img-box">
                        <img class="image-box__item" src="assets/imgs/web5.webp" alt="Blog Thumbnail">
                        <img class="image-box__item" src="assets/imgs/web5.webp" alt="Blog Thumbnail">
                      </div>
                    </a>
                  </div>
                  <h5 class="txtmrgn"><a href="#" class="blog__title-2">Website Design</a></h5>
                </article>
              </div>
        
              <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <article class="blog__item-2">
                  <div class="blog__img-wrapper">
                    <a href="#">
                      <div class="img-box">
                        <img class="image-box__item" src="assets/imgs/lp1.webp" alt="Blog Thumbnail">
                        <img class="image-box__item" src="assets/imgs/lp1.webp" alt="Blog Thumbnail">
                      </div>
                    </a>
                  </div>
                  <h5 class="txtmrgn"><a href="#" class="blog__title-2">Website Design</a></h5>
                </article>
              </div>
        
              <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <article class="blog__item-2">
                  <div class="blog__img-wrapper">
                    <a href="#">
                      <div class="img-box">
                        <img class="image-box__item" src="assets/imgs/web6.webp" alt="Blog Thumbnail">
                        <img class="image-box__item" src="assets/imgs/web6.webp" alt="Blog Thumbnail">
                      </div>
                    </a>
                  </div>
                  <h5 class="txtmrgn"><a href="#" class="blog__title-2">Website Design</a></h5>
                </article>
              </div>   

              <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <article class="blog__item-2">
                  <div class="blog__img-wrapper">
                    <a href="#">
                      <div class="img-box">
                        <img class="image-box__item" src="assets/imgs/pf2.webp" alt="Blog Thumbnail">
                        <img class="image-box__item" src="assets/imgs/pf2.webp" alt="Blog Thumbnail">
                      </div>
                    </a>
                  </div>
                  <h5 class="txtmrgn"><a href="#" class="blog__title-2">Website Design</a></h5>
                </article>
              </div> 

            </div>
            </div>
          </section>  

              
        <!-- Second Portfolio end -->


          <!-- Feature area start -->
        <section class="feature__area-2 pt-130 mrtp">
          <div class="feature__top bbtm margbtm">
            <div class="container">
              <div class="row">
                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                  <div class="sec-title-wrapper">
                    <h2 class="sec-title title-anim">We are pro in creating stunning logo and amazing websites.</h2>
                  </div>
                </div>
                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                  <div class="feature__text text-anim">
                    <p>Create a future-ready brand with a unique logo and an amazing website. Stand out and succeed!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="feature__btm mrtpo">
            <div class="container">
              <div class="row">
                <div class="col-xxl-12">
                  <div class="feature__list animation__feature2">
                    <div class="feature__item">
                      <img src="assets/imgs/process/brand-image.png" alt="Feature Icon" class="animated-image">
                      <h3 class="feature__title">Branding</h3>
                      <p>Having these marketplace to your branded skilled team of designers and developers who
                        embracement
                        perfection.</p>
                    </div>
                    <div class="feature__item">
                      <img src="assets/imgs/process/web-page.png" alt="Feature Icon" class="animated-image">
                      <h3 class="feature__title">Optimum</h3>
                      <p>Brand identity design the key to success whether you breath rebranding an existing business
                        or
                        creating a business</p>
                    </div>
                    <div class="feature__item">
                      <img class="animated-image" src="assets/imgs/process/light-bulb.png" alt="Feature Icon">
                      <h3 class="feature__title">Thinking</h3>
                      <p>Creative typography plays the big role to pull off this trending more effectively with the
                        thinking use a thicker point</p>
                    </div>
                    <div class="feature__item">
                      <img src="assets/imgs/process/evaluate.png" alt="Feature Icon" class="animated-image">
                      <h3 class="feature__title">Execution</h3>
                      <p>Stricky with multiple shades of the colors. However, this alone can look awesome
                        forever
                        an online business</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Feature area end -->



        <!-- About area start -->
        <section class="about__area-2 mrrp">
          <div class="container pt-130 pb-110">
            <div class="row">
              <h2 class="sec-title title-anim mrlft">What Our Clients Say About Us</h2>
              <div class="swiper testimonial__slider-3">
                <div class="swiper-wrapper">
                  <div class="swiper-slide testimonial__slide-3">
                    <p class="whtimp">I had a wonderful experience working with logowebpro for my logo design. The designers were not only talented but also attentive listeners. They understood my vision and translated it into a visually appealing logo that resonates with my target audience. The entire process was smooth, efficient, and the result exceeded my expectations.</p>
                    <h2 class="client__name-3 whtimp">Smith B.</h2>
                    <h3 class="client__role-3 whtimp">Managing Director</h3>
                  </div>
                  <div class="swiper-slide testimonial__slide-3">
                    <p class="whtimp">Choosing logowebpro for our logo design needs was a fantastic decision. From the initial consultation to the final design, their team was attentive and responsive to our requirements. The logo they created perfectly represents our company's values and has helped us establish a strong brand presence.</p>
                    <h2 class="client__name-3 whtimp"> Michael</h2>
                    <h3 class="client__role-3 whtimp">Business Owner</h3>
                  </div>
                  <div class="swiper-slide testimonial__slide-3">
                    <p class="whtimp">I highly recommend the logo design service provided by logowebpro. They demonstrated a deep understanding of my industry and crafted a logo that perfectly reflects my brand's identity. The designers were professional, responsive, and worked diligently to deliver a high-quality logo that has received countless compliments.</p>
                    <h2 class="client__name-3 whtimp">Emily</h2>
                    <h3 class="client__role-3 whtimp">Marketing Manager.</h3>
                  </div>
                  <div class="swiper-slide testimonial__slide-3">
                    <p class="whtimp">The team at logowebpro exceeded my expectations with their logo design service. They showcased their creativity and expertise by presenting several unique concepts. The attention to detail and the ability to incorporate my ideas into the design was impressive. I couldn't be happier with the final result!</p>
                    <h2 class="client__name-3 whtimp">John</h2>
                    <h3 class="client__role-3 whtimp">Business owner</h3>
                  </div>
                  <div class="swiper-slide testimonial__slide-3">
                    <p class="whtimp">I am extremely pleased with the logo design services provided by logowebpro. They took the time to understand my brand and created a logo that perfectly captures its essence. The communication throughout the process was excellent, and they delivered the final design well within the agreed-upon time frame."</p>
                    <h2 class="client__name-3 whtimp">Maria D.</h2>
                    <h3 class="client__role-3 whtimp">CEO of a startup</h3>
                  </div>
                </div>
                <div class="next-button swipper-btn whtimp"><i class="fa-solid fa-arrow-left whtimp"></i></div>
                <div class="prev-button swipper-btn whtimp"><i class="fa-solid fa-arrow-right whtimp"></i></div>
              </div>
              
              <img src="assets/imgs/round2.png" alt="" class="secondimg">               
              <img src="assets/imgs/round2.png" alt="" class="imgsety">   
            </div>
          </div>

          <div class="about__img-2 pb-130">
            <img src="assets/imgs/nimg.jpg" alt="About Image" data-speed="0.2">    
          </div>

          <div class="sec-text text-anim">
            <p class="text-anim blb text-center">Get Unique logo at Amazing Price<br>Let's have a stunning website at unbelievable price<br> Exceeding expectations, guaranteed!
            </p>
          </div>

          <!-- <div class="container pb-140">
            <div class="row">
              <div class="col-xxl-12">
                <h2 class="brand__title-2 title-anim">Our design process for logos and web design is a seamless blend of creativity, research, and collaboration. From conceptualization to finalization, we ensure that every logo we create captures the essence of your brand while our web design process combines innovation, user-centric design, and technical expertise to deliver visually stunning and highly functional websites.
                </h2>
              </div>
            </div>
          </div> -->
        </section>
        <!-- About area end -->


       

        
        <!-- Award area start -->
        <section class="award__area pt-130 pb-140">
          <div class="container">
            <div class="row">
              <div class="col-xxl-12">
                <div class="sec-title-wrapper pb-140">
                  <img src="assets/imgs/process/quote.png" alt="" class="awimg">
                  <h2 class="sec-title title-anim">Get a Quote for Your Next Project</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div class="award__left">
                  <h4 class="award__text-2 w99">Get A Quote</h4>
                  <h3 class="award__text">Get A Quote</h3>
                  <img src="assets/imgs/shape/3.png" alt="Shape Image" data-speed="1" data-lag="0.2">
                </div>
              </div>

              <div class="col-xxl-6 col-xl-76 col-lg-6 col-md-6">
                <div class="contact__form">
                  <form action="" method="">
                    <div class="row g-3">
                      <div class="col-xxl-6 col-xl-6 col-12">
                        <input type="text" name="name" placeholder="Name *">
                      </div>
                      <div class="col-xxl-6 col-xl-6 col-12">
                        <input type="email" name="email" placeholder="Email *">
                      </div>
                    </div>
                    <div class="row g-3">
                      <div class="col-xxl-6 col-xl-6 col-12">
                        <input type="tel" name="phone" placeholder="Phone">
                      </div>
                      <div class="col-xxl-6 col-xl-6 col-12">
                        <input type="text" name="subject" placeholder="Subject *">
                      </div>
                    </div>
                    <div class="row g-3">
                      <div class="col-12">
                        <textarea name="message" placeholder="Messages *"></textarea>
                      </div>
                    </div>
                    <div class="row g-3">
                      <div class="col-12">
                        <div class="btn_wrapper" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">
                          <button class="wc-btn-primary btn-hover btn-item" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px);"><span style="top: 2px; left: 24.5px;"></span> Send <br>Messages <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Award area end -->


        <!-- CTA area start -->
        <!-- <section class="cta__area-2">
          <div class="container line pt-130 pb-120">
            <div class="line-3"></div>
            <div class="row">
              <div class="col-xxl-12">
                <div class="cta__content-2">
                  <p class="cta__sub-title-2 title-anim">Have you project in mind?</p>
                  <h2 class="cta__title-2 title-anim">Let’s make something
                    great together!</h2>
                  <div class="btn_wrapper">
                    <a href="#" class="wc-btn-pink btn-hover btn-item"><span></span>Contact <br>with us <i class="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> -->
        <!-- CTA area end -->


        

      </main>



        <!-- Footer area start -->
        <footer class="footer__area">
          <div class="footer__top">
            <div class="container footer-line"></div>
            <img src="assets/imgs/nw.jpg" alt="Footer Image" data-speed="0.75" class="w67">            
          </div>
          <model-viewer src="assets/imgs/Final GLOBE 3D ASSETS.gltf" alt="3D Model" ar ar-modes="webxr scene-viewer quick-look" camera-controls auto-rotate></model-viewer>
          <div class="footer__btm">
            <div class="container">
              <div class="row footer__row">
                <div class="col-xxl-12">
                  <div class="footer__inner">
                    <div class="footer__widget">
                      <img class="footer__logo logod" src="assets/imgs/logo.png" alt="Footer Logo">
                      <img src="assets/imgs/white.png" alt="" class="shp">
                      <p>We are experienced digital excellence with our top-tier solutions. We're the leading choice for your business success.</p>
                      <ul class="footer__social">
                        <li><a href="#"><span><i class="fa-brands fa-facebook-f"></i></span></a></li>
                        <li><a href="#"><span><i class="fa-brands fa-twitter"></i></span></a></li>
                        <li><a href="#"><span><i class="fa-brands fa-instagram"></i></span></a></li>
                        <li><a href="#"><span><i class="fa-brands fa-linkedin"></i></span></a></li>
                      </ul>
                    </div>
  
                    <div class="footer__widget-2">
                      <h2 class="footer__widget-title">Information</h2>
                      <ul class="footer__link">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Case Study</a></li>
                        <li><a href="#">blog</a></li>
                        <li><a href="#">contact</a></li>
                      </ul>
                    </div>
  
                    <div class="footer__widget-3">
                      <h2 class="footer__widget-title">Contact Us</h2>
                      <ul class="footer__contact">
                        <li>Street Road 24, CA, USA.</li>
                        <li><a href="#" class="phone">(971) 901-3140</a></li>
                        <li><a href="#">info@logowebpro.com</a></li>
                      </ul>
                    </div>
  
                    <div class="footer__widget-4">
                      <h2 class="project-title">Have a project in your mind?</h2>
                      <div class="btn_wrapper">
                        <a href="#" class="wc-btn-primary btn-hover btn-item"><span></span> contact us <i class="fa-solid fa-arrow-right"></i></a>
                      </div>
                      <h3 class="contact-time">09 : 00 AM - 10 : 30 PM</h3>
                      <h4 class="contact-day">Saturday - Thursday</h4>
                    </div>
  
                    <div class="footer__copyright">
                      <p>© 2023 | Alright reserved by <br><a href="#" target="_blank">Logo Web Pro</a>
                      </p>
                    </div>
  
                    <div class="footer__subscribe">
                      <form action="#">
                        <input type="email" name="email" placeholder="Enter your email">
                        <button type="submit" class="subs-btn"><i class="fa-solid fa-paper-plane"></i></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <!-- Footer area end -->


    </div>
  </div>



  <!-- All JS files -->
  <script src="assets/js/jquery-3.6.0.min.js"></script>
  <script src="assets/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/swiper-bundle.min.js"></script>
  <script src="assets/js/counter.js"></script>
  <script src="assets/js/gsap.min.js"></script>
  <script src="assets/js/ScrollTrigger.min.js"></script>
  <script src="assets/js/ScrollToPlugin.min.js"></script>
  <script src="assets/js/ScrollSmoother.min.js"></script>
  <script src="assets/js/SplitText.min.js"></script>
  <script src="assets/js/chroma.min.js"></script>
  <script src="assets/js/mixitup.min.js"></script>
  <script src="assets/js/vanilla-tilt.js"></script>
  <script src="assets/js/jquery.meanmenu.min.js"></script>
  <script src="assets/js/main.js"></script>


  <!-- for expand carousal -->
  <script>
    const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('mouseenter', () => {
    removeActiveClasses();
    panel.classList.add('active');
    panel.querySelector('.ppx').classList.add('show');
  });

  panel.addEventListener('mouseleave', () => {
    panel.querySelector('.ppx').classList.remove('show');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
    </script>

<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script>
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100, // Adjust the number of particles
        density: {
          enable: true,
          value_area: 800 // Adjust the density area
        }
      },
      color: {
        value: "#000000" // Adjust the color of particles
      },
      shape: {
        type: "circle", // Adjust the shape of particles
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.5, // Adjust the opacity of particles
        random: true
      },
      size: {
        value: 5, // Adjust the size of particles
        random: true
      },
      move: {
        enable: true,
        speed: 2 // Adjust the speed of particle movement
      }
    }
  });
</script>
</body>

</html>