/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */
/*
 Reference: Three.js (mikael emtinger http://gomo.se/)
 */

flux.Sound2D = function (sources, radius, volume, loop)
{
    this.Node.call(this);
    if (radius) this.radius = radius;
    this.sound = new flux.Sound(sources, volume, loop);
};

flux.Sound2D.prototype = extend(flux.Node, {
    radius: 0,
    sound: null,
    
    calculateVolumeAndPan: function(v2) {
        
        var distance = cameraRelativePosition.length();
        if(this.radius < distance) {
            this.domElement.volume = 0;
        }
        else {
            this.domElement.volume = this.volume * (1 - distance/this.radius);
        }
    }
});