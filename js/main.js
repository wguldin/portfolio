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

    self.lineCount = 167;

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

        return {
            'x1': startPoint['x'],
            'y1': startPoint['y'],
            'x2': finalPoint['x'],
            'y2': finalPoint['y']
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

    return self;
})();

(function() {
    headerGraphic.init();
})();
