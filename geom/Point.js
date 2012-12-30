/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */
flux.Point = function (color, x, y, width) {
    this._super_.call(this, x, y);
    if (color) this.color = color;
    if (width || width === 0) this.width = width;
};

flux.Point.prototype = extend(flux.V2, {
    width: 1,
    color: DEF_COLOR,

    clone: function () {
        return new flux.Point(this.color, this.x, this.y, this.width);
    }
});
