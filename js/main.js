var headerGraphic = (function() {
    var self = {};

    self.svg = document.getElementById('header-illustration');
    self.today = new Date();

    self.init = function() {
        if(self.svg) {
            var svgDimensions = self.svg.getBoundingClientRect();

            self.svgWidth  = svgDimensions.width;
            self.svgHeight = svgDimensions.height;

            self.createGraphic();
        }

        self.setTime();
    };

    self.setTime = function() {
        // Displays time without seconds, adapts to locale.
        var displayTime = self.today.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});

        var clock = document.querySelectorAll('time.js-clock');

        clock[0].innerHTML = displayTime.toString();
    };

    self.starCount = 160;

    self.createGraphic = function() {
        var timePeriod = self.setTimePeriod();
        var body = document.getElementsByTagName('BODY')[0];

        if (timePeriod === 'day') {
            self.addClass(body, 'theme--day');

            // self.createClouds();
        }
        else if (timePeriod === 'night') {
            self.addClass(body, 'theme--night');

            for (var i = 0; i < self.starCount; i++) {
                var star = self.createStar();

                self.svg.appendChild(star);
            }
        }
    };

    self.setTimePeriod = function() {
        var hours = self.today.getHours();

        if (hours >= 5 && hours <= 19) {
            return 'night';
        } else {
            return 'night';
        }
    };

    self.createStar = function() {
        var star = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        star.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#star');

        var x = self.randomIntFromInterval(0, self.svgWidth);
        var y = self.randomIntFromInterval(0, self.svgHeight);
        var deg = self.randomIntFromInterval(0, 360);

        var weightedScale = Math.pow(Math.random(), .3);
        var weightedOpacity = Math.pow(Math.random(), .3) - .1;

        self.setAttributes(star, {
            'transform': 'translate({0} {1}) rotate({2}) scale({3})'.format(x, y, deg, weightedScale),
            'style': 'opacity: {0}; fill: #fff;'.format(weightedOpacity)
        });

        return star;
    };

    // Helper functions
    // ============================================
    self.setAttributes = function(el, attrs) {
        for(var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    };

    self.randomIntFromInterval = function(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    };

    // Taken from Jake Trent (http://jaketrent.com/post/addremove-classes-raw-javascript/)
    self.hasClass = function(el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    };

    self.addClass = function(el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!self.hasClass(el, className)) {
            el.className += ' ' + className;
        }
    };

    self.removeClass = function(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (self.hasClass(el, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
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

    return self;
})();

(function() {
    headerGraphic.init();
})();
