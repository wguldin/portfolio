/* global SVG */

var graphic = (function() {
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
        var graphic = SVG('illustration');

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

        var line = graphic.path().M({x: coords['x1'], y: coords['y1']}).L({x: coords['x2'], y: coords['y2']}).drawAnimated({duration: speed, delay: 200});

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
                point['x'] = self.randomIntFromInterval(0, self.svgWidth);
                point['y'] = self.svgHeight;
                break;

            case 'b':
                point['x'] = self.randomIntFromInterval(0, self.svgWidth);
                point['y'] = 0;
                break;

            case 'l':
                point['x'] = 0;
                point['y'] = self.randomIntFromInterval(0, self.svgHeight);
                break;

            case 'r':
                point['x'] = self.svgWidth;
                point['y'] = self.randomIntFromInterval(0, self.svgHeight);
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
    graphic.init();
})();
