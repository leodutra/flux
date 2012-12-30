/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Line = function (a, b, color, width) {
    this.setPoints(a, b);
    if (color) this.color = color;
    if (width) this.width = width;
};

flux.Line.prototype = {

    points: null,

    width: 1,
    color: DEF_COLOR,

    setPoints: function (a, b) {
        this.points = [a || new flux.Point(), b || new flux.Point()];
        return this;
    },

    getPoints: function () {
        return this.points;
    },

    clone: function () {
        return new Line(this.points[0].clone(), this.points[1].clone(), this.width);
    }
};
