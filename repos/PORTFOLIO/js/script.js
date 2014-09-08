(function($){

$('html').removeClass('no-js').addClass('js');

// Cutting the mustard test, courtesy of BBC News
if('querySelector' in document
    && 'localStorage' in window
    && 'addEventListener' in window) {
    
    // ============================================================
    // Site JS 
    // ============================================================

    // Defeat the spam bots with JS!
    function createEmailLink () {
        if ($('.email-link').length == false ) {
            return;
        } 

        $('.email-link').replaceWith('<a class="link--highlight" href="mailto:wguldin@gmail.com">wguldin@gmail.com</a>');
    }

    createEmailLink();

    function formDropdown (value) {
        var input = $('#contact-method input');
        var inputText = $('#contact-method span');

        switch (value) {
            
            case 'email' :
                inputText.fadeOut(150, function () {
                    inputText.text("Email Address").fadeIn(300);
                    input.prop("type", "email");
                });
                break;
            
            case 'phone' :
                inputText.fadeOut(150, function () {
                    inputText.text("Phone Number").fadeIn(300);
                    input.prop("type", "tel");
                });
                break;
            
            case 'default' :
                break;  

        }
    }

    $('input[type="radio"][name="contact"]').on('click', function () { 
        formDropdown($(this).val());
    });

    function scrollToLink() {
        $('a[href*=#]:not([href=#])').on('click', function(e) {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              
              if (target.length) {

                e.preventDefault();
              
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 250);

              }    
            }
      });
    }

    scrollToLink();

    function asyncSubmit() {
        var $form = $('#contact-form');

        $('body').on('submit', $form, function (e) {
            e.preventDefault();

            // Eliminate old errors.
            $('[data-validation="error"]').remove();

            $.ajax({
                url      : '/include/form.php',
                type     : 'POST',
                dataType : 'json',  // <-- Parse the response as JSON object
                data     : $form.serialize() + '&ajax=true',

                success: function(data) {

                    if (data == 'success') {
                        $form.parent().html(data);
                    } else {
                        $.each( data, function( key, val ) {    
                            $('[name="' + key + '"]').addClass('error').after('<small class="error" data-validation="error">'+ val +'</small>');
                        });
                    }
                },
                error: function(data) {
                    $form.parent().html('<h2 class="main-subheader">Houston, we have a problem</h2><p>It looks like there was an issue with our contact form. We\'re sorry about that!</p><p>Go ahead and <a class="intro-link" href="mailto:wguldin@gmail.com">just email me directly</a>, if you don\'t mind.');
                    throw new Error('Error hit in form response');
                },
            });
        });
    }

    asyncSubmit();

    // ============================================================
    // Case Study Javascript - Header Animations
    // ============================================================

    function showAgesHeader(number) {
        
        if (number.length == false) {
            return;
        }

        number.addClass('is-active');
        $('#headline-text').addClass('is-active');
        $('#headline-subhead').addClass('is-active');

        var numberValue = 1;

        setTimeout( function(){         
            $('.age').addClass('is-active');     
            incrementNumber(numberValue, number);
        }, 260);
    }

    function incrementNumber(numberValue, number) {
        if(numberValue == 100) {
            clearTimeout(numberAnimation);
            return;
        }
        
        numberValue++
        
        if (numberValue > number.text()) {
            number.text(numberValue);
        }

        var numberAnimation = setTimeout(function() {
            incrementNumber(numberValue, number);
        }, 10);
    }

    showAgesHeader($('#headlineNumber'));

    // ============================================================
    // SVG Icon
    // ============================================================

    if ($('.intro-main-svg-icon').length == false) {
        return;
    } else {
        // Remove fallback if javascript fires.
        $('.intro-main-svg-icon').html('');
        
        var svgIconConfig = {
            logo : {
                url : '/img/logo-initial-new.svg',
                animation : [
                    { 
                        el : 'path:nth-child(1)', 
                        animProperties : { 
                            from : { val : '{"path" : "M 129.179,159.033 135.782,161.373 202.062,103.825 195.745,101.474 z"}' }, 
                            to : { val : '{"path" : "M 164.521,218.67 171.524,218.562 213.584,141.574 206.848,141.572 z"}' }
                        }
                    },
                    {
                        el : 'path:nth-child(2)', 
                        animProperties : { 
                            from : { val : '{"path" : "M 12.902,35.723 124.312,75.665 120.042,79.52 8.469,39.513 z"}' }, 
                            to : { val : '{"path" : "M 149.989,41.557 268.275,41.559 265.561,46.624 147.098,46.617 z"}' }
                        }
                    },
                    {
                        el : 'path:nth-child(3)', 
                        animProperties : { 
                            from : { val : '{"path" : "M 96.958,6.092 157.372,50.724 152.003,53.228 91.249,8.571 z"}' }, 
                            to : { val : '{"path" : "M 141.354,136.238 216.424,136.379 213.584,141.574 138.228,141.617 z"}' }
                        }
                    },
                    {
                        el : 'path:nth-child(4)', 
                        animProperties : { 
                            from : { val : '{"path" : "M 100.132,143.244 93.692,143.932 83.977,167.761 90.437,167.073 z"}' }, 
                            to : { val : '{"path" : "M 144.448,141.479 138.3,141.494 125.192,164.111 131.684,164.111 z"}' }
                        }
                    },
                    {
                        el : 'path:nth-child(5)', 
                        animProperties : { 
                            from : { val : '{"path" : "M 177.979,16.337 178.111,22.49 200.989,35.167 200.865,28.675 z"}' }, 
                            to : { val : '{"path" : "M 265.729,46.328 259.256,46.328 247.078,68.983 253.568,68.983 z"}' }
                        }
                    },
                    {
                        el : 'path:nth-child(6)', 
                        animProperties : { 
                            from : { val : '{"path" : "M 37.966,216.927 153.499,188.807 152.064,194.2 36.127,222.589 z"}' }, 
                            to : { val : '{"path" : "M 52.976,217.781 171.813,217.984 169.14,222.875 49.841,222.84 z"}' }
                        }
                    },
                    {
                        el : 'path:nth-child(7)', 
                        animProperties : { 
                            from : { val : '{"path" : "M 225.917,263.589 219.494,265.52 260.037,73.452 266.464,71.471 z"}' }, 
                            to : { val : '{"path" : "M 147.351,46.184 154.054,46.202 59.511,218.111 52.79,218.135 z"}' }
                        }
                    },
                    {
                        el : 'path:nth-child(8)', 
                        animProperties : { 
                            from : { val : '{"path" : "M 82.474,42.831 101.414,34.803 103.937,40.789 84.984,48.783 z"}' }, 
                            to : { val : '{"path" : "M 247.115,89.542 247.078,68.983 253.568,68.983 253.57,89.542 z"}' }
                        }
                    },
                    {
                        el : 'path:nth-child(9)', 
                        animProperties : { 
                            from : { val : '{"path" : "M 47.563,252.055 161.824,284.895 167.462,265.452 53.137,232.428 z"}' }, 
                            to : { val : '{"path" : "M 50.202,222.84 50.288,243.227 169.109,243.107 169.14,222.875 z"}' }
                        }
                    },
                    {
                        el : 'path:nth-child(10)', 
                        animProperties : { 
                            from : { val : '{"path" : "M 7.356,90.43 37.726,179.903 60.88,183.733 26.969,83.834 z"}' }, 
                            to : { val : '{"path" : "M 259.4,46.425 248.367,67.122 153.933,67.243 153.963,46.563 z"}' }
                        }
                    },
                    {
                        el : 'rect:nth-child(11)',
                        animProperties : {
                            from : { val : '{"transform" : "matrix(0.958 0.2868 -0.2868 0.958 49.3218 -53.3131)", "x" : "196.334", "y" : "138.44"}' },
                            to : { val : '{"transform" : "matrix(-0.0036 -1 1 -0.0036 -45.3317 303.6028)", "x" : "118.308", "y" : "171.144"}' }
                        }
                    },
                    {
                        el : 'path:nth-child(12)', 
                        animProperties : { 
                            from : { val : '{"path" : "M 283.777,266.438 296.586,282.118 278.103,185.26 265.5,169.516 z"}' }, 
                            to : { val : '{"path" : "M 216.424,136.379 216.186,156.535 169.109,243.107 169.14,222.875 z"}' }
                        }
                    },
                    {
                        el : 'path:nth-child(13)', 
                        animProperties : { 
                            from : { val : '{"path" : "M 173.29,164.655 192.508,171.877 209.182,191.604 189.673,184.41 z"}' }, 
                            to : { val : '{"path" : "M 144.379,141.584 144.424,162.104 131.876,184.664 131.705,163.885 z"}' }
                        }
                    },
                    {
                        el : 'path:nth-child(14)', 
                        animProperties : { 
                            from : { val : '{"path" : "M 192.173,259.316 207.039,245.073 171.061,207.59 148.518,213.828 z"}' }, 
                            to : { val : '{"path" : "M 143.989,141.543 143.975,162.117 195.9,162.107 207,141.537 z"}' }
                        }
                    },
                    {
                        el : 'path:nth-child(15)', 
                        animProperties : { 
                            from : { val : '{"path" : "M 305.869,8.381 131.279,97.754 140.435,104.019 293.987,25.842 z"}' }, 
                            to : { val : '{"path" : "M 153.987,46.136 153.933,67.243 70.597,217.947 59.511,217.889 z"}' }
                        }
                    },
                    {
                        el : 'path:nth-child(16)', 
                        animProperties : { 
                            from : { val : '{"path" : "M 61.779,108.571 82.467,101.721 111.885,107.989 92.208,114.512 z"}' }, 
                            to : { val : '{"path" : "M 268.219,41.651 268.467,63.43 253.57,89.542 253.33,68.827 z"}' }
                        }  
                    },
                ]
            }
        };

        // Taken from Snap SVG codrops tutorial - http://tympanus.net/codrops/2013/11/05/animated-svg-icons-with-snap-svg/

        ;( function( window ) {
            
            'use strict';

            function extend( a, b ) {
                for( var key in b ) { 
                    if( b.hasOwnProperty( key ) ) {
                        a[key] = b[key];
                    }
                }
                return a;
            }

            // from http://stackoverflow.com/a/11381730/989439
            function mobilecheck() {
                var check = false;
                (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
                return check;
            }

            // http://snipplr.com/view.php?codeview&id=5259
            function isMouseLeaveOrEnter( e, handler ) { 
                if (e.type != 'mouseout' && e.type != 'mouseover') return false; 
                var reltg = e.relatedTarget ? e.relatedTarget : 
                e.type == 'mouseout' ? e.toElement : e.fromElement; 
                while (reltg && reltg != handler) reltg = reltg.parentNode; 
                return (reltg != handler); 
            }

            /*** svgIcon ***/

            function svgIcon( el, config, options ) {
                this.el = el;
                this.options = extend( {}, this.options );
                extend( this.options, options );
                
                this.svg = Snap();
                this.svg.attr( 'viewBox', '0 0 312.666 291.333' );
                this.el.appendChild( this.svg.node );
               
                // state
                this.toggled = false;
                
                // click event (if mobile use touchstart)
                this.clickevent = mobilecheck() ? 'touchstart' : 'click';
                
                // icons configuration
                this.config = config[ this.el.getAttribute( 'data-icon-name' ) ];
                if( !this.config ) return;
                var self = this;
                
                // load external svg
                Snap.load( this.config.url, function (f) {
                    var g = f.select( 'g' );
                    self.svg.append( g );
                    self.options.onLoad();
                    self._initEvents();

                    // Toggle the animation on page load.
                    setTimeout(function(){
                        self.toggle(true);
                    }, 200);
                    setTimeout(function(){
                        self.toggle(true);
                    }, 1200);
                });
            }

            svgIcon.prototype.options = {
                speed : 400,
                easing : mina.linear,
                evtoggle : 'mouseover',
                onLoad : function() { return false; },
                onToggle : function() { return false; }
            };

            svgIcon.prototype._initEvents = function() {
                var self = this, toggleFn =  function( ev ) {
                        if( ( ( ev.type.toLowerCase() === 'mouseover' || ev.type.toLowerCase() === 'mouseout' ) && isMouseLeaveOrEnter( ev, this ) ) || ev.type.toLowerCase() === self.clickevent ) {
                            self.toggle(true);
                            self.options.onToggle();    
                        }
                    };

                if( this.options.evtoggle === 'mouseover' ) {
                    this.el.addEventListener( 'mouseover', toggleFn );
                    this.el.addEventListener( 'mouseout', toggleFn );
                }
                else {
                    this.el.addEventListener( this.clickevent, toggleFn );
                }
            };

            svgIcon.prototype.toggle = function( motion ) {
                if( !this.config.animation ) return;
                var self = this;
                for( var i = 0, len = this.config.animation.length; i < len; ++i ) {
                    var a = this.config.animation[ i ],
                        el = this.svg.select( a.el ),
                        animProp = this.toggled ? a.animProperties.from : a.animProperties.to,
                        val = animProp.val, 
                        timeout = motion && animProp.delayFactor ? animProp.delayFactor : 0;
                    
                    if( animProp.before ) {
                        el.attr( JSON.parse( animProp.before ) );
                    }

                    if( motion ) {
                        setTimeout(function( el, val, animProp ) { 
                            return function() { el.animate( JSON.parse( val ), self.options.speed, self.options.easing, function() {
                                if( animProp.after ) {
                                    this.attr( JSON.parse( animProp.after ) );
                                }
                                if( animProp.animAfter ) {
                                    this.animate( JSON.parse( animProp.animAfter ), self.options.speed, self.options.easing );
                                }
                            } ); }; 
                        }( el, val, animProp ), timeout * self.options.speed );
                    }
                    else {
                        el.attr( JSON.parse( val ) );
                    }
                        
                }
                this.toggled = !this.toggled;
            };

            // add to global namespace
            window.svgIcon = svgIcon;

        })( window );

        (function() {
            new svgIcon( document.querySelector( '.intro-main-svg-icon' ), svgIconConfig, { easing : mina.easeinout } );
        })();
    }
}

})(jQuery);