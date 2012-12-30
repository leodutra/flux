/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Global = function (x, y, rotation, scaleX, scaleY, intensity, skeyX, skewY) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.intensity = intensity;
    this.skeyX = skeyX;
    this.skewY = skewY;
};
flux.Global.prototype = {
    x: 0,
    y: 0,
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
    intensity: 1,
    skeyX: 0,
    skeyY: 0
};