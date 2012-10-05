/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */
flux.Particle = function (color, mass, width, speed, acceleration, x, y)
{
   flux.V2.call(this, x, y);
   if (color) this.color = color;
   if (mass) this.mass = mass;
   if (width) this.width = width;
   
   this.speed = speed || new flux.V2();
   this.acceleration = acceleration|| flux.V2();
};

flux.Particle.prototype = extend(flux.V2, {
    
    color: '#777',
    width: 0,
    mass: 0,
    speed: null,
    acceleration: null,
    
    clone: function() {
        return flux.Particle(this.color, this.mass, this.width, this.speed, this.acceleration, this.x, this.y);
    }
});
