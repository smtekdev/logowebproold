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

  <title>About</title>

  <!-- Fav Icon -->
  <link rel="icon" type="image/x-icon" href="assets/imgs/logo.png">
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="../../../css2?family=Kanit:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<style>
    .bgvbn7{
        height: 5% !important;
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
</head>


<body>

  <!-- Cursor Animation -->
  <div class="cursor1"></div>
  <div class="cursor2"></div>


  <!-- Team Cursor -->
  <div class="cursor" id="team_cursor">Drag</div>


  <!-- Preloader -->
  <div class="preloader">
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
  </div>


  <!-- Switcher Area Start -->
  <div class="switcher__area">
    <!-- <div class="switcher__icon">
      <button id="switcher_open"><i class="fa-solid fa-gear"></i></button>
      <button id="switcher_close"><i class="fa-solid fa-xmark"></i></button>
    </div> -->

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
  
          <img src="assets/imgs/aboutback.jpeg" alt="" class="bgvbn bgvbn7">
  
          <div class="waviy mr31">
            <span style="--i:1">A</span>
            <span style="--i:2">B</span>
            <span style="--i:3">O</span>
            <span style="--i:4">U</span>
            <span style="--i:5">T</span>
            <span style="--i:6"></span>
            <span style="--i:7">U</span>
            <span style="--i:8">S</span>

          </div>
  <!-- Header area start -->

  <!-- Header area end -->


  <!-- Offcanvas area start -->
  <div class="offcanvas__area">
    <div class="offcanvas__body">
      <div class="offcanvas__left">
        <div class="offcanvas__logo">
          <a href="index.html"><img src="assets/imgs/logo/site-logo-white-2.png" alt="Offcanvas Logo"></a>
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
              <li><a>home</a>
                <ul>
                  <li><a href="#">Digital Maketing</a></li>
                  <li><a href="#">Digital Maketing dark</a></li>
                  <li><a href="#">Design Studio </a></li>
                  <li><a href="#">Design Studio dark</a></li>
                  <li><a href="#">Digital Agency</a></li>
                  <li><a href="#">Digital Agency dark</a></li>
                  <li><a href="#">creative Agency</a></li>
                  <li><a href="#">creative Agency dark</a></li>
                  <li><a href="#">Startup Agency</a></li>
                  <li><a href="#">Startup Agency dark</a></li>
                  <li><a href="#">modern agency</a></li>
                  <li><a href="#">modern agency dark</a></li>
                  <li><a href="#">personal Portfolio</a></li>
                  <li><a href="#">personal Portfolio dark</a></li>
                  <li><a href="#">portfolio showcase</a></li>
                  <li><a href="#">portfolio showcase dark</a></li>
                  <li><a href="#">showcase carousel</a></li>
                  <li><a href="#">showcase carousel dark</a></li>
                  <li><a href="#">Interactive link </a></li>
                  <li><a href="#">Interactive link dark</a></li>
                  <li><a href="#">portfolio masonry</a></li>
                  <li><a href="#">portfolio masonry dark</a></li>
                  <li><a href="#">vertical grid</a></li>
                  <li><a href="#">vertical grid dark</a></li>
                  <li><a href="#">Interactive image slider</a></li>
                  <li><a href="#">Interactive image slider dark</a></li>
                  <li><a href="#">showcase parallax</a></li>
                  <li><a href="#">showcase parallax dark</a></li>
                  <li><a href="#">logo showcase</a></li>
                  <li><a href="#">logo showcase dark</a></li>
                  <li><a href="#">showcase slider</a></li>
                  <li><a href="#">Interactive hover showcase</a></li>
                </ul>
              </li>
              <li>
                <a>woocomerce</a>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a>shop</a>
                    <ul>
                      <li><a href="#">shop - full width</a></li>
                      <li><a href="#">shop - sidebar</a></li>
                    </ul>
                  </li>
                  <li><a href="#">product details</a></li>
                  <li><a href="#">cart</a></li>
                  <li><a href="#">checkout</a></li>
                  <li><a href="#">sign up</a></li>
                  <li><a href="#">sign in</a></li>
                  <li><a href="#">reset password</a></li>
                  <li><a href="#">product category</a></li>
                  <li><a href="#">Profile</a></li>
                </ul>
              </li>
              <li>
                <a>Service</a>
                <ul>
                  <li><a href="#">service</a></li>
                  <li><a href="#">service dark</a></li>
                  <li><a href="#">service V.2</a></li>
                  <li><a href="#">service V.2 dark</a></li>
                  <li><a href="#">service V.3</a></li>
                  <li><a href="#">service V.3 dark</a></li>
                  <li><a href="#">service V.4</a></li>
                  <li><a href="#">service V.4 dark</a></li>
                  <li><a href="#">service V.5</a></li>
                  <li><a href="#">service V.5 dark</a></li>
                  <li><a href="#">service V.6</a></li>
                  <li><a href="#">service V.6 dark</a></li>
                  <li><a href="#">service details</a></li>
                  <li><a href="#">service details dark</a></li>
                </ul>
              </li>
              <li><a>pages</a>
                <ul>

                  <li>
                    <a>Service</a>
                    <ul>
                      <li><a href="#">service</a></li>
                      <li><a href="#">service dark</a></li>
                      <li><a href="#">service V.2</a></li>
                      <li><a href="#">service V.2 dark</a></li>
                      <li><a href="#">service V.3</a></li>
                      <li><a href="#">service V.3 dark</a></li>
                      <li><a href="#">service V.4</a></li>
                      <li><a href="#">service V.4 dark</a></li>
                      <li><a href="#">service V.5</a></li>
                      <li><a href="#">service V.5 dark</a></li>
                      <li><a href="#">service V.6</a></li>
                      <li><a href="#">service V.6 dark</a></li>
                      <li><a href="#">service details</a></li>
                      <li><a href="#">service details dark</a></li>
                    </ul>
                  </li>
                  <li>
                    <a>portfolio</a>
                    <ul>
                      <li><a href="#">portfolio</a></li>
                      <li><a href="#">portfolio dark</a></li>
                      <li><a href="#">portfolio v.2</a></li>
                      <li><a href="#">portfolio v.2 dark</a></li>
                      <li><a href="#">portfolio v.3</a></li>
                      <li><a href="#">portfolio v.3 dark</a></li>
                      <li><a href="#">portfolio v.4</a></li>
                      <li><a href="#">portfolio v.4 dark</a></li>
                      <li><a href="#">portfolio v.5</a></li>
                      <li><a href="#">portfolio v.5 dark</a></li>
                      <li><a href="#">portfolio details</a></li>
                      <li><a href="#">portfolio details dark</a></li>
                    </ul>
                  </li>
                  <li>
                    <a>team</a>
                    <ul>
                      <li><a href="#">Team</a></li>
                      <li><a href="#">Team dark</a></li>
                      <li><a href="#">Team Details</a></li>
                      <li><a href="#">Team Details dark</a></li>
                      <li><a href="#">career</a></li>
                      <li><a href="#">career dark</a></li>
                      <li><a href="#">job details</a></li>
                      <li><a href="#">job details dark</a></li>
                    </ul>
                  </li>
                  <li>
                    <a>blog</a>
                    <ul>
                      <li><a href="#">blog</a></li>
                      <li><a href="#">blog dark</a></li>
                      <li><a href="#">blog v.2</a></li>
                      <li><a href="#">blog v.2 dark</a></li>
                      <li><a href="#">category</a></li>
                      <li><a href="#">category dark</a></li>
                      <li><a href="#">blog details</a></li>
                      <li><a href="#">blog details dark</a></li>
                    </ul>
                  </li>
                  <li>
                    <a>Others</a>
                    <ul>
                      <li><a href="#">about</a></li>
                      <li><a href="#">about dark</a></li>
                      <li><a href="#">FAQs</a></li>
                      <li><a href="#">FAQs dark</a></li>
                      <li><a href="#">contact</a></li>
                      <li><a href="#">contact dark</a></li>
                      <li><a href="#">404</a></li>
                      <li><a href="#">404 dark</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a>blog</a>
                <ul>
                  <li><a href="#">blog</a></li>
                  <li><a href="#">blog dark</a></li>
                  <li><a href="#">blog v.2</a></li>
                  <li><a href="#">blog v.2 dark</a></li>
                  <li><a href="#">category</a></li>
                  <li><a href="#">category dark</a></li>
                  <li><a href="#">blog details</a></li>
                  <li><a href="#">blog details dark</a></li>
                </ul>
              </li>
              <li><a href="contact.html">contact</a></li>
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
            <li><a href="tel:02094980547">+(02) - 094 980 547</a></li>
            <li><a href="mailto:info@extradesign.com">info@extradesign.com</a></li>
            <li>230 Norman Street New York, QC (USA) H8R 1A1</li>
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
        <section class="hero__about">
          <div class="container g-0 line">
            <span class="line-3"></span>
            <div class="row">
              <div class="col-xxl-12">
                <div class="hero__about-content">
                  <h1 class="hero-title animation__word_come">We’re a full service creative and digital agency, working
                    globally with largest brands.</h1>
                  <div class="hero__about-info">
                    <div class="hero__about-btn">
                      <div class="btn_wrapper">
                        <a href="#" class="wc-btn-primary btn-hover btn-item"><span></span> Trends & <br>
                          technology
                          <i class="fa-solid fa-arrow-right"></i></a>
                      </div>
                    </div>
                    <div class="hero__about-text title-anim">
                      <p>Think of the world's most iconica and successful brands easily findable, impactful.
                        Interactional and exceptional designs. Our story takes beginning in 2013</p>
                    </div>
                    <div class="hero__about-award">
                      <img src="assets/imgs/about/award.png" alt="Best Studio Award">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row hero__about-row">
              <div class="col-xxl-12">
                <div class="hero__about-video">
                  <video loop="" muted="" autoplay="" playsinline="">
                    <source src="assets/video/video.mp4" type="video/mp4">
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Hero area end -->


        <!-- Story area start -->
        <section class="story__area">
          <div class="container g-0 line pt-140">
            <span class="line-3"></span>
            <div class="sec-title-wrapper">
              <div class="from-text">from <span>1990</span></div>

              <div class="row">
                <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 class="sec-sub-title title-anim">Digital Studio</h2>
                  <h3 class="sec-title title-anim">Our story</h3>
                </div>
                <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div class="story__text">
                    <p>Your brand is the most important asset in your company let our team of professionals help you
                      with a good strategy took the runway next with an edgy collection featuring dyed denim pieces. The
                      collection included patchwork denim, a trend that has recently exploded in younger generations.
                      Playing on aspects of sustainability, the pieces appeared to be upcycled to establish dimension
                      and flair. This take on grunge and streetwear took sustainable fashion to an entirely new level.
                    </p>
                    <p>ur specialized team of researchers, strategists, designers, developers, and project managers work
                      with streamlined processes to break through organizational roadblocks. We translate research into
                      solutions, crafting thoughtful and unified brands.</p>
                  </div>
                </div>

              </div>
            </div>
            <div class="row">
              <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
                <div class="story__img-wrapper">
                  <img src="assets/imgs/story/1.jpg" alt="Story Thumbnail" class="w-100">
                </div>
              </div>
              <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <div class="story__img-wrapper img-anim">
                  <img src="assets/imgs/story/2.jpg" alt="Story Thumbnail" data-speed="auto">
                </div>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div class="story__img-wrapper">
                  <img src="assets/imgs/story/3.jpg" alt="Story Thumbnail">
                  <img src="assets/imgs/story/4.jpg" alt="Story Thumbnail">
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Story area end -->


        <!-- Counter area start -->
        <section class="counter__area">
          <div class="container g-0 line pb-140 pt-140">
            <span class="line-3"></span>

            <div class="row">
              <div class="col-xxl-12">
                <div class="counter__wrapper-2 counter_animation">
                  <div class="counter__item-2 counter__anim">
                    <h2 class="counter__number">25k</h2>
                    <p>Project <br>completed</p>
                    <span class="counter__border"></span>
                  </div>
                  <div class="counter__item-2 counter__anim">
                    <h2 class="counter__number">8k</h2>
                    <p>Happy <br>customers</p>
                    <span class="counter__border"></span>
                  </div>
                  <div class="counter__item-2 counter__anim">
                    <h2 class="counter__number">15</h2>
                    <p>Years <br>experiences</p>
                    <span class="counter__border"></span>
                  </div>
                  <div class="counter__item-2 counter__anim">
                    <h2 class="counter__number">98</h2>
                    <p>Awards <br>achievement</p>
                    <span class="counter__border"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Counter area end -->


        <!-- Team area start -->
        <section class="team__area pt-140 pb-140">
          <div class="sec-title-wrapper">
            <h2 class="sec-sub-title title-anim">Our Team</h2>
            <h3 class="sec-title title-anim">How we work</h3>
          </div>


          <div class="swiper team__slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide team__slide">
                <a href="#">
                  <img src="assets/imgs/team/1.jpg" alt="Team Member">
                  <div class="team__info">
                    <h4 class="team__member-name">Saymon D. Halk</h4>
                    <h5 class="team__member-role">Founder & CEO</h5>
                  </div>
                </a>
              </div>

              <div class="swiper-slide team__slide">
                <a href="#">
                  <img src="assets/imgs/team/2.jpg" alt="Team Member">
                  <div class="team__info">
                    <h4 class="team__member-name">Jassica Oliver</h4>
                    <h5 class="team__member-role">Researcher</h5>
                  </div>
                </a>
              </div>

              <div class="swiper-slide team__slide">
                <a href="#">
                  <img src="assets/imgs/team/3.jpg" alt="Team Member">
                  <div class="team__info">
                    <h4 class="team__member-name">Daniyel Adamson</h4>
                    <h5 class="team__member-role">Digital Marketer</h5>
                  </div>
                </a>
              </div>

              <div class="swiper-slide team__slide">
                <a href="#">
                  <img src="assets/imgs/team/4.jpg" alt="Team Member">
                  <div class="team__info">
                    <h4 class="team__member-name">Hardiya Kethrine</h4>
                    <h5 class="team__member-role">Lead Designer</h5>
                  </div>
                </a>
              </div>

              <div class="swiper-slide team__slide">
                <a href="#">
                  <img src="assets/imgs/team/2.jpg" alt="Team Member">
                  <div class="team__info">
                    <h4 class="team__member-name">Saymon D. Halk</h4>
                    <h5 class="team__member-role">Researcher</h5>
                  </div>
                </a>
              </div>

              <div class="swiper-slide team__slide">
                <a href="#">
                  <img src="assets/imgs/team/3.jpg" alt="Team Member">
                  <div class="team__info">
                    <h4 class="team__member-name">Jassica Oliver</h4>
                    <h5 class="team__member-role">Lead Designer</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <!-- Team area end -->



        <!-- Brand area start -->
        <section class="brand__area">
          <div class="container g-0 line pt-140 pb-140">
            <span class="line-3"></span>
            <div class="row g-0">
              <div class="col-xxl-12">
                <div class="sec-title-wrapper">
                  <h2 class="sec-sub-title title-anim">Internation Brands</h2>
                  <h3 class="sec-title title-anim">We are happy to work with global <br>
                    largest brands</h3>
                </div>
              </div>

              <div class="brand__list">
                <div class="brand__item fade_bottom">
                  <img src="assets/imgs/brand/1.png" alt="Brand Logo">
                </div>
                <div class="brand__item fade_bottom">
                  <img src="assets/imgs/brand/2.png" alt="Brand Logo">
                </div>
                <div class="brand__item fade_bottom">
                  <img src="assets/imgs/brand/3.png" alt="Brand Logo">
                </div>
                <div class="brand__item fade_bottom">
                  <img src="assets/imgs/brand/4.png" alt="Brand Logo">
                </div>
                <div class="brand__item fade_bottom">
                  <img src="assets/imgs/brand/5.png" alt="Brand Logo">
                </div>
                <div class="brand__item fade_bottom">
                  <img src="assets/imgs/brand/6.png" alt="Brand Logo">
                </div>
                <div class="brand__item fade_bottom">
                  <img src="assets/imgs/brand/3.png" alt="Brand Logo">
                </div>
                <div class="brand__item fade_bottom">
                  <img src="assets/imgs/brand/4.png" alt="Brand Logo">
                </div>
                <div class="brand__item fade_bottom">
                  <img src="assets/imgs/brand/5.png" alt="Brand Logo">
                </div>
                <div class="brand__item fade_bottom">
                  <img src="assets/imgs/brand/6.png" alt="Brand Logo">
                </div>
                <div class="brand__item fade_bottom">
                  <img src="assets/imgs/brand/1.png" alt="Brand Logo">
                </div>
                <div class="brand__item fade_bottom">
                  <img src="assets/imgs/brand/2.png" alt="Brand Logo">
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Brand area end -->


        <!-- Testimonial area start -->
        <section class="testimonial__area-2">
          <div class="container g-0 line pb-140">
            <span class="line-3"></span>

            <div class="row g-0">
              <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <div class="testimonial__video">
                  <video autoplay="" muted="" loop="">
                    <source src="assets/video/testimonial.mp4" type="video/mp4">
                  </video>
                </div>
              </div>

              <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div class="testimonial__slider-wrapper-2">
                  <div class="swiper testimonial__slider">
                    <div class="swiper-wrapper">

                      <div class="swiper-slide testimonial__slide">
                        <div class="testimonial__inner-2">
                          <h2 class="testimonial__title-2">Amazing digital service</h2>
                          <p class="testimonial__text-2">We were there right at the beginning just when the concept
                            for
                            search
                            engine optimisation taking office and the full of internet. So wewe’ve grown to employ
                            than 50
                            talented specialists with diverse experiences and broad skill sets of huge markers.</p>
                          <h3 class="testimonial__author">Adam Syndera</h3>
                          <h4 class="testimonial__role">CEO, Agency</h4>
                        </div>
                      </div>

                      <div class="swiper-slide testimonial__slide">
                        <div class="testimonial__inner-2">
                          <h2 class="testimonial__title-2">Amazing digital service</h2>
                          <p class="testimonial__text-2">We were there right at the beginning just when the concept
                            for
                            search
                            engine optimisation taking office and the full of internet. So wewe’ve grown to employ
                            than 50
                            talented specialists with diverse experiences and broad skill sets of huge markers.</p>
                          <h3 class="testimonial__author">Adam Syndera</h3>
                          <h4 class="testimonial__role">CEO, Agency</h4>
                        </div>
                      </div>

                      <div class="swiper-slide testimonial__slide">
                        <div class="testimonial__inner-2">
                          <h2 class="testimonial__title-2">Amazing digital service</h2>
                          <p class="testimonial__text-2">We were there right at the beginning just when the concept
                            for
                            search
                            engine optimisation taking office and the full of internet. So wewe’ve grown to employ
                            than 50
                            talented specialists with diverse experiences and broad skill sets of huge markers.</p>
                          <h3 class="testimonial__author">Adam Syndera</h3>
                          <h4 class="testimonial__role">CEO, Agency</h4>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div class="testimonial__pagination">
                    <div class="prev-button"><i class="fa-solid fa-arrow-right"></i></div>
                    <div class="next-button"><i class="fa-solid fa-arrow-left"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Testimonial area end -->


        <!-- CTA area start -->
        <section class="cta__area">
          <div class="container line pb-110 dark-p">
            <div class="line-3"></div>
            <div class="row">
              <div class="col-xxl-12">
                <div class="cta__content">
                  <p class="cta__sub-title">Work with us</p>
                  <h2 class="cta__title title-anim">We would love to hear more about your project</h2>
                  <div class="btn_wrapper">
                    <a href="contact.html" class="wc-btn-primary btn-hover btn-item"><span></span>Let’s talk us <i class="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- CTA area end -->

      </main>



      <!-- Footer area start -->
      <footer class="footer__area">
        <div class="footer__top">
          <div class="container footer-line"></div>
          <img src="assets/imgs/thumb/footer1.jpeg" alt="Footer Image" data-speed="0.5">
        </div>

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
                      <li><a href="#" class="phone">(971) 901-3140</a></li>
                      <li>Street Road 24, CA, USA.</li>
                      <li><a href="#">info@logowebpro.com</a></li>
                    </ul>
                  </div>
  
                  <div class="footer__widget-4">
                    <h2 class="project-title">Have a project in your mind?</h2>
                    <div class="btn_wrapper" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">
                      <a href="#" class="wc-btn-primary btn-hover btn-item"><span></span> contact us <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <h3 class="contact-time">09 : 00 AM - 10 : 30 PM</h3>
                    <h4 class="contact-day">Saturday - Thursday</h4>
                  </div>
  
                  <div class="footer__copyright">
                    <p>© 2023 | Alright reserved by <a href="#" target="_blank"><br>Logo Web Pro</a>
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


</body>

</html>