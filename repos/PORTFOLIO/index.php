<?php include_once("include/header.php"); ?>

<body>

<?php include_once("include/navigation.php"); ?>

<header class="intro" role="banner">
    <div class="intro__wrapper" itemscope itemtype="http://schema.org/Person">
        <div class="intro-main-svg-frame is-logo" itemscope itemtype="http://schema.org/Organization">
            <meta itemprop="name" content="Will Guldin Design" /> 
            <span class="intro-main-svg-icon" data-icon-name="logo">
                <img itemprop="logo" src="/img/logo-fallback.png" alt="Will Guldin Design logo">
            </span>
        </div>

        <div class="intro__header"> 
            <h2 class="intro__subheader">Digital Designer</h2>
            <h1 class="intro__main-head" itemprop="name">Will Guldin</h1>
        </div> 

        <aside class="intro__text">
            <a href="#contact" class="chiclet-button chiclet-button--primary intro__button">Contact me about your project</a>
            <p class="intro__description" itemprop="description">Effective design begins with a great idea. I'd love to talk with you about yours. I work at <span itemprop="worksFor">a Midwest-based eCommerce company</span> as a <span itemprop="jobtitle">web designer</span>, but still take on some projects in my free time. Email me at <span class="email-link">wguldin [at] gmail [dot] com</span> if I can help you with anything, or call <a href="tel:1-501-920-7064" class="link--highlight">501.920.7064.</a></p>
        </aside>

        <meta itemprop="telephone" content="501-920-7064" />
        <meta itemprop="email" content="wguldin@gmail.com" />
        <meta itemprop="url" content="http://willguldin.com" />
    </div>
</header>

<main role="main" id="main" class="has-loader">
  <div class="loader"></div> 
    <section class="portfolio portfolio--case-study checkout" itemscope itemtype="http://schema.org/WebSite">
      <meta itemprop="" content=""/>

      <h2 class="section-header">A Faster, Smarter Checkout</h2>
      <figure class="portfolio--case-study--description">
          <img itemprop="image" src="/img/checkout-mobile-screenshot.jpg" alt="Screenshot from checkout redesign of shipping address selection page">
          <figcaption itemprop="description">
              <p><strong class="section-text-summary">After joining a growing eCommerce company, I helped create a redesigned checkout process that was quicker and simpler for our customers.</strong></p>
              <p>We came up with a design that adapts to a Customer's specific order. This has helped our customers focus on placing an order, instead of being distracted by information they don't need.</p>
              <a href="/checkout-redesign" class="chiclet-button">Read the case study</a>            
          </figcaption>
      </figure>
    </section>

    <section class="jack portfolio" itemscope itemtype="http://schema.org/Periodical">
        <h2 class="section-header" itemprop="name">JACK. Magazine</h2>
        
        <meta itemprop="issueNumber" content="1" />
        <meta itemprop="datePublished" content="2013-07-04" />   
        <meta itemprop="author" content="Will Guldin, Jamie Hausman, Kaylen Ralph, Anna Bolka, Rikki Byrd, Michael Pottebaum"/>
        <meta itemprop="editor" content="John Fennell, Erica Mendez Babcock" />
        <meta itemprop="award" content="1st place award from Association for Education in Journalism and Mass Communication in Start-Up Magazine Project Category"/>
        <meta itemprop="keywords" content="JACK. Magazine, Cooking, Drinking, Entertaining, Recipes, Restaurants, Meredith Corporation, University of Missouri, Publication Design, Mag+, iPad app"/>
        <meta itemprop="genre" content="Cooking, Drinking, Entertaining"/>
        <meta itemprop="audience" content="Young professional men"/>

        <meta itemprop="sourceOrganization" content="Meredith Corporation"/>
        <meta itemprop="publisher" content="Meredith Corporation"/>
        <meta itemprop="publishingPrinciples" content="http://www.meredith.com/meredith_corporate/mission_statement.html"/>

        <div class="section-content">
            <div class="device__frame jack-image lazyload-container">
              <div class="loader-overlay"><div class="loader loader--image-preloader"></div></div>  
              <picture>
                  <!--[if IE 9]><video style="display: none;"><![endif]-->
                      <source media="(min-width: 90em)" data-srcset="/img/jack-large.jpg, /img/jack-extralarge.jpg 2x">
                      <source media="(min-width: 60em)" data-srcset="/img/jack-medium.jpg, /img/jack-large.jpg 2x">
                      <source data-srcset="/img/jack-small.jpg, /img/jack-medium.jpg 2x">
                  <!--[if IE 9]></video><![endif]-->
                    <img class="device__image lazyload" itemprop="image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="  alt="Brewmaster splash page from JACK Magazine, an all-digital Men's cooking magazine">
              </picture>
            </div>        
            <div class="section-text">
                <p itemprop="description">
                    <strong class="section-text-summary">Meredith Corporation, one of the nation's largest magazine publishers, was looking for a different take on the traditional food magazine.</strong>
                </p>
                <p>To meet this challenge, we came up with JACK. Magazine, a cooking publication targeted toward young men. The content focused on recipes, cocktail mixes and articles about different restaurants or cooking techniques.</p>
                <p>At the outset of the project, I knew a bold design was a must for this publication. I lead a team of designers as we refined a look for JACK. that made a statement, but that still felt approachable for our target audience. For the prototype of the publication, we created a tablet magazine, a website and a printed cookbook.</p> 
                <p>We presented JACK. to Meredith Executives, who were impressed. The project, which was done while I was attending the Missouri School of Journalism, later won first place in a national student publication contest.</p>     
            </div>

            <figure class="section-secondary-image">
                <meta itemprop="thumbnailUrl" content="http://willguldin.com/img/jack-composite.jpg"/>
      
                <div class="lazyload-container">
                  <div class="loader-overlay"><div class="loader loader--image-preloader"></div></div>
                  <img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="/img/jack-composite.jpg" alt="Several pages from JACK. Magazine"/>
                </div>
                <figcaption class="caption">JACK Magazine used a blend of original illustrations, culinary stock photography and studio shots to create a distinctive editorial voice.</figcaption>
            </figure>
        </div>
    </section>

    <section class="portfolio portfolio--case-study insert ssnd" itemscope itemtype="http://schema.org/WebSite">
      <meta itemprop="" content=""/>

      <h2 class="insert-header">Helping a contest live up to its reputation</h3>
      <figure class="insert-description"> 
          <div class="section-main-image">
            <a href="http://ssnd.missouri.edu">           
              <img itemprop="image" src="/img/ssnd_logo.png" alt="Student Society for News Design logo">
            </a> 
          </div>
          <figcaption class="insert-description" itemprop="description">
              <p>The annual Student Society for News Design contest draws in hundreds of entries. This work represents the best student design in the country.</p>
              <p>SSND's website didn't meet this standard. So, I redesigned it to make it easier to enter the contest and gave it a more modern aesthetic. Setting up a CMS for the organization and migrating their blog from a seperate website helped to better focus their online presence while making it easier to maintain.</p>
          </figcaption>
      </figure>
    </section>

    <section class="portfolio portfolio--case-study ages" itemscope itemtype="http://schema.org/WebSite">
      <meta itemprop="url" content="http://media.columbiamissourian.com/100ages/#/"/>
      <meta itemprop="datePublished" content="2013-07-04"/>   
      <meta itemprop="author" content="Will Guldin, Katie Alaimo, Alyssa Goodman"/>
      <meta itemprop="editor" content="Laura Johnston"/>
      <meta itemprop="award" content="2013 Award of Excellence from the Society for News Design"/>
      <meta itemprop="isFamilyFriendly" content="true"/>
      <meta itemprop="keywords" content="100 Ages, Century of Voices, photojournalism, Columbia Missourian, Boone County, Columbia, Angular JS"/>
      <meta itemprop="genre" content="Journalism"/>

      <meta itemprop="sourceOrganization" content="Columbia Missourian"/>
      <meta itemprop="publisher" content="Columbia Missourian"/>
      <meta itemprop="publishingPrinciples" content="http://www.columbiamissourian.com/about/"/>

      <h2 class="section-header" itemprop="name">100 Ages, A Century of Voices</h2>
      <figure class="section-content portfolio--case-study--description">
          <div class="portfolio-image section-main-image lazyload-container">
              <div class="loader-overlay"><div class="loader loader--image-preloader"></div></div>
              <picture> 
                  <!--[if IE 9]><video style="display: none;"><![endif]-->
                      <source media="(min-width: 90em)" data-srcset="/img/ages-large.jpg, /img/ages-extralarge.jpg 2x">
                      <source media="(min-width: 70em)" data-srcset="/img/ages-medium.jpg, /img/ages-large.jpg 2x">
                      <source media="(min-width: 52em)" data-srcset="/img/ages-small.jpg, /img/ages-medium.jpg 2x">
                      <source data-srcset="/img/ages-medium.jpg, /img/ages-large.jpg 2x">
                  <!--[if IE 9]></video><![endif]-->
                  
                  <img class="lazyload" itemprop="image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="100 Ages, A Century of Voices">
              </picture>
          </div>
          <figcaption itemprop="description">
              <p><strong class="section-text-summary">This collection of personal stories underscores the common bonds of life that we all share.</strong></p>
              <p>As the only designer for this project, I came up with an effective and simple presentation for it, while coding all parts of the website.</p>
              <a href="/one-hundred-ages" data-pjax class="chiclet-button">Read the case study</a>            
          </figcaption>
      </figure>
    </section>
    
    <section class="portfolio portfolio--case-study rdes" itemscope itemtype="http://schema.org/WebSite">
        <meta itemprop="url" content="http://rdes.willguldin.com"/>
        <meta itemprop="author" content="Will Guldin"/>
        <meta itemprop="isFamilyFriendly" content="true"/>
        <meta itemprop="keywords" content="Roy Dudley Estate Sales, Little Rock, Responsive, Perch CMS"/>
        <meta itemprop="genre" content="Estate Sales"/>

        <meta itemprop="sourceOrganization" content="Roy Dudley Estate Sales"/>
        <meta itemprop="publisher" content="Roy Dudley Estate Sales"/>
        <meta itemprop="publishingPrinciples" content="http://www.roydudleyestatesales.com/rdsalesstaff.html"/>

        <h2 class="section-header" itemprop="name">Roy Dudley Estate Sales</h2>
        <figure class="section-content portfolio--case-study--description">
            <div class="portfolio-image section-main-image lazyload-container">
                <div class="loader-overlay"><div class="loader loader--image-preloader"></div></div>
                <picture>
                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                        <source media="(min-width: 90em)" data-srcset="/img/rdes-large.jpg,  /img/rdes-extralarge.jpg 2x">
                        <source data-srcset="/img/rdes-medium.jpg, /img/rdes-large.jpg 2x">
                    <!--[if IE 9]></video><![endif]-->

                    <img class="lazyload" itemprop="image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="  alt="Roy Dudley Estate Sales Test Website">
                </picture>
            </div>
            <figcaption itemprop="description">
                <p><strong class="section-text-summary">Roy Dudley Estate Sales needed a website that could highlight upcoming sales and be easy to edit.</strong></p>
                <p>Working with them, I came up with a design that puts focus on the company's sales.</p>
                <p>I also made sure the site could be edited without any downtime, something that wasn't possible before.</p>
                <a href="http://rdes.willguldin.com/" class="chiclet-button">Visit the test site</a>            
            </figcaption>   
        </figure>
    </section>

    <section id="contact" class="contact">
        <h2 class="section-header">How can I help you?</h2>
        <div class="section-content">
            <p>If you have any questions about my work, or would like to talk about your project, just drop a line here using this form. You can also email me at <span class="email-link">wguldin [at] gmail [dot] com</span>.</p>
            <p>We'll discuss if my skills and schedule are the right fit for you and go from there.</p>
            <div class="contact-form__container has-loader">
                <?php include("include/form.php"); ?>
            </div>
            <div class="about">
              <div class="lazyload-container about__mug">
                <div class="loader-overlay"><div class="loader loader--image-preloader"></div></div>
                <picture>
                    <!--[if IE 9]><video style="display: none;"><![endif]-->
                        <source media="(min-width: 80em)" data-srcset="/img/portrait-large.jpg, /img/portrait-extralarge.jpg 2x">
                        <source data-srcset="/img/portrait-medium.jpg, /img/portrait-large.jpg 2x">
                    <!--[if IE 9]></video><![endif]-->
                    
                    <img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="  alt="Portrait of Will Guldin, Digital Designer">
                </picture>
              </div>

              <h3>About Me</h3>
              <div class="description">
                  <p>My interest with visual design started in high school, when I practiced film art photography. I studied journalism in college, and eventually discovered web design was the perfect mixture of my technical and creative skills.</p>
                  <p>In my spare time, you might find me outside biking with my wife, Megan, or in the kitchen.</p>
              </div>
           </div>
        </div>
    </section>
</main>

<?php include_once("include/footer.php"); ?>