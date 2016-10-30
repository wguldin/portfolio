var headerGraphic = (function() {
    var self = {};

    self.svg = document.getElementById('header-illustration');

    self.init = function() {
        if(self.svg) {
            var svgDimensions = self.svg.getBoundingClientRect();

            self.svgWidth  = svgDimensions.width;
            self.svgHeight = svgDimensions.height;

            self.createGraphic();
        }
    };

    self.lineCount = 36;

    self.createGraphic = function() {
        for (var i = 0; i < self.lineCount; i++) {
            var line = self.createLine();

            self.svg.appendChild(line);
        }
    };

    self.createLine = function() {
        var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        self.setAttributes(line, self.setLineCoordinates());

        return line;
    };

    self.setLineCoordinates = function() {
        var startSide = self.selectSide();
        var startPoint = self.selectPoint(startSide);

        var finalSide = self.selectSide(startSide);
        var finalPoint = self.selectPoint(finalSide);

        var weightedOpacity = Math.pow(Math.random(), .25) - .1;

        return {
            'x1': startPoint['x'],
            'y1': startPoint['y'],
            'x2': finalPoint['x'],
            'y2': finalPoint['y'],
            'style': 'opacity: {0}'.format(weightedOpacity)
        };
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
    headerGraphic.init();
})();
