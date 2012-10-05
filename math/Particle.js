/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */
flux.Particle = function (width, speed, acceleration, x, y)
{
   flux.Point.call(this, width, x, y);
   this.speed = speed || new flux.V2();
   this.acceleration = acceleration|| flux.V2();
};
_ = flux.Particle.prototype = new flux.Point();
_.speed = null;
_.acceleration = null;
