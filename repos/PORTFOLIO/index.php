<?php
    include_once($_SERVER['DOCUMENT_ROOT']."/include/header.php");
?>

<body>

<nav role="navigation">
    <a href="/"><img class="nav-logo" src="/img/mini-logo.svg" alt="Will Guldin Design"/></a>
    <ul>
        <li><a class="link--highlight" href="#recent-work">Work</a></li>
        <li><a class="link--highlight" href="#contact">Contact</a></li>
        <!--<li><a class="intro-link" href="#">Blog</a></li>-->
    </ul>
</nav>

<header class="intro" role="banner">
    
    <div class="intro-main">
        <div class="intro-main-svg-frame">
            <span class="intro-main-svg-icon" data-icon-name="logo">
                <img src="/img/logo-fallback.png" alt="Will Guldin Design logo">
            </span>
        </div>

        <h1><span class="intro-main-runin">Digital Designer</span> Will Guldin</h1>

        <aside>
            <p>Effective design begins with a great idea. I'd love to talk with you about yours. I work at <a href="http://www.midwayusa.com" class="link--highlight">MidwayUSA</a> as a web designer, but still take on some projects in my free time. Email me at <span class="email-link">wguldin [at] gmail [dot] com</span> if I can help you with anything, or call <a href="tel:1-501-920-7064" class="link--highlight">501.920.7064.</a></p>
            <a href="#contact" class="chiclet-button chiclet-button--primary">Contact me about your project</a>
        </aside>
    </div>

</header>

<main role="main" id="recent-work">

    <section class="portfolio portfolio--case-study ages">
        <h2 class="section-header">100 Ages, A Century of Voices</h2>
        <figure class="section-content">
            <div class="browser section-main-image">
                <img src="/img/100-ages-small.jpg" alt="100 Ages, A Century of Voices"/>
            </div>
            <figcaption>
                <p><strong class="section-text-summary">This collection of personal stories underscores the common bonds of life that we all share.</strong></p>
                <p>As the only designer for this project, I came up with an effective and simple presentation for it, while coding all parts of the website.</p>
                <a href="/" class="chiclet-button disabled">Full case study coming soon</a>            
            </figcaption>
        </figure>
    </section>

    <section class="jack portfolio">
        <h2 class="section-header">JACK. Magazine</h2>
        
        <div class="section-content">
            <div class="device__frame jack-image">
                <img src="/img/jack-kratzer.jpg" class="device__image device__image--ipad" alt="Brewmaster splash page from JACK Magazine, an all-digital Men's cooking magazine" />
            </div>        
            <div class="section-text">
                <p>
                    <strong class="section-text-summary">Meredith Corporation, one of the nation's largest magazine publishers, was looking for a different take on the traditional food magazine.</strong>
                </p>

                <p>To meet this challenge, we came up with JACK. Magazine, a cooking publication targeted toward young men. The content focused on recipes, cocktail mixes and articles about different restaurants or cooking techniques.</p>

                <p>At the outset of the project, I knew a bold design was a must for this publication. I lead a team of designers as we refined a look for JACK. that made a statement, but that still felt approachable for our target audience. For the prototype of the publication, we created a tablet magazine, a website and a printed cookbook.</p> 

                <p>We presented JACK. to Meredith Executives, who were impressed. The project, which was done while I was attending the Missouri School of Journalism, later won first place in a national student publication contest.</p>     
            </div>
            <figure class="section-secondary-image">
                <img src="/img/jack-composite.jpg"/>
                <figcaption>JACK Magazine used a blend of original illustrations, culinary stock photography and studio shots to create a distinctive editorial voice.</figcaption>
            </figure>
        </div>
    </section>
    
    <section class="portfolio portfolio--case-study rdes">
        <h2 class="section-header">Roy Dudley Estate Sales</h2>
        <figure class="section-content">
            <div class="browser section-main-image">
                <img src="/img/rdes.jpg" alt="Roy Dudley Estate Sales Test Website"/>
            </div>
            <figcaption>
                <p><strong class="section-text-summary">Roy Dudley Estate Sales needed a website that could be easily updated without going offline.</strong></p>
                <p>I put a system in place to meet that goal. Soon, they’ll be able to post estate sales listings and edit existing ones while their customers browse the site. Previously, that process made their homepage inaccessible for several hours a week.</p>
                <p>Working with them, I also focused the website more on their upcoming sales. By doing away with unused features, they gained a website that's easier to maintain and better suited to their customers’ needs.</p>    
            </figcaption>
        </figure>
    </section>

    <section id="contact" class="contact">
        <h2 class="section-header">How can I help you?</h2>
        <div class="section-content">
            <p>If you have any questions about my work, or would like to talk about your project, just drop a line here using this form. You can also email me at <span class="email-link">wguldin [at] gmail [dot] com</span>.</p>
            <p>We'll discuss if my skills and schedule are the right fit for you and go from there.</p>
            <div class="contact-form__container">
                <h3>Contact Me</h3>
                <small class="input-note">All fields are required, unless marked "optional"</small>
                <?php
                    include($_SERVER['DOCUMENT_ROOT']."/include/form.php");
                ?>
            </div>
            <div class="about">
                <img class="about__mug" src="/img/portrait-optimized.jpg" alt="Portrait of Will Guldin, Digital Designer"/>
                <h3>About Me</h3>
                <p>My interest with visual design started in high school, when I practiced film art photography. I studied journalism in college, and eventually discovered web design was the perfect mixture of my technical and creative skills.</p>
                <p>In my spare time, you might find me outside biking with my fiance, Megan, or in the kitchen.</p>
            </div>
        </div>
    </section>
</main>

<?php
    include_once($_SERVER['DOCUMENT_ROOT']."/include/footer.php");
?>


