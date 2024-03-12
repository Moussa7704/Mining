
function App() {

  return (
    <div>
      {/*page start*/}
      <div className="page">
        {/*header start*/}
        <header id="masthead" className="header prt-header-style-01">
          {/* topbar */}
          <div className="top_bar bg-base-dark text-base-white clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="top_bar_inner text-base-white">
                    {/* site-branding */}
                    <div className="site-branding">
                      <h1><a className="home-link" href="index.html" title="Minemo" rel="home">
                        <h2>Mine First</h2>
                      </a></h1>
                    </div>{/* site-branding end */}
                    <div className="top_bar_contact_item with-icon top_bar_address ms-auto">
                      <div className="top_bar_icon"><i className="fa fa-thumb-tack" /></div>
                      <span>Address: 183 Donato Parkway CA).set USA</span>
                    </div>
                    <div className="top_bar_contact_item with-icon top_bar_call">
                      <div className="top_bar_icon"><i className="fa fa-phone" /></div>
                      <span>Call Us:</span><span className="topbar_icon-txt"><a className="text-base-skin" href="tel:1234567890"> (+208) 555-0112 89</a></span>
                    </div>
                    <div className="top_bar_contact_item top_bar_social">
                      <ul className="social-icons">
                        <li className="prt-social-facebook"><a href="https://www.facebook.com/preyantechnosys19" rel="noopener" aria-label="facebook">fb</a>
                        </li>
                        <li className="prt-social-twitter"><a href="https://twitter.com/PreyanTechnosys" rel="noopener" aria-label="twitter">tw</a>
                        </li>
                        <li className="prt-social-linkedin"><a href="https://www.linkedin.com/in/preyan-technosys-pvt-ltd/" rel="noopener" aria-label="linkedin">in</a>
                        </li>
                        <li className="prt-social-instagram"><a href="https://dribbble.com/PreyanTechnosys" rel="noopener" aria-label="dribbble">db</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* topbar end */}
          {/* site-header-menu */}
          <div id="site-header-menu" className="site-header-menu">
            <div className="site-header-menu-inner prt-stickable-header">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    {/*site-navigation */}
                    <div className="site-navigation">
                      <div className="site-branding site-branding-02  me-auto">
                        <a className="home-link" href="index.html" title="Minemo" rel="home">
                          <img id="logo-imgs" height={45} width={224} className="img-fluid auto_size" src="images/logo-light.svg" alt="logo-img" />
                        </a>
                      </div>
                      <div className>
                        <div className="btn-show-menu-mobile menubar menubar--squeeze">
                          <span className="menubar-box">
                            <span className="menubar-inner" />
                          </span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          {/* menu */}
                          <nav className="main-menu menu-mobile" id="menu">
                            <ul className="menu">
                              <li className="mega-menu-item active">
                                <a href="index.html#" className="mega-menu-link">Home</a>
                                <ul className="mega-submenu">
                                  <li className="mega-menu-item active"><a href="index.html#" className="mega-menu-link">Demo One</a>
                                    <ul className="mega-submenu">
                                      <li className="active">
                                        <a href="index.html">Homepage 1</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-item"><a href="index.html#" className="mega-menu-link">Demo Two</a>
                                    <ul className="mega-submenu">
                                      <li>
                                        <a href="../demo2/index.html">Homepage 1</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-item"><a href="index.html#" className="mega-menu-link">Demo Three</a>
                                    <ul className="mega-submenu">
                                      <li>
                                        <a href="../demo3/index.html">Homepage 1</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li className="mega-menu-item">
                                <a href="index.html#" className="mega-menu-link">Pages</a>
                                <ul className="mega-submenu">
                                  <li className="mega-menu-item">
                                    <a href="index.html#" className="mega-menu-link">About Us</a>
                                    <ul className="mega-submenu">
                                      <li><a href="about-us.html">About Us One</a></li>
                                      <li><a href="about-us-2.html">About Us Two</a></li>
                                    </ul>
                                  </li>
                                  <li className="mega-menu-item">
                                    <a href="index.html#" className="mega-menu-link">Services</a>
                                    <ul className="mega-submenu">
                                      <li><a href="service.html">Service One</a></li>
                                      <li><a href="service-02.html">Service Two</a></li>
                                    </ul>
                                  </li>
                                  <li><a href="our-team.html">Our Team</a></li>
                                  <li><a href="team-details.html">Team Details</a></li>
                                  <li><a href="faq.html">FAQ</a></li>
                                  <li><a href="error.html">Error Page</a></li>
                                </ul>
                              </li>
                              <li className="mega-menu-item">
                                <a href="index.html#" className="mega-menu-link">Services</a>
                                <ul className="mega-submenu">
                                  <li><a href="responsible-mining.html">Responsible Mining</a></li>
                                  <li><a href="mobile-crane-services.html">Mobile Crane Services</a></li>
                                  <li><a href="stone-crushers.html">Stone Crushers</a></li>
                                  <li><a href="geological-consulting.html">Geological Consulting</a></li>
                                  <li><a href="exploration-services.html">Exploration Services</a></li>
                                  <li><a href="mine-egineering.html">Mine Engineering</a></li>
                                </ul>
                              </li>
                              <li className="mega-menu-item">
                                <a href="index.html#" className="mega-menu-link">Portfolio</a>
                                <ul className="mega-submenu">
                                  <li><a href="portfolio-style-one.html">Portfolio Style One</a></li>
                                  <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                </ul>
                              </li>
                              <li className="mega-menu-item">
                                <a href="index.html#" className="mega-menu-link">Blog</a>
                                <ul className="mega-submenu">
                                  <li><a href="blog-classic.html">Blog Classic</a></li>
                                  <li><a href="blog-grid.html">Blog Grid View</a></li>
                                  <li><a href="blog-single.html">Blog Single View</a></li>
                                </ul>
                              </li>
                              <li className="mega-menu-item">
                                <a href="index.html#" className="mega-menu-link">Contact Us</a>
                                <ul className="mega-submenu">
                                  <li><a href="contact-us.html">Contact Us One</a></li>
                                  <li><a href="contact-us-2.html">Contact Us Two</a></li>
                                </ul>
                              </li>
                            </ul>
                          </nav>{/* menu end */}
                          <div className="header_extra">
                            <div className="header_btn">
                              <a className="prt-btn prt-btn-size-md prt-btn-shape-round prt-btn-style-fill prt-btn-color-skincolor" href="contact-us.html">Inquiry Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{/* site-navigation end*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* site-header-menu end*/}
        </header>
        {/*header end*/}
        {/* START decfoxSlider 1 REVOLUTION SLIDER 6.5.9 */}<p className="rs-p-wp-fix" />
        <rs-module-wrap id="rev_slider_1_1_wrapper" data-source="gallery">
          <rs-module id="rev_slider_1_1" style={{}} data-version="6.5.9">
            <rs-slides>
              <rs-slide data-key="rs-1" data-title="Slide" data-thumb="images/slides/slider-mainbg-001.jpg" data-anim="ei:d;eo:d;s:d;r:0;t:fade;sl:d;">
                <img src="images/slides/slider-mainbg-001.jpg" title="slider-img-01.jpg" width={1920} height={630} className="rev-slidebg tp-rs-img" data-no-retina />{/*
                  
                  */}<rs-layer id="slider-1-slide-1-layer-0" data-type="text" data-rsp_ch="on" data-xy="x:l,l,c,c;xo:15px,25px,0,0;yo:157px,157px,80px,80px;" data-text="w:normal;s:16;l:26,26,26,20;fw:400;" data-vbility="t,t,f,f" data-frame_0="y:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:190;sp:1200;sR:190;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:7610;" style={{ zIndex: 8, fontFamily: '"Krona One", sans-serif' }}>Finding Treasures Beneath To<br /> Give Value In Every Rock.
                </rs-layer>{/*

                  */}<rs-layer id="slider-1-slide-1-layer-1" className="rs-selectable" data-type="shape" data-rsp_ch="on" data-xy="x:l,l,c,c;xo:15px,25px,15px,15px;yo:220px,220px,100px,100px;" data-text="w:normal;s:20,20,12,7;l:0,0,15,9;" data-dim="w:303px,303px,303px,303px;h:2px,2px,2px,2px" data-vbility="t,t,f,f" data-frame_0="y:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:190;sp:1200;sR:190;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:7610;" style={{ zIndex: 8, backgroundColor: '#e33b28' }}>
                </rs-layer>{/*
              
                  */}<rs-layer id="slider-1-slide-1-layer-2" data-type="text" data-rsp_ch="on" data-xy="x:l,l,c,c;xo:5px,15px,0,0;yo:273px,273px,94px,80px;" data-text="w:normal;s:94,94,58,40;l:116,116,80,60;fw:400;" data-frame_0="y:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:310;sp:1200;sR:310;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:7490;" style={{ zIndex: 7, fontFamily: '"Krona One", sans-serif' }}>Digital Quarry
                </rs-layer>{/*

                  */}<rs-layer id="slider-1-slide-1-layer-3" data-type="text" data-rsp_ch="on" data-xy="x:l,l,c,c;xo:5px,15px,0,0;yo:385px,385px,170px,130px;" data-text="w:normal;s:94,94,58,40;l:116,116,80,60;fw:400;" data-frame_0="y:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:440;sp:1200;sR:440;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:7360;" style={{ zIndex: 7, fontFamily: '"Krona One", sans-serif' }}>Mining
                </rs-layer>{/*

                  */}<rs-layer id="slider-1-slide-1-layer-4" data-type="text" data-color="rgba(255 255 255 / 70%)" data-rsp_ch="on" data-xy="x:l,l,c,c;xo:477px,477px,0,0;yo:409px,409px,270px,200px;" data-text="w:normal;s:16;l:26,26,26,20;fw:400;" data-frame_0="y:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:680;sp:1200;sR:680;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:7120;" style={{ zIndex: 8, fontFamily: '"Kumbh Sans", sans-serif' }}>The art of exploiting with high safety standards and <br /> unprofitable mine is fit only for the sepulcher of a<br /> dead mule of manufactory
                </rs-layer>{/*

                  */}<a id="slider-1-slide-1-layer-5" className="rs-layer rs-selectable underline" data-color="#e33b28" href="about-us.html" data-type="text" data-rsp_ch="on" data-xy="x:l,l,c,c;xo:680px,685px,55px,50px;yo:467px,467px,328px,245px;" data-text="w:normal;s:16,16,16,15;l:15,15,15,15;fw:400;" data-vbility="t,t,t,t" data-frame_0="y:-100%;" data-frame_1="e:power4.inOut;st:1050;sp:500;sR:1050;" data-frame_999="o:0;st:w;sR:7450;" data-frame_hover="c:#fff;" style={{ zIndex: 12, fontFamily: '"Kumbh Sans", sans-serif' }}>View More
                </a>{/*

                  */}<rs-layer id="slider-1-slide-3-layer-6" className="rs-selectable rev_slider_image" data-type="image" data-rsp_ch="on" data-xy="x:r;xo:15px,15px,-230px,-281px;y:b;yo:0,0,0,196px;" data-text="w:normal;s:20,20,12,7;l:0,0,15,9;" data-border="bor:5px,5px,5px,5px;" data-dim="w:303px,303px,303px,303px;h:186px,186px,186px,186px" data-vbility="t,t,f,f" data-frame_0="y:100%;" data-frame_1="e:power4.inOut;st:160;sp:500;sR:160;" data-frame_999="o:0;st:w;sR:8340;" style={{ zIndex: 8 }}><img className="img-fluid rs_slider1_hover" src="images/slides/single-01.png" alt="image" width={130} height={75} />
                </rs-layer>{/*

                  */}<rs-layer id="slider-1-slide-1-layer-7" data-type="text" data-color="#e33b28" data-rsp_ch="on" data-xy="x:r,r,c,c;xo:190px,190px,0,0;yo:488px,488px,80px,67px;" data-text="w:normal;s:30;l:30,30,30,30;fw:400;" data-vbility="t,t,f,f" data-frame_0="y:-100%;" data-frame_1="st:340;sp:1200;sR:340;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:7510;" style={{ zIndex: 8, fontFamily: '"Krona One", sans-serif' }}>25k+
                </rs-layer>{/*
              
                  */}<rs-layer id="slider-1-slide-1-layer-8" data-type="text" data-rsp_ch="on" data-xy="x:r,r,c,c;xo:72px,72px,0,0;yo:536px,536px,80px,67px;" data-text="w:normal;s:16;l:26,26,26,26;fw:400;" data-vbility="t,t,f,f" data-frame_0="y:-100%;" data-frame_1="st:340;sp:1200;sR:340;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:7510;" style={{ zIndex: 8, fontFamily: '"Krona One", sans-serif' }}>Projects completed<br />successfully
                </rs-layer>{/*

              */}</rs-slide>
              <rs-slide data-key="rs-4" data-title="Slide" data-thumb="images/slides/slider-mainbg-002.jpg" data-anim="ei:d;eo:d;s:d;r:0;t:fade;sl:d;">
                <img src="images/slides/slider-mainbg-002.jpg" title="slider-img-02.jpg" width={1920} height={630} className="rev-slidebg tp-rs-img" data-no-retina />{/*
                  
                  */}<rs-layer id="slider-1-slide-4-layer-0" data-type="text" data-rsp_ch="on" data-xy="x:c,c,c,c;xo:15px,15px,0,0;yo:187px,187px,80px,80px;" data-text="w:normal;s:16;l:26,26,26,20;fw:400;" data-vbility="t,t,f,f" data-frame_0="y:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:190;sp:1200;sR:190;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:7610;" style={{ zIndex: 8, fontFamily: '"Krona One", sans-serif' }}>Finding Treasures Beneath To Rock.
                </rs-layer>{/*

                  */}<rs-layer id="slider-1-slide-4-layer-1" className="rs-selectable" data-type="shape" data-rsp_ch="on" data-xy="x:c,c,c,c;xo:15px,15px,0,0;yo:220px,220px,100px,100px;" data-text="w:normal;s:20,20,12,7;l:0,0,15,9;" data-dim="w:390px,390px,390px,390px;h:2px,2px,2px,2px" data-vbility="t,t,f,f" data-frame_0="y:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:190;sp:1200;sR:190;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:7610;" style={{ zIndex: 8, backgroundColor: '#e33b28' }}>
                </rs-layer>{/*
              
                   */}<rs-layer id="slider-1-slide-4-layer-2" data-type="text" data-rsp_ch="on" data-xy="x:c,c,c,c;xo:5px,5px,0,0;yo:250px,273px,74px,84px;" data-text="w:normal;s:94,94,58,30;l:116,116,80,60;fw:400;" data-frame_0="y:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:310;sp:1200;sR:310;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:7490;" style={{ zIndex: 7, fontFamily: '"Krona One", sans-serif' }}>Golden Horizons In
                </rs-layer>{/*

                  */}<rs-layer id="slider-1-slide-4-layer-3" data-type="text" data-rsp_ch="on" data-xy="x:c,c,c,c;xo:5px,5px,0,0;yo:360px,385px,135px,135px;" data-text="w:normal;s:94,94,58,30;l:116,116,80,60;fw:400;" data-frame_0="y:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:440;sp:1200;sR:440;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:7360;" style={{ zIndex: 7, fontFamily: '"Krona One", sans-serif' }}>Mines
                </rs-layer>{/*

                  */}<rs-layer id="slider-1-slide-4-layer-4" data-type="text" data-color="rgba(255 255 255 / 70%)" data-rsp_ch="on" data-xy="x:c,c,c,c;xo:412px,400px,0,0;yo:380px,405px,215px,205px;" data-text="w:normal;s:16;l:26,26,26,20;fw:400;" data-vbility="t,t,t,f" data-frame_0="y:-100%;" data-frame_0_mask="u:t;" data-frame_1="st:680;sp:1200;sR:680;" data-frame_1_mask="u:t;" data-frame_999="o:0;st:w;sR:7120;" style={{ zIndex: 8, fontFamily: '"Kumbh Sans", sans-serif' }}>The art of exploiting with high safety standards and <br /> unprofitable mine is fit only for the sepulcher of a<br /> dead mule of manufactory
                </rs-layer>{/*

                  */}<a id="slider-1-slide-4-layer-5" className="rs-layer rs-selectable" href="contact-us.html" data-type="text" data-rsp_ch="on" data-xy="x:c,c,c,c;xo:-290px,-290px,0,0;yo:390px,420px,313px,205px;" data-text="w:normal;s:12,12,12,12;l:22,22,22,22;fw:400;" data-padding="t:13,13,13,10;r:30,30,30,30;b:12,12,12,10;l:30,30,30,30;" data-border="bos:solid;boc:#fff;bow:2px,2px,2px,2px;bor:10px,10px,10px,10px;" data-vbility="t,t,t,t" data-frame_0="y:-100%;" data-frame_1="e:power4.inOut;st:1050;sp:500;sR:1050;" data-frame_999="o:0;st:w;sR:7450;" data-frame_hover="c:#fff;bgc:#e33b28;bos:solid;boc:#e33b28;bow:2px,2px,2px,2px;bor:10px,10px,10px,10px;" style={{ zIndex: 12, fontFamily: '"Krona One", sans-serif', textTransform: 'uppercase' }}>Contact Us
                </a>{/*

                  */}
              </rs-slide>
            </rs-slides>
          </rs-module>
        </rs-module-wrap>
        {/* END REVOLUTION SLIDER */}
        {/*site-main start*/}
        <div className="site-main">
          {/* about section start */}
          <section className="prt-row about-section clearfix" data-aos="fade-up" data-aos-duration={1500}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12">
                  {/* section title */}
                  <div className="section-title mb-0">
                    <div className="title-header">
                      <h3>About mining</h3>
                      <h2 className="title">Extracting stone with latest techniques</h2>
                    </div>
                    <div className="title-desc">
                      <p className="pb-0">The business of installing mineral processing plants and bulk handling system since 1975. Specializing in the research, development, and manufacture of industrial stone crushing &amp; screening equipment’s. Equipped with intelligent productions!</p>
                    </div>
                  </div>
                  {/* section title end */}
                </div>
                <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12">
                  <div className="pl-30 res-1199-pl-0 res-1199-mt-30">
                    <div className="aboutquote">
                      <blockquote className="aboutquote-text">We have established whole production chain, of which main products cover stone crushing screening equipment’s services!</blockquote>
                    </div>
                    <div className="about-section border-rad_10">
                      <img width={494} height={166} className="img-fluid" src="images/single-img-01.jpg" alt="about-01" />
                    </div>
                  </div>
                </div>
              </div>{/* row end */}
              <div className="prt-aboutcta bg-base-dark prt-bg prt-bgimage-yes bg-img1 border-rad_10 spacing-1" data-aos="fade-up" data-aos-duration={1000}>
                <div className="prt-row-wrapper-bg-layer prt-bg-layer bg-base-dark" />
                <div className="row">
                  <div className="col-xl-6 col-lg-12 col-md-12">
                    <div className="aboutcta">
                      <h3>New to mining service?</h3>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12 col-md-12 res-1199-pt-20">
                    <div className="aboutcta aboutcta1 pl-30 res-1199-pl-80">
                      <div>call us on<span className="text-base-skin fs-30"> 899 000 999 88</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* about section end */}
          {/*padding_zero-section*/}
          <section className="prt-row padding_zero-section clearfix">
            <div className="container-fulid">
              <div className="row">
                <div className="col-lg-12">
                  {/* section title */}
                  <div className="section-title title-style-center_text">
                    <div className="title-header">
                      <h3>what we provide</h3>
                      <h2 className="title">We offering best services</h2>
                    </div>
                  </div>{/* section title end */}
                </div>
              </div>
              <div className="row slick_slider spacing-2" data-slick="{&quot;slidesToShow&quot;: 4, &quot;slidesToScroll&quot;: 1, &quot;arrows&quot;:false, &quot;autoplay&quot;:true, &quot;dots&quot;:false, &quot;infinite&quot;:true, &quot;responsive&quot;:[{&quot;breakpoint&quot;:1200,&quot;settings&quot;: {&quot;slidesToShow&quot;: 3}}, {&quot;breakpoint&quot;:900,&quot;settings&quot;:{&quot;slidesToShow&quot;: 3}},{&quot;breakpoint&quot;:768,&quot;settings&quot;:{&quot;slidesToShow&quot;: 2}},{&quot;breakpoint&quot;:545,&quot;settings&quot;:{&quot;slidesToShow&quot;: 1}}]}">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  {/*featured-imagebox-services*/}
                  <div className="featured-imagebox featured-imagebox-services style1">
                    {/* featured-thumbnail */}
                    <div className="featured-thumbnail">
                      <img className="img-fluid" src="images/services/services-01.jpg" alt="image" width={740} height={500} />
                    </div>{/* featured-thumbnail end*/}
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3><a href="responsible-mining.html">Responsible mining</a></h3>
                      </div>
                      <div className="featured-desc">
                        <p>Environmental impact, and prioritizes a fair division of economic and with financial benefits.</p>
                      </div>
                    </div>
                  </div>{/* featured-imagebox-services end*/}
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  {/*featured-imagebox-services*/}
                  <div className="featured-imagebox featured-imagebox-services style1">
                    {/* featured-thumbnail */}
                    <div className="featured-thumbnail">
                      <img className="img-fluid" src="images/services/services-02.jpg" alt="image" width={740} height={500} />
                    </div>{/* featured-thumbnail end*/}
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3><a href="mobile-crane-services.html">Mobile crane services</a></h3>
                      </div>
                      <div className="featured-desc">
                        <p>Finest quality &amp; advanced technologies by vendors, the offered assortment is highly durable.</p>
                      </div>
                    </div>
                  </div>{/* featured-imagebox-services end*/}
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  {/*featured-imagebox-services*/}
                  <div className="featured-imagebox featured-imagebox-services style1">
                    {/* featured-thumbnail */}
                    <div className="featured-thumbnail">
                      <img className="img-fluid" src="images/services/services-03.jpg" alt="image" width={740} height={500} />
                    </div>{/* featured-thumbnail end*/}
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3><a href="stone-crushers.html">Stone crushers</a></h3>
                      </div>
                      <div className="featured-desc">
                        <p>A compressed between a wobbling mantle and the concaves inside the crushing chamber.</p>
                      </div>
                    </div>
                  </div>{/* featured-imagebox-services end*/}
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  {/*featured-imagebox-services*/}
                  <div className="featured-imagebox featured-imagebox-services style1">
                    {/* featured-thumbnail */}
                    <div className="featured-thumbnail">
                      <img className="img-fluid" src="images/services/services-04.jpg" alt="image" width={740} height={500} />
                    </div>{/* featured-thumbnail end*/}
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3><a href="exploration-services.html">Exploration services</a></h3>
                      </div>
                      <div className="featured-desc">
                        <p>A range of activities to help determine if there are minerals under the ground &amp; recovering.</p>
                      </div>
                    </div>
                  </div>{/* featured-imagebox-services end*/}
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  {/*featured-imagebox-services*/}
                  <div className="featured-imagebox featured-imagebox-services style1">
                    {/* featured-thumbnail */}
                    <div className="featured-thumbnail">
                      <img className="img-fluid" src="images/services/services-02.jpg" alt="image" width={740} height={500} />
                    </div>{/* featured-thumbnail end*/}
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3><a href="geological-consulting.html">Geological consulting</a></h3>
                      </div>
                      <div className="featured-desc">
                        <p>Aspects of engineering &amp; geology particularly in the quarrying industry related areas services.</p>
                      </div>
                    </div>
                  </div>{/* featured-imagebox-services end*/}
                </div>
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  {/*featured-imagebox-services*/}
                  <div className="featured-imagebox featured-imagebox-services style1">
                    {/* featured-thumbnail */}
                    <div className="featured-thumbnail">
                      <img className="img-fluid" src="images/services/services-03.jpg" alt="image" width={740} height={500} />
                    </div>{/* featured-thumbnail end*/}
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3><a href="mine-egineering.html">Mine engineering</a></h3>
                      </div>
                      <div className="featured-desc">
                        <p>Underground resources such as minerals, metals, oil and gas are extracted safely &amp; efficiently.</p>
                      </div>
                    </div>
                  </div>{/* featured-imagebox-services end*/}
                </div>
              </div>
            </div>
          </section>
          {/*padding_zero-section end*/}
          {/* fid-section_1 */}
          <section className="prt-row fid-section_1 clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-border-top" />
                </div>
              </div>
              <div className="row align-items-center res-1199-pl-15 res-1199-pr-15">
                <div className="col-xl-6 col-lg-12 col-md-12 mt-40 res-991-mt-15 res-767-mt-35">
                  <div data-aos="fade-right" data-aos-duration={900}>
                    <div className="row g-0">
                      <div className="col-xl-4 col-lg-2 col-md-3">
                        {/* prt-fid */}
                        <div className="prt-fid inside style1">
                          <div className="prt-fid-contents">
                            <h4 className="prt-fid-inner">
                              <span data-appear-animation="animateDigits" data-from={0} data-to={125} data-interval={50} data-before data-before-style="sup" data-after data-after-style="sub" className="numinate">125</span>
                              <span>+</span>
                            </h4>
                          </div>
                        </div>
                        {/* prt-fid */}
                      </div>
                      <div className="col-xl-8 col-lg-10 col-md-9">
                        <div className="prt-fid-title style1 ml_25 res-1199-ml-0">
                          <h3>Creative ideas</h3>
                          <p>Empowers people of team by adding strength to their abilities of teamwork and productivity.</p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-2 col-md-3">
                        {/* prt-fid */}
                        <div className="prt-fid inside style1">
                          <div className="prt-fid-contents">
                            <h4 className="prt-fid-inner">
                              <span data-appear-animation="animateDigits" data-from={0} data-to={1020} data-interval={100} data-before data-before-style="sup" data-after data-after-style="sub" className="numinate">1020</span>
                              <span />
                            </h4>
                          </div>
                        </div>
                        {/* prt-fid */}
                      </div>
                      <div className="col-xl-8 col-lg-10 col-md-9">
                        <div className="prt-fid-title style1 ml_25 res-1199-ml-0">
                          <div>
                            <h3>Overseas operations</h3>
                            <p>Locations of foreign countries, across a sea or an ocean accomplished mining - quarry projects.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-2 col-md-3">
                        {/* prt-fid */}
                        <div className="prt-fid inside style1">
                          <div className="prt-fid-contents">
                            <h4 className="prt-fid-inner">
                              <span data-appear-animation="animateDigits" data-from={0} data-to={10} data-interval={2} data-before data-before-style="sup" data-after data-after-style="sub" className="numinate">10</span>
                              <span>K</span>
                            </h4>
                          </div>
                        </div>
                        {/* prt-fid */}
                      </div>
                      <div className="col-xl-8 col-lg-10 col-md-9">
                        <div className="prt-fid-title style1 ml_25 res-1199-ml-0">
                          <div>
                            <h3>Domestic operations</h3>
                            <p>Economic transaction mining project that going to take place inside geo graphical boundaries.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-md-12">
                  <div className="fid-map-items position-relative mt-60  res-1199-mt-30 res-767-mt-0" data-aos="fade-left" data-aos-duration={900}>
                    <img className="img-fluid" src="images/single-img-02.png" alt="image" width={634} height={306} />
                    {/* item1 */}
                    <div className="item1">
                      <div className="tooltip">
                        <div className="map-dots" />
                        <div className="tooltiptext">
                          <p className="tooltip-title">Barnett Street Hampshire, Tasmania</p>
                          <h3>Brazil</h3>
                        </div>
                      </div>
                    </div>
                    {/* item1 end*/}
                    {/* item2 */}
                    <div className="item2">
                      <div className="tooltip">
                        <div className="map-dots" />
                        <div className="tooltiptext">
                          <p className="tooltip-title">73G5+7JF, Kerman, Kerman Province</p>
                          <h3>Iran</h3>
                        </div>
                      </div>
                    </div>
                    {/* item2 end*/}
                    {/* item3 */}
                    <div className="item3">
                      <div className="tooltip active">
                        <div className="map-dots" />
                        <div className="tooltiptext active">
                          <p className="tooltip-title">HPV4+74V, Arusha, Tanzania</p>
                          <h3>Tanzania</h3>
                        </div>
                      </div>
                    </div>
                    {/* item3 end*/}
                    {/* item4 */}
                    <div className="item4">
                      <div className="tooltip">
                        <div className="map-dots" />
                        <div className="tooltiptext">
                          <p className="tooltip-title">Shkola Vysshikh Ded Insaydov 1000-7</p>
                          <h3>Russia</h3>
                        </div>
                      </div>
                    </div>
                    {/* item4 end*/}
                    {/* item5 */}
                    <div className="item5">
                      <div className="tooltip">
                        <div className="map-dots" />
                        <div className="tooltiptext">
                          <p className="tooltip-title">50 Barnett Street Hampshire, Tasmania</p>
                          <h3>Australia</h3>
                        </div>
                      </div>
                    </div>
                    {/* item5 end*/}
                    {/* item6 */}
                    <div className="item6">
                      <div className="tooltip">
                        <div className="map-dots" />
                        <div className="tooltiptext">
                          <p className="tooltip-title">60 Barnett Street Hampshire, Tasmania</p>
                          <h3>Mexico</h3>
                        </div>
                      </div>
                    </div>
                    {/* item6 end*/}
                  </div>
                </div>
              </div>{/* row end */}
            </div>
          </section>
          {/* fid-section_1 end */}
          {/* broken-section */}
          <section className="prt-row padding_zero-section position-relative overflow-hidden clearfix">
            <div className="container">
              <div className="row g-0">
                <div className="col-lg-12">
                  <div className="row g-0">
                    <div className="col-lg-8 col-md-12">
                      <div className="prt-bg prt-col-bgimage-yes col-bg-img-one prt-col-bgcolor-yes bg-base-dark prt-bg prt-left-span spacing-3 z-index-3 res-1199-pl-15">
                        <div className="prt-col-wrapper-bg-layer prt-bg-layer bg-base-dark">
                          <div className="prt-col-wrapper-bg-layer-inner" />
                        </div>
                        <div className="layer-content">
                          <div className="pb-45">
                            <img className="img-fluid" width={82} height={77} src="images/icon-01.png" alt="image" />
                          </div>
                          {/* section title */}
                          <div className="section-title">
                            <div className="title-header">
                              <h2 className="title style1">We are <span className="text-base-skin underline">started</span> mining company for you</h2>
                            </div>
                          </div>{/* section title end */}
                          <div className="pt-5">
                            <a className="prt-btn prt-btn-size-md prt-btn-style-fill prt-btn-color-darkcolor prt-btn-shape-round prt-btn-style-border prt-btn-color-whitecolor " href="contact-us.html">Contact Us</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      {/* col-img-img-two */}
                      <div className="prt-bg prt-col-bgimage-yes col-bg-img-two prt-right-span z-index-2 ml-20">
                        <div className="prt-col-wrapper-bg-layer prt-bg-layer" />
                        <div className="layer-content">
                        </div>
                      </div>{/* col-img-bg-img-two end*/}
                      <img className="img-fluid prt-equal-height-image w-100" src="images/bg-image/col-bgimage-2.jpg" alt="bg-image" />
                      {/* prt-marquebox */}
                      <div className="prt-marquebox-main">
                        <div className="prt-marquebox-wrapper">
                          <div className="col-100">
                            <div className>
                              <div className="prt-marqueboxes-wrapper prt-marquebox-style1">
                                <ul className="icon-list-items marquebox-list">
                                  <li className="icon-list-item">
                                    <span className="marque-text">Automotive Manufacturing</span>
                                  </li>
                                  <li className="icon-list-item">
                                    <span className="marque-text">Chemical Research</span>
                                  </li>
                                  <li className="icon-list-item">
                                    <span className="marque-text">Heavy Equipment</span>
                                  </li>
                                  <li className="icon-list-item">
                                    <span className="marque-text">Chemical Research</span>
                                  </li>
                                  <li className="icon-list-item">
                                    <span className="marque-text">Heavy Equipment</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* prt-marquebox end */}
                    </div>
                  </div>{/* row end */}
                </div>
              </div>
            </div>
          </section>
          {/* broken-section end*/}
          {/* testimonials-section */}
          <section className="prt-row testimonials-section clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* section title */}
                  <div className="section-title title-style-center_text">
                    <div className="title-header">
                      <h3>Customer Statement</h3>
                      <h2 className="title">Our client feedback</h2>
                    </div>
                  </div>{/* section title end */}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="testimonials-main">
                    <div className>
                      <div data-aos="fade-right" data-aos-duration={1500}>
                        <div className="testimonials-nav">
                          <div className="testimonial-avatar">
                            <div className="testimonial-img">
                              <img className="img-fluid" src="images/testimonial/01.png" alt="testimonial-img" width={110} height={110} />
                            </div>
                          </div>
                          <div className="testimonial-avatar">
                            <div className="testimonial-img">
                              <img className="img-fluid" src="images/testimonial/02.png" alt="testimonial-img" width={110} height={110} />
                            </div>
                          </div>
                          <div className="testimonial-avatar">
                            <div className="testimonial-img">
                              <img className="img-fluid" src="images/testimonial/03.png" alt="testimonial-img" width={110} height={110} />
                            </div>
                          </div>
                        </div>
                        <div className="testimonials-name mt-20 style1">
                          <div className="testimonial-caption">
                            <h3>Christina Lois</h3>
                            <p>Manager</p>
                          </div>
                          <div className="testimonial-caption">
                            <h3>Alex Albert</h3>
                            <p>Visitors</p>
                          </div>
                          <div className="testimonial-caption">
                            <h3>Amy Amrou</h3>
                            <p>Visitors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* row end */}
                    <div className="testimonials-info slick-slider slick-arrow-style1" data-aos="fade-left" data-aos-duration={1500}>
                      {/* testimonials */}
                      <div className="testimonials text-center">
                        <div className="testimonial-content">
                          <blockquote className="testimonial-text">Seasoned professionals with an exceptional understanding of the industry. Understands mining service and quality products are the finest with its great prices!</blockquote>
                        </div>
                      </div>{/* testimonials end */}
                      {/* testimonials */}
                      <div className="testimonials prt-testimonial-box-view-style1 text-center">
                        <div className="testimonial-content">
                          <blockquote className="testimonial-text">We are so much delighted to work with quarry mining industries into Greater Sudbuary’s mining ecosystem, digital mine, to get their top-of-the-line infrastructures.</blockquote>
                        </div>
                      </div>{/* testimonials end */}
                      {/* testimonials */}
                      <div className="testimonials prt-testimonial-box-view-style1 text-center">
                        <div className="testimonial-content">
                          <blockquote className="testimonial-text">Seasoned professionals with an exceptional understanding of the industry. Understands mining service and quality products are the finest with its great prices!</blockquote>
                        </div>
                      </div>{/* testimonials end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* testimonials-section end*/}
          {/*partner-section*/}
          <section className="prt-row padding_zero-section partner-section clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-border-top" />
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="pt-80 res-991-pt-60" data-aos="zoom-in" data-aos-duration={600}>
                    {/* slick_slider */}
                    <div className="slick_slider" data-slick="{&quot;slidesToShow&quot;: 5, &quot;slidesToScroll&quot;: 1, &quot;arrows&quot;:false, &quot;autoplay&quot;:true, &quot;infinite&quot;:true, &quot;responsive&quot;: [{&quot;breakpoint&quot;:1200,&quot;settings&quot;:{&quot;slidesToShow&quot;: 5}}, {&quot;breakpoint&quot;:1024,&quot;settings&quot;:{&quot;slidesToShow&quot;: 4}}, {&quot;breakpoint&quot;:777,&quot;settings&quot;:{&quot;slidesToShow&quot;: 3}},{&quot;breakpoint&quot;:575,&quot;settings&quot;:{&quot;slidesToShow&quot;: 2}},{&quot;breakpoint&quot;:380,&quot;settings&quot;:{&quot;slidesToShow&quot;: 1}}]}">
                      <div className="client-box">
                        <div className="prt-client-logo-tooltip">
                          <div className="prt-client-logo-tooltip-inner">
                            <div className="client-thumbnail">
                              <img width={140} height={32} className="img-fluid" src="images/client/client-01.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="client-box">
                        <div className="prt-client-logo-tooltip">
                          <div className="prt-client-logo-tooltip-inner">
                            <div className="client-thumbnail">
                              <img width={171} height={32} className="img-fluid" src="images/client/client-02.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="client-box">
                        <div className="prt-client-logo-tooltip">
                          <div className="prt-client-logo-tooltip-inner">
                            <div className="client-thumbnail">
                              <img width={171} height={40} className="img-fluid" src="images/client/client-03.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="client-box">
                        <div className="prt-client-logo-tooltip">
                          <div className="prt-client-logo-tooltip-inner">
                            <div className="client-thumbnail">
                              <img width={187} height={40} className="img-fluid" src="images/client/client-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="client-box">
                        <div className="prt-client-logo-tooltip">
                          <div className="prt-client-logo-tooltip-inner">
                            <div className="client-thumbnail">
                              <img width={171} height={32} className="img-fluid" src="images/client/client-02.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="client-box">
                        <div className="prt-client-logo-tooltip">
                          <div className="prt-client-logo-tooltip-inner">
                            <div className="client-thumbnail">
                              <img width={171} height={40} className="img-fluid" src="images/client/client-03.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>{/* prt-client end */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*partner-section end*/}
          {/*padding_zero-section*/}
          <section className="prt-row video-autoplay-section padding_zero-section clearfix">
            <div className="container-fulid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="video-autoplay">
                    <video className="img-fluid" loop autoPlay="autoplay" controls="controls" muted content="noindex">
                      <source src="images/video/production.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*padding_zero-section end*/}
          {/*blog-section*/}
          <section className="prt-row blog-section clearfix" data-aos="fade-up" data-aos-duration={1500}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-between align-items-center">
                    {/* section title */}
                    <div className="section-title mb-0">
                      <div className="title-header pb-0">
                        <h3>BLOG &amp; ARTICLES</h3>
                        <h2 className="title mb-0">Our recent posts</h2>
                      </div>
                    </div>{/* section title end */}
                    <div className="blog-btn res-575-mt-20">
                      <a className="prt-btn prt-btn-size-md prt-btn-shape-round prt-btn-style-fill prt-btn-color-darkcolor border-color" href="blog-classic.html">See More articles</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-40 res-767-mt-20">
                <div className="col-xl-5 col-lg-12 col-md-12">
                  {/*featured-imagebox-services*/}
                  <div className="featured-imagebox featured-imagebox-post style1">
                    {/* featured-thumbnail */}
                    <div className="featured-thumbnail">
                      <a href="index.html#"><img className="img-fluid" src="images/blog/blog-01.jpg" alt="image" width={740} height={500} /></a>
                    </div>{/* featured-thumbnail end*/}
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3><a href="blog-single.html">World's largest manufacturers of  building materials services</a></h3>
                      </div>
                      <div className="featured-desc">
                        <p>In more than 600 active quarries worldwide Materials and its subsidiaries are 100% committed.</p>
                      </div>
                      <div>
                        <a className="prt-btn btn-inline prt-icon-btn-right prt-btn-size-md btn-underline" href="blog-single.html">view more</a>
                        <span className="prt-meta-line date-link"><time className="entry-date published" dateTime="2022-01-11T06:51:39+00:00">02 Jan, 2023</time></span>
                      </div>
                    </div>
                  </div>{/* featured-imagebox-services end*/}
                </div>
                <div className="col-xl-7 col-lg-12 col-md-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="blog-featured-content">
                        <span className="blog-featured-tag">Mining</span>
                        <div className="featured-content mt-40">
                          <div className="featured-title">
                            <h3><a href="blog-single.html">Quarry Mine Industry Outlook 1011</a></h3>
                          </div>
                          <div>
                            <a className="prt-btn btn-inline prt-icon-btn-right prt-btn-size-md btn-underline" href="blog-single.html">view more</a>
                            <span className="prt-meta-line date-link"><time className="entry-date published" dateTime="2022-01-11T06:51:39+00:00">10 Jan, 2023</time></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="blog-featured-content">
                        <span className="blog-featured-tag">Development</span>
                        <div className="featured-content mt-40">
                          <div className="featured-title">
                            <h3><a href="blog-single.html">Inside Mind Of The Mining Leaders</a></h3>
                          </div>
                          <div>
                            <a className="prt-btn btn-inline prt-icon-btn-right prt-btn-size-md btn-underline" href="blog-single.html">view more</a>
                            <span className="prt-meta-line date-link"><time className="entry-date published" dateTime="2022-01-11T06:51:39+00:00">15 Jan, 2023</time></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="blog-featured-content">
                        <span className="blog-featured-tag">Planning</span>
                        <div className="featured-content mt-40">
                          <div className="featured-title">
                            <h3><a href="blog-single.html">Energies to Replace Over Sources</a></h3>
                          </div>
                          <div>
                            <a className="prt-btn btn-inline prt-icon-btn-right prt-btn-size-md btn-underline" href="blog-single.html">view more</a>
                            <span className="prt-meta-line date-link"><time className="entry-date published" dateTime="2022-01-11T06:51:39+00:00">20 jan, 2023</time></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="blog-featured-content">
                        <span className="blog-featured-tag">Challenges</span>
                        <div className="featured-content mt-40">
                          <div className="featured-title">
                            <h3><a href="blog-single.html">Opportunities And Risks For Mining</a></h3>
                          </div>
                          <div>
                            <a className="prt-btn btn-inline prt-icon-btn-right prt-btn-size-md btn-underline" href="blog-single.html">view more</a>
                            <span className="prt-meta-line date-link"><time className="entry-date published" dateTime="2022-01-11T06:51:39+00:00">22 Jan, 2023</time></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*blog-section end*/}
        </div>{/*site-main end*/}
        {/*footer start*/}
        <footer className="footer widget-footer style1 bg-base-dark text-base-white overflow-hidden clearfix">
          <div className="prt-row-wrapper-bg-layer prt-bg-layer" />
          <div className="prt-section-hili-dot style1" />
          <div className="first-footer style1">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-12 col-md-12 col-xs-7 widget-area">
                  <div className="first-footer-content">
                    <h3>Let’s start together.</h3>
                    <h2>Ready to the most <br />out of your creativity? </h2>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-12 col-md-12 col-xs-5 widget-area">
                  <div className="first-footer-content-1 res-1199-pl-0 res-1199-mt-30">
                    <p>Everything you need to build your landing page and make a great impression.</p>
                    <span className="footer-btn">
                      <a className="prt-btn prt-btn-size-md prt-btn-shape-round prt-btn-style-fill prt-btn-color-skincolor" href="contact-us.html">Contact Us</a>
                      <a className="prt-btn prt-btn-size-md prt-btn-style-fill prt-btn-color-darkcolor prt-btn-shape-round prt-btn-style-border prt-btn-color-whitecolor ml-15" href="contact-us-2.html">Get started</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="second-footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="border-top" />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 widget-area ">
                  <div className="widget widget_text clearfix res-991-mt-50">
                    <div className="textwidget widget-text">
                      <p>An iconic HTML template is specially structured for all kind of mining service industries &amp; business web appearance. Let’s get great reach!</p>
                    </div>
                    <div className="widget_social_wrapper social-icons pt-15">
                      <h3 className="fs-18 mb-20">Social Info</h3>
                      <ul className="social-icons">
                        <li><a href="https://www.facebook.com/preyantechnosys19" rel="noopener" aria-label="facebook"><i className="icon-facebook" /></a></li>
                        <li><a href="https://twitter.com/PreyanTechnosys" rel="noopener" aria-label="twitter"><i className="icon-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/preyan-technosys-pvt-ltd/" rel="noopener" aria-label="linkedin"><i className="icon-linkedin" /></a></li>
                        <li><a href="https://dribbble.com/PreyanTechnosys" rel="noopener" aria-label="dribbble"><i className="icon-dribbble" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 widget-area">
                  <div className="widget multi_widget clearfix">
                    <div className="widget_nav_menu clearfix">
                      <h3 className="widget-title">Quick links</h3>
                      <ul className="menu-footer-quick-links links-1">
                        <li><a href="index.html#">Home</a></li>
                        <li><a href="index.html#">About Us</a></li>
                        <li><a href="index.html#">Company News</a></li>
                        <li><a href="index.html#">Projects</a></li>
                        <li><a href="index.html#">Case Studies</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-2 widget-area">
                  <div className="widget multi_widget clearfix">
                    <div className="widget_nav_menu clearfix">
                      <h3 className="widget-title">Our Services</h3>
                      <ul className="menu-footer-quick-links links-1">
                        <li><a href="index.html#"> Mining Sector</a></li>
                        <li><a href="index.html#">Project pricing</a></li>
                        <li><a href="index.html#">Client testimonials</a></li>
                        <li><a href="index.html#">Our Philosophy</a></li>
                        <li><a href="index.html#">Cost Calculator</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 widget-area">
                  <div className="widget multi_widget clearfix">
                    <div className="newsletter_widget clearfix">
                      <h3 className="widget-title">Our Newsletter</h3>
                      <form id="subscribe-form" className="newsletter-form style1" action="index.html#" data-mailchimp="true">
                        <div className="mailchimp-inputbox clearfix" id="subscribe-content">
                          <p>
                            <input type="email" name="email" placeholder="Your email address" required />
                          </p>
                          <p><button type="submit"><i className="icon-paper-plane" /></button></p>
                          <p className="cookies">
                            <input type="checkbox" name="cookies-consent" id="cookies-consent1" />
                            <label htmlFor="cookies-consent1" />
                            I agree that submitted data is being collected and stored..
                          </p>
                        </div>
                        <div id="subscribe-msg" />
                      </form>
                    </div>
                    {/*featured-icon-box*/}
                    <div className="featured-icon-box icon-align-before-content style1">
                      <div className="featured-icon">
                        <div className="prt-icon prt-icon_element-onlytxt prt-icon_element-color-skincolor prt-icon_element-size-md">
                          <i className="flaticon flaticon-customer-service" />
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-desc">
                          <p><a href="tel:1234567890">(208) 555-0112 89</a></p>
                          <p><a className="underline" href="mailto:info@example.com">support.mining@example.com</a></p>
                        </div>
                      </div>
                    </div>{/* featured-icon-box end*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prt-section-hili-dot style2" />
          <div className="footer-marquebox-1 ">
            <div className="footer-marquebox-wrapper">
              <div className="prt-marqueboxes-wrapper prt-marquebox-style1">
                <ul className="icon-list-items marquebox-list">
                  <li className="icon-list-item">
                    <span className="marque-text"><i className="ti-arrow-up mr-10" />Apple inc.  135.72  +0.38  +0.28%</span>
                  </li>
                  <li className="icon-list-item">
                    <span className="marque-text"><i className="ti-arrow-down mr-10" />International Busines Machines Corporation  180.67  -0.76  -0.42%</span>
                  </li>
                  <li className="icon-list-item">
                    <span className="marque-text"><i className="ti-arrow-up mr-10" />Microsoft Corporation  64.62  +0.10  +0.15%</span>
                  </li>
                  <li className="icon-list-item">
                    <span className="marque-text"><i className="ti-arrow-down mr-10" />SAP SE 92.46  -0.29  -0.31%</span>
                  </li>
                  <li className="icon-list-item">
                    <span className="marque-text"><i className="ti-arrow-up mr-10" />Apple inc.  135.72  +0.38  +0.28%</span>
                  </li>
                  <li className="icon-list-item">
                    <span className="marque-text"><i className="ti-arrow-down mr-10" />International Busines Machines Corporation  180.67  -0.76  -0.42%</span>
                  </li>
                  <li className="icon-list-item">
                    <span className="marque-text"><i className="ti-arrow-up mr-10" />Apple inc.  135.72  +0.38  +0.28%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom-footer-text copyright ">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="cpy-text">
                    <ul className="footer-nav-menu">
                      <li><a href="index.html#">Help</a></li>
                      <li><a href="index.html#">Terms &amp; Conditions</a></li>
                      <li><a href="index.html#">Privacy Policy</a></li>
                      <li><a href="index.html#">Procurement</a></li>
                    </ul>
                    <p>Copyright © 2023 <a href="index.html">minemo</a>. Designed By <a href="https://www.preyantechnosys.com/">Preyantechnosys</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*footer end*/}
        {/*back-to-top start*/}
        <a id="totop" href="index.html#top">
          <i className="icon-angle-up" />
        </a>
        {/*back-to-top end*/}
      </div>{/* page end */}
    </div>

  )
}

export default App
