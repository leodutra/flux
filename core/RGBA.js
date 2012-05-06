/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/MIT-license.txt)
 */

var RANDOM = Math.random;

flux.RGBA = function(rrggbb, alpha)
{
	if(this instanceof flux.RGBA)
		this.setRGBA(rrggbb, alpha);
};
// STATIC
flux.RGBA.interpolate = function(beginRGBA, finalRGBA, changeAmount)
{
	return new flux.RGBA(((1 - changeAmount) * beginRGBA.r + changeAmount * finalRGBA.r) << 16 | ((1 - changeAmount) * beginRGBA.g + changeAmount * finalRGBA.g) << 8 | (1 - changeAmount) * beginRGBA.b + changeAmount * finalRGBA.b, (1 - changeAmount) * beginRGBA.alpha + changeAmount * finalRGBA.alpha);
};
flux.RGBA.randomRGB = function(rgba)
{
  rgba.setRGB(RANDOM() * 16777215); // 16777215 == 0xFFFFFF
};
flux.RGBA.randomRGBA = function(rgba)
{
  rgba.setRGB(RANDOM() * 16777215, RANDOM()); // 16777215 == 0xFFFFFF
};
flux.RGBA.toARGB = function(rgba)
{
	return rgba.alpha * 255 << 32 | rgba.getRGB();
};
flux.RGBA.prototype =
{
	set: function(rgba)
	{
		this.r = rgba.r;
		this.g = rgba.g;
		this.b = rgba.b;
		this.alpha = rgba.alpha;
	},
	setRGBA: function(rrggbb, alpha)
	{
		this.setRGB(rrggbb);
		this.setAlpha(alpha);
	},
	setRGB: function(rrggbb)
	{
		this.r = rrggbb >> 16 & 255;
		this.g = rrggbb >> 8 & 255;
		this.b = rrggbb & 255;
	},
	setAlpha: function(alpha/*= 1*/)
	{
		this.alpha = alpha < 1 ? 0 < alpha ? alpha : 0 : 1;
		/*This MUST avoid NaN*/
	},
	getRGB: function()
	{
		return (this.r & 255) << 16 | (this.g & 255) << 8 | this.b & 255;
	},
	getAlpha: function()
	{
		return this.alpha;
	},
	interpolateSelf: function(finalRGBA, changeAmount)
	{
		this.r = (1 - changeAmount) * this.r + changeAmount * finalRGBA.r;
		this.g = (1 - changeAmount) * this.g + changeAmount * finalRGBA.g;
		this.b = (1 - changeAmount) * this.b + changeAmount * finalRGBA.b;
		this.alpha = (1 - changeAmount) * this.alpha + changeAmount * finalRGBA.alpha;
	},
	toCSS: function()
	{
		return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.alpha + ')';
	},
	clone: function()
	{
		return new flux.RGBA(this.getRGB(), this.alpha);
	}
};
