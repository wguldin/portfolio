/* global ga */

// Declutter global namespace
var folio = {
    ajax: {},
    graphic: {},
    utils: {}
};

folio.ajax = (function() {
    var self = {};

    self.init = function() {
        var siteUrl = window.location.pathname;

        self.pushState(siteUrl); // Init history tracking.
        self.bindClickListener(siteUrl);
        self.bindHistoryListener();
    };

    self.pushState = function(pageURL) {
        history.pushState({url: pageURL}, '', pageURL); // Init history tracking
    };

    self.bindClickListener = function(siteUrl) {
        var links = document.querySelectorAll('a[href^="/"], a[href^="'+siteUrl+'"]');

        for (var i = 0; i < links.length; i++) {
            var link = links[i];

            link.addEventListener('click', function(e) {
                e.preventDefault();

                var target = e.target;
                var linkURL;

                if (folio.utils.matches(target, 'a')) {
                    linkURL = e.target.pathname;
                }
                else {
                    var parentLink = folio.utils.getClosest(target, 'a');

                    linkURL = parentLink.pathname;
                }

                self.pushState(linkURL);
                self.loadPartial(linkURL);
            });
        }
    };

    self.bindHistoryListener = function() {
        window.onpopstate = function(e) {
            self.loadPartial(e.state.url);
        };
    };

    self.loadPartial = function(url) {
        self.showLoader(function() {
            self.loadPartialAjaxRequest(url);
        });
    };

    self.loadPartialAjaxRequest = function(url) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function(data) {
            if (request.status >= 200 && request.status < 400) {
                var tempEl = document.createElement('html');

                // Parse the response as html
                tempEl.innerHTML = data.target.response;

                var pageDom = tempEl;

                // Get the inner contents
                var innerPageDom = pageDom.querySelectorAll('#main')[0].innerHTML;

                // Update Title
                var pageTitle = pageDom.getElementsByTagName('title')[0].textContent;
                document.title = pageTitle;

                // Update Contents
                var pageContent = document.getElementById('main');
                pageContent.innerHTML = innerPageDom;

                // Rebind links
                self.bindClickListener();

                // Load at top of page
                document.body.scrollTop = document.documentElement.scrollTop = 0;

                self.hideLoader();

                ga('send', 'pageview', window.location.pathname);
            } else {
                // We reached our target server, but it returned an error
                console.warn('error');
            }
        };

        request.onerror = function() {
            // There was a connection error of some sort
            console.warn('error');
        };

        request.send();
    };

    self.showLoader = function(callback) {
        var transitionTime = 100; // transitionend event caused a few bugs, using timeout instead.
        var main = document.getElementById('main');

        folio.utils.addClass(main, 'u-fade--out');

        setTimeout(function() {
            callback();
        }, transitionTime);
    };

    self.hideLoader = function() {
        var main = document.getElementById('main');

        folio.utils.removeClass(main, 'u-fade--out');
    };

    return self;
})();

folio.graphic = (function() {
    var self = {};

    self.svg = document.getElementById('illustration');

    self.init = function() {
        if(self.svg) {
            var svgDimensions = self.svg.getBoundingClientRect();

            self.svgWidth  = svgDimensions.width;
            self.svgHeight = svgDimensions.height;

            self.createGraphic();
        }
    };

    self.lineCount = 48;

    self.createGraphic = function() {
        var graphic = SVG('#illustration');

        for (var i = 0; i < self.lineCount; i++) {
            self.createLine(graphic);
        }
    };

    self.createLine = function(graphic) {
        var coords = self.setLineCoordinates();

        // Favor higher opacity values, so most lines show up.
        var weightedOpacity = Math.pow(Math.random(), .25) - .1;

        // Set animation speed relative to distance.
        var distance = self.getDistance(coords);
        var speed = distance/2;

        var line = graphic.line(coords["x1"], coords["y1"], coords["x1"], coords["y1"]);
        
        line.animate(500, 250, 'now').plot([[coords["x1"], coords["y1"]], [coords["x2"], coords["y2"]]]);

        line.attr({'style': 'opacity: {0}'.format(weightedOpacity)});
    };

    self.setLineCoordinates = function() {
        var startSide = self.selectSide();
        var startPoint = self.selectPoint(startSide);

        var finalSide = self.selectSide(startSide);
        var finalPoint = self.selectPoint(finalSide);

        return {
            'x1': startPoint['x'],
            'y1': startPoint['y'],
            'x2': finalPoint['x'],
            'y2': finalPoint['y']
        };
    };

    self.getDistance = function(coords) {
        var a = coords['x1'] - coords['x2'];
        var b = coords['y1'] - coords['y2'];

        var c = Math.sqrt( a*a + b*b );

        return c;
    };

    self.selectPoint = function(side) {
        var point = {'x': null, 'y': null};

        switch(side) {
            case 't':
                point['x'] = folio.utils.randomIntFromInterval(0, self.svgWidth);
                point['y'] = self.svgHeight;
                break;

            case 'b':
                point['x'] = folio.utils.randomIntFromInterval(0, self.svgWidth);
                point['y'] = 0;
                break;

            case 'l':
                point['x'] = 0;
                point['y'] = folio.utils.randomIntFromInterval(0, self.svgHeight);
                break;

            case 'r':
                point['x'] = self.svgWidth;
                point['y'] = folio.utils.randomIntFromInterval(0, self.svgHeight);
                break;
        }

        return point;
    };

    self.selectSide = function (existingSide) {
        var sides = ['t', 'b', 'l', 'r'];

        if(existingSide){
            var i = sides.indexOf(existingSide);

            if(i != -1) {
                sides.splice(i, 1);
            }
        }

        return sides[Math.floor(Math.random()*sides.length)];
    };

    return self;
})();

folio.utils.randomIntFromInterval = function(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};

// Taken from Jake Trent (http://jaketrent.com/post/addremove-classes-raw-javascript/)
folio.utils.hasClass = function(el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    }
    else {
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
};

folio.utils.addClass = function(el, className) {
    if (el.classList) {
        el.classList.add(className);
    }
    else if (!folio.utils.hasClass(el, className)) {
        el.className += ' ' + className;
    }
};

folio.utils.removeClass = function(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    }
    else if (folio.utils.hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
};

folio.utils.matches = function(el, selector) {
    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
};

folio.utils.getClosest = function (el, selector) {
    var elem = el;

    while (elem && elem.nodeType === 1) {
        if (folio.utils.matches(elem, selector)) {
            return elem;
        }

        elem = elem.parentNode;
    }

    return null;
};

/*
Function: format
Give all Strings a format method. The kind where format strings are like:
    "Here is the first arg: {0}, and here is the second: {1}."
    Where {0} and {1} will be replaced by the first and second arguments
    that are passed to the format function.
*/
String.prototype.format = function() {
    var string = this;

    for (var i = 0; i < arguments.length; i++) {
        var text = arguments[i];

        string = string.replace(new RegExp('\\{'+i+'\\}', 'gm'), text);
    }

    return string;
};

(function() {
    folio.graphic.init();
    folio.ajax.init();
})();
