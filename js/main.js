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

    self.starCount = 76;

    self.createGraphic = function() {
        var timePeriod = self.setTimePeriod();

        if (timePeriod === 'day') {
            // self.createClouds();
        }
        else if (timePeriod === 'night') {
            for (var i = 0; i < self.starCount; i++) {
                var line = self.createStar();

                self.svg.appendChild(line);
            }
        }
    };

    self.setTimePeriod = function() {
        var hours = self.today.getHours();

        if (hours >= 5 && hours <= 19) {
            return 'day';
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

        var weighted = Math.pow(Math.random(), .3);
        var scaled = Math.floor(weighted * (max - min + 1)) + min;

        self.setAttributes(star, {
            'transform': 'translate(' + x + ' ' + y + ') rotate(' + deg + ')',
            'style': 'opacity: .6; fill: #fff;'
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

    return self;
})();

(function() {
    headerGraphic.init();
})();
