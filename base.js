/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */
flux = {};

var PI = Math.PI,
    PIx2  = PI * 2,
    proto;
    

function ceil(n) {
    return n % 1 ? (n > 0 ? n + 1 : n) | 0 : n;
}

function abs(n) {
    return n < 0 ? -n : n;
}

function floor(n) {
    return n % 1 ? (n > 0 ? n : n - 1) | 0 : n;
}

function round(n) {
    return (n < 0 ? -0.5 : 0.5) + n | 0;
}

function max(a, b) {
    return a < b ? b : a;
}

function min(a, b) {
    return a < b ? a : b;
}

function extend(super_, extension)
{
    var base = function () {};
    base.prototype = new super_();
    base = new base();
    for (var property in extension)
    {
        base[property] = extension[property];
    }
    base.super_ = super_;
    return base;
}

function deepCopyArray (array)
{
    return array instanceof Array ? JSON.parse(JSON.stringify(array)) : null;
}