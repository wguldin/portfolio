$('html').hide();

$(document).ready(function() {
    $('html').show();
    $('.subscribe-link, #signup-form, .menu-link, #menu').toggleClass('active');

    // Toggle for menu navigation.   
    $('.menu-link').click(function() {
      $('.menu-link').toggleClass('active');
      $('#menu').toggleClass('active');
      return false;
    });

    // Toggle for email dropdown.   
    $('.subscribe-link').click(function() {
      $('.subscribe-link').toggleClass('active');
      $('input.signup-email').focus();
      $('#signup-form').toggleClass('active');
      return false;
    });
    
    // Smooth scroll on anchor link
    $(function() {
      $('.nav-link[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
});

//Check for SVG support, if not avialable, replace with png file.

if (!Modernizr.svg) {
    $('img[src$=".svg"]').each(function()
    {
        $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
    });
}

// matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license //
window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);

// Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with span elements). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 //

(function( w ){

  // Enable strict mode
  "use strict";

  w.picturefill = function() {
    var ps = w.document.getElementsByTagName( "span" );

    // Loop the pictures
    for( var i = 0, il = ps.length; i < il; i++ ){
      if( ps[ i ].getAttribute( "data-picture" ) !== null ){

        var sources = ps[ i ].getElementsByTagName( "span" ),
          matches = [];

        // See if which sources match
        for( var j = 0, jl = sources.length; j < jl; j++ ){
          var media = sources[ j ].getAttribute( "data-media" );
          // if there's no media specified, OR w.matchMedia is supported 
          if( !media || ( w.matchMedia && w.matchMedia( media ).matches ) ){
            matches.push( sources[ j ] );
          }
        }

      // Find any existing img element in the picture element
      var picImg = ps[ i ].getElementsByTagName( "img" )[ 0 ];

      if( matches.length ){
        var matchedEl = matches.pop();
        if( !picImg || picImg.parentNode.nodeName === "NOSCRIPT" ){
          picImg = w.document.createElement( "img" );
          picImg.alt = ps[ i ].getAttribute( "data-alt" );
        }
        else if( matchedEl === picImg.parentNode ){
          // Skip further actions if the correct image is already in place
          continue;
        }

        picImg.src =  matchedEl.getAttribute( "data-src" );
        matchedEl.appendChild( picImg );
        picImg.removeAttribute("width");
        picImg.removeAttribute("height");
      }
      else if( picImg ){
        picImg.parentNode.removeChild( picImg );
      }
    }
    }
  };

  // Run on resize and domready (w.load as a fallback)
  if( w.addEventListener ){
    w.addEventListener( "resize", w.picturefill, false );
    w.addEventListener( "DOMContentLoaded", function(){
      w.picturefill();
      // Run once only
      w.removeEventListener( "load", w.picturefill, false );
    }, false );
    w.addEventListener( "load", w.picturefill, false );
  }
  else if( w.attachEvent ){
    w.attachEvent( "onload", w.picturefill );
  }

}( this ));


// Google Analytics: change UA-XXXXX-X to be your site's ID.

(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
e=o.createElement(i);r=o.getElementsByTagName(i)[0];
e.src='//www.google-analytics.com/analytics.js';
r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
ga('create','UA-XXXXX-X');ga('send','pageview');