/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */
flux.V2 = function (x, y)
{
    this.x = x || 0;
    this.y = y || 0;
};
flux.V2.interpolate = function (vInitial, vFinal, changeAmount)
{
    return new flux.V2((1 - changeAmount) * vInitial.x + changeAmount * vFinal.x, (1 - changeAmount) * vInitial.y + changeAmount * vFinal.y);
};
flux.V2.prototype = {

    set: function (v)
    {
        this.x = v.x;
        this.y = v.y;
    },

    setXY: function (x, y)
    {
        this.x = x;
        this.y = y;
    },
    add: function (v)
    {
        this.x += v.x;
        this.y += v.y;
    },
    addXY: function (x, y)
    {
        this.x += x;
        this.y += y;
    },
    sub: function (v)
    {
        this.x -= v.x;
        this.y -= v.y;
    },
    multScalar: function (s)
    {
        this.x *= s;
        this.y *= s;
    },
    divScalar: function (s)
    {
        this.x /= s;
        this.y /= s;
    },
    min: function (v)
    {
        if (v.x < this.x) this.x = v.x;
        if (v.y < this.y) this.y = v.y;
    },
    max: function (v)
    {
        if (this.x < v.x) this.x = v.x;
        if (this.y < v.y) this.y = v.y;
    },
    isValid: function ()
    {
        return !(isNaN(this.x) || isNaN(this.y)) && isFinite(this.x) && isFinite(this.y);
    },
    clone: function ()
    {
        return this.isValid() ? new flux.V2(this.x, this.y) : new flux.V2();
    },
    lengthSqr: function ()
    {
        return this.x * this.x + this.y * this.y;
    },
    length: function ()
    {
        return Math.sqrt(this.lengthSqr());
    },
    interpolate: function (vInitial, vFinal, changeAmount)
    {
        this.x = (1 - changeAmount) * vInitial.x + changeAmount * vFinal.x;
        this.y = (1 - changeAmount) * vInitial.y + changeAmount * vFinal.y;
    },
    interpolateSelf: function (vFinal, changeAmount)
    {
        this.interpolate(this, vFinal, changeAmount);
    },
    normalize: function (length)
    {
        if ((length = length || this.length())) this.divScalar(length);
        else this.x = this.y = 0;
    },
    distanceSqr: function (v)
    {
        var x = this.x - v.x;
        return x * x + (v = this.y - v.y) * v;
    },
    distance: function (v)
    {
        return Math.sqrt(this.distanceSqr(v));
    },
    near: function (v, refDistance) /*true if the distance between v1 and v2 is less than dist*/
    {
        return this.distanceSqr(v) < refDistance * refDistance;
    },
    equals: function (v)
    {
        return this.x === v.x && this.y === v.y;
    },
    toString: function ()
    {
        return 'V2(x=' + this.x + ', y=' + this.y + ')';
    }
};