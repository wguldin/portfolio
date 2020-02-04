/* global ga */

// Declutter global namespace
var folio = {
    ajax: {},
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

    self.bindClickListener = function(siteUrl, context) {
        if(context) {
            var links = folio.find('a[href^="/"], a[href^="'+siteUrl+'"]', context);
        } else {
            var links = folio.find('a[href^="/"], a[href^="'+siteUrl+'"]');
        }
 
        for (var i = 0; i < links.length; i++) {
            var link = links[i];

            link.addEventListener('click', function(e) {
                var target = e.target;

                if (folio.utils.hasClass(target, 'js-download')) {
                    return;
                }

                e.preventDefault();
                
                var linkURL;
                var currentURL = window.location.pathname.replace(/\/$/, "");

                if (folio.utils.matches(target, 'a')) {
                    linkURL = e.target.pathname;
                }
                else {
                    var parentLink = folio.utils.getClosest(target, 'a');

                    linkURL = parentLink.pathname;
                }

                if (currentURL != linkURL) {
                    // Only update contents and routing if going to a new page.
                    self.pushState(linkURL);
                    self.loadPartial(linkURL);

                    var introBox = document.getElementById('intro-box');

                    if(linkURL == '/') {
                        folio.utils.addClass(introBox, 'c-intro__box--home');
                    } else {
                        folio.utils.removeClass(introBox, 'c-intro__box--home');
                    }

                    var intro = document.getElementById('intro');

                    if(linkURL == '/about/') {
                        folio.utils.addClass(intro, 'c-intro--about');
                    } else {
                        folio.utils.removeClass(intro, 'c-intro--about');
                    }
                }
            });
        }
    };

    self.bindHistoryListener = function() {
        window.onpopstate = function(e) {
            self.loadPartial(e.state.url);
        };
    };

    self.loadPartial = function(url) {
        var sidebar = document.getElementById('sidebar');
        sidebar.innerHTML = '';

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
                var innerPageDom = pageDom.querySelectorAll('#main-content')[0].innerHTML;
                var sidebarDom = pageDom.querySelectorAll('#sidebar')[0].innerHTML;

                // Update Title
                var pageTitle = pageDom.getElementsByTagName('title')[0].textContent;
                document.title = pageTitle;

                // Update Contents
                var pageContent = document.getElementById('main-content');
                var sidebarContent = document.getElementById('sidebar');

                pageContent.innerHTML = innerPageDom;
                sidebarContent.innerHTML = sidebarDom;

                // Rebind links
                self.bindClickListener(url, pageContent);

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
        var main = document.getElementById('main-content');

        folio.utils.addClass(main, 'u-fade--out');

        setTimeout(function() {
            callback();
        }, transitionTime);
    };

    self.hideLoader = function() {
        var main = document.getElementById('main-content');

        folio.utils.removeClass(main, 'u-fade--out');
    };

    return self;
})();

folio.utils.randomIntFromInterval = function(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};

folio.find = function (selector, parent) {
    return Array.prototype.slice.call((parent ? parent : document).querySelectorAll(selector));
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
    folio.ajax.init();
})();
