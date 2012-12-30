/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.V2 = function (x, y) {
    if (x) this.x = x;
    if (y) this.y = y;
};
flux.V2.interpolate = function (vInitial, vFinal, changeAmount) {
    return new flux.V2((1 - changeAmount) * vInitial.x + changeAmount * vFinal.x, (1 - changeAmount) * vInitial.y + changeAmount * vFinal.y);
};
flux.V2.prototype = {
    x: 0,
    y: 0,

    set: function (v) {
        this.x = v.x;
        this.y = v.y;
        return this;
    },

    setXY: function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    },
    add: function (v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    },
    addXY: function (x, y) {
        this.x += x;
        this.y += y;
        return this;
    },
    sub: function (v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    },
    multScalar: function (s) {
        this.x *= s;
        this.y *= s;
        return this;
    },
    divScalar: function (s) {
        this.x /= s;
        this.y /= s;
        return this;
    },
    min: function (v) {
        if (v.x < this.x) this.x = v.x;
        if (v.y < this.y) this.y = v.y;
        return this;
    },
    max: function (v) {
        if (this.x < v.x) this.x = v.x;
        if (this.y < v.y) this.y = v.y;
        return this;
    },
    isValid: function () {
        return !(isNaN(this.x) || isNaN(this.y)) && isFinite(this.x) && isFinite(this.y);
    },
    clone: function () {
        //return this.isValid() ? new flux.V2(this.x, this.y) : new flux.V2();
        return new flux.V2(this.x, this.y);
    },
    lengthSqr: function () {
        return this.x * this.x + this.y * this.y;
    },
    length: function () {
        return Math.sqrt(this.lengthSqr());
    },
    interpolate: function (vInitial, vFinal, changeAmount) {
        this.x = (1 - changeAmount) * vInitial.x + changeAmount * vFinal.x;
        this.y = (1 - changeAmount) * vInitial.y + changeAmount * vFinal.y;
        return this;
    },
    interpolateSelf: function (vFinal, changeAmount) {
        return this.interpolate(this, vFinal, changeAmount);
    },
    normalize: function (length) {
        if ((length = length || this.length())) this.divScalar(length);
        else this.x = this.y = 0;
        return this;
    },
    distanceSqr: function (v) {
        var x = this.x - v.x;
        return x * x + (v = this.y - v.y) * v;
    },
    distance: function (v) {
        return Math.sqrt(this.distanceSqr(v));
    },
    near: function (v, refDistance) /*true if the distance between v1 and v2 is less than dist*/
    {
        return this.distanceSqr(v) < refDistance * refDistance;
    },
    equals: function (v) {
        return this.x === v.x && this.y === v.y;
    },
    toJSON: function () {
        return '{x:' + this.x + ',y:' + this.y + '}';
    },
    toString: function () {
        return this.toJSON();
    }
};