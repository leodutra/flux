/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */


flux.RGBA = function (rrggbb, alpha)
{
    this.setRGBA(rrggbb, alpha);
};

// STATIC
flux.RGBA.interpolate = function (beginRGBA, finalRGBA, changeAmount)
{
    return new flux.RGBA(((1 - changeAmount) * beginRGBA.r + changeAmount * finalRGBA.r) << 16 | ((1 - changeAmount) * beginRGBA.g + changeAmount * finalRGBA.g) << 8 | (1 - changeAmount) * beginRGBA.b + changeAmount * finalRGBA.b, (1 - changeAmount) * beginRGBA.alpha + changeAmount * finalRGBA.alpha);
};

flux.RGBA.randomRGB = function ()
{
    return new flux.RGBA(Math.random() * 0xFFFFFF);
};

flux.RGBA.randomRGBA = function ()
{
    return new flux.RGBA(Math.random() * 0xFFFFFF, Math.random());
};

flux.RGBA.prototype = {
    set: function (rgba)
    {
        this.r = rgba.r;
        this.g = rgba.g;
        this.b = rgba.b;
        this.alpha = rgba.alpha;
        return this;
    },
    setRGBA: function (rrggbb, alpha)
    {
        this.setRGB(rrggbb);
        this.setAlpha(alpha);
        return this;
    },
    setRGB: function (rrggbb)
    {
        this.r = rrggbb >> 16 & 255;
        this.g = rrggbb >> 8 & 255;
        this.b = rrggbb & 255;
        return this;
    },

    randomRGB: function ()
    {
        this.setRGB(Math.random() * 0xFFFFFF);
        return this;
    },

    randomRGBA: function ()
    {
        this.setRGBA(Math.random() * 0xFFFFFF, Math.random());
        return this;
    },

    setAlpha: function (alpha /*= 1*/ )
    {
        this.alpha = alpha < 1 ? 0 < alpha ? alpha : 0 : 1; /*This MUST avoid NaN*/
        return this;
    },

    getRGB: function ()
    {
        return this.r << 16 | this.g << 8 | this.b;
    },

    getARGB: function ()
    {
        return (this.alpha * 255 << 24) | this.getRGB();
    },

    getAlpha: function ()
    {
        return this.alpha;
    },

    interpolateSelf: function (finalRGBA, changeAmount)
    {
        this.r = (1 - changeAmount) * this.r + changeAmount * finalRGBA.r;
        this.g = (1 - changeAmount) * this.g + changeAmount * finalRGBA.g;
        this.b = (1 - changeAmount) * this.b + changeAmount * finalRGBA.b;
        this.alpha = (1 - changeAmount) * this.alpha + changeAmount * finalRGBA.alpha;
        return this;
    },

    toCSSHex: function ()
    {
        return '#' + ('00000' + this.getRGB().toString(16)).substr(-6);
    },

    toCSSRGBA: function ()
    {
        return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.alpha + ')';
    },

    toString: function ()
    {
        return this.toCSSRGBA();
    },

    clone: function ()
    {
        return new flux.RGBA(this.getRGB(), this.alpha);
    }
};