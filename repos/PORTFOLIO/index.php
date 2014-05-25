<!DOCTYPE html>
<html lang="en">
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Will Guldin, Freelance Digital Designer and Consultant in Columbia, Missouri</title>
    <meta name="description" content="Will Guldin is a freelance digital designer and consultant out of Columbia, Missouri, with several years of experience. I'd love to help with your great idea.">
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!--[if !lt IE 9]><!-->
        <link rel="stylesheet" type="text/css" href="css/style.css" />
    <!--<![endif]-->

    <!--[if lt IE 9]>
            <link rel="stylesheet" type="text/css" href="css/styles-ie.css" />
            <script src="js/vendor/html5shiv.min.js"></script>
    <![endif]-->

</head>

<body>

<nav role="navigation">
    <a><img class="nav-logo" src="img/mini-logo.svg" alt="Will Guldin Design"/></a>
    <ul>
        <li><a class="intro-link" href="#recent-work">Work</a></li>
        <li><a class="intro-link" href="#contact">Contact</a></li>
        <!--<li><a class="intro-link" href="#">Blog</a></li>-->
    </ul>
</nav>

<header class="intro" role="banner">
    
    <!--<div class="nav-menu"><img alt="Menu Icon - Activate to display navigation options." src="img/icon-menu.png" /> Menu</div>-->

    <div class="intro-main">
        <div class="intro-main-svg-frame">
            <span class="intro-main-svg-icon" data-icon-name="logo">
                <img src="img/logo-initial-new.png" alt="Will Guldin Design logo">
            </span>
        </div>

        <h1><span class="intro-main-runin">Digital Designer</span> Will Guldin</h1>

        <aside>
            <p>Effective design begins with a great idea. I'd love to talk with you about yours. I work at <a href="http://www.midwayusa.com" class="intro-link">MidwayUSA</a> as a web designer, but still take on some projects in my free time. Email me at <a href="mailto:wguldin@gmail.com" class="intro-link">wguldin@gmail.com</a> if I can help you with anything, or call <a href="tel:1-501-920-7064" class="intro-link">501.920.7064.</a></p>
            <a href="#contact" class="chiclet-button nav-link">Contact me about your project</a>
        </aside>
    </div>

</header>

<div role="main" id="recent-work">

    <section class="hundred-ages">
        <h2 class="section-header">100 Ages, A Century of Voices</h2>
        <figure class="section-content">
            <div class="browser section-main-image">
                <img src="/img/100-ages-small.png" alt="100 Ages, A Century of Voices"/>
            </div>
            <figcaption>
                <p><strong class="section-text-summary">This collection of personal stories underscores the common bonds of life that we all share.</strong></p>
                <p>As the only designer for this project, I came up with an effective and simple presentation for it, while coding all parts of the website.</p>
                <span class="chiclet-button disabled">Full case study coming soon</span>            
            </figcaption>
        </figure>
    </section>

    <hr />

    <section class="jack">
        <h2 class="section-header">JACK. Magazine</h2>
        
        <div class="section-content">
            <div class="section-text">
                <p>
                    <strong class="section-text-summary">Meredith Corporation, one of the nation's largest magazine publishers, was looking for a different take on the traditional food magazine.</strong>
                </p>

                <p>To meet this challenge, we came up with JACK. Magazine, a cooking publication targeted toward young men. The content focused on recipes, cocktail mixes and articles about different restaurants or cooking techniques.</p>

                <p>At the outset of the project, I knew a bold design was a must for this publication. I lead a team of designers as we refined a look for JACK. that made a statement, but that still felt approachable for our target audience. For the prototype of the publication, we created a tablet magazine, a website and a printed cookbook.</p> 

                <p>We presented JACK. to Meredith Executives who were impressed. The project, which was done while I was attending the Missouri School of Journalism, later won first place in a national student publication contest.</p>     
            </div>
            <figure class="section-main-image">
                <div class="ipad-image"><img alt="Hot Damn Hopslam splash page from JACK Magazine, an all-digital Men's cooking magazine" src="img/jack-kratzer.jpg"/></div>
            </figure>

            <figure class="section-secondary-image">
                <img src="img/jack-composite.png"/>
                <figcaption>JACK Magazine used a blend of original illustrations, culinary stock photography and studio shots to create a distinctive editorial voice.</figcaption>
            </figure>
        </div>
    </section>
    
    <hr />

    <section class="rdes">
        <h2 class="section-header">Roy Dudley Estate Sales</h2>
        <div class="section-content">
            <div class="section-main-image browser">
                <img src="img/rdes.png" alt="Roy Dudley Estate Sales Test Website"/>
            </div>
            <div class="section-text">
                <p>
                    <strong class="section-text-summary">Roy Dudley Estate Sales needed a website that could be easily updated without going offline.</strong>
                </p>
                <p>I put a system in place to meet that goal. Soon, they’ll be able to post estate sales listings and edit existing ones while their customers browse the site. Previously, that process made their homepage inaccessible for several hours a week.</p>
                <p>Working with them, I also focused the website more on their upcoming sales. By doing away with unused features, they gained a website that's easier to maintain and better suited to their customers’ needs.</p>
            </div>
            
<!--             <blockquote>
                <span class="quote">There’s no shortage of food magazines these days, but JACK’s tight focus and specific voice give it a fresh feel. ... It’s a little aspirational, but still familiar.</span>
                <span class="quote-attribute">Judge's comments after JACK. won first place for a start-up magazine project.</span> 
            </blockquote> -->
        </div>
    </section>
     
    <hr />

    <section id="contact">
        <h2 class="section-header">What can I do for you?</h2>
        <p>If you have any questions about my work, or would like to talk about your project, just drop a line here using this form.</p>
        <p>We'll discuss if my skills and schedule are the right fit for you and go from there.</p>
        <h3>Contact Me</h3>
        <small class="input-note">All fields are required, unless marked "optional"</small>
  
        <?php
            include $_SERVER['DOCUMENT_ROOT']."/include/form.php";
        ?>
    </section>
</div>

<footer>
    <!--<nav>
        <ul>
            <li class="is-selected"><a href="/home">Home</a></li>
            <li><a href="/tangram-blog">Blog</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>-->
    <ul class="footer-contact">
        <li>&copy; Will Guldin</li>
        <li><a href="tel:1-501-920-7064">501.920.7064</a></li>
        <li><a href="mailto:wguldin@gmail.com">wguldin@gmail.com</a></li>
    </ul>
</footer>
    
    <script src="js/jquery.js"></script>
    <script src="js/plugins/snap.svg.js"></script>
    <script src="js/svgicons-config.js"></script>
    <script src="js/script.js"></script>


    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <!--<script>
        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='//www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        ga('create','UA-XXXXX-X');ga('send','pageview');
    </script>-->

</body>
</html>


