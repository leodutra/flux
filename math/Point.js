/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */
flux.Point = function (x, y, width)
{
   flux.V2.call(this, x, y);
   this.width = width;
};
_ = flux.Point.prototype = new flux.V2();
_.width = 1;